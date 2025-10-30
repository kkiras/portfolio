import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export default function WordCloud(props) {
  const svgRef = useRef(null);

  const fontSizeScale = d3
    .scaleLinear()
    .domain([20, 80])
    .range([10, 40])
    .clamp(true);

  // Track if current viewport is iPad/tablet (640–1024)
  const [isTablet, setIsTablet] = useState(() =>
    typeof window !== "undefined" && window.innerWidth >= 640 && window.innerWidth < 1025
  );

  useEffect(() => {
    function onResize() {
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1025);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const { width, height } = svgRef.current.getBoundingClientRect();
    const centerXFactor = isTablet ? 0.5 : 0.75; // iPad: place in the middle
    const centerYFactor = isTablet ? 0.4 : 0.5;

    // Static data
    const items = [
      // Frontend
      { label: "HTML", group: "Frontend", r: 80 },
      { label: "CSS", group: "Frontend", r: 80 },
      { label: "JavaScript", group: "Frontend", r: 60 },
      { label: "TypeScript", group: "Frontend", r: 40 },
      // Backend
      { label: "Node.js", group: "Backend", r: 60 },
      { label: "FastAPI", group: "Backend", r: 60 },
      // Database
      { label: "MySQL", group: "Databases", r: 20 },
      { label: "PostgreSQL", group: "Databases", r: 20 },
      { label: "MongoDB", group: "Databases", r: 60 },
      { label: "Firebase", group: "Databases", r: 60 },
      // Tools
      { label: "Git", group: "Tools", r: 40 },
      { label: "Docker", group: "Tools", r: 40 },
      { label: "Figma", group: "Tools", r: 20 },
      // Frameworks
      { label: "React", group: "Frameworks", r: 60 },
      { label: "NextJS", group: "Frameworks", r: 40 },
    ];

    const filteredItems = props.selectedSkill
      ? items.filter((item) => item.group === props.selectedSkill)
      : items;

    // Text color scale
    const textColor = d3
      .scaleOrdinal()
      .domain(["Frontend", "Backend", "Databases", "Tools", "Frameworks"])
      .range(["#aa4343ff", "#4A90E2", "#50B498", "#D97B66", "#7D5BA6"]);

    // Create nodes for force layout
    const nodes = filteredItems.map((d) => ({
      ...d,
      x: width * centerXFactor + (Math.random() - 0.5) * 50,
      y: height * centerYFactor + (Math.random() - 0.5) * 50,
      vx: 0,
      vy: 0,
    }));

    // ===== SVG =====
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", width)
      .attr("height", height)
      .style("background", "transparent");

    svg.selectAll("*").remove();

    const g = svg.append("g");

    const node = g
      .selectAll("g.node")
      .data(nodes)
      .join("g")
      .attr("class", "node");

    node.append("circle").attr("r", (d) => d.r).attr("fill", "none");

    node
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .style(
        "font-family",
        "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
      )
      .style("font-size", (d) => `${fontSizeScale(d.r)}px`)
      .attr("fill", (d) => textColor(d.group))
      .style("user-select", "none")
      .style("-webkit-user-select", "none")
      .style("-ms-user-select", "none")
      .style("cursor", "grab")
      .text((d) => d.label);

    node.select("text").each(function (d) {
      const bbox = this.getBBox();
      const labelRadius = Math.hypot(bbox.width, bbox.height) / 2;
      d.effectiveR = Math.max(d.r, labelRadius);
    });

    // ===== Forces =====
    const simulation = d3
      .forceSimulation(nodes)
      .force("x", d3.forceX(width * centerXFactor).strength(0.05))
      .force("y", d3.forceY(height * centerYFactor).strength(0.05))
      .force("collide", d3.forceCollide((d) => (d.effectiveR || d.r) + 6))
      .alpha(0.9)
      .on("tick", () => {
        node.attr("transform", (d) => `translate(${d.x},${d.y})`);
      });

    // ===== Drag =====
    const drag = d3
      .drag()
      .on("start", (event, d) => {
        if (event.sourceEvent?.target) {
          d3.select(event.sourceEvent.target).style("cursor", "grabbing");
        }
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (event.sourceEvent?.target) {
          d3.select(event.sourceEvent.target).style("cursor", "grab");
        }
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag);

    return () => simulation.stop();
  }, [props.selectedSkill, isTablet]);

  return (
    <svg ref={svgRef} style={{ display: "block", width: "100%", height: "100%" }} />
  );
}


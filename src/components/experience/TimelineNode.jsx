import { useRef, useState, useEffect } from "react";
import { computePosition, offset, flip, shift } from "@floating-ui/dom";
import { motion, useAnimationFrame } from "motion/react";
import styles from "./Experience.module.css"

export default function TimelineNode({
  node, rowGap,
  isFirst = false,
  isLast = false,
  lag = 0.15,                 // 0.1–0.3: lớn hơn = chậm hơn
  placement = "right-start",
  offsetPx = 8,
}) {
  const containerRef = useRef(null);
  const floatingRef  = useRef(null);

  const imgRef = useRef(null);
  const [tipW, setTipW] = useState(null);   // width thực tế của ảnh sau khi render

  const [visible, setVisible] = useState(false);
  const target = useRef({ x: 0, y: 0 });     // vị trí chuột “thật”
  const smooth = useRef({ x: 0, y: 0 });     // vị trí tooltip “làm mượt”

  let icon;
  const iconW = '48px';
  const iconH = '48px';

  const ICON_SIZE = 48;
  const LINE_COLOR = "var(--fg-main)";

  const POPUP_COLOR = "#4b4b4bff"
  const POPUP_FG_COLOR = "#b2b2b2"

  function handleImgLoad(e) {
    // bề rộng ảnh đã render (đã áp dụng maxWidth, v.v.)
    const w = e.currentTarget.clientWidth;
    setTipW(w);
  }

  if(node.type === "education") {
    icon = (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" id="Capa_1" width={iconW} height={iconH} viewBox="0 0 465.185 465.185" xmlSpace="preserve">
        <g>
          <g>
            <path d="M255.183,26.388c-1.259-0.279-2.452-0.355-3.601-0.335c-2.315-1-4.961-1.468-7.921-1.051    C157.708,37.138,77.984,70.77,6.268,119.203c-10.326,6.972-6.568,20.84,1.716,25.044c1.028,2.184,2.679,4.209,5.21,5.799    c24.844,15.66,51.1,27.421,78.241,36.435c-0.363,1.782-0.602,3.62-0.606,5.626c0,0.193,0.051,0.371,0.056,0.559    c-0.711,1.478-1.251,3.108-1.439,4.981c-2.658,26.284-3.953,52.537-2.772,78.947c0.386,8.668,7.17,13.102,13.926,13.33    c15.998,7.941,32.535,14.249,49.36,19.032c1.473,19.9,2.897,39.807,4.235,59.717c-19.807,10.491-29.906,28.706-25.89,50.638    c0.076,4.697,2.562,9.212,6.779,11.908c10.229,6.535,22.516,10.231,34.693,8.815c0.114-0.016,0.224-0.051,0.34-0.066    c1.559,0.132,3.156,0.041,4.725-0.432c12.9-3.864,24.725-11.791,30.439-24.369c1.036-2.275,1.554-4.662,1.603-6.992    c1.066-1.904,1.731-4.18,1.673-6.922c-0.223-10.704-3.577-21.145-11.671-28.497c-4.436-4.032-9.689-6.632-15.277-8.227    c-1.115-16.392-2.267-32.778-3.468-49.165c68.223,12.182,139.543-0.279,200.854-36.511c2.976-1.757,4.824-4.077,5.809-6.606    c2.291-2.219,3.824-5.362,3.824-9.511c0-23.557,0.102-47.108,1.387-70.64c0.076-1.468-0.051-2.803-0.33-4.022    c0.208-0.945,0.33-1.91,0.33-2.905v-6.926c0-0.355-0.082-0.701-0.112-1.056c22.095-8.871,43.844-18.87,65.277-29.925    c3.972-2.046,6.073-5.078,6.744-8.343c4.072-4.91,5.017-12.04-1.174-17.564C402.855,69.713,329.961,42.962,255.183,26.388z     M114.129,265.799c-0.447-22.643,0.706-45.199,2.978-67.771c0.546-1.127,0.952-2.32,1.17-3.585    c7.851,2.072,15.777,3.88,23.732,5.581c1.841,26.507,3.786,53.004,5.766,79.506C136.353,275.762,125.095,271.253,114.129,265.799z     M178.876,393.922c0.297,0.457,0.579,0.919,0.838,1.396c-0.099,0.035,0.764,2.138,0.848,2.438c0.079,0.426,0.14,0.741,0.188,0.965    c0.061,0.843,0.109,1.69,0.109,2.539c0.005,0.243,0.066,0.446,0.082,0.686c-0.731,1.497-1.519,2.939-2.438,4.336    c-0.12,0.132-0.229,0.259-0.412,0.473c-0.706,0.792-1.513,1.487-2.308,2.184c-0.135,0.091-0.234,0.162-0.417,0.289    c-0.998,0.69-2.069,1.265-3.136,1.844c-0.183,0.096-1.285,0.568-1.871,0.822c-0.51,0.183-1.031,0.346-1.551,0.508    c-5.122,0.457-9.537-0.219-13.919-2.052c-0.396-8.546,5.195-13.522,13.561-17.899c1.086-0.569,1.975-1.234,2.788-1.935    c0.759,0.146,2.054,0.35,2.138,0.37c0.17,0.041,1.747,0.614,2.308,0.772c0.815,0.502,1.97,1.233,2.224,1.319    C178.274,393.338,178.668,393.744,178.876,393.922z M362.308,192.107c-1.178,21.683-1.351,43.376-1.371,65.085    c-56.619,32.163-122.471,42.827-184.894,29.949c-2.039-27.273-4.044-54.547-5.959-81.826c25.527,4.189,51.407,6.916,77.315,8.851    c1.249,0.208,2.584,0.3,4.103,0.112c38.349-4.956,75.226-14.219,111.046-26.751c0.086,0.472,0.218,0.929,0.35,1.392    C362.598,189.904,362.369,190.95,362.308,192.107z M251.501,186.572c-0.421,0.056-0.787,0.193-1.193,0.274    c-0.522-0.091-1.021-0.233-1.579-0.274c-23.869-1.757-47.689-4.194-71.188-7.921c20.611-18.987,41.553-37.602,62.972-55.695    c13.665-11.542-6.033-31.037-19.588-19.586c-25.344,21.409-50.166,43.401-74.365,66.09c-1.226,0.681-2.287,1.594-3.196,2.676    c-36.978-8.272-72.768-20.683-106.178-40.024c63.97-40.339,133.616-68.212,208.816-79.603c0.594,0.208,1.152,0.447,1.817,0.6    c64.39,14.269,128.138,35.774,180.192,76.896C372.148,157.572,313.636,178.539,251.501,186.572z"/>
          </g>
        </g>
      </svg>
    )
  }
  else if(node.type === "experience") {
    icon = (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" id="Capa_1" width={iconW} height={iconH} viewBox="0 0 489.205 489.205" xmlSpace="preserve">
        <g>
          <g>
            <path d="M480.006,131.742c-3.651-5.527-8.917-12.053-17.382-14.731c-1.569-0.495-3.245-0.609-4.951-0.337    c-40.131-7.15-79.638-12.914-117.474-17.144c-0.925-19.931-9.196-38.339-23.999-53.337c-2.681-2.719-6.104-3.955-9.501-3.503    c-0.649-0.178-1.3-0.297-1.955-0.358c-32.961-3.273-66.584-3.547-98.205-3.557c-0.427,0-0.817,0.041-1.343,0.119    c-0.531-0.074-1.107-0.152-1.892-0.119c-10.103,0.29-20.124,4.938-27.477,12.753c-1.912,2.028-3.072,4.385-3.458,7.005    c-5.801,9.402-8.744,20.457-8.757,32.9c-50.074,1.465-98.282,6.477-143.333,14.896c-3.885,0.729-6.759,3.095-8.122,6.677    c-1.361,2.06-2.303,3.946-3.212,6.454c-0.267,0.731-0.584,2.057-0.818,3.083c-0.099,0.432-0.175,0.794-0.188,0.848    c-1.003,2.496-1.43,5.162-1.236,7.731c-9.917,79.625-8.836,151.885,3.285,220.904c1.348,7.668,6.807,10.096,11.44,9.74    c-0.134,0.406-0.249,0.822-0.348,1.244c-7.363,31.112,1.082,57.482,24.125,74.555c2.118,3.539,5.497,5.54,9.584,5.662    c112.109,3.249,239.173,6.936,363.446,7.058c0.229,0,0.447-0.021,0.736-0.051c0.675,0.132,1.36,0.203,2.046,0.203    c1.25,0,2.52-0.224,3.778-0.681c20.881-7.484,32.393-25.501,30.798-48.18c-0.02-0.324-0.076-0.645-0.157-1.117    c0.102-0.711,0.163-1.447,0.163-2.244c0-5.596-0.006-12.416-1.458-18.946l4.144,0.107c3.488,0.096,6.978,0.188,10.664,0.243    c3.768,0,6.987-1.676,9.109-4.742c1.936-1.671,3.271-3.951,3.981-6.774c3.352-13.472,5.037-26.151,5.149-38.766    c0-0.345-0.025-0.66-0.076-0.97l0.568-18.347c1.564-55.137,3.179-112.149-2.082-168.203    C485.2,137.572,483.226,134.015,480.006,131.742z M463.091,328.607l-0.056,0.696c-0.071,7.643-0.898,15.432-2.539,23.744    c-69.975-1.27-141.061-4.996-209.832-8.602c-71.701-3.758-145.824-7.643-218.79-8.749c-9.864-62.236-10.415-129.281-1.623-199.311    c0.147-1.14,0.152-2.272,0.01-3.517l0.089-0.229c0.193-0.505,0.386-1.008,0.579-1.564c51.503-9.313,106.866-14.03,164.57-14.03    c77.66,0,161.95,8.32,257.679,25.443c1.158,0.208,2.239,0.213,3.28,0.094c0.198,0.073,0.371,0.129,0.533,0.175    c0.157,0.102,0.32,0.193,0.473,0.297c0.34,0.337,0.67,0.688,0.985,1.046c0.36,0.431,0.716,0.868,1.122,1.434    c0.553,0.843,1.066,1.711,1.584,2.58l0.391,0.65c0.147,0.238,0.3,0.462,0.482,0.724c4.5,53.806,2.956,108.671,1.463,161.73    l-0.452,16.275C463.03,327.846,463.051,328.166,463.091,328.607z M187.522,90.923c0.048-8.449,2.397-15.322,7.16-20.938    c0.63-0.739,1.166-1.542,1.656-2.486c2.328-1.404,4.943-2.262,7.117-2.325c0.421-0.016,0.817-0.066,1.325-0.155    c0.564,0.094,1.14,0.155,1.76,0.155c30.823,0.005,63.599,0.271,95.956,3.364c7.688,8.866,12.045,18.184,13.233,28.381    c-41.909-3.999-82.436-6.025-120.516-6.025C192.648,90.897,190.086,90.908,187.522,90.923z M266.269,379.981    c-17.44,0.696-34.751-0.076-53.979-2.33l-0.021-8.78l54.654,2.834C266.822,374.219,266.645,377.077,266.269,379.981z     M44.381,369.902c0.993-1.925,1.498-4.078,1.503-6.414c0-0.37,0-0.726,0.005-1.066c41.967,0.823,87.316,2.483,142.247,5.205    v20.008c0,2.768,0.675,5.25,1.82,7.007c1.892,4.413,5.499,7.303,9.889,7.933c26.878,3.833,50.656,4.976,73.197,3.554    c0.817-0.051,1.625-0.188,2.442-0.416c5.804,0.365,10.521-3.29,12.207-9.257c1.925-6.83,3.017-14.351,3.397-23.491    c55.69,2.859,98.808,4.637,138.883,5.729c-0.27,1.833-0.162,3.671,0.319,5.388c0.265,0.944,0.488,1.873,0.686,2.798l0.184,0.99    c0.005,0.142,0.03,0.482,0.086,1.066c0.208,2.63,0.198,5.28,0.193,7.911v1.381c0,0.285,0.02,0.544,0.065,0.945    c-0.097,0.868-0.127,1.782-0.061,2.772c0.792,11.272-3.123,18.29-12.319,22.013c-0.284-0.035-0.574-0.061-0.884-0.061    c-123.588-0.127-248.227-3.732-358.314-6.927c-0.602-0.67-1.221-1.233-1.902-1.731C44.138,405.112,39.659,390.377,44.381,369.902z    "/>
          </g>
        </g>
      </svg>
    )
  }

  // Cập nhật target khi di chuột trong container
  function onMouseMove(e) {
    target.current.x = e.clientX;
    target.current.y = e.clientY;
    setVisible(true);
  }

  function onMouseLeave() {
    setVisible(false);
  }

  // Lerp + định vị bằng Floating UI mỗi frame
  useAnimationFrame(async () => {
    if (!floatingRef.current || !visible) return;

    // LERP: tiến dần từ smooth -> target theo hệ số "lag"
    smooth.current.x += (target.current.x - smooth.current.x) * lag;
    smooth.current.y += (target.current.y - smooth.current.y) * lag;

    // Virtual element tại vị trí đã làm mượt
    const virtualEl = {
      getBoundingClientRect() {
        const x = smooth.current.x;
        const y = smooth.current.y;
        return {
          width: 0, height: 0,
          x, y, top: y, bottom: y, left: x, right: x
        };
      },
    };

    const { x, y } = await computePosition(virtualEl, floatingRef.current, {
      placement,
      middleware: [offset(offsetPx), flip(), shift()],
    });

    Object.assign(floatingRef.current.style, {
      top: `${y}px`,
      left: `${x}px`,
    });
  });

  useEffect(() => {
    // Khi vừa hover, “teleport” vị trí mượt tới ngay target để tránh nhảy
    if (visible) {
      smooth.current.x = target.current.x;
      smooth.current.y = target.current.y;
    }
  }, [visible]);

  const halfIcon = ICON_SIZE / 2;
  const halfGap  = rowGap / 2;
  const segmentHeight = `calc(50% - ${halfIcon}px + ${halfGap}px)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        gridColumn: "1 / span 2",
        display: "grid",
        gridTemplateColumns: `${ICON_SIZE}px 1fr`,
        columnGap: 12,
        position: "relative",
        alignItems: "stretch",     // cho cột icon có chiều cao item thực
        overflow: "visible",       // cho phép line vươn vào gap
      }}
    >
      {/* Cột icon + line */}
      <div style={{ position: "relative", height: "100%", overflow: "visible" }}>
        {/* Line phía trên */}
        {!isFirst && (
          <div
            style={{
              position: "absolute",
              left: ICON_SIZE / 2 - 1,
              top: `-${halfGap}px`,           
              width: 2,
              height: segmentHeight,
              background: LINE_COLOR,
            }}
          />
        )}

        
        <div 
          style={{ 
            display: "grid", 
            placeItems: "center", 
            height: ICON_SIZE,
          }}
          className={styles.iconContainer}
        >
          {icon}
        </div>

        {!isLast && (
          <div
            style={{
              position: "absolute",
              left: ICON_SIZE / 2 - 1,
              bottom: `-${halfGap}px`,         
              width: '2px',
              height: segmentHeight,
              background: LINE_COLOR,
            }}
          />
        )}
      </div>

      <div className={styles.nodeContent} >
        <p style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>{node.year}</p>
        <p style={{ margin: 0 }}>{node.summary}</p>
      </div>

      <motion.div
        ref={floatingRef}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.18 }}
        style={{
          position: "absolute",
          pointerEvents: "none",
          background: POPUP_COLOR,
          color: POPUP_FG_COLOR,
          padding: '4px',
          borderRadius: 8,
          fontSize: 14,
          width: tipW ? `${tipW}px` : "auto",
          maxWidth: "none",         // bỏ giới hạn khiến width bị khác ảnh
          minHeight: "unset",
          zIndex: 999,
          overflow: "hidden",
          display: "inline-block", // shrink-to-fit gọn theo nội dung
        }}
      >
        <div 
          style={{
              position: 'relative',
              display: "inline-block",     // co theo kích thước ảnh
              overflow: "hidden",          // cắt overlay theo bo góc
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
          }}
        >
          <img ref={imgRef} onLoad={handleImgLoad} src={node.picture} style={img} alt="" />
          <div style={{width: '100%', height: '100%', position: 'absolute',background: '#00000030', zIndex:99, left: 0, top: 0}} ></div>
        </div>

        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: '8px 8px 0 8px',
            fontWeight: 'bold'
          }}
        >
          {node.type === "education" ? (
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <span>{node.school}</span>
                <span>{node.period}</span>
              </div>

              <span>{node.degree}</span>
            </>
          ) : (
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}              
              >
                <span>{node.company}</span>
                <span>{node.period}</span>                
              </div>

              <span>{node.position}</span>
            </>            
          )}

        </div>

        <p style={detailP}>{node.description}</p>
      </motion.div>
    </div>
  );
}

const img = {
  maxWidth: '320px',
  maxHeight: '180px',
  width: "auto",          // giữ theo kích thước tự nhiên (có giới hạn max)
  height: "auto",
  margin: 0,
  padding: 0,
  display: 'block',
}

const detailP = {
  margin: 0,
  padding: "8px",
  width: "100%",          // bám đúng khung tooltip (theo ảnh)
  boxSizing: "border-box" // padding không làm tăng width tổng
}

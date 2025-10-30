import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { useRef } from "react";

export default function BackgroundFloating({ constraintsRef, init, size, color, baseInit, bg }) {
  const BASE_SPEED = 20;
  const MIN_THROW = 30;
  const DECAY_PER_SEC = 1.8;

  // Anchor layout (tọa độ ban đầu bằng left/top)
  const anchor = useRef({ left: init.x, top: init.y });

  // Transform tương đối quanh anchor (luôn khởi tạo 0,0)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const baseV = useRef({ x: baseInit.x, y: baseInit.y });
  const impV  = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);

  useAnimationFrame((t, deltaMs) => {
    if (draggingRef.current || !constraintsRef.current) return;

    const dt = Math.min(deltaMs / 1000, 1 / 30);
    const cw = constraintsRef.current.clientWidth;
    const ch = constraintsRef.current.clientHeight;

    // Vị trí tuyệt đối hiện tại trong container
    const ax = anchor.current.left + x.get();
    const ay = anchor.current.top  + y.get();

    // Tổng vận tốc
    let vx = baseV.current.x + impV.current.x;
    let vy = baseV.current.y + impV.current.y;

    // Dự đoán vị trí tiếp theo (tuyệt đối)
    let nx = ax + vx * dt;
    let ny = ay + vy * dt;

    // Bounce theo biên container
    if (nx <= 0)                 { nx = 0;               baseV.current.x *= -1; impV.current.x *= -1; }
    else if (nx >= cw - size)    { nx = cw - size;       baseV.current.x *= -1; impV.current.x *= -1; }

    if (ny <= 0)                 { ny = 0;               baseV.current.y *= -1; impV.current.y *= -1; }
    else if (ny >= ch - size)    { ny = ch - size;       baseV.current.y *= -1; impV.current.y *= -1; }

    // Gán lại transform tương đối quanh anchor
    x.set(nx - anchor.current.left);
    y.set(ny - anchor.current.top);

    // Decay impulse → 0
    const a = Math.exp(-DECAY_PER_SEC * dt);
    impV.current.x *= a; if (Math.abs(impV.current.x) < 0.05) impV.current.x = 0;
    impV.current.y *= a; if (Math.abs(impV.current.y) < 0.05) impV.current.y = 0;
  });

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.15}
      dragMomentum={false}
      className="wrapper-floating"
      // Wrapper draggable có kích thước rõ ràng + anchor bằng left/top
      style={{
        left: anchor.current.left,
        top:  anchor.current.top,
        width: size,
        height: size,
        x, y,                      // transform tương đối, KHÔNG khởi tạo ≠ 0
      }}
      // Đóng băng drift sớm nhất để tránh “nhảy” gốc kéo
      onPointerDownCapture={() => { draggingRef.current = true; }}
      onDragEnd={(_, info) => {
        draggingRef.current = false;

        const vx = info.velocity.x;
        const vy = info.velocity.y;
        const speed = Math.hypot(vx, vy);

        if (speed > MIN_THROW) {
          baseV.current.x = (vx / speed) * BASE_SPEED;
          baseV.current.y = (vy / speed) * BASE_SPEED;
        }

        impV.current.x = vx - baseV.current.x;
        impV.current.y = vy - baseV.current.y;
      }}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="floating"
        style={{  
          backgroundImage: `url(${bg})`
        }}

        animate={{
          y: [0, -12, 0, 12, 0],
          rotate: [0, 6, 0, -6, 0],
          // boxShadow: [
          //   "0 14px 26px rgba(0,0,0,0.18)",
          //   "0 20px 34px rgba(0,0,0,0.12)",
          //   "0 14px 26px rgba(0,0,0,0.18)",
          //   "0 20px 34px rgba(0,0,0,0.12)",
          //   "0 14px 26px rgba(0,0,0,0.18)",
          // ],
        }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />
    </motion.div>
  );
}
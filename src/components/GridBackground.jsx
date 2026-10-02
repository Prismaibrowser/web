export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.3,
        backgroundImage:
          "radial-gradient(circle, rgba(0, 0, 0, 0.2) 1.5px, transparent 1.5px), linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px), radial-gradient(circle at 50% 50%, transparent 0%, rgba(161, 254, 160, 0.05) 100%)",
        backgroundSize: "40px 40px, 40px 40px, 40px 40px, 100% 100%",
        backgroundPosition: "20px 20px, 0 0, 0 0, 0 0",
      }}
    />
  );
}


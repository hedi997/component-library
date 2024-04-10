export default function Card({ href, imgAlt, imgSrc, children }) {
  return (
    <a href={href} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        className="card"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          width: "400px",
        }}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{ width: "100%", height: "200px", display: "block" }}
        />

        <div style={{ padding: "16px" }}>{children}</div>
      </div>
    </a>
  );
}

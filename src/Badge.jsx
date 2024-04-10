import "./Badge.css";

export default function Badge({ title, color, size, icon }) {
  return (
    <>
      <div className={`${color} ${size}`}>
        {title}
        {icon}
      </div>
    </>
  );
}

import "./Alert.css";

export default function Alert({ color, icon }) {
  return <div className={`${color} size`}>{icon}Stop!</div>;
}

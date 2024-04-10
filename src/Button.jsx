import "./Button.css";

export default function Button(props) {
  return (
    <button className={`${props.color} ${props.size} ${props.disabled}`}>
      {props.children}
    </button>
  );
}

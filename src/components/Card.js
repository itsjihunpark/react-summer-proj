import "../styles/card.scss";
export default function Card(props) {
  return <div className="card">{props.children}</div>;
}

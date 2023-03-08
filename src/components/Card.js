import '../styles/card.css';

export default function Card(props) {
  return (
    <div className="card" id={props.id} onClick={props.onClick}>
      <span className="image">
        <img className="" src={props.src} alt="" />
      </span>
      <span className="name">{props.name}</span>
    </div>
  );
}

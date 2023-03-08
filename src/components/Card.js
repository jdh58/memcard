import { useEffect } from 'react';
import '../styles/card.css';
import Yoshi from '../assets/yoshi.png';

export default function Card(props) {
  useEffect(() => {});

  return (
    <div className="card">
      <span className="image">
        <img className="" src={Yoshi} alt="" />
      </span>
      <span className="name">Yoshi</span>
    </div>
  );
}

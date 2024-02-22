import carImg from '../../assets/images/car.png';
import ButtonCard from '../ButtonCard';
import './styles.css';

function Card() {
  return (
    <div className="ct-card">
      <img src={carImg} alt="Car" />
      <h3>Audi RS8</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nesciunt.
      </p>
      <ButtonCard></ButtonCard>
    </div>
  );
}

export default Card;

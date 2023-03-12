import '../styles/card.css';
import image from '../img/wine-cadus.png';

function Card (props) {
    return (
        <div className="container-card">
            <div className="header-card">
                <h3>{props.title}</h3>
            </div>
            {/* <img 
            className='card-img'
            src={require(`../img/wine-${props.image}.png`)}
            alt="foto" /> */}
            <h4>$ {props.price}</h4>
            <small>{props.description}</small>
        </div>
    )
}
export default Card;

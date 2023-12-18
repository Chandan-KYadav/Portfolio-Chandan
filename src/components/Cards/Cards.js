import './Cards.css';
const Cards = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="images" />
            <span>{props.heading}</span>
            <span>{props.detail}</span>
            <button className="card-btn">LEARN MORE</button>
        </div>
    );
}

export default Cards;
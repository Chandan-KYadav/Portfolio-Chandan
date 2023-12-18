import './Floatingimoji.css'

const Floatingimoji = (props) => {
    return (
        <div className="Floatingimoji">
            <img src={props.image} alt="crown" />

            <span>
                {props.text1}
                <br/>
                {props.text2}
            </span>
        </div>
    );
}

export default Floatingimoji;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
   
    const data  = props.data
    return (
      <div className="card">
        <p>{data.para}</p>
        <div className="card-footer">
          <span className="card-footer-icon">
            <FontAwesomeIcon icon={data.icon} />
          </span>
        </div>
      </div>
    );
}

export default Card;

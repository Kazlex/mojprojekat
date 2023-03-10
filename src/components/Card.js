import './Card.css';
import './Expenses.js'
import Expenses from './Expenses.js';

function Card(props){
    return(
        <div className="card">
            <Expenses  props={props} />
        </div>
    )
}

export default Card;
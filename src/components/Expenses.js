import ExpenseItem from "./ExpenseItem";
import './Card.js';

function Expenses(props){
    console.log(props);
    return(
        <div className="expenses">
            <ExpenseItem
                title={props.props.items[0].title}
                amount={props.props.items[0].amount}
                date={props.props.items[0].date}
            />
             <ExpenseItem
                title={props.props.items[1].title}
                amount={props.props.items[1].amount}
                date={props.props.items[1].date}
            />
            <ExpenseItem
                title={props.props.items[2].title}
                amount={props.props.items[2].amount}
                date={props.props.items[2].date}
            />
            <ExpenseItem
                title={props.props.items[3].title}
                amount={props.props.items[3].amount}
                date={props.props.items[3].date}
            /> 
            </div>
    );
}

export default Expenses;
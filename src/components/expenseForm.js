import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description:props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note: '',
            amount: props.expense ? (props.expense.amount /100).toString(): '',
            createAt:props.expense ? moment(props.expense.createAt) :moment(),
            calenderFocused:false,
            error: ''
        }
    }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({description})
}
onAreaChange = (e) => {
    const note= e.target.value;
    this.setState({note:note})
}
anountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(()=>({amount}));
    }
}
onDateChange = (createAt) => {
    if(createAt){
        this.setState(()=>({createAt}))
    }
}

onFocuseChange = ({focused}) => {
    this.setState(()=>({calenderFocused:focused}))
}
onSubmit = (e) => {
    e.preventDefault();
// Set error state eQual to Please provide description and amount
if(!this.state.description || !this.state.amount){
    this.setState(()=> ({error:'Please provide description and amount'}))
}else {
    //Clear the error
    this.setState(()=>({error:''}));
    this.props.onSubmit({
        description:this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createAt: this.state.createAt.valueOf(),
        note: this.state.note
        })
    }
}

    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                    type='text'
                    placeholder='Description'
                    autoFocus
                    value = {this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.anountChange}
                    />
                    <SingleDatePicker
                    date={this.state.createAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocuseChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />
                    <textarea
                    placeholder='Add a note to a expnese liat (optional)'
                    onChange={this.onAreaChange}></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
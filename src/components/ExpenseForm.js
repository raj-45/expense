import React, {useState} from 'react'
//import {useDispatch} from 'react-redux'

export default function ExpenseForm() {
  const [form, setForm ] = useState({})
  const [inputBox, setInputBox] = useState(false);
//  const [inputValue, setInputValue] = useState({});

  const setField = (field, value) => {
    //setInputValue(value);
    setForm({
      ...form,
      [field]:value
    })
  }

  const handleOwe = (field,value) =>{
    setField(field,value);
  }

 // const dispatch = useDispatch();

  function handleChange(event,field) {
    const getOption = event.target.value;
    if(getOption === "owe"){
      setInputBox(true);
    }
    else{
      handleOwe('Owe_to', null)
    }
    setField(field,getOption);
  }

  const handleSubmit = e =>{
    e.preventDefault()
    console.log(form)
    //dispatch(registerUser(form))
  }

  return (
    <form className='expenseForm'>
    <label>
        Transaction Type : 
        <select id="transaction_type" onChange={(e)=>setField('transaction_type',e.target.value)}> 
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>
    </label><br></br>
    <label>
        Amount :
        <input type="number" placeholder="Submit"  id="amount" onChange={(e)=>setField('amount',e.target.value)}/>
        <br></br>
    </label>
    <label>
      Type of Expense:
      <select id="expense_type" onChange={(e)=>(handleChange(e,'expense_type'))} >
        <option value="none" selected disabled hidden>Select an Option</option>
        <option value="PG">PG</option>
        <option value="office">Office</option>
        <option value="personal">Personal</option>
        <option value="np_acc">Nepali Account</option>
        <option value="home">Home</option>
        <option value="owe">Owe to </option>
      </select>
      {inputBox ? <input type ="text" placeholder="Name" id='Owe_to' onChange={(e)=>handleOwe('Owe_to',e.target.value)}/> : null}
    </label>
    <label>
      Comment:
      <input type="text" placeholder="Comment" id="comment" onChange={(e) =>handleChange('comment',e.target.value)}></input>
    </label>
    <button onClick={handleSubmit}>Submit</button>

    </form>
  )
}

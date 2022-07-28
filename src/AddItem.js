import React, {useState} from 'react';
import { connect} from 'react-redux'
import { ADDTODO } from './Action/Action'

const stateDispatch = (dispatch) => ( { addTask : Task => dispatch(ADDTODO(Task)) } )

function AddItem({addTask}) {
    const [Task, setTask] = useState('');

    const getInputValue = (e) =>  {setTask(e.target.value)};

    const addTodo = (e) => {
        addTask(Task)
        console.log(e)
    }
    
    return (
        <div className="buttonContainer">
            <input type="text" onChange={getInputValue} />
            <button type="button" onClick={addTodo}> Submit </button>
        </div>
    )
}

export default connect(null, stateDispatch)(AddItem)


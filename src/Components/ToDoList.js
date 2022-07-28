import React from 'react'
import { connect } from 'react-redux'
import { UPDATETODO } from '../Action/Action'

const mapStatetoProps = (state) => {
    return {
        items : state
    }
}

const mapDispatchtoProps = (dispatch) => ( {setCompletedStatus : id =>  dispatch(UPDATETODO(id))})
// className={props.item.completed ? 'completed' : ''}
function ToDoList(props) {
    return (
        <div>
            {
                props.items.map( (item) => 
                    <div onClick={() => props.setCompletedStatus(item.id)} key={item.id} style={{textDecoration: item.completed ? 'line-through' : 'none'}} className='task-items'> {item.task} </div>
                )
            }
        </div>
    )
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ToDoList);

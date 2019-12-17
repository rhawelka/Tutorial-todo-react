import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return this.props.todo.completed ? {textDecoration: 'line-through'} : {backgroundColor: 'red',borderBottom: '1px solid black'};
    }

  

    render() {
        const {id,title} = this.props.todo; 

        return (
            <div style ={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)}></input> {' '}
                {title}
                <button className="btn btn-primary m-2 border border-success rounded" onClick={this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: 'red'
}

export default TodoItem

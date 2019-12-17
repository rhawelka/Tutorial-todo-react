import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        return this
            .props
            .todos
            .map(el => (
                <div>
                    <TodoItem todo={el} key={el.id} markCompleted={this.props.markCompleted} delTodo={this.props.delTodo}/>
                </div>
            ))
    }
}


Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;

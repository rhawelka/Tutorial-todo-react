import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from "./components/Todos";
import Header from "./components/layouts/Header";
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {

    //Toggle Completed
    markCompleted = (id) => {
        this.setState({
            todos: this
                .state
                .todos
                .map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
        })
    }

    //Delete todoItem
    delTodo = (id) => {
        this.setState({
            todos: [
                ...this
                    .state
                    .todos
                    .filter(el => (el.id !== id))
            ]
        })
    }

    //Add Todo
    addTodo = (title) => {
       axios.post('https://jsonplaceholder.typicode.com/todos',{title: title,
    completed: false}).then( res =>  this.setState({
        todos: [
            ...this.state.todos,
            res.data
        ]
    }) )


       
    }

    state = {
        todos: []
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({todos: res.data}));
    }

    render() {

        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header></Header>
                        <Route
                            exact
                            path="/"
                            render={() => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}></AddTodo>
                                <Todos
                                    todos={this.state.todos}
                                    markCompleted={this.markCompleted}
                                    delTodo={this.delTodo}></Todos>
                            </React.Fragment>
                        )}></Route>
                        <Route path="/about" component={About}></Route>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

import React, {Component} from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    } 

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{
                    display: 'flex'
                }}>
                    <legend>
                        title
                    </legend>
                    <label for="title"></label>
                    <input
                        type="text"
                        name="title"
                        placeholder="add to do..."
                        style={{
                        flex: '10'
                    }}
                        onChange={this.onChange}
                        value={this.state.title}></input>
                    <button
                        type="submit"
                        value="submit"
                        className="btn btn-primary p-3"
                        style={{
                        flex: '1'
                    }}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo

import React from 'react';
import { Link} from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/">Home</Link> {' | '}
            <Link to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: 'black',
    padding: '10px',
    color: 'white',
    textAlign: 'center'
}

export default Header;


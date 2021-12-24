import logo from '../logo.svg';
import React from 'react';

// 가장 메인페이지, 수정 자유롭게
const Test = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );
};

export default Test;

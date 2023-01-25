import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Foo = ({ name }) => {
    return (
        <p>This is a Foo Component. It's name is {name}</p>
    )
}

const Item = (props) => {
    return (
        <div>
            <p>This is an Item Component. It's name is {props.name}</p>
            <Foo name={'Alexa'}/>
            <Foo name={'Chelsea'}/>
            <Foo name={'Mary'}/>
        </div>

    )
}

const item = <p>This is an item. Elements are composables</p>

const element = <div>
    <h1>Hello, Element</h1>
    <p>This is a test</p>
    {item}
    <Item name={'Gregory'}/>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
    //element,
);
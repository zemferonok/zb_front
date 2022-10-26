import React from 'react';

import css from "./Card.module.css";

const Card = ({data}) => {
    const {_id:id, name, email, message} = data;

    return (<div className={css.body}>
        <button>Delete</button>
        <div>ID: {id}</div>
        <div>Email: {email}</div>
        <div>Name: {name}</div>
        <div>Message: {message}</div>
    </div>);
};

// export default Card;
export {Card};
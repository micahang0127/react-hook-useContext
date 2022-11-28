import React from 'react';
import './Item.css';

const Item = ({todo, changeTodoStatus}) => {
    const toggleTodo = (e) => {
        const id = e.target.dataset.id;
        changeTodoStatus(id);
    }

    const itemClassName = todo.checked === true ? 'done':'';
    return (
        <li data-id={todo.id} onClick={toggleTodo} className={itemClassName}>
            {todo.text}
        </li>
    );
};

export default Item;
import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink} from 'react-router-dom';

const Messages = (props) => {
    return <div className={s.message}>{props.name}</div>
}

export default Messages;
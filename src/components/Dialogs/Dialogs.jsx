import React from 'react';
import s from "./Dialogs.module.css";
import DilogItem from "./dilogIteam/DialogsIteam";
import Messages from './message/Message'

let Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.AppDealogsData.map(m=><DilogItem id={m.id} name={m.name}/>)}
            </div>

            <div className={s.messages}>
                {props.AppMassageData.map(m=><Messages name={m.massage}/>)}
            </div>
        </div>
    )
}

export default Dialogs;
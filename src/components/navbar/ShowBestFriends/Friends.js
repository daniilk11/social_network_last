import React from 'react';
import s from './../navbar.module.css';


const Friends = (props) => {
    return (
        <div >
            <div >
                <img className={s.ava} src={props.avatarka}></img>
            </div>
            <div className={s.text}>
                <div >
                    {props.name}
                </div>
                <div >
                    {props.status}
                </div>
            </div >
        </div>
    )
}

export default Friends;
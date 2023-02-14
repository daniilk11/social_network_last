import React from 'react';
import s from './../Dialogs.module.css';



const Message = (props) => {
  
  return (
    <div className={s.right_left_mes}>
      {props.isNotMine === true 
        ? <div className={s.NotMine_message} >{props.message}</div>
        : <div className={s.Mine_message}>{props.message}</div>}
    <div className={s.time}>{props.time}</div>
    </div> 
  )

}

export default Message;
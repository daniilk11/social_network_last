import React from 'react';
import s from './Bookmarks.module.css';

const Bookmarks = (props) => {
  return <div >

    <div className={s.main_content}>

      <header className={s.header}>
      </header>

      <div className={s.items_block}>
        <div className={s.item}> </div>
        <div className={s.item} ></div >
        <div className={s.item} ></div >
        <div className={s.item} ></div >
        <div className={s.item} ></div >
        <div className={s.item} ></div >
        <div className={s.item}> </div>
        <div className={s.item} ></div >
        <div className={s.item} ></div >
        
      </div>

      <div className={s.loader_community} ></div >

    </div>

  </div>
}
export default Bookmarks;
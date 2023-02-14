import React from 'react';
import s from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'



// надо обернуть в контейнер и коннектом дать диспач и стейт
const Navbar = (props) => {

    return <nav className={s.nav}>
        <div className={s.sidebar_up}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item} >
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/videos' activeClassName={s.active}>Videos</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/photos' activeClassName={s.active}>Photos</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Communities' activeClassName={s.active}>Communities</NavLink>
            </div>
        </div>


        <div className={s.sidebar_down}>
            <div className={s.item}>
                {/*<Icon disabled name='setting' />*/}
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/suggestions' activeClassName={s.active}>Suggestions</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/bookmarks' activeClassName={s.active}>Bookmarks</NavLink>
            </div>
        
        </div>

    </nav>

}
export default Navbar;
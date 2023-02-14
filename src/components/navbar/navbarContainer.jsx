import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';



const mapStateToProps = (state) => {
    return {
        SideBar: state.SideBar,

    }

}

const mapDispatchToProps = (dispatch) => {
    return {}
}


const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

//  функция конект имеет в себе данные из стора и так же в ней есть подписчики, кажды раз при изменении 
// (добавлении новых данных
//   конект сравнивает даные обьекта, кроме данных вложенных массивов (не может посмотреть что там, на массив идет поинтер а не он сам))
export default NavbarContainer;
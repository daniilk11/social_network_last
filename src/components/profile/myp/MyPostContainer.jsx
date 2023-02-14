import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/Profile_reducer';
import Myp from './Myp';



const mapStateToProps = (state) => {
  return {
    PostData: state.profilePage.PostData,
    NewPostText: state.profilePage.NewPostText
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    // updateNewPostText: (text) => {
    //   let action = updateNewPostTextActionCreator(text);
    //   dispatch(action);
    // },
    AddPost: (text, post_img) => {
      dispatch(addPostActionCreator(text, post_img));
    },
  };

}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Myp);
//  функция конект имеет в себе данные из стора и так же в ней есть подписчики, кажды раз при изменении 
// (добавлении новых данных
//   конект сравнивает даные обьекта, кроме данных вложенных массивов (не может посмотреть что там, на массив идет поинтер а не он сам))
export default MyPostContainer;
import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/Users_reducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader.js";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

// import s from './../.module.css';

class UsersContainer extends React.Component {
  // ниже обьявляем метод componets без let/

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
   
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingProgress={this.props.followingProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  // принимает весь стейт, ниже пишем какие данные нужно вернуть

  return {
    // users: getUsersSuper(state)
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    followingProgress: state.usersPage.followingProgress,
  };
};

// let withRedirectComponent = withAuthRedirect(UsersContainer);  //закрывает доступ, если не залогинен

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },

//     setUsers: (users) => {  //запрашивает всех пользователей
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {  //устанавливает текущую страницу
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCounts: (totalCount) => {  //устанавливает общее кол-во пользователей
//       dispatch(setTotalUsersCountsAC(totalCount))

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  }),
  withAuthRedirect //закинеться в конект сверху
)(UsersContainer); // в первые скобки закидываем резудьтат вызова функции compose с вторыми скобками, во вторые () туда закидываем обьект с которым будем работать (первичный обьект) пишем все снизу вверх

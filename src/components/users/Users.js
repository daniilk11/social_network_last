/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/usersimg.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator";
import { Dropdown, Icon } from "semantic-ui-react";


let Users = (props) => {
  return (
    <div className={s.main_Block}>
      <div className={s.pagination}>
        <Paginator
          currentPage={props.currentPage}
          onPageChanged={props.onPageChanged}
          totalItemsCount={props.totalUsersCount}
          pageSize={props.pageSize}
        />
      </div>
      <div className={s.avatarAndInfo}>
        {props.users.map((u) => (
          <div className={s.users_Block} key={u.id}>
            <span>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.potos.small : userPhoto}
                  className={s.usersphoto}
                />
              </NavLink>
            </span>
            <div className={s.user_Info}>
              <span className={s.info}>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>

              <div className={s.info}>
                <NavLink to={"/dialogs"}>
                  <button>Write message</button>
                </NavLink>
              </div>

              <span className={s.info}>
                {u.followed ? (
                  <button
                    disabled={props.followingProgress.some((id) => id === u.id)}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingProgress.some((id) => id === u.id)}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </span>
            </div>
            <div>
              <Dropdown className={s.info_button} icon="circle outline ">
                <Dropdown.Menu>
                  <Dropdown.Item text="Show friend" />
                  <Dropdown.Item text="Suggest friend" />
                  <Dropdown.Item
                    text="Unfriend"
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                    disabled={props.followingProgress.some((id) => id === u.id)}
                  />
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

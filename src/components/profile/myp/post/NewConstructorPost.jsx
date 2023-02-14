import React from "react";
import { Dropdown } from "semantic-ui-react";
import s from "../myp.module.scss";

import heart from "../../../../assets/images/profile/1.svg";
import like from "../../../../assets/images/profile/2.svg";
import comments from "../../../../assets/images/profile/3.svg";
import share from "../../../../assets/images/profile/4.svg";

const NewConstructorPost = (props) => {
  return (
    <div className={s.post}>
      <div className={s.post_content}>
        <div className={s.post_header}>
          <span>
            <span>
              <img src={props.avatar} class="ui avatar image " />
            </span>
            <span>
              <div>{props.username}</div>
              <div>{props.time} min ago</div>
            </span>
          </span>
         
            <Dropdown  icon="chevron down">
              <Dropdown.Menu >
                <Dropdown.Item text="Delete post" />
                <Dropdown.Item text="Archive post" />
                <Dropdown.Item text="Add to Bookmarks" />
                <Dropdown.Item text="Pin post" />
                <Dropdown.Item text="Disable comments" />
              </Dropdown.Menu>
            </Dropdown>
        </div>

        <div>
          <p>{props.message}</p>
        </div>

        <div>
          <img className={s.post_img} src={props.post_img}></img>
        </div>

        <div className={s.icon_bar}>
          <span>
            <img className={s.like} src={like} />{" "}
            <img className={s.i} src={heart} alt="heart" />
            <span className={s.t}>{props.likecount}K Like </span>
            <img className={s.ti} src={comments} />
            <span className={s.t}>22 Comments</span>
          </span>

          <span>
            <img className={s.ts} src={share} />
            <span className={s.t}>Share</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewConstructorPost;

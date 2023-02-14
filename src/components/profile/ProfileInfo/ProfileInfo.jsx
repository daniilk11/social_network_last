import React from "react";
import s from "./ProfileInfo.module.scss";
import Preloader from "../../common/preloader/preloader.js";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/usersimg.png";
import Friends from "../../navbar/ShowBestFriends/Friends";
import background from "../../../assets/images/profile/photoprofie.jpg";
import mail from "../../../assets/images/profile/mail.svg";
import info from "../../../assets/images/profile/info.svg";

import { Button } from "semantic-ui-react";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />;
  }

  // if (isOwner){
    //render my profile
  // }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  let ShowBestfriends = props.props.props.Bestfriends.map((BF) => (
    <Friends
      name={BF.name}
      id={BF.id}
      avatarka={BF.avatarka}
      status={BF.status}
    />
  ));

  return (
    <div className={s.profile_header}>
      <div className={s.profile_data}>
        <div className={s.background}>
          <img src={background} alt="background" />
        </div>
        <div className={s.pr}>
          <span className={s.avatar_block}>
            <img
              alt="avatar"
              src={props.profile.photos.small || userPhoto}
              className={s.mainPhoto}
            />

            {/* <div className={s.select_photo}>
              {" "}
              {props.isOwner && (
                <input type={"file"} onChange={onMainPhotoSelected} />
              )}
            </div>  */}

            <span className={s.name_status}>
              <div>{props.profile.fullName}</div>
              <div>
                <ProfileStatusWithHooks
                  status={props.status}
                  updateStatus={props.updateStatus}
                />
              </div>
            </span>
          </span>

          <span className={s.right_buttons}>
            <Button className={s.but} color="green">
              Add friend
            </Button>
            <img src={mail} alt="mail" />
            <img src={info} alt="info" />
          </span>
        </div>
      </div>

      <div className={s.menu}>
        <div class="ui menu">
          <a class="item">About</a>
          <a class="item">Membership</a>
          <a class="item">Discussion</a>
          <a class="item">Video</a>
          <a class="item">Group</a>
          <a class="item">Event</a>
        </div>
      </div>

      {/* <div className={s.bestfriendsbar}>
      <div className={s.bestfr}>
        {ShowBestfriends}
      </div>
    </div> */}
    </div>
  );
};

export default ProfileInfo;

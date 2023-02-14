import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './myp/MyPostContainer';



const Profile = (props) => {

  // eslint-disable-next-line no-lone-blocks
  {
    return <div className={s.profile_page}>
      <ProfileInfo props={props} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} />
      <MyPostContainer />
      
    </div>
  }


}
export default Profile;
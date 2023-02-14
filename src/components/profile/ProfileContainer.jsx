import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../redux/Profile_reducer';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;

    }
    this.props.getUserProfile(userId);
    
    this.props.getStatus(userId);
  }


  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile();
  }
  

  render() {
    return <div>

      <Profile props={this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto} />
    
    </div>
   
  }
}



// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);  //закрывает доступ, если не залогинен



const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    Bestfriends: state.profilePage.Bestfriends,

  }

}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter, //routing
  // withAuthRedirect //закинеться в конект сверху
)
  (ProfileContainer) // в первые скобки закидываем резудьтат вызова функции compose с вторыми скобками, во вторые () туда закидываем обьект с которым будем работать (первичный обьект) пишем все снизу вверх





import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/Dialogs_reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
  return {
    DialogsData: state.DialogsPage.DialogsData,
    MessagesData: state.DialogsPage.MessagesData,
    NewMessageText: state.DialogsPage.NewMessageText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    AddMessage: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody))
    },

  }
}




// let AuthRedirectComponent = withAuthRedirect(Dialogs);  закрывает доступ, если не залогинен





export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect //закинеться в конект сверху
) (Dialogs) // в первые скобки закидываем резудьтат вызова функции compose с вторыми скобками, во вторые () туда закидываем обьект с которым будем работать (первичный обьект) пишем все снизу вверх

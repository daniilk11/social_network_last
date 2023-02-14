import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import s from './Dialogs.module.css';
import Dialogitem from './DialogsItem/Dialogitem';
import Message from './Message/Message';
import Icon3 from '../../assets/images/icons small/3.svg';



const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

  return <div>
    <form className={s.formM} onSubmit={props.handleSubmit} >
      <img className={s.button} src={Icon3} />
      <div className={s.messages_form} >
        <Field className={s.input_field} component={Textarea} name={"messageText"} placeholder='Enter your message'
          validate={[required, maxLength50]} />
      </div>
      <button className={s.button} > <img src={Icon3} /> </button>
    </form>
  </div>
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)  // во вторые скобки передаем функцию с формой


const Dialogs = (props) => {

  let DialogElement = props.DialogsData.map(d => <Dialogitem name={d.name} id={d.id} avatar={d.avatar} />);

  let MessagesElement = props.MessagesData.map(m => <Message  message={m.message} id={m.id} time={m.time} isNotMine={m.isNotMine} />);


  const onSubmit = (formData) => {
    props.AddMessage(formData.messageText);

  }


  if (!props.isAuth) {
    return <Redirect to={'/login'} />
  }  // func redirect

  return <div>



    <div className={s.messenger_block}>

      <div className={s.message_box}>

        <div>
          <div>{MessagesElement}</div>
        </div>

        <div className={s.newMessageBox}>

           <AddMessageFormRedux onSubmit={onSubmit} />
        </div>

      </div>


      <div className={s.friends_right_block}>
        <p>CONTACTS</p>
        <div className={s.dialogs}>
          <div className={s.dialogsitems}>
            {DialogElement}
          </div>
        </div>
      </div>

    </div>
  </div>
}
export default Dialogs;


/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from "./myp.module.scss";
import { Field, FieldArray, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";

import images from "../../../assets/images/profile/6.svg";
import videocamera from "../../../assets/images/profile/7.svg";
import camera from "../../../assets/images/profile/camera.svg";
import eye from "../../../assets/images/profile/eye.svg";
import fr from "../../../assets/images/profile/fr.svg";
import people from "../../../assets/images/profile/people.svg";
import loc from "../../../assets/images/profile/loc.svg";
import { Button } from "semantic-ui-react";
import NewConstructorPost from "./post/NewConstructorPost";

const maxLength10 = maxLengthCreator(10);

const MyPostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        {" "}
        {/* // work when it change */}
        <div>
          <Field
            className={s.input}
            placeholder={"What's on your mind?"}
            component={Textarea}
            name={"newPostText"}
            validate={[required, maxLength10]}
          />
        </div>
        <div className={s.selector}>
          <span className={s.btns_left}>
            <span>
              {" "}
              <img src={videocamera} />
            </span>
            <span>Live Video</span>
            <img src={camera} />
            <span>Activity</span>
            <img src={images} />
            <span>
              <label for="file">Click to add photo</label>
              <input
                id="file"
                name="file"
                type="file"
                onChange={props.AddPost}
              />
            </span>
          </span>
          <span className={s.btns}>
            <Button color="blue">Add Post</Button>
          </span>
        </div>
      </form>
    </div>
  );
};

const AddNewPostReduxForm = reduxForm({ form: "newPost" })(MyPostForm); // во вторые скобки передаем функцию с формой

const Myp = React.memo((props) => {
  // делает тоже что и функция ниже

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !=  this.props || nextState !=  this.state;
  // }

  // const MyComponent = React.memo(function MyComponent(props) {
  //   /* render using props */
  // }); descriptions for hooks

  let PostElement = props.PostData.map((p) => (
    <NewConstructorPost
      id={p.id}
      username={p.username}
      avatar={p.avatar}
      message={p.message}
      likecount={p.likecount}
      post_img={p.post_img}
      time={p.time}
    />
  ));

  // let onPostChange = (formData) => {

  //   props.updateNewPostText(formData.newPostText);

  // }

  const onSubmit = (formData) => {
 
    props.AddPost(formData.newPostText, formData.newPostImg);
  }; // in formData all data from LoginForm, when button is touched

  return (
    <div className={s.content_profile}>
      <div className={s.left_bar}>
        <div className={s.about}>
          <h5>About</h5>
          <p>
            Difficult as it is to speak about ourselves, still in certain
            situations we have to introduce ourselves, regarding our biography,
            members
          </p>
        </div>

        <div className={s.item1}>
          <div>
            <img src={eye} />
            <span>Visible</span>
          </div>
          <div>
            <img src={fr} />
            <span>Best friend</span>
          </div>
          <div>
            <img src={loc}></img>
            <span>Prague,Czech Republic</span>
          </div>
          <div>
            <img src={people} />
            <span>General group</span>
          </div>
        </div>

        <div className={s.item2}>
          <div className={s.header_p}>
            <h5>Photos</h5>
            <span>See all</span>
          </div>
          <div className={s.photos}>
            <img src="https://dev26.5bucks.ru/wp-content/uploads/2019/02/10.2.13.friends-750x494.-750-210x138.jpg" />
            <img src="http://careerdevs.com/wp-content/uploads/2018/10/events-1-300x200.jpg" />
            <img src="http://zahid3d.com/wp-content/uploads/2018/03/images-e1520105175611.jpg" />
            <img src="https://phototour.com.ua/wp-content/uploads/2017/10/3-768x512.jpg" />
            <img src="https://i.artfile.ru/s/1125507_010217_50_ArtFile_ru.jpg" />
            <img src="https://img2.goodfon.ru/original/320x240/f/ff/leto-zelen-solnce-krasota.jpg" />
          </div>
          <div className={s.b}>
            <button>More</button>
          </div>
        </div>
      </div>

      <div className={s.right_bar}>
        <div className={s.new_post}>
          <AddNewPostReduxForm onSubmit={onSubmit} />
        </div>
        <div >{PostElement}</div>
      </div>
    </div>
  );
});

export default Myp;

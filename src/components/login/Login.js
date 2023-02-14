import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/Auth_reducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import styles from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (props, error, captchaUrl) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        {" "}
        {/* // work when it change */}
        <div>
          <Field
            className={styles.input}
            placeholder={"Login"}
            component={Input}
            name={"email"}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            className={styles.input}
            placeholder={"Password"}
            component={Input}
            name={"password"}
            validate={[required]}
          />
        </div>
        <div className={styles.checkbox}>
          <span>
            <Field type={"checkbox"} component={Input} name={"rememberMe"} />
          </span>
          <span className={styles.textck}> Remember me</span>
        </div>
        {props.error && (
          <div className={styles.formSummaryError}>
            {" "}
            {/*if we have props error -- show us error */}
            {props.error}
          </div>
        )}
        <div>
          <button className={styles.btn}>Login</button>
        </div>
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && (
          <Field
            type={"input"}
            placeholder={"Enter symbols from image"}
            name={"captcha"}
            validate={[required]}
          />
        )}
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm); // во вторые скобки передаем функцию с формой

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  }; // in formData all data from LoginForm, when button is touched

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <div className={styles.h1}> Login into your account</div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />{" "}
      {/*// работает по принципу замыкания создаем onSubmit в Login потом передаем её в логинредаксформ (hoc) который передаст handleSubmit, onSubmit и др в логинформ, который пресвоит данные onSubmit и вернет его  */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);

import React from "react";
import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import Icon1 from "../../assets/images/icons small/1.svg";
import Icon2 from "../../assets/images/icons small/2.svg";
import Icon3 from "../../assets/images/icons small/3.svg";
import Icon4 from "../../assets/images/icons small/4.svg";
import Icon5 from "../../assets/images/icons small/5.svg";
import Icon_info from "../../assets/images/icons small/info.svg";
import Icon_moon from "../../assets/images/icons small/moon.svg";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Button, Icon } from "semantic-ui-react";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.header_content}>
        <div className={s.left_side_header}>
          <div>
            <img
              className={s.main_logo}
              src="https://api.iconify.design/logos:torus.svg?height=16"
            ></img>
          </div>
          <div>
            <input
              className={s.searcher}
              placeholder="Start typing to search"
            ></input>
          </div>
          <div>
            <div className={s.small_logos_grey}>
              <NavLink to="/dialogs" activeClassName={s.active}>
                <img className={s.item} src={Icon1} />
              </NavLink>

              <NavLink to="/videos" activeClassName={s.active}>
                <img className={s.item} src={Icon4} />
              </NavLink>

              <NavLink to="/memories" activeClassName={s.active}>
                <img className={s.item} src={Icon3} />
              </NavLink>

              <NavLink to="/friends" activeClassName={s.active}>
                <img className={s.item} src={Icon2} />
              </NavLink>

              <NavLink to="/marketplace" activeClassName={s.active}>
                {" "}
                <img className={s.item} src={Icon5} />
              </NavLink>
            </div>
          </div>
        </div>

        <div className={s.right_side_header}>
          <div className={s.small_logos_blue}>
            <img className={s.info_icon} src={Icon_info} />
            <img className={s.moon} src={Icon_moon} />
          </div>

          <div className={s.loginBlock}>
            {props.isAuth ? (
              <Dropdown text={props.login} icon="chevron down">
                <Dropdown.Menu>
                  <Dropdown.Item text="Payment" />
                  <Dropdown.Divider />
                  <Dropdown.Item text="About us" />
                  <Dropdown.Item text="Contact form" />
                  <Dropdown.Divider />
                  <Dropdown.Item text="Log out" onClick={props.logout} />
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <NavLink to={"/login"}>
                <Button size='big'  icon   labelPosition="right">
                 <div className={s.btnl}>Login</div> 
                  <Icon name="sign in" />
                </Button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

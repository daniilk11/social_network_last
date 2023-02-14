import React from "react";
import s from "./App.module.css";
import HeaderContainer from "./components/header/HeaderContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import News from "./components/news/news";
import Settings from "./components/Settings/Settings";
import { Redirect, Route, Switch } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/navbar/navbarContainer";
import UsersContainer from "./components/users/UsersContainer";
import Login from "./components/login/Login";

import Communities from "./components/Communities/Communities";

import { connect } from "react-redux";
import { Component } from "react";
import { initializeApp } from "./redux/app_reducer";
import Preloader from "./components/common/preloader/preloader";
import "bulma/css/bulma.min.css";

import { withSuspense } from "./hoc/withSuspenseLazy";

import Videos from "./components/Videos/Videos";
import Memories from "./components/Memories/Memories";
import Friends from "./components/Friends/Friends";
import Marketplace from "./components/Marketplace/Marketplace";
import Photos from "./components/Photos/Photos";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Suggestions from "./components/Suggestions/Suggestions";
import AboutMe from "./components/AboutMe/AboutMe";
import Payments from "./components/Payments/Payments";
import ContactUs from "./components/Contact_us/Contact_us";

const music = React.lazy(() => import("./components/music/music")); // lazy loader

class App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("some error");
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>

        <div className={s.app_wrapper}>
          <HeaderContainer />

          <NavbarContainer />

          <div className={s.app_wrapper_content}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect from="/" to="/profile" />}
              />
              {/*// задает основную страничку профайлем */}

              <Route path="/users" render={() => <UsersContainer />} />

              <Route path="/dialogs" render={() => <DialogsContainer />} />
              {/*path search for part in link, and if its happened start rendering component  */}

              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              {/* тут как создавать путь который необязателен с ? и после слеша это параметр к которому придет значeние в строке url после profile */}

              <Route path="/music" render={withSuspense(music)} />

              {/* route смотрит за изменение юрла и если там есть элемет указаный в path -> отрисовывает рендерит функцию мюзик */}

              <Route path="/news" render={() => <News />} />

              <Route path="/Communities" render={() => <Communities />} />

              <Route path="/marketplace" render={() => <Marketplace />} />

              <Route path="/memories" render={() => <Memories />} />

              <Route path="/videos" render={() => <Videos />} />

              <Route path="/friends" render={() => <Friends />} />
              <Route path="/photos" render={() => <Photos />} />

              <Route path="/bookmarks" render={() => <Bookmarks />} />

              <Route path="/suggestions" render={() => <Suggestions />} />

              <Route path="/about" render={() => <AboutMe />} />

              <Route path="/payments" render={() => <Payments />} />

              <Route path="/contact_us" render={() => <ContactUs />} />

              <Route path="/login" render={() => <Login />} />

              <Route
                path="/settings" // write= exact if we want will be only on /settings
                render={() => <Settings />}
              />

              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);

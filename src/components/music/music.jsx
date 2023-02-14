import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import s from "./music.module.css";
import music_page from "../../assets/images/music_page/music_page.svg";
import player from "../../assets/images/music_page/player.svg";

export default class music extends Component {
  state = { activeItem: "My music" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className={s.Music}>
        <div className={s.Music_block}>
          <Menu secondary size="huge" inverted>
            <Menu.Item
              name="My music"
              active={activeItem === "My music"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="For you"
              active={activeItem === "For you"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Explore"
              active={activeItem === "Explore"}
              onClick={this.handleItemClick}
            />

            <Menu.Item position="right">
              <div className="input">
                <input type="text" placeholder="Enter name of song" />
                <div className={s.i}>
                  <i class="search icon"></i>
                </div>
              </div>
            </Menu.Item>
          </Menu>

          <div>
            <img
              className={s.Music_content}
              src={music_page}
              alt="music_page"
            />
          </div>

          <div className={s.Music_player}>
            <img src={player} alt="player" />
          </div>
        </div>
      </div>
    );
  }
}

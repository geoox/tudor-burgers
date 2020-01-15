import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Image from "../components/image"
import "./header.css"
import logo from "../images/logo.jpeg"
import { Link } from 'gatsby'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    window.location='/'+name;
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable fixed={'top'} widths={7} className="header-menu">
        <Menu.Item>
          <Link to="/">
            <img src={logo} alt="Logo" width="90px"/>
          </Link>
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          href="/about-us"
        >
            About us
        </Menu.Item>

        <Menu.Item
          name='menu'
          active={activeItem === 'menu'}
          onClick={this.handleItemClick}
        >
            Menu
        </Menu.Item>

        <Menu.Item
          name='locations'
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
        >
            Locations
        </Menu.Item>

        <Menu.Item
          name='feed'
          active={activeItem === 'feed'}
          onClick={this.handleItemClick}
        >
            Feed
        </Menu.Item>

        <Menu.Item
          name='franchise'
          active={activeItem === 'franchise'}
          onClick={this.handleItemClick}
        >
            Franchise
        </Menu.Item>

        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
            Contact
        </Menu.Item>
      </Menu>
    )
  }
}


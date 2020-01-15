import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import "./header.css"
import logo from "../images/logo.jpeg"
import logo_svg from "../images/logo_svg.svg"
import { Link } from 'gatsby'

import { stack as MenuMob } from 'react-burger-menu'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    window.location='/'+name;
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
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


        <div className="mobile-menu-container">
          <MenuMob className="menu-mob">
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about-us" className="menu-item" href="/about-us">About us</a>
            <a id="menu" className="menu-item" href="/menu">Menu</a>
            <a id="locations" className="menu-item" href="/locations">Locations</a>
            {/* <a id="feed" className="menu-item" href="/feed">Feed</a> */}
            <a id="franchise" className="menu-item" href="/franchise">Franchise</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
          </MenuMob>
          <img src={logo} alt="Logo" width="100px" style={{display: "block", margin:"auto"}}/>
        </div>
      </div>
    )
  }
}


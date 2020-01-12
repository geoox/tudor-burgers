import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Image from "../components/image"
import "./header.css"
import logo from "../images/logo.jpeg"
import { Link } from 'gatsby'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable fixed={'top'} widths={6}>
        <Menu.Item>
          <Link to="/">
            <img src={logo} alt="Logo" width="60px"/>
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
          href="/menu"
        >
            Menu
        </Menu.Item>

        <Menu.Item
          name='locations'
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
          href="/locations"
        >
            Locations
        </Menu.Item>

        <Menu.Item
          name='franchise'
          active={activeItem === 'franchise'}
          onClick={this.handleItemClick}
          href="/franchise"
        >
            Franchise
        </Menu.Item>

        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
          href="/contact"
        >
            Contact
        </Menu.Item>
      </Menu>
    )
  }
}


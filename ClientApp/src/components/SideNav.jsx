import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../graphics/logo/logo-on-black.png'
import useOnClickOutside from 'use-onclickoutside'

export function SideNav(props) {
  const ref = React.useRef(null)

  useOnClickOutside(ref, () => {
    if (props.sideNavDisplay) {
      props.handleSideBar()
    }
  })

  return (
    <div
      ref={ref}
      className="side-nav"
      style={
        props.sideNavDisplay
          ? {
              transform: `translate(0%)`,
            }
          : {
              transform: `translate(-100%)`,
            }
      }
    >
      <i className="fas fa-times" onClick={props.handleSideBar}></i>
      <Link to="/">
        <img src={logo} alt="Smash combos logo" onClick={props.handleSideBar} />
      </Link>
      <ul>
        <li>
          <Link to="/submit">
            <button
              className="bg-yellow button black-text"
              onClick={props.handleSideBar}
            >
              Submit a combo
            </button>
          </Link>
        </li>
        <li>
          <Link to="/add">
            <button
              className="bg-yellow button black-text"
              onClick={props.handleSideBar}
            >
              Add a Character
            </button>
          </Link>
        </li>
        <li>
          <Link to="/edit">
            <button
              className="bg-yellow button black-text"
              onClick={props.handleSideBar}
            >
              Edit a Character
            </button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button
              className="white-text button-blank"
              onClick={props.handleSideBar}
            >
              Sign up
            </button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button
              className="white-text button-blank"
              onClick={props.handleSideBar}
            >
              Log in
            </button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

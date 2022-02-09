import React from 'react'
import './topnav.scss'
import data from '../../constants/data'
import UserInfo from './UserInfo'

const TopNav = () => {
  return (
    <div className="topnav">
      <UserInfo user={data.user} />
      <div className="sidebar-toggle">
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  )
}

export default TopNav

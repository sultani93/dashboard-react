import React from 'react'
import './sidebar.css'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Inventory,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className='sidebarListItem'>
              <Timeline />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem '>
              <PersonOutline />
              Users
            </li>
            <li className='sidebarListItem'>
              <Inventory />
              Products
            </li>
            <li className='sidebarListItem'>
              <AttachMoney />
              Transactions
            </li>
            <li className='sidebarListItem'>
              <BarChart />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <MailOutline className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeed />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <WorkOutline className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarListItem'>
              <Timeline />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <Report />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Sidebar

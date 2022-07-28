import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'

function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Dashboard</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <div className='topIconBadge'>2</div>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <div className='topIconBadge'>2</div>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/marilyn-michael-tompsett.jpg'
            alt='Avatar'
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  )
}
export default Topbar

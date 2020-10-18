import React from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SidebarChats from './SidebarChats/SidebarChats';
import { Avatar, IconButton } from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div>
          <Avatar src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg' />
        </div>
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
          <div className="sidebar__searchContainer">
              <IconButton>
              <SearchOutlined/>
              </IconButton>
              <input type="text" placeholder="Start a New Start"/>
          </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
      </div>
    </div>
  );
};

export default Sidebar;

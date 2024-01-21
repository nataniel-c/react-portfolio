import React from 'react';
import { Tab, Tabs, TabsList, TabPanel } from '@mui/base'
import About from '../pages/About';
import Resume from '../pages/Resume';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';


function Navigation() {

  return (
        <Tabs defaultValue='/'>
          <TabsList className="CustomTabsList">
            <Tab className='CustomTab' value='/' to='/'>About me</Tab>
            <Tab className='CustomTab' value='/portfolio' to='/portfolio'>Portfolio</Tab>
            <Tab className='CustomTab' value='/contact' to='/contact'>Contact</Tab>
            <Tab className='CustomTab' value='/resume' to='/resume'>Resume</Tab>
          </TabsList>
          <TabPanel className='CustomTabPanel' value='/'><div><About /></div></TabPanel>
          <TabPanel className='CustomTabPanel' value='/portfolio'><div><Portfolio /></div></TabPanel>
          <TabPanel className='CustomTabPanel' value='/contact'><div><Contact /></div></TabPanel>
          <TabPanel className='CustomTabPanel' value='/resume'><div><Resume /></div></TabPanel>   
          </Tabs> 
  )
}


export default Navigation;

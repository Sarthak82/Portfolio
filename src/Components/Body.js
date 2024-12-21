import React from 'react'
import "./Body.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';  
import EmailIcon from '@mui/icons-material/Email';
function Body() {
  return (
    <div className='body'>
      <div className='body__top'>
          <div className='body__info'>
            <h1>I'm </h1>
            <h1><span>Sarthak Mahajan</span></h1>
            <h1>Cyber Security Trainee</h1>
          </div>
          <div className='body__img'>
            <img src='/mine.jpg' alt='mine pic'/>
          </div>
      </div>

      <div className='body__icons'>
        <a href='https://www.linkedin.com/in/sarthakmahajan2002/'><LinkedInIcon fontSize='large' className='body__icon'/></a>
        <a href='https://github.com/Sarthak82'><GitHubIcon fontSize='large' className='body__icon'/></a>
        <a href='mailto:sarthakmjh@gmail.com'><EmailIcon fontSize='large' className='body__icon'/></a>
      </div>
    </div>
  )
}

export default Body

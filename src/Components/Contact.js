import React from 'react'
import "./Contact.css"

function Contact(){
    return(
        <div className='contact'>
            <div className='contact__title'>
                <h1>Get in Touch</h1>
            </div>

            <div className='contact__images'>
                <a href='mailto:sarthakmjh@gmail.com' target='_blank' rel="noreferrer"><img src='logo/email.png' alt="email"/></a>    
                <a href='https://www.linkedin.com/in/sarthakmahajan2002/' target='_blank' rel="noreferrer"><img src='logo/linkdin.png' alt="linkdin"/></a>    
                <a href='https://line.me/ti/p/tu9Uo2_vue' target='_blank' rel="noreferrer"><img src='logo/line.png' alt="line"/></a>    
                <a href='https://wa.me/917876582818' target='_blank' rel="noreferrer"><img src='logo/whatsapp.png' alt="whatsapp"/></a>    
            </div> 
        </div>
    )
}


export default Contact;
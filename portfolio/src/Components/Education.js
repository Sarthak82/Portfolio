import React from 'react'
import './Education.css'

function Education() {
  return (
    <div className='education'>
        <div className='eduction__box'>
            
            <div className='eduction__box__title'>
                <h1>Eduction</h1>
            </div>

            <div className='education__box_content'>
                <div className='education__box_content_item'>
                    <h2>Chandigarh University</h2>
                    <p>Bachelor of Technology in Computer Science and Engineering</p>
                    <p>CGPA: 8.18</p>
                    <p>2020 - 2024</p>
                </div>
                
                <div className='education__box_content_item'>
                    <h2>DAV SR SEC SCHOOL</h2>
                    <p>12<sup>th</sup>CBSE Boards (PMCB)</p>
                    <p>Percentage: 82.40%</p>
                    <p>2019 - 2020</p>
                </div>
                <div className='education__box_content_item'>
                    <h2>DAV SR SEC SCHOOL</h2>
                    <p>10<sup>th</sup> CBSE Boards</p>
                    <p>Percentage: 87.8%</p>
                    <p>2017 - 2018</p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Education 
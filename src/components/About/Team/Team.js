import React from 'react'
import Avatar from '../../../assets/images/Avatar.png';
import Avatar_girl from '../../../assets/images/Avatar_girl.jpg';
import Layout from '../../../Layout/Layout.js'
import './Team.css'
function Team() {
  return (
    <Layout>
    <div className='team'>
    <div className='team-container'>
        <h2>Our Team</h2>
    <div className='team-box'>
      <div className='team-member-image'>
        <img src={Avatar} className='team-image-profile' alt='santosh'></img>
      </div>
      <div className='team-member-description'></div>
    </div>
    <div className='team-box'>
<div className='team-member-image'>
   <img src={Avatar} className='team-image-profile' alt='Tanya'></img>
</div>
 <div className='team-member-description'></div>
    </div>
    <div className='team-box'>
<div className='team-member-image'>
   <img src={Avatar_girl} className='team-image-profile' alt='Rajan'></img>
</div>
 <div className='team-member-description'></div>
    </div>
    </div>
    </div>
    </Layout>
  )
}

export default Team

import React from 'react'
import Experiences from './Experiences/Experiences'
import NewMentors from './Mentors/NewMentors'
import Stats from './Stats/Stats'

const MainBody = () => {
  return (
    <div class="container-fluid">
  <div class="row">
    <div class="col-lg-8 col-md-12">
      <Experiences/>
    </div>
    <div class="col-lg-4">
      <Stats/>
      <NewMentors />
    </div>
  </div>
</div>
  )
}

export default MainBody
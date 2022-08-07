import React from 'react'
import hampiPic from '../../images/hampi.jpg'
import farmPic from '../../images/farm.jpg'
import parkPic from '../../images/park.jpg'
import ExperienceCard from './ExperienceCard';

const Experiences = () => {
    const bodyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nostrum laudant'
  return (
  <div class="row shadow py-3 bg-white rounded mx-4">
  <h5>Your upcoming Experiences</h5>
    <div class="col-lg-4 col-md-6 col-sm-6">
        <ExperienceCard title="Title" body={bodyText} image={hampiPic}/>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-6">
        <ExperienceCard title="Title" body={bodyText} image={farmPic}/>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-6">
        <ExperienceCard title="Title" body={bodyText} image={parkPic}/>
    </div>
  </div>
  )
}

export default Experiences
import React from "react";
import userPic from "../../images/download.png";
import MentorCard from "./MentorCard";

const NewMentors = () => {
  return (
    <div className="row shadow py-3 bg-white rounded mx-2 my-5" style={{width:'100%'}}>
    <h5>New mentors on Edvolve</h5>
      <div className="col-lg-12 col-md-6">
        <MentorCard name="Messi" designation="Lorem ipsum dolor sit amet, consectetur adipiscing elit." pic={userPic}/>
      </div>
      <div className="col-lg-12 col-md-6">
        <MentorCard name="Coutinho" designation="Lorem ipsum dolor sit amet, consectetur adipiscing elit." pic={userPic}/>
      </div>
      <div className="col-lg-12 col-md-6">
        <MentorCard name="Griezmann" designation="Lorem ipsum dolor sit amet, consectetur adipiscing elit." pic={userPic}/>
      </div>
      </div>
  );
};

export default NewMentors;

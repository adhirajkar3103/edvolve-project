import React from "react";

const MentorCard = ({name,designation,pic}) => {
  return (
    <div class="d-flex">
      <img
        src={pic}
        alt={name}
        style={{ width: "70px", height: "70px" }}
        className="rounded mt-auto mb-auto"
      />
      <div>
        <p className="px-2">
          <span class="fw-bold">{name}</span>
          <br />
          {designation}
        </p>
      </div>
    </div>
  );
};

export default MentorCard;

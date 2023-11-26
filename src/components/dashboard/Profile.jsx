import React from "react";
import profileImage from "..//../assets/image 15.png";
import Tag from "../genres/Tag";
function Profile() {
  const profileData = JSON.parse(window.localStorage.getItem("SignupData"))
  const genres = JSON.parse(window.localStorage.getItem('SelectedGenres'))
  return (
    <div
      style={{
        display: "flex",
        width: "30vw",
        height: "33vh",
        borderRadius: "15px",
        background: "#5746EA",
        padding: "20px",
        gap: "30px",
      }}
    >
      <img
        style={{
          height: "35vh",
          position: "relative",
          bottom: "0.5vh",
          width: "8vw",
        }}
        src={profileImage}
        alt="ProfileImage"
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <span
          style={{
            color: "white",
            fontFamily: "var(--dmsans)",
            fontSize: "19.5px",
          }}
        >
          {profileData.name}
        </span>
        <span
          style={{
            color: "white",
            fontFamily: "var(--dmsans)",
            fontSize: "22.5px",
          }}
        >
         {profileData.email}
        </span>
        <span
          style={{
            color: "white",
            fontFamily: "var(--dmsans)",
            fontSize: "35px",
          }}
        >
         {profileData.username}
        </span>
        <Tags Genre={genres}/>
      </div>
    </div>
  );
}
function Tags({Genre}) {
  return (
    <div
      style={{
        marginTop: "10px",
        width: "26vw",
        height: "18vh",
  
      }}
    >
      {Genre.map((item)=>(
        <button
        style={{
          background: "#9F94FF",
          width: "135px",
          height: "40px",
          borderRadius: "20px",
          border: "none",
          margin:'5px 15px 15px auto',
          fontSize: "17px",
          flexShrink:'0',
          textAlign:'left',
          paddingLeft:'20px'
        }}
      >
        {item}
      </button>
      ))}
    </div>
  );
}
export default Profile;

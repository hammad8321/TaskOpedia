import React from "react";
import Student from "./Components/Students/Student";
import StudentReview from "./Components/Students/StudentReview";

class MainBody extends React.Component {
  render() {
    const whatWeLearn = "React JS";
    const noOfLectures = 3;

    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In This cource, we will learn {whatWeLearn} by building TaskOPedia!{" "}
          {"  "}
          <br />
          <> total Lectures - {noOfLectures}</>
        </p>
        <ul>
          <li> Basic Foundation </li>
          <li> Function and Class Component </li>
          <li> Summary</li>
        </ul>
        <div>
          {" "}
          Enter : {
            <input maxLength={5} readOnly={false} placeholder="task" />
          }{" "}
        </div>
        <Student
          name="name A"
          experience={2}
          headshot="https://api.lorem.space/image?w=150&h=180"
        >
          <StudentReview />
        </Student>

        <Student
          name="name B"
          experience={5}
          headshot="https://api.lorem.space/image?w=150&h=181"
        >
          <StudentReview />
        </Student>
        <Student
          name="name C"
          experience={7}
          headshot="https://api.lorem.space/image?w=150&h=182"
        />
      </div>
    );
  }
}

export default MainBody;

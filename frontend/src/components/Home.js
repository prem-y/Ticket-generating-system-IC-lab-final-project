import React from "react";
import {useState} from "react";
import "../StyleSheet/home.css";
import Axios from "axios";
const Home = () => {
  const [Issue,setIssue]=useState({
    userid:"",
    issue: "",
    dept: "",
  })
  const [msg,setMsg]=useState();
  const ChangeHandler = (e) =>{
    let name1= e.target.name;
    let val = e.target.value;
    setIssue({...Issue,[name1]:val});
  };

  const SubmitHandler = (e) =>{
    e.preventDefault();
    Axios.post("http://localhost:3000/insert",{Issue}).then((res)=>{
      let ack = res.data;
      if(ack==="success"){
        setMsg("Data inserted successfully");
        console.log(msg);
        alert("Issue raised successfully");
      }
      else{
        setMsg("Data not inserted");
        console.log(msg);
        alert("Data not inserted")
      }
    })
  }
  return (
    <>
      <h1>Raise Issue</h1>
      <form onSubmit={SubmitHandler}>
        <label>
          USER ID: <input type="text" name="userid" value={Issue.userid} onChange={ChangeHandler}/>
        </label>
        <br />
        <br />
        <label>
          Issue: <input type="text" name="issue" id="" value={Issue.issue} onChange={ChangeHandler}/>
        </label>
        <br />
        <br />
        <label>
          Department: <input type="text" name="dept" id="" value={Issue.dept} onChange={ChangeHandler}/>
        </label>
        <br />
        <br />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Home;

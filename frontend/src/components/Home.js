import React from "react";
import {useState} from "react";
import "../StyleSheet/home.css";
import Axios from "axios";
const Home = () => {
  const [fdata,setFdata]=useState({
    userid:"",
    issue: "",
    dept: "",
  })
  const ChangeHandler = (e) =>{
    let name1= e.target.name;
    let val = e.target.value;
    setFdata({...fdata,[name1]:val});
  };

  const SubmitHandler = (e) =>{
    e.preventDefault();
    Axios.post("http://localhost:4000/insert",{fdata})
    alert("data inserted")
  };

  return (
    <>
      <div className="form" style={{position:'relative',left:'1%'}}>
      <form onSubmit={SubmitHandler}>
          <h1>Raise Issue</h1>
          <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          USER ID: <input type="text" name="userid" value={fdata.userid} onChange={ChangeHandler} class="form-control" id="exampleInputEmail1"/>
        </label>
        </div>
        <div class="mb-3">
        
        <label for="exampleInputEmail1" class="form-label">
          Issue: <input type="text" name="issue" value={fdata.issue} onChange={ChangeHandler} class="form-control" id="exampleInputEmail1"/>
        </label>
        </div>
        <div class="mb-3">
        
        <label for="exampleInputEmail1" class="form-label">
          Department: <input type="text" name="dept" value={fdata.dept} onChange={ChangeHandler} class="form-control" id="exampleInputEmail1"/>
        </label>
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
      </div>
    </>
  );
};
export default Home;

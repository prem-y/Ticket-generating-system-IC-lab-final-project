import React from "react";
import "../StyleSheet/home.css";
const Home = () => {
  return (
    <>
      <h1>Raise Issue</h1>
      <form>
        <label>
          USER ID: <input type="text" name="userid" />
        </label>
        <br />
        <br />
        <label>
          Issue: <input type="text" name="issue" id="" />
        </label>
        <br />
        <br />
        <label>
          Department: <input type="text" name="dept" id="" />
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

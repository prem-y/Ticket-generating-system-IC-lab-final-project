import React from "react";
import {useEffect, useState} from "react";
import Axios from "axios";
function Issues() {

  useEffect(()=>{
    Axios.get("http://localhost:4000").then((res)=>{
      console.log(res.data);
    });
  },[]);

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">USER ID</th>
            <th scope="col">Issue</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><button type="button" class="btn btn-info">Info</button></td>
            <td><button type="button" class="btn btn-dark">Dark</button></td>

          </tr>

        </tbody>
      </table>
    </>
  );
}
export default Issues;

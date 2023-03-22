import React from "react";
import {useEffect, useState} from "react";
import Axios from "axios";
function List() {
  const [fdata,setFdata]= useState([]);
  useEffect(()=>{
    Axios.get('http://localhost:4000').then((res)=>{
      console.log(res);
      setFdata(res.data);
    });
  },[]);

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log(e);
    Axios.post("http://localhost:4000/delete", { id: e }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        alert("data deleted not succesful");
      } else {
        alert("data deleted succesful");
      }
    });
  };
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
        <div>
          
        </div>
        <tbody>
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><button type="button" class="btn btn-info">UPDATE</button></td>
            <td><button type="button" class="btn btn-dark">DELETE</button></td>

          </tr> */}
          {fdata.map((sdata)=>{
            return(
              <tr key={sdata._id}>
                <th scope="row"></th>
                <td>{sdata.userid}</td>
                <td>{sdata.issue}</td>
                <td>{sdata.dept}</td>
                <td><button type="button" class="btn btn-info">UPDATE</button></td>
                <td><button type="button" class="btn btn-dark" onClick={() => deleteHandler(sdata._id)}>DELETE</button></td>

          </tr>
            );
          })}

        </tbody>
      </table>
    </>
  );
}
export default List;
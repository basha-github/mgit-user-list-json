import axios from "axios";
import React, { useEffect } from "react";

export default function UserList() {


    



  const userData = [
    {
      id: 100,
      name: "Amar",
      email: "amar@gmail.com",
      phone: "9845098450",
    },
    {
      id: 200,
      name: "Shyam",
      email: "shyam@gmail.com",
      phone: "9845098999",
    },
    {
      id: 300,
      name: "Ramya",
      email: "ramya@gmail.com",
      phone: "9845098888",
    },
    {
      id: 400,
      name: "Teju",
      email: "teju@gmail.com",
      phone: "9845098111",
    },
  ];
  return (
    <div>
      <div>
        <h1>UserList</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((abc) => (
            <tr>
              <th scope="row">{abc.id}</th>
              <td>{abc.name}</td>
              <td>{abc.email}</td>
              <td>{abc.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

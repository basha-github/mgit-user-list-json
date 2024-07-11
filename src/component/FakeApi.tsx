import axios from "axios";
import React, { useEffect, useState } from "react";

interface AllUsers {
  id: number;
  name: string;
  email: string;
  phone: string;
}
export default function FakeApi() {
  const [userList, setUserList] = useState<AllUsers[]>([]);

  useEffect(() => {
    document.title="MGIT APP";
    axios
      .get<AllUsers[]>("https://jsonplaceholder.typicode.com/users")
      .then(
        (res) => {
        console.log(res.data);
        setUserList(res.data);
      });
  },[]);

  return (
    <div>
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
          {userList.map((oneUser) => (
            <tr>
              <th scope="row">{oneUser.id}</th>
              <td>{oneUser.name}</td>
              <td>{oneUser.email}</td>
              <td>{oneUser.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

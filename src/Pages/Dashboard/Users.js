import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery(["users"], () =>
    fetch("http://localhost:5000/user", {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl mt-8">All Users {users.length}</h2>
      <div class="overflow-x-auto w-11/12 mt-8">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index) => <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
                ></UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

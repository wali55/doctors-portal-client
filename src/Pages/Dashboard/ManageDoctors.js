import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Shared/Loading";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const { data: doctors, isLoading, refetch } = useQuery(["doctors"], () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl mt-4">Manage Doctors: {doctors.length}</h2>
      <div class="overflow-x-auto mt-6 w-11/12">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                doctors.map((doctor, index) => <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
                ></DoctorRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;

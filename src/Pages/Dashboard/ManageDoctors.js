import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deletingDoctors, serDeletingDoctors] = useState(null);

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery(["doctors"], () =>
    fetch("https://doctors-portal-server-v36k.onrender.com/doctor", {
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
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
                serDeletingDoctors={serDeletingDoctors}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctors && (
        <DeleteConfirmModal
          deletingDoctors={deletingDoctors}
          refetch={refetch}
          serDeletingDoctors={serDeletingDoctors}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageDoctors;

import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({
  deletingDoctors,
  refetch,
  serDeletingDoctors,
}) => {
  const { name, email } = deletingDoctors;

  const handleDelete = () => {
    fetch(`https://doctors-portal-server-v36k.onrender.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} is deleted.`);
          serDeletingDoctors(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}!
          </h3>
          <p class="py-4">Once deleted cannot be revived!</p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;

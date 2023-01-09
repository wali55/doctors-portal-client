const { useState, useEffect } = require("react");

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);

  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;

    fetch(`https://doctors-portal-server-v36k.onrender.com/admin/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setAdminLoading(false);
      });
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;

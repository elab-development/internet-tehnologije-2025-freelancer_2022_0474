import { useEffect, useState } from "react";
import api from "../api/api";

const AdminDashboard = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchNewsletter = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await api.get("/admin/newsletter", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("ADMIN NEWSLETTER:", res.data);
        setEmails(res.data);
      } catch (err) {
        console.error("Admin error:", err);
      }
    };

    fetchNewsletter();
  }, []);

  const [users, setUsers] = useState([]);

    useEffect(() => {
    const fetchUsers = async () => {
        try {
        const token = localStorage.getItem("token");
        const res = await api.get("/admin/users", {
            headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
        } catch (err) {
        console.error("Admin error:", err);
        }
    };

    fetchUsers();
    }, []);

     const [contactMessages, setContactMessages] = useState([]);
        useEffect(() => {
    const fetchContactMessages  = async () => {
        try {
        const token = localStorage.getItem("token");
        const res = await api.get("/admin/contact", {
            headers: { Authorization: `Bearer ${token}` },
        });
        setContactMessages(res.data);
        } catch (err) {
        console.error("Admin error:", err);
        }
    };  
    fetchContactMessages ();
    }, []);
  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

      <h2>Newsletter subscribers</h2>

      {emails.length === 0 ? (
        <p>No subscribers</p>
      ) : (
        <ul>
          {emails.map((item) => (
            <li key={item.id}>{item.email}</li>
          ))}
        </ul>
      )}
        <h2>Registered Users</h2>
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.firstname} {user.lastname} - {user.email} ({user.role})
              </li>
            ))}
          </ul>
        )}
        <h2>Contact Messages</h2>
        {contactMessages.length === 0 ? (
          <p>No contact messages found</p>
        ) : (
          <ul>
            {contactMessages.map((message) => (
              <li key={message.id}>
                {message.email}: {message.message}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default AdminDashboard;

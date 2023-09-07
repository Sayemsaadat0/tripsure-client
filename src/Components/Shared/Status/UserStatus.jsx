 import { useEffect, useState } from "react";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";

const UserStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setStatus(true);
      console.log("onlien");
    };
    const handleOffline = () => {
      setStatus(false);
      console.log("offlien");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      <p>{status.length}</p>
      {status ? (
        <h2 className="flex items-center gap-1 text-green-600">
          <HiOutlineStatusOnline size={24} /> <span className="font-semibold">Online</span>
        </h2>
      ) : (
        <h2 className="flex items-center gap-1 text-neutral-700">
          {" "}
          <HiOutlineStatusOffline size={24} /> <span className="font-semibold">Offline</span>
        </h2>
      )}
    </div>
  );
};

export default UserStatus;
 

/* 

import React, { useEffect, useState } from "react";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";

const UserStatus = () => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [offlineUsers, setOfflineUsers] = useState([]);

  useEffect(() => {
    const handleOnline = () => {
   
      const userId = "user123"; 
      if (!onlineUsers.includes(userId)) {
        setOnlineUsers((prevOnlineUsers) => [...prevOnlineUsers, userId]);
      }
    };

    const handleOffline = () => {
    
      const userId = "user123"; 
      if (onlineUsers.includes(userId)) {
        setOnlineUsers((prevOnlineUsers) =>
          prevOnlineUsers.filter((user) => user !== userId)
        );
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [onlineUsers]);

  useEffect(() => {
  
    const totalUsers = [];
    const offlineUsersList = totalUsers.filter(
      (user) => !onlineUsers.includes(user)
    );
    setOfflineUsers(offlineUsersList);
  }, [onlineUsers]);

  return (
    <div>
      <p>Online Users: {onlineUsers.length}</p>
    </div>
  );
};

export default UserStatus; */
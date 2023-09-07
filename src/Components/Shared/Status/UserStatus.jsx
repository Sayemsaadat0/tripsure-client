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

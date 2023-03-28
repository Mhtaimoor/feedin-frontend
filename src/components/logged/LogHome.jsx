import { React, useEffect, useState } from "react";
import LogNavbar from "./LogNavbar";
import userService from "../../services/UserService";

export default function LogHome(props) {
  // console.log(props);

  const [username, setUsername] = useState("");

  const [id, setId] = useState(null);

  useEffect(() => {
    // get logged in user
    const user = userService.getCurrentUser();
    if (user) {
      setId(user.id);
      setUsername(user.username);
    }
  }, []);
  return (
    <>
      <div>
        <LogNavbar username={username} id={id} />
      </div>
    </>
  );
}

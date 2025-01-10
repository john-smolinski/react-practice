import { createContext } from "react";

const UserInfoContext = createContext({
  username: "Guest",
  isAdmin: "false",
});

export default UserInfoContext;

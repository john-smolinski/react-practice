import "./App.css";
import BlogPage from "./components/BlogPage";
import UserInfoContext from "./context/UserInfoContext";
import { useContext } from "react";

export default function App() {
  const userInfo = { username: "Admin", isAdmin: true };
  return (
    <div>
      <UserInfoContext.Provider value={userInfo}>
        <BlogPage></BlogPage>
      </UserInfoContext.Provider>
    </div>
  );
}

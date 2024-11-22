import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PrivateRoutes from "./privatesRoutes";
import Profile from "../pages/Profile";
import UserLikes from "../pages/UserLikes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/Home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/userLikes' element={<UserLikes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
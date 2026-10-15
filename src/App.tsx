import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile";
import LoginAccount from "./screens/Login-Account";
import CreateAccount from "./screens/Create-Account";
import Layout from "./screens/Layout";

// 전역변수,함수
// 페이지 분배를 위한 router 생성
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Settings",
        element: <Settings />,
      },
    ]
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "/loginAccount",
    element: <LoginAccount />,
  }

]);

function App() {
  return (
    <div style={{height: "100vh"}}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
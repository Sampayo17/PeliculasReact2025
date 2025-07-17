import { Outlet } from "react-router-dom";
import Menu from "./Utils/Menu";

export default function MainLayout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

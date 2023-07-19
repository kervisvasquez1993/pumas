import { Outlet } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
export const WrapperLayout = () => {
  
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

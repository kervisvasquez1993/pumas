import { useContext } from "react";
import MenuContext from "../Context/MenuProvider";

export const useMenu = () => {
  return useContext(MenuContext);
};
export default useMenu;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuProvider } from "./Context/MenuProvider";
import Test from "./components/Test";

const App = () => {
  return (
    <BrowserRouter>
      <MenuProvider>
        <Test />
      </MenuProvider>
    </BrowserRouter>
  );
};

export default App;

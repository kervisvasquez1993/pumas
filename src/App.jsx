import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "./components/Test";
import { WrapperLayout } from "./Layouts/Wrapper";
import { useMenu } from "./hooks/useMenu";

const App = () => {
  const { locale } = useMenu();
  console.log(locale)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WrapperLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

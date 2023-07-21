import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useMenu } from "./hooks/useMenu";
import AllPageComponents from "./components/Pages/AllPageComponents";
import ListLang from "./components/Views/ListLang";
import IndexPageComponents from "./components/Pages/IndexPageComponents";
import { WrapperLayout } from "./Layouts/Wrapper";

const App = () => {
  const { menuData } = useMenu();
  console.log(menuData);

  return (
    <BrowserRouter>
      <Routes>
        {menuData.map((menu) => (
          <Route key={menu.lang} path={`${menu.lang}`} element={<WrapperLayout />}>
            {menu.data.map((element) => {
              return (
                <Route
                  key={element.id}
                  path={`${element.attributes.slug}`}
                  element={<AllPageComponents/>}
                />
              );
            })}
          </Route>
        ))}
        <Route path="/" element={<IndexPageComponents/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

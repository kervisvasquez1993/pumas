import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useMenu } from "./hooks/useMenu";

const App = () => {
  const { menuData } = useMenu();
  console.log(menuData);

  return (
    <BrowserRouter>
      <nav>
        <ul>
          {menuData.map((menu) => (
            <li key={menu.lang}>
              <Link to={`/${menu.lang}`}>{menu.lang}</Link>
              <ul>
                {menu.data.map((element) => (
                  <li key={element.id}>
                    <Link to={`/${menu.lang}/${element.attributes.slug}`}>
                      {element.attributes.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      <Routes>
        {menuData.map((menu) => (
          <Route
            key={menu.lang}
            path={`/${menu.lang}`}
            element={<h1>{menu.nombre}</h1>}
          >
            {menu.data.map((element) => (
              <Route
                key={element.id}
                path={`${element.attributes.slug}`}
                element={<h2>{element.attributes.nombre}</h2>}
              />
            ))}
          </Route>
        ))}
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

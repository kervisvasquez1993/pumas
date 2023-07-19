import React, { createContext, useEffect, useState } from "react";
import { ApiBackend } from "../apis/ApiBackend";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState([]);
  const [menu, setMenu] = useState([]);

  const lang = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return ApiBackend("api/i18n/locales", config);
  };
  const getMenus = (languaje) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        languaje,
      },
    };
    return ApiBackend("api/menus", config);
  };

  useEffect(() => {
    (async () => {
      try {
        const [menusResponse, langResponse] = await Promise.all([
          getMenus(locale),
          lang(),
        ]);
        const menusData = menusResponse.data;
        const langData = langResponse.data;

        console.log(menusData, "menu");
        console.log(langData, "lang");
        setMenu(data.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, []);
  return (
    <MenuContext.Provider value={{ loading, menu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

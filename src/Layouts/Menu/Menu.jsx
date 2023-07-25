import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClockIcons from "../../components/Icons/Clock";
import ItemMenu from "../../components/Section/views/ItemMenu";
import useMenu from "../../hooks/useMenu";
import styles from "./style.module.css";

const Menu = () => {
  const navigate = useNavigate();
  const { menuData } = useMenu();
  const [activeLang, setActiveLang] = useState("es"); // Por defecto, es el idioma 'es'
  const activeLangObj = menuData.find((item) => item.lang === activeLang);
  const [activeData, setActiveData] = useState(activeLangObj?.data || []);

  const handleLangClick = (lang, data) => {
    setActiveLang(lang);
    setActiveData(data);
    navigate(`/${lang}`); // Navegar a la ruta del idioma seleccionado
  };

  return (
    <nav className={`flex justify-between items-center ${styles.menuContainer}`}>
      <div className={`px-5 ${styles.logoSection}`}>
        {/* <img src="/images/LogoBlanco.png" alt="Logo" /> */}
      </div>
      <section className={styles.wrapperMenu}>
        <div className={styles.hour}>
          <ClockIcons />
          <p className={styles.hourClockText}>Hasta las 4:00 PM</p>
        </div>
        <div className="">
          {menuData.map((element) => (
            <button
              key={element.lang}
              className={activeLang === element.lang ? "active" : ""}
              onClick={() => handleLangClick(element.lang, element.data)}
            >
              {element.lang}
            </button>
          ))}
        </div>
      </section>

      <div className={styles.menuItems}>
        <ItemMenu items={activeData} />
      </div>
    </nav>
  );
};

export default Menu;

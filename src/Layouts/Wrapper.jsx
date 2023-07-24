import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
import Head from "./Head";
import style from "./style.module.css"
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";

export const WrapperLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Título de tu página</title>
        <meta name="description" content="Descripción de tu página" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={`${style.headerMenu}`}>
        {isMobile ? (
          <MobileMenu
            logo="/images/LogoBlanco.png"
            navigationItems={"hola"}
          />
        ) : (
          <Menu items={"hola"} />
        )}
      </header>
      <main className="maxWidthBody">
        <Outlet />
      </main>
      <Footer items={""} />
    </>
  );
};

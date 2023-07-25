import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Item = ({ item }) => {
  if (item.attributes.nombre === "Apoyanos") {
    return (
      <li
        key={item.attributes.slug} // Usamos item.id como clave única
        className="backgroundPrimary text-center fontMenu btnPrimaryMenu font-bold py-2 rounded"
      >
        <Link to={item.attributes.slug} className={style.menuItem}>
          {item.attributes.nombre}
        </Link>
      </li>
    );
  }
  return (
    <li
      key={item.attributes.slug} // Usamos item.attributes.name como clave única
      className="px-2 py-2 text-center rounded fontMenu"
    >
      <Link to={item.url} className={style.menuItem}>
        {item.attributes.nombre}
      </Link>
    </li>
  );
};

export default Item;

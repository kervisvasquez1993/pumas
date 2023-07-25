import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import Item from "./Item";

const ItemMenu = ({ items }) => {
  // console.log(items, "items");
  return (
    <>
      {items && (
        <ul className={`${style.menuList} flex my-10`}>
          {items.map((item) => {
            console.log(item.attributes.nombre);
            return <Item item={item} />;
          })}
        </ul>
      )}
    </>
  );
};

export default ItemMenu;

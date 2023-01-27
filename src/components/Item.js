import React from "react";
import style from "./Item.module.css";

function Item({ photo, id }) {
  // console.log(props.photo);
  // console.log(props.text);
  return (
    // <div className={style.textnavy}>
    <div>
      {/* <h1>id:{id}</h1>
      <img src={photo} /> */}
      {/* <p>{photo.id}</p>
      <p>{photo.title}</p>
      <img classname="image" src={photo.thumbnailUrl} /> */}
    </div>
  );
}

export default Item;
// rfce 입력 => 자동완성

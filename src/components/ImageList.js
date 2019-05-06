// 受け取った URL を元に img 要素を作成するコンポーネント

import React from "react";

const ImageList = ({ urlList }) => {
  const list = urlList.map(url => {
    return (
      <li className="item" key={url}>
        <img className="image" src={url} alt="" />
      </li>
    );
  });
  return <ul className="list">{list}</ul>;
};

export default ImageList;

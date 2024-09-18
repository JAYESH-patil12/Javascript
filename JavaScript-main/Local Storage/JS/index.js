import { getElement } from "F:\JavaScript-main\Local Storage\Components\Helper.js";
import { navbar_Components, navbar_Styles } from "F:\JavaScript-main\Local Storage\Components\index.html";

const navbar = () => {
  const navbar = getElement("navbar");
  navbar.innerHTML = navbar_Components();

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = navbar_Styles();
    document.head.appendChild(styleTag);
  });
};

navbar();

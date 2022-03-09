import { createApp } from "vue";
import App from "./App.vue";

console.log("hello webpack");

// import imgEg from "./image/u=3646704477,823964487&fm=26&fmt=auto.webp";

// import "./iconfont/iconfont.css";   //有bug
import "./css/index.less";

// const img: any = document.querySelector(".img");
// img.src = "./image/u=3646704477,823964487&fm=26&fmt=auto.webp";

createApp(App).mount("#app");

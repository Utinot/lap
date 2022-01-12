import Navigo from "navigo";
import HomePage from "./pages/home";

const router = new Navigo("/");
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        console.log("Home Page");
        print(HomePage.render());
    },
    "/about": () => {
        console.log("About Page");
        print("About Page");
    },
    "/product": () => {

    },
});
import { getRando, getWell } from "../../utils_lib/utils.js";

document.querySelector("p").textContent = `${getRando()} ${getWell()}`;

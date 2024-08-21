import { getMatrix } from "./helpers/getMatrix.js";
import { setPositionItems } from "./helpers/setPositionItems.js";
import { shuffleArray } from "./helpers/shuffleArray.js";
import { buttonsEvents } from "./events/buttonsEvents..js";
import { clickEvents } from "./events/clickEvents.js";



export const containerNode = document.getElementById("fifteen");
export const itemNodes = Array.from(containerNode.querySelectorAll(".item"));
export const countItems = 16;

if (itemNodes.length !== 16) {
  throw new Error(`Must be ${countItems} items in HTML`);
}

/** Position */
itemNodes[countItems - 1].style.display = "none";
let matrix = getMatrix(itemNodes.map((item) => Number(item.dataset.matrixId)));

setPositionItems(matrix);

/** --------------------------------------------EVENTS----------------------------------- */

/** Shuffle */
document.getElementById("shuffle").addEventListener("click", () => {
    const shuffledArray = shuffleArray(matrix.flat());
    matrix = getMatrix(shuffledArray);
    setPositionItems(matrix);
});

/** Change position by click*/
export const blankNumber = 16;
containerNode.addEventListener("click", (event) => clickEvents(event, matrix));

/** Change position by keydown */
window.addEventListener("keydown", (event)=>buttonsEvents(event, matrix));





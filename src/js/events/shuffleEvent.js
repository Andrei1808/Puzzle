import { shuffleArray } from "../helpers/shuffleArray.js";
import { getMatrix } from "../helpers/getMatrix.js";
import { setPositionItems } from "../helpers/setPositionItems.js";

export function shuffleEvent(matrix){
  const shuffledArray = shuffleArray(matrix.flat());
  matrix = getMatrix(shuffledArray);
  setPositionItems(matrix);
} 
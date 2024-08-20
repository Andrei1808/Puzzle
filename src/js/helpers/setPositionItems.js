import { itemNodes } from "../script.js";
import { setNodesStyles } from "./setNodesStyle.js";

export function setPositionItems(matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const value = matrix[y][x];
      const node = itemNodes[value - 1];
      setNodesStyles(node, x, y);
    }
  }
}

import { isWon } from "./isWon.js";
import { addWonClass } from "./addWonClass.js";

export function swap(coords1, coords2, matrix) {
  const coords1Number = matrix[coords1.y][coords1.x];
  matrix[coords1.y][coords1.x] = matrix[coords2.y][coords2.x];
  matrix[coords2.y][coords2.x] = coords1Number;

  if (isWon(matrix)) {
    addWonClass();
  }
}

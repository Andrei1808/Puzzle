import { findCoordinatesByNumber } from "../helpers/findCoordinatesByNumber.js";
import { swap } from "../helpers/swap.js";
import { setPositionItems } from "../helpers/setPositionItems.js";
import { blankNumber } from "../script.js";

export function buttonsEvents(event, matrix) {

  if (!event.key.includes("Arrow")) {
    return;
  }

  const blankCoords = findCoordinatesByNumber(blankNumber, matrix);
  const buttonCoords = {
    x: blankCoords.x,
    y: blankCoords.y,
  };
  const direction = event.key.split("Arrow")[1].toLowerCase();
  const maxIndexMatrix = matrix.length;

  switch (direction) {
    case "up":
      buttonCoords.y += 1;
      break;
    case "down":
      buttonCoords.y -= 1;
      break;
    case "left":
      buttonCoords.x += 1;
      break;
    case "right":
      buttonCoords.x -= 1;
      break;
  }

  if (
    buttonCoords.y >= maxIndexMatrix ||
    buttonCoords.y < 0 ||
    buttonCoords.x >= maxIndexMatrix ||
    buttonCoords.x < 0
  ) {
    return;
  }
  swap(blankCoords, buttonCoords, matrix);
  setPositionItems(matrix);
}

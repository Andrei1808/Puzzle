import { findCoordinatesByNumber } from "../helpers/findCoordinatesByNumber.js";
import { swap } from "../helpers/swap.js";
import { setPositionItems } from "../helpers/setPositionItems.js";
import { blankNumber } from "../script.js";
import { isValidForSwap } from "../helpers/iiValidForSwap.js";

export function clickEvents(event, matrix) {
  const buttonNode = event.target.closest("button");
  if (!buttonNode) {
    return;
  }

  const butonNumber = Number(buttonNode.dataset.matrixId);
  const buttonCoords = findCoordinatesByNumber(butonNumber, matrix);
  const blankCoords = findCoordinatesByNumber(blankNumber, matrix);
  const isValid = isValidForSwap(buttonCoords, blankCoords);

  if (isValid) {
    swap(blankCoords, buttonCoords, matrix);
    setPositionItems(matrix);
  }
}

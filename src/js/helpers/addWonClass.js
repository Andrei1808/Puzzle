import { containerNode } from "../script.js";

const WonClass = "fifteenWon";
export function addWonClass() {
  setTimeout(() => {
    containerNode.classList.add(WonClass);

    setTimeout(() => {
      containerNode.classList.remove(WonClass);
    }, 1000);
  }, 200);
}

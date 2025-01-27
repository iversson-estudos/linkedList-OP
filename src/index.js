import "./styles.css";
import { LinkedList } from "./classes/linkedList";

const newList = new LinkedList();
newList.append(4);
newList.append(3);
newList.append(5);
newList.append(7);
newList.append(1);
newList.append(9);
newList.append(0);
newList.append(0);

console.log(newList.size());
newList.pop();
newList.pop();
newList.pop();
console.log(newList.size());

console.log(newList);

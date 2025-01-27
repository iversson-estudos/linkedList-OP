import "./styles.css";
import { LinkedList } from "./classes/linkedList";

const newList = new LinkedList();
newList.append(4);
newList.append(5);
console.log(newList.toString());

newList.insertAt(4540, 1);

console.log(newList);

console.log(newList.toString());

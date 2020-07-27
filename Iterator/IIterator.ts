//Purpose: The iterator interface. Utilizes the MenuItem class. Used to encapsulate traversal of a collection without giving away the type 
//         of the collection(aka, we can traverse an arraylist without the client ever knowing it is an arraylist using this pattern). 
//How it works: 
import MenuItem from './MenuItem';

export default interface Iterator {
  next(): MenuItem;
  hasNext(): boolean;
  remove(): MenuItem;
} 
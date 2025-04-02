import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userID) {
    let items = [];
    const q = query(
        collection(db, "users", userID, "items"),
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        items.push({ id: doc.id, ...doc.data() });
      });
      console.log("Items: ", items);
      return items;

}

export async function addItem(userID, itemToAdd) {
    const docRef = await addDoc(collection(db, "users", userID, "items"), {
        name: itemToAdd.name,
        quantity: itemToAdd.quantity,
        category: itemToAdd.category,
      });
      console.log("Item is created with ID: ", docRef.id);
      return docRef.id;
}
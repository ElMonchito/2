import { collection, getDocs, query, doc } from "firebase/firestore";
import { addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import firebase, { db } from './firebase';
//import { getDoc, setDoc, where } from "firebase/firestore";

//CREAR     //Guardar
export const fnCrear = (name) => { 
  addDoc(collection(db, 'personas'), { name });         
}
 
//READ      //Reportes
export const fnRead = async () => {
  const result = await getDocs(query(collection(db, 'personas')));
  return result;
}

//UPDATE    //Actualizar
export const fnUpdate = async (id, name) => {
  //console.log(id, name);
  await updateDoc(doc(db, 'personas', id), { name });
}

//DELETE    //Eliminar
export const fnDelete = async (id) => { 
  await deleteDoc(doc(db, 'personas', id));
}


//ALTA
//addDoc(collection(db, 'items'), obj);         //obj = { name } Ejemplo

//CONSULTA
//const result = await getDocs(query(collection(db, 'items')));
//    return getArrayFromCollection(result);

//REMOVE
//await deleteDoc(doc(collection(db, 'items'), id));
//await deleteDoc(doc(db, 'items', id));    //¿Es igual a anterior?

//UPDATE
//await updateDoc(doc(collection(db, 'items'), id), obj);
//await updateDoc(doc(db, 'items', id), obj);    //¿Es igual a anterior?
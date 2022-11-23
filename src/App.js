import { collection, getDocs, query, doc, deleteDoc, where, onSnapshot} from "firebase/firestore";
import { useEffect, useState } from "react";
import AppForm from "./componente/AppForm";
import {db} from "./componente/firebase";

function App() {  
  ///////////////////////////////////////////////////////////////////////
  ////////// READ - fnRead - LECTURA A BD ///////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  const [idActual, setIdActual] = useState("");
  const [docsBD, setDocsBD] = useState([]);
  const [orden, setOrden] = useState(0);
  const i=1;
  //console.log(docsBD);
useEffect (( )=> {
  const xColeccionConQuery = query(collection(db, "persona"), where("nombre","!=",""));
  const unsubscribe = onSnapshot(xColeccionConQuery, (xDatosBD)=>{
    const xDoc =[];
    xDatosBD.forEach((doc) =>{
      xDoc.push({id: doc.id, ...doc.data()});
    });
    setDocsBD(xDoc);
  });
},[idActual]);

  ///////////////////////////////////////////////////////////////////////
  ////////// DELETE - fnDelete - Eliminar registros /////////////////////
  ///////////////////////////////////////////////////////////////////////
  

  const fnDelete = async(xId) => {
    if(window.confirm("Confirma para eliminar Usuario")){
      await deleteDoc(doc(db, 'persona', xId));
      console.log("Se elimino..."+xId);
    }
  };

  return (
    <div className="container text-center">
      <div className="container text-center"></div>
      <h1>Formulario</h1>
      <h3>READ / DELETE</h3>
      <AppForm {...{idActual, setIdActual}} />
      {
        docsBD.map((p) => 
        <p key={p.id}> 
        N.{i} - {p.nombre} ---
        <button onClick={() => fnDelete(p.id)}>Eliminar</button>
        ---
        <button onClick={() => setIdActual(p.id)}>Actualizar</button>
        <br></br>
        </p>)
      }      
    </div>
  );
}

export default App;
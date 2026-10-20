//Aca separamos los servicios(se relaciona con la colleccion de products)

import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

//tomamos referencia de la coleccion y de los documentos
const productsRef = collection(db,"products")//parametros:base de datos y nombre de la coleccion

// TRAER PRODUCTOS

export const getProducts = async () =>{

    try{

        //el snapshot no me da el objeto de productos directo, sino un tipo especial de firestore, tiene mucha informacion
        const snapshot = await getDocs(productsRef) //nos trae todos los documentos de la coleccion

        // cada doc tiene los datos que configure
        //El metodo data() me da el objeto de productos
        // ejemplo: {id:123, data: {name:"agus", precio: 12..}}
        const productsFormat = snapshot.docs.map((doc)=>{

            return {id:doc.id, ...doc.data()}
        })

        return productsFormat

    }catch(error){
        console.log("error al traer productos", error)
        throw error
    }
}

export const getProductByID = async(id)=>{

    try{
        // Creamos la referencia al documento
        const productRef = doc(productsRef,id)

        const snapshot = await getDoc(productRef)

        if(snapshot.exists()){

            const product = {id:snapshot.id,...snapshot.data()} 
            return product
        }else{
            return null
        }

    }catch(error){
        console.log("error al traer el producto especifico",error)
        throw error
    }

}

export const createProduct = async(productData)=>{
    try{
        //con el addDoc les pasamos los parametros: Base de datos al que me quiero conectar y que es lo que quiero agregar
        const docRef = await addDoc(productsRef, productData)

        //Obtengo el id que me genero firebase
        return docRef.id

    }catch(error){
        console.log(error)
        throw error
    }


}
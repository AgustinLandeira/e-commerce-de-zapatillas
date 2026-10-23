export const validateProducts = (product)=>{

    // - --------------------- REVISAR LOS CAMPOS ---------------------------------------

    const errors = {}

    // Hacemos las validaciones para ver si mi producto tiene el formato correcto

    if(!product.nombre.trim()){
        errors.nombre = "EL nombre es obligatorio"
    }

    if(!product.marca.trim()){
        errors.marca = "La marca es obligatorio"
    }

    if(!product.precio || product.precio <=0){
        errors.precio = "El precio debe ser mayor a 0"
    }

    if(!product.stock || product.stock <=0){
        errors.stock = "El stock debe ser mayor a 0"
    }

    // if(!product.categoria.trim()){
    //     errors.categoria = "La categoria es obligatoria"
    // }

    if(!product.imagen){
        errors.imagen = "Debes seleccionar una imagen"
    }

    return errors

}
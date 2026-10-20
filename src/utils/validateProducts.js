export const validateProducts = (product)=>{

    // - --------------------- REVISAR LOS CAMPOS ---------------------------------------

    const errors = {}

    // Hacemos las validaciones para ver si mi producto tiene el formato correcto

    if(!product.nombre.trim()){
        errors.nombre = "EL nombre es obligatorio"
    }

    if(!product.precio || product.precio <=0){
        errors.precio = "El precio debe ser mayor a 0"
    }

    if(!product.descripcion.trim()){
        errors.descripcion = "La descripcion es obligatoria"
    }

    if(!product.categoria.trim()){
        errors.categoria = "La categoria es obligatoria"
    }

    if(!product.imagen){
        errors.imagen = "Debes seleccionar una imagen"
    }

    return errors

}
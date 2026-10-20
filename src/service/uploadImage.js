const IMGBB_API_KEY = '771336617f09ef3d7d352f80b54b53de'

const ENDPOINT = 'https://api.imgbb.com/1/upload'

export const uploadImage = async(file)=>{

    const formData = new FormData()
    formData.append("image",file)

    try{
        //Realizamos una petición HTTP asíncrona para subir una imagen o archivo a un servidor
        // Hacemos la peticion a la api, el metodo va a ser POST
        const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`,{
            method:"POST",
            body:formData
        })

        const data = await response.json();

        if(!data.success){
            throw new Error("Error al subir la imagen")
        }

        //retornamos la url de la imagen que se cargo en IMGBB
        return data.data.url
    }catch(error){

        console.log(error)
        throw error
    }

}
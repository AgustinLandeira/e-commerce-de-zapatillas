export const ProductFormUI = ({product, errors, loading, onChange, onFileChange, onSubmit})=>{
    // - --------------------- REVISAR LOS CAMPOS ---------------------------------------

    return <section>

        <form onSubmit={onSubmit}>

            <h2>Agregar Nuevo producto</h2>

            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={product.nombre} onChange={onChange}/>

                {errors.nombre && <p>{errors.nombre}</p>}
            </div>

            <div>
                <label>Imagen: </label>
                <input type="file" accept="image/*" onChange={onFileChange} />
                {errors.imagen && <p>{errors.imagen}</p> }
            </div>

            <button type="submit" disabled={loading}>{loading ? "Guardando... : ":"Guardar"}</button>
        </form>
    </section>
}
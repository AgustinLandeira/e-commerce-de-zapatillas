export const ProductFormUI = ({product, errors, loading, onChange, onFileChange, onSubmit})=>{

    return<section className="product-form-section">

        <form className="product-form" onSubmit={onSubmit}>

            <h2 className="product-form-title">Agregar Nuevo producto</h2>

            <div className="product-form-group">
                <label className="product-form-label">Nombre:</label>
                <input className="product-form-input" type="text" name="nombre" value={product.nombre} onChange={onChange}/>

                {errors.nombre && <p className="product-form-error">{errors.nombre}</p>}
            </div>

            <div className="product-form-group">
                <label className="product-form-label">Marca:</label>
                <input className="product-form-input" type="text" name="marca" value={product.marca} onChange={onChange}/>

                {errors.marca && <p className="product-form-error">{errors.marca}</p>}
            </div>

            <div className="product-form-group">
                <label className="product-form-label">precio:</label>
                <input className="product-form-input" type="number" name="precio" value={product.precio} onChange={onChange}/>

                {errors.precio && <p className="product-form-error">{errors.precio}</p>}
            </div>

            <div className="product-form-group">
                <label className="product-form-label">Stock:</label>
                <input className="product-form-input" type="number" name="stock" value={product.stock} onChange={onChange}/>

                {errors.stock && <p className="product-form-error">{errors.stock}</p>}
            </div>

            <div className="product-form-group">
                <label className="product-form-label">Imagen: </label>
                <input className="product-form-file" type="file" accept="image/*" onChange={onFileChange} />
                {errors.imagen && <p className="product-form-error">{errors.imagen}</p> }
            </div>

            <button className="product-form-button" type="submit" disabled={loading}>{loading ? "Guardando...":"Guardar"}</button>
        </form>
    </section>
}
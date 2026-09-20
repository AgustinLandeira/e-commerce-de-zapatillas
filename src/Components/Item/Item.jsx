import './Item.css'

export const Item = ({nombre,precio,marca,stock,imagen,children})=>{

    return (
        <article className="producto">

            <div className="producto-imagen">
                <img src={imagen} alt={nombre} />
            </div>

            <div className="producto-info">

                <span className="producto-marca">
                    {marca}
                </span>

                <h2 className="producto-nombre">
                    Nombre: {nombre}
                </h2>

                <p className="producto-precio">
                    Precio: ${precio.toLocaleString("es-AR")}
                </p>

                <p className="producto-stock disponible">
                    Stock: {stock}
                </p>

                {children}

            </div>

        </article>
    )

}
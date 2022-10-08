import { Favoritos } from "./favoritos"
import { Farmacias } from "./Farmacias"
import { Restaurantes } from "./restaurantes"
import { Supermercados } from "./supermercados"
import { Carrito } from "./Carrito"
import { Filtro } from "./ComponenteFiltro"
import { ComponentePromo } from "./ComponentePromo"

export const Componentecat=({onComponentecat}) =>{

    return(
        <>

        <Favoritos onFavoritos={Favoritos}/>
        <Farmacias onFarmacias={Farmacias}/>
        <Restaurantes onRestaurantes={Restaurantes}/>
        <Supermercados onSupermercados={Supermercados}/>
        <Carrito onCarrito={Carrito}/>
        <Filtro onFiltro={Filtro}/>
        <ComponentePromo onComponentePromo={ComponentePromo}/>


        </>
    )
    
}
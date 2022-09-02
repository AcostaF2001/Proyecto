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

        <Favoritos onFavoritos={onFavoritos}/>
        <Farmacias onFarmacias={onFarmacias}/>
        <Restaurantes onRestaurantes={onRestaurantes}/>
        <Supermercados onSupermercados={onSupermercados}/>
        <Carrito onCarrito={onCarrito}/>
        <Filtro onFiltro={onFiltro}/>
        <ComponentePromo onComponentePromo={onComponentePromo}/>


        </>
    )
    
}
import { GlobalContext } from "context/ContextoGlobal";
import { useContext } from "react"


function useModalNuevaCategoria() {

    const{stateCategorias, dispatchCategorias} = useContext(GlobalContext);
    //const { stateVideos, dispatchVideos } = useContext(GlobalContext);


    const abrirModalCategorias = (abrir) => {
        dispatchCategorias({ type: 'SET_NUEVA_CATEGORIA' , payload: abrir })
    }


    const cerrarModalCategorias = () => {
        dispatchCategorias({ type: 'SET_NUEVA_CATEGORIA', payload: null })
    }

    const nuevaCategoria=(datos)=>{
        console.log(datos)
        dispatchCategorias({type: 'SET_ALTA_NUEVA_CATEGORIA', payload:datos})
    }

    const estaAbiertoModalCategorias = stateCategorias.modalAbierto;
    const categorias = stateCategorias.categorias;
    return { nuevaCategoria,categorias,estaAbiertoModalCategorias, abrirModalCategorias, cerrarModalCategorias }
}

export default useModalNuevaCategoria;
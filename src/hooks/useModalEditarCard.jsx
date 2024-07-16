import { GlobalContext } from "context/ContextoGlobal";
import { useContext } from "react"


function useModalEditarCard() {
    const { stateVideos, dispatchVideos } = useContext(GlobalContext);

    const abrirModalVideos = (idCard) => {
       // console.log(" Abrir Modal ",idCard)
        dispatchVideos({ type: 'SET_VIDEO_SELECCIONADO', payload: idCard })
    }


    const cerrarModalVideos = () => {
        dispatchVideos({ type: 'SET_VIDEO_SELECCIONADO', payload: null })
    }

    const nuevoVideo = (video) => {
        dispatchVideos({ type: 'SET_ALTA_NUEVO_VIDEO', payload: video })

    }
    const cardVideoModificado = (idvideo) => {
        dispatchVideos({ type: 'SET_MODIFICAR_VIDEO', payload: idvideo })
    }

    const eliminarVideo = (idvideo) => {
        console.log("Eliminar Video ",idvideo)
        dispatchVideos({ type: 'SET_ELIMINAR_VIDEO', payload: idvideo })
    }

    const videoSeleccionado = stateVideos.videoSeleccionado;
    const videos= stateVideos.videos;
    const estaAbiertoModal = stateVideos.modalAbierto;

    return {cardVideoModificado, nuevoVideo,videos, 
        videoSeleccionado, estaAbiertoModal, abrirModalVideos, 
        cerrarModalVideos,eliminarVideo }
}

export default useModalEditarCard;
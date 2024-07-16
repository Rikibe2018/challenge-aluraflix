import { GlobalContext } from "context/ContextoGlobal";
import { useContext } from "react"


function useModalZoomVideo() {
    const { stateVideos, dispatchVideos } = useContext(GlobalContext);

    const abrirModalZoom = (idCard,url) => {
        console.log(" Abrir ZOMM Modal ",idCard, url)
        dispatchVideos({ type: 'SET_VIDEO_ZOOM', payload: {idCard:idCard,url:url} })
    }

    const cerrarModalZoom = () => {
        dispatchVideos({ type: 'SET_VIDEO_ZOOM', payload:{idCard:null, url:null}})
    }

    const estaAbiertoModalZoom = stateVideos.modalAbiertoZoom;
    const videoZoom = stateVideos.videoZoom;
    const videoZoomUrl = stateVideos.videoZoomUrl;

    return ({ abrirModalZoom, cerrarModalZoom,estaAbiertoModalZoom, videoZoom, videoZoomUrl })
}


export default useModalZoomVideo
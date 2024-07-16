import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();


const initialStateVideos = {
    consulta: '',
    videos: [],
    videoSeleccionado: null,
    modalAbierto: false,
    modalAbiertoZoom: false,
    videoZoom: null,
    videoZoomUrl: null
}
const initialSatateCategorias = {
    consulta: '',
    categorias: [],
    modalAbierto: false,
}

const reducerVideos = (state, action) => {
    switch (action.type) {
        case 'SET_CONSULTA':
            return { ...state, consulta: action.payload };
        case 'SET_VIDEOS':
            //console.log("SET VIDEOS", action.payload)
            return { ...state, videos: action.payload };
        case 'SET_VIDEO_SELECCIONADO':
            return {
                ...state,
                videoSeleccionado: action.payload,
                modalAbierto: action.payload != null ? true : false
            };
        case 'AGREGAR_VIDEO':
            return { ...state, videos: [...state.videos, action.payload] }
        case 'SET_ALTA_NUEVO_VIDEO': {
            return { ...state, videos: [...state.videos, action.payload] };
        }
        case 'SET_MODIFICAR_VIDEO':
            const videosModificados = state.videos.map(video => video.id === action.payload.id ? action.payload : video)
            return { ...state, videos: videosModificados }

        case 'SET_VIDEO_ZOOM':
            const { idCard, url } = action.payload
            return {
                ...state,
                videoZoom: idCard,
                videoZoomUrl: url,
                modalAbiertoZoom: idCard != null ? true : false
            }

        case 'SET_ELIMINAR_VIDEO':
            console.log('ENTRO EN EL DISPACHE', action.payload)
            const videosFiltrados = state.videos.filter(video => video.id !== action.payload)
            return { ...state, videos: videosFiltrados }

        default:
            return state;
    }
};

const reducerCategorias = (state, action) => {
    switch (action.type) {
        case 'SET_CONSULTA':
            return { ...state, consulta: action.payload };
        case 'SET_CATEGORIAS':
            return { ...state, categorias: action.payload };
        case 'SET_NUEVA_CATEGORIA':
            // console.log('ENTRO EN EL DISPACHE', action.payload, state)
            return {
                ...state,
                modalAbierto: action.payload != null ? true : false
            };
        case 'SET_ALTA_NUEVA_CATEGORIA':
            //console.log('ACTION PAYLOAD', action.payload)
            return { ...state, categorias: [...state.categorias, action.payload] };

        default:
            return state;
    }

}

const GlobalContextProvider = ({ children }) => {

    const [stateVideos, dispatchVideos] = useReducer(reducerVideos, initialStateVideos);
    const [stateCategorias, dispatchCategorias] = useReducer(reducerCategorias, initialSatateCategorias);

    async function getVideos() {
      /*   const res = await fetch('http://localhost:3000/video');
        const data = await res.json();
        dispatchVideos({ type: 'SET_VIDEOS', payload: data }) */

        fetch("https://my-json-server.typicode.com/Rikibe2018/challenge-aluraflix-api/video")
            .then(response => (response.json()))
            .then(data => dispatchVideos({ type: 'SET_VIDEOS', payload: data }))
    }

    async function getCategorias() {
        /* const res = await fetch('http://localhost:3000/categoria');
        const data = await res.json();
        dispatchCategorias({ type: 'SET_CATEGORIAS', payload: data })
 */
        fetch("https://my-json-server.typicode.com/Rikibe2018/challenge-aluraflix-api/categoria")
        .then(response => (response.json()))
        .then(data => dispatchCategorias({ type: 'SET_CATEGORIAS', payload: data }))
    }

    useEffect(() => {
        getVideos();
        getCategorias();


    }, []);



    return (
        <GlobalContext.Provider value={{ stateVideos, dispatchVideos, stateCategorias, dispatchCategorias, }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
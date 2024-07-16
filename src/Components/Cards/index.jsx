import styles from './Cards.module.css';
import imagenEditar from './Editar.png';
import imagenBorrar from './Borrar.png';
import imagenExpandir from './expandir.png';

import useModalEditarCard from 'hooks/useModalEditarCard';
import useModalZoomVideo from 'hooks/useModalZoomVideo';


function Cards({ id, url, styleColor }) {

    const { abrirModalVideos , eliminarVideo} = useModalEditarCard();
    const {abrirModalZoom} = useModalZoomVideo();
    return (
        <section>
            <div className={styles.container} style={{border:`3px solid ${styleColor}`}}  >
                <iframe className={styles.box__video} 
                    style={{border:`3px solid ${styleColor}`}} 
                    src={url} 
                    allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture" 
                    >
                </iframe>

                <div className={styles.card__botones}>
                    <img src={imagenBorrar} alt="imagen borrar" onClick={() => { eliminarVideo(id) }} />
                    <img src={imagenEditar} alt="imagen editar" onClick={() => { abrirModalVideos(id) }} />
                    <img src={imagenExpandir} alt="imagen expandir" onClick={() => { abrirModalZoom(id,url) }} />

                </div>
            </div>


        </section>

    )
}

export default Cards;
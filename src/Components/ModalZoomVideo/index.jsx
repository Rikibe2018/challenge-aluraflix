import useModalZoomVideo from 'hooks/useModalZoomVideo';
import styles from './ModalZoomVideo.module.css';
import IconoCerrar from './cerrar.png'


function ModalZoomVideo() {
    const { cerrarModalZoom, estaAbiertoModalZoom, videoZoom, videoZoomUrl } = useModalZoomVideo();
    return (<>
        {estaAbiertoModalZoom && <>
            <div className={styles.modal_overlay} onClick={() => cerrarModalZoom()}>
                <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.botonSalir}>
                        <img src={IconoCerrar} alt="Icono de cerrar" onClick={() => { cerrarModalZoom() }} />
                    </div>
                    <div className={styles.iframe_container}>
                        <iframe
                            src={videoZoomUrl}
                            title="Video"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
        }
    </>
    );
}

export default ModalZoomVideo;
import styles from './ModalEditarVideo.module.css';
import useModalEditarCard from 'hooks/useModalEditarCard';
import IconoCerrar from './cerrar.png';
import Campo from 'Components/Campo';
import { useEffect, useState } from 'react';
import Boton from 'Components/Boton';
import useModalNuevaCategoria from 'hooks/useModalNuevaCategoria';

function ModalEditarVideo() {
    const { categorias } = useModalNuevaCategoria();

    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [URLVideo, setUrlVideo] = useState('')
    const [categoriaIn, setCategoriaIn] = useState('')
    const [id, setId] = useState('')

    //const categorias = ["Front End", "Back End", "UX y Diseño", "Data Science", "DevOps", "Mobile", "Innovación y Gestión"]

    const manejarCambio = (event) => {
        setCategoriaIn(event.target.value);
    };

    const { cardVideoModificado,
        videos, videoSeleccionado,
        estaAbiertoModal,
        abrirModalVideos,
        cerrarModalVideos } = useModalEditarCard();

    //console.log("Video Seleccionado", videoSeleccionado)

    useEffect(() => {
        const miVideoElejido = videos.find(video => video.id === videoSeleccionado)
        if (miVideoElejido) {

            setTitulo(miVideoElejido.titulo)
            setCategoriaIn(miVideoElejido.categoria)
            setDescripcion(miVideoElejido.descripcion)
            setUrlVideo(miVideoElejido.URLVideo)
            setId(miVideoElejido.id)

        }

    }, [videoSeleccionado])

    const manejarCambioTextArea = (e) => {
        setDescripcion(e.target.value);
      };

      const cierroModal = () => {
        setCategoriaIn('')
        setTitulo('')
        setDescripcion('')
        setUrlVideo('')
        setId('')
        cerrarModalVideos()
      }


    return <>
        {estaAbiertoModal && <>
            <div className={styles.container}>
                <dialog className={styles.dialogo} onClose={() => { cierroModal() }}>
                    <form action="dialog" className={styles.formulario}
                        onSubmit={(e) => {
                            e.preventDefault();
                            let datos = {
                                id,
                                titulo,
                                descripcion,
                                URLVideo,
                                categoria: categoriaIn
                            }
                            cardVideoModificado(datos);
                            cerrarModalVideos()

                        }}>
                        <div className={styles.containerForm}>
                            <div className={styles.botonSalir}>
                                <img src={IconoCerrar} alt="Icono de cerrar" onClick={() => { cierroModal() }} />
                            </div>
                            <h1>EDITAR CARD:</h1>
                            <Campo titulo="Titulo"
                                placeholder="Ingrese el titulo..."
                                valor={titulo}
                                actualizarValor={setTitulo}
                                type="text"
                                required
                                campo={styles.campoTitulo}
                                input={styles.inputs} />

                            <label>Categoria</label>
                            <select
                                value={categoriaIn}
                                onChange={manejarCambio}
                                className={styles.categoria}
                            >
                                <option value="" disabled hidden>
                                    {categoriaIn || 'Seleccionar categoria...'}
                                </option>
                                {categorias.map((categoria) => (
                                    <option key={categoria.id} value={categoria.titulo}>
                                        {categoria.titulo}
                                    </option>
                                ))}
                            </select>

                            <Campo titulo="Video"
                                placeholder="Ingrese enlace de video..."
                                valor={URLVideo}
                                actualizarValor={setUrlVideo}
                                type="text"
                                required
                                campo={styles.campoVideo}
                                input={styles.inputs} />


                            <div className={styles.campoSelectTexarea}>
                                <label>Descripcion</label>
                                <textarea value={descripcion} name="textarea" 
                                rows="10" 
                                cols="50"
                                onChange={manejarCambioTextArea}  
                                >

                                </textarea>

                            </div>
                            <div className={styles.botonesPie}>
                                <Boton type='submit'>
                                    Guardar Cambios
                                </Boton>
                                {/*    <Boton style={{ border: '2px solid var(--blanco)' }}>
                                    Limpiar
                                </Boton> */}
                            </div>
                        </div>
                    </form>

                </dialog>

            </div>

        </>

        }
    </>
}

export default ModalEditarVideo;
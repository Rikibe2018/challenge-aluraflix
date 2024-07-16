import styles from './NuevoVideo.module.css';
import Campo from 'Components/Campo';
import Boton from 'Components/Boton';
import NuevaCategoria from './NuevaCategoria.png';
import { useContext, useState } from 'react';
import useModalNuevaCategoria from 'hooks/useModalNuevaCategoria';
import { v4 as uuidv4 } from 'uuid';
import useModalEditarCard from 'hooks/useModalEditarCard';


function NuevoVideo() {
    const { categorias, 
            abrirModalCategorias, 
            cerrarModalCategorias } = useModalNuevaCategoria();
    const {nuevoVideo} = useModalEditarCard();

    const [video, setVideo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [titulo, setTitulo] = useState()
    const [color, setColor] = useState()
    const [elijoCategoria, setElijoCategoria] = useState('')
   
    function handlerSendColaborador(e) {
        e.preventDefault
        console.log('SUBMIT')
        //return null
    }

    function manejarCambioSelectCategoria(e) {
       // console.log("Cambio", e.target.value)
        setElijoCategoria(e.target.value)
    }

    function limpiarFormulario() {
        //console.log("Limpiar Formulario")
        setTitulo('')
        setVideo('')
        setElijoCategoria('')
        setDescripcion('')
    }
    const manejarCambioTextArea = (e) => {
        setDescripcion(e.target.value);
      };
    return (<>
        <section className={styles.container}>

            <div className={styles.containerTitulos}>
                <p className={styles.titulo}> NUEVO VIDEO</p>
                <p className={styles.subtitulo}>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TRJETA DE VIDEO</p>
            </div>
            <div className={styles.containerFormulario}>
                <p className={styles.tituloForm}>Crear Tarjeta</p>

                <form name='formulario'
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log('SUBMIT')
                        let datosEnvio={
                            id: uuidv4(),
                            titulo,
                            descripcion,
                            categoria:elijoCategoria,
                            URLVideo:video
                        }
                        nuevoVideo(datosEnvio);
                        limpiarFormulario();
                    }}


                >
                    <div className={styles.container1}>
                        <Campo titulo="Titulo"
                            placeholder="Ingrese el titulo..."
                            valor={titulo}
                            actualizarValor={setTitulo}
                            type="text"
                            required
                        />
                        <div className={styles.campoSelectTexarea}>
                            <label>Categoria</label>
                            <div className={styles.containerSelectImg}>
                                <select  className={styles.selectcategoria}
                                    value={elijoCategoria} 
                                    onChange={manejarCambioSelectCategoria}
                                    >

                                    <option value="" hidden disabled >Seleccionar categoria...</option>
                                    {categorias.map((categoria) => <option key={categoria.id} value={categoria.titulo}>{categoria.titulo}</option>)}
                                </select>
                                <img className={styles.imgenNuevaCategoria} src={NuevaCategoria}
                                    alt="Nuevo Categoria" onClick={() => { abrirModalCategorias('Y') }} />
                            </div>
                        </div>

                    </div>

                    <Campo titulo="Video"
                        placeholder="Ingrese enlace de video..."
                        valor={video}
                        actualizarValor={setVideo}
                        type="text"
                        required
                    />
                    <div className={styles.campoSelectTexarea}>
                        <label>Descripcion</label>
                        <textarea 
                            value={descripcion} 
                            name="textarea" 
                            rows="10" 
                            cols="50" 
                            placeholder='¿De qué se trata este vídeo?'
                            onChange={manejarCambioTextArea}    
                            >
                            </textarea>

                    </div>

                    <div className={styles.botones}>
                        <Boton type="submit" >
                            Guardar
                        </Boton>

                        <Boton type='button'style={{ border: '2px solid var(--blanco)' }} onclick={() => { limpiarFormulario()}}>
                            Limpiar
                        </Boton>
                    </div>
                </form>
            </div>

        </section>

    </>
    )
}


export default NuevoVideo;


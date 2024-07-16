import useModalNuevaCategoria from 'hooks/useModalNuevaCategoria';
import styles from './NuevaCategoria.module.css';
import { useState } from 'react';
import IconoCerrar from './cerrar.png';
import Campo from 'Components/Campo';
import Boton from 'Components/Boton';
import { v4 as uuidv4 } from 'uuid';


function NuevaCategoria() {

    const { nuevaCategoria, 
            //categorias, 
            estaAbiertoModalCategorias, 
            abrirModalCategorias, 
            cerrarModalCategorias } = useModalNuevaCategoria();
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [color, setColor] = useState('');

    function limpiarFormulario() {
        //console.log('limpiando formulario Nueva Categoria...')
        setColor('');
        setDescripcion('');
        setTitulo('');
    }
    return <>

        {estaAbiertoModalCategorias && <>
            <div className={styles.container}>
                <dialog className={styles.dialogo} onClose={() => { cerrarModalCategorias() }}>
                    <form action=""
                        className={styles.formulario}
                        name='formulario'
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log('SUBMIT')
                            console.log(titulo, descripcion, color)
                            let datos = {
                                id: uuidv4(),
                                titulo,
                                descripcion,
                                color
                            }
                            nuevaCategoria( datos );
                           
                        }}>
                        <div className={styles.containerForm}>
                            <div className={styles.botonSalir}>
                                <button formMethod='dialog' onClick={() => { cerrarModalCategorias() }}>
                                    <img src={IconoCerrar} alt="Icono de cerrar" />
                                </button>

                            </div>
                            <h1>NUEVA CATEGORIA:</h1>
                            <Campo titulo="Titulo"
                                placeholder="Ingrese el titulo..."
                                valor={titulo}
                                actualizarValor={setTitulo}
                                type="text"
                                required
                                campo={styles.campoTitulo}
                                input={styles.inputs} />


                            <Campo titulo="Descripcion"
                                placeholder="Ingrese descripcion..."
                                valor={descripcion}
                                actualizarValor={setDescripcion}
                                type="text"
                                required
                                campo={styles.campoVideo}
                                input={styles.inputs} />

                            <div className={styles.divColor}>
                                <Campo
                                    titulo="Color"
                                    placeholder="Ingrese color en Hex..."
                                    valor={color}
                                    actualizarValor={setColor}
                                    required
                                    type="color"
                                    input={styles.campoColor}
                                />
                                <div className={styles.textoColor}>
                                    <p>{color}</p>
                                </div>
                            </div>
                            <div className={styles.botonesPie}>
                                <Boton type='submit'>
                                    Guardar
                                </Boton>
                                <Boton type='button' style={{ border: '2px solid var(--blanco)' }} onclick={() => { limpiarFormulario() }} >
                                    Limpiar
                                </Boton>
                            </div>
                        </div>
                    </form>

                </dialog>

            </div>

        </>

        }
    </>
}

export default NuevaCategoria;
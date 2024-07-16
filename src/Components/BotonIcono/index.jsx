import styles from  './BotonIcono.module.css';

function BotonIcono({children}){

    return(
         <button className={styles.botonIcono}>
            {/* {children} */}
         </button>
    )
}

export default BotonIcono;
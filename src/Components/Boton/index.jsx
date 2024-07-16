
import styles from './Boton.module.css';

const Boton = (props) => {
//console.log(props)
    return <button  type={props.type} 
                    style={props.style}
                    className={styles.boton}
                    onClick={props.onclick}>
    {props.children}
    </button>
    
    }
    
    export default Boton
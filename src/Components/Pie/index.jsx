import styles from './Pie.module.css';
import logoAluraFooter from "./LogoFooter.png"
import Home from './home.png'
import NuevoVideo from './Boton-nuevoVideo.png'

function Pie() {
    return (
        <>
            <hr className={styles.linea} />

            <footer className={styles.pie}>
                <img className={styles.imgagenLogo} src={logoAluraFooter} alt="Alura Logo" />
                <div className={styles.botonHome}>
                    <img className={styles.imgenBoton} src={Home} alt="Button" />
                    <img className={styles.imgenPlus} src={NuevoVideo} alt="Nuevo Video" />
                </div>
            </footer>
        </>)
}

export default Pie;
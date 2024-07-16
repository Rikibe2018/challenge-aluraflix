import styles from './Cabecera.module.css'
import logo from './LogoMain.png'
import CabeceraLink from '../CabeceraLink/index';


function Cabecera() {

    return (
        <header>
            <div className={styles.divContainer}>
                <section className={styles.logoContainer}>
                    <img src={logo} alt='Logo Alura' className={styles.logo} />
                </section>
                <section className={styles.botonesContainer}>
                    <nav>
                        <ul className={styles.lista}>
                            <CabeceraLink url="./" color="blue">
                                <li className={styles.boton} style={{ border: 'solid 2px var(--azul)' }}>
                                    HOME
                                </li>
                            </CabeceraLink>
                            <CabeceraLink url="./linknuevovideo" color="white">
                                <li className={styles.boton} style={{ border: 'solid 2px var(--blanco)' }}>
                                    NUEVO VIDEO
                                </li>
                            </CabeceraLink>

                        </ul>
                    </nav>
                </section>

            </div>

            <hr className={styles.linea} />

        </header>

    )
}

export default Cabecera;
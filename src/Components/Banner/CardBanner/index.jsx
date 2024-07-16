import styles from './CardBanner.module.css';
import ImgPlayer from './player.png';

function CardBanner(){

    return(
        <div className={styles.container}>
            <section className={styles.sectionLeft}>
                <div className={styles.botonFrontEnd}>
                    FRONT END
                </div>
                <h2 style={{ color: 'white' , fontWeight:'normal'}}>Challenge React</h2>
                <p style={{ color: 'white',fontWeight:'lighter' }}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </section>
            <section className={styles.sectionRight}>
            <img src={ImgPlayer} alt='Imagen Player'/>
            </section>
        </div>
    )
}

export default CardBanner;
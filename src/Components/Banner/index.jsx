
import styles from './Banner.module.css'
import CardBanner from 'Components/Banner/CardBanner';

function Banner() {
    return (
        <>
         {/*    <hr className={styles.linea} /> */}
            <div className={styles.BannerContainer}>

                <div className={styles.capa} style={{ backgroundImage: `url(${require("./LogoBanner.png")})` }}>
                    <div className={styles.gradiante} style={{ background: '#154580' }}>

                    </div>

                </div>
              <CardBanner />
            </div>
            <hr className={styles.linea} />

        </>
    )
}



export default Banner;



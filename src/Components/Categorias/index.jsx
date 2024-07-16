import Cards from 'Components/Cards';
import styles from './Categorias.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Categorias(props) {
    const { videos, colorCategorias, tituloCategoria } = props
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
           className={className}
           style={{ ...style, display: "block", background: "black", color:"white" }}
           onClick={onClick}
           />
        )
    }
    function SamplePrevtArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
               className={className}
               style={{ ...style, display: "block", background: "black", color:"white" }}
               onClick={onClick}
               />
            )
        }
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevtArrow/>,
       
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>{videos.length > 0 &&
            <section className={styles.categorias}>
                <div className={styles.botonCategorias} style={{ backgroundColor: colorCategorias }}>
                    <p className={styles.titulo}>{tituloCategoria}</p>
                </div>
               <div className={styles.contenedorCards}>  
                    <Slider {...settings} className={styles.slider}>
                    {videos.map((video) => <Cards key={video.id}
                        id={video.id} url={video.URLVideo}
                        styleColor={colorCategorias}>
                    </Cards>)
                    }
                    </Slider>
                 </div>  
            </section>
        }
        </>
    )
}

export default Categorias;


/* style={{backgroundColor:colorCategorias}} */
{/* <>{videos.length > 0 &&<h1 >Categorias {`${videos.length}`}</h1>}</> */ }
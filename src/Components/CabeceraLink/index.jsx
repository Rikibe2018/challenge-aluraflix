import { Link } from "react-router-dom";
import styles from './CabeceraLink.module.css'

function CabeceraLink({url,children, color}){

    return(
        <Link className={styles.link}to={url} style={{color:color}}>
            {children}
        </Link>
    )
}

export  default CabeceraLink;

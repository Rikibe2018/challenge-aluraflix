

import Cuerpo from 'Components/Cuerpo';
import styles from './Container.module.css';
import ModalEditarVideo from 'Components/ModalEditarCard';
import ModalZoomVideo from 'Components/ModalZoomVideo';

function Container() {

    return (
        <div>

            <Cuerpo></Cuerpo>
            <ModalEditarVideo/>
            <ModalZoomVideo/>
        </div>

    )


}

export default Container;
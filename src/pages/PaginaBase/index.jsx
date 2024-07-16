import Banner from "Components/Banner"
import Cards from "Components/Cards"
import GlobalContextProvider from "../../context/ContextoGlobal"
import ModalEditarVideo from 'Components/ModalEditarCard'
import NuevaCategoria from 'Components/NuevaCategoria'
import Cuerpo from 'Components/Cuerpo'
import Cabecera from 'Components/Cabecera'
import Pie from 'Components/Pie'
import { Outlet } from "react-router-dom"


function PaginaBase() {
    return (
        <main>
            <Cabecera />
           {/*  <Banner /> */}
            <GlobalContextProvider>
                <Outlet></Outlet>
                {/* <Cuerpo /> */}
                {/* <Cards id={10} capa={'https://www.youtube.com/embed/5T_Q_NtNLZE?si=M7D0JeagaKqsoaFs'} titulo={'Ejemplo'} /> */}
                {/* <ModalEditarVideo /> */}
            </GlobalContextProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase   
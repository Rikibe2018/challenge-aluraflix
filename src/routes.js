
import Cabecera from "Components/Cabecera"
import LinkNuevoVideo from "Components/LinkNuevoVideo/LinkNuevoVideo";
import ModalEditarVideo from "Components/ModalEditarCard";
import NuevoVideo from "Components/NuevoVideo";
import Pie from "Components/Pie"
import Inicio from "pages/inicio";
import PaginaBase from "pages/PaginaBase";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} ></Route>
          <Route path="linknuevovideo" element={<LinkNuevoVideo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
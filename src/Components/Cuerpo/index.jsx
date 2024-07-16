import useModalEditarCard from 'hooks/useModalEditarCard';
import useModalNuevaCategoria from 'hooks/useModalNuevaCategoria';
import Categorias from 'Components/Categorias';

function Cuerpo() {

    const { videos } = useModalEditarCard()
    const { categorias } = useModalNuevaCategoria()

    return (
        <>
            {categorias.map((categoria) =>
                <Categorias key={categoria.id} videos={videos.filter(video => video.categoria === categoria.titulo)}
                    colorCategorias={categoria.color}
                    tituloCategoria={categoria.titulo}
                />
            )}
        </>
    )
}

export default Cuerpo;


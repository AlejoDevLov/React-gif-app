import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifItems } from "./GifItems";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && <h3>Cargando...</h3>
            }
            <div className="card-grid">
                { images.map( (image) => (
                        <GifItems 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

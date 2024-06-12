import { useEffect, useState } from "react"
// import Element from "./element/element"

function Elements() {
    const [elements, setElements] = useState()
    const [filter, setFilter] = useState("todos")

    useEffect(() => {
        const urlElements = "https://raw.githubusercontent.com/ZoltanMG/la-cande-calculadora/main/src/data/elementos.json"
        fetch(urlElements).then(response => {
            return response.json();
        }
        ).then(data => {
            setElements(data)
        })
    }, [])

    return (
        <main>
            <div>
                <button onClick={() => setFilter("todo")}>Todo</button>
                <button onClick={() => setFilter("insumos")}>Insumos</button>
                <button onClick={() => setFilter("productos")}>Productos</button>
            </div>
            {elements &&
                <div>
                    {filter !== "productos" &&
                        Object.entries(elements.insumos).map(([key, value]) => {
                            console.log(value, key);
                            return (
                                <div key={key}>{key}</div>
                            )
                        })}
                    {filter !== "insumos" &&
                        Object.entries(elements.productos).map(([key, value]) => {
                            console.log(value, key);
                            return (
                                <div key={key}>{key}</div>
                            )
                        })}

                </div>
            }

        </main>
    )
}

export default Elements
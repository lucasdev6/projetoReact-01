import React, { memo } from "react"
import ProdutoList from "../produto/ProdutoList"

function Categoria({produto}){
    const [categorias, setCategorias] = React.useState([])
    
    React.useEffect(()=>{
        const getCategorias = async ()=>{
            const results = await fetch('http://localhost:8888/api/V1/categories/list')
            const {items: categorias} = await results.json()
            setCategorias(categorias)
        }

        getCategorias()
    },[])
  return (
    <>
        {categorias.length > 0 ?
        categorias.map(categoria=>{
            if(categoria.name===produto)
                return <ProdutoList key={categoria.id} produto={categoria} />
            
    })
    :
    <h1>Carregando2...</h1>
}
    </>
    
  )
}

export default memo(Categoria)
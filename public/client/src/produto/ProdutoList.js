import React from 'react'
import Menu from '../menu/Menu'
import ProdutoItem from './ProdutoItem'


function ProdutoList({produto: {id, name}}) {
    const [produtos, setProdutos] = React.useState([])
    
    React.useEffect(()=>{
        const getProdutos = async ()=>{
            const results = await fetch(`http://localhost:8888/api/V1/categories/${id}`)
            const {items: produtos} = await results.json()
            setProdutos(produtos)
        }
        
        getProdutos()
    },[])
  return (
    <>
    <Menu cor={'#00A8A9'}/>
    <div className='py-5 px-24'>
        <p><span className='text-[#00A8A9]'>Página inicial</span><span className='text-[#ACACAC]'>{" > "}</span><span className='text-[#CB0D1F]'>{name}</span></p>
    </div>
    <div className='flex justify-start px-24'>
        <div className='shadow-lg w-64 border-2 border-[#E2DEDC] pl-4 h-max '>
            
            <h1 className='text-[#ED1A39] my-3 text-2xl'>FILTRE POR</h1>
            <h3 className='text-lg pb-3'>CATEGORIAS</h3>
            <ul>
                
                <li>Roupas</li>
                <li>Sapatos</li>
                <li>Acessórios</li>
            </ul>
            <h3 className='text-lg pt-9'>Cores</h3>
            <div className='flex gap-1 pt-3'>
            <p className='w-12 h-6 bg-[#CB0D1F]' ></p>
            <p className='w-12 h-6 bg-[#F26324]' ></p>
            <p className='w-12 h-6 bg-[#27A3A9]' ></p>
            </div>
            <h3 className='pb-4 text-lg pt-8'>Tipo</h3>
            <ul className='pb-11'>
                <li>Corrida</li>
                <li>Caminhada</li>
                <li>Casual</li>
                <li>Social</li>
            </ul>
        </div>
        <div className='pl-6 w-full'>
            <h1 className='text-[#ED1A39] text-3xl pb-2'>{name}</h1>
            <hr className='border-t-2 border-solid border-[#E2DEDC]'></hr>
            <div className='flex justify-between'>
            <div className='flex h-20 pt-3 gap-3'>
            <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 8 8">
                <path fill="#ED1A39" d="M0 0v2h2V0H0zm3 0v2h2V0H3zm3 0v2h2V0H6zM0 3v2h2V3H0zm3 0v2h2V3H3zm3 0v2h2V3H6zM0 6v2h2V6H0zm3 0v2h2V6H3zm3 0v2h2V6H6z"/>
            </svg>
            <svg  xmlns="http://www.w3.org/2000/svg"> 
            <path  d="M8 5H21V7H8V5ZM3 4.5H6V7.5H3V4.5ZM3 10.5H6V13.5H3V10.5ZM3 16.5H6V19.5H3V16.5ZM8 11H21V13H8V11ZM8 17H21V19H8V17Z" fill="#00A8A9"/> 
            </svg>    
            </div>
            <div className='flex pt-2'>
                <p>ORDERNAR POR</p>
                <select className='ml-3 w-52 h-7 border-2 rounded-md pl-3'><option>Preço</option></select>
            </div>
            </div>
            <div className='grid grid-cols-4 '>
                {produtos.length > 0 ?
                    produtos.map(produto => (
                      <ProdutoItem key={produto.id} produto={produto} />
                    ))
                    :
                  <h1>Carregando...</h1>
                }           
            </div>
        </div>
    </div>
    </>
  )
}

export default ProdutoList
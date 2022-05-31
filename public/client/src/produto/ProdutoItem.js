import { memo } from 'react'

function ProdutoItem({ produto: { image, name, price } }) {
  console.log(String(price.toFixed(2)).replace('.',','));
  return (
    <div className='w-52'>
      <img className='shadow-lg w-64 border-2 border-[#E2DEDC] h-56' src={require(`../assets/${image}`)}></img>
      <div className='grid justify-items-center py-2'>
      <h1>{name}</h1>
      <p>R$ {String(price.toFixed(2)).replace('.',',')}</p>
      </div>
      <button className='bg-[#00A8A9] text-[#FFFFFF] w-full rounded-md h-10'>COMPRAR</button>
    </div>
  )
}

export default memo(ProdutoItem)
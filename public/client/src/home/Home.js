import React from 'react'
import Menu from '../menu/Menu'

const Home = () => {
    return (
        <>
        <Menu cor={'#CB0D1F'}/>
        <div className='grid grid-flow-col px-24 pt-6 pb-6'>
            <menu className='shadow-lg w-64 border-2 border-[#E2DEDC] bg-[#E2DEDC] pl-4 h-auto '>
                <ul>
                    <li>Página Inical</li>
                    <li>Camisetas</li>
                    <li>Calças</li>
                    <li>Sapatos</li>
                    <li>Contato</li>
                </ul>
            </menu>
            <div className='pl-6 '>
                <div className='bg-[#ACACAC] shadow-lg p-36 '></div>
                <h1 className='text-xl pt-3'>Seja bem-vindo!</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>
        </div>
        <div className='px-24'>
            <div className='bg-[#CB0D1F] shadow-sm p-20'></div>
        </div>
        
      </>
  )
}

export default Home
import React, { memo } from 'react'

function Menu({cor}) {
  return (
    <header>
        <div className='flex gap-1 bg-[#231F20] text-[#FFFFFF] h-7 py-1 px-24 text-sm justify-end'>
            <a className='underline' href=''>Acesse sua Conta</a>
            <p>ou</p>
            <a className='underline' href=''>Cadastre-se</a>
        </div>
            <div className='flex h-20 justify-between items-center px-24' >
                <div className=''>
                <img  src='https://d2d22nphq0yz8t.cloudfront.net/1c8f5ff9-e899-4b07-8168-3e19264f4c49/https://webjump.com.br/wp-content/uploads/2021/12/webjump-compass-min-2.png/mxw_200,f_auto'></img>
                </div>
                <div className=''>
                <input className='border-2 border-black px-28 h-11'></input>
                <button className={`bg-[${cor}] px-8 h-11 text-[#FFFFFF]`}>Buscar</button>
                </div>
            </div>
            <div>
                <div className='flex items-center bg-[#CB0D1F] h-12'>
                    <ul className='flex list-none gap-14 text-[#FFFFFF] px-24 '>
                        <li><a href='/'>PÁGINA INICIAL</a></li>
                        <li><a href='/camisetas'>CAMISETAS</a></li>
                        <li><a href='/calcas'>CALÇAS</a></li>
                        <li><a href='/sapatos'>SAPATOS</a></li>
                        <li><a href=''>CONTATO</a></li>
                    </ul>
                </div>
            </div>
    </header>
  )
}

export default memo(Menu)
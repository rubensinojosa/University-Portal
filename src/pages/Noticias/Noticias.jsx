import React from 'react'
import './Noticias.scss'
import NoticiasComponent from '../../components/Inicio/NoticiasComponent/NoticiasComponent'
import BannerComponent from '../../components/BannerComponent/BannerComponent'

const Noticias = () => {
  return (
    <>
        <div className='Noticias'>
      <div className="div1">
        <span>compartilhar no facebook</span>
      </div>
      <div className="div2">
        <span>compartilhar no instagram</span>
      </div>
      <div className="div3">
        <span>compartilhar no linkedin</span>
      </div>
    </div>
    <BannerComponent />
    <NoticiasComponent />
    </>
  )
}

export default Noticias
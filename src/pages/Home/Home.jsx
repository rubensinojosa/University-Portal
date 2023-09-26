import React from 'react'
import CursosComponent from '../../components/Inicio/CursosComponent/CursosComponent'
import EstagiosEmpregos from '../../components/Inicio/EstagiosEmpregos/EstagiosEmpregos'
import MainComponent from '../../components/Inicio/MainComponent/MainComponent'
import NoticiasComponent from '../../components/Inicio/NoticiasComponent/NoticiasComponent'

const Home = () => {
  return (
    <div className='Home'>
      <MainComponent />
      <CursosComponent />
      <EstagiosEmpregos />
      <NoticiasComponent />
    </div>
  )
}

export default Home
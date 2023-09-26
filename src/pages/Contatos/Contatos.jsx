import React from 'react'
import './Contatos.scss'
import FormComponent from '../../components/FormComponent/FormComponent'

const Contatos = () => {
  return (
    <div className='Contatos'>
      <div className="title">
        <h3 className='title-h3'>Contatos</h3>
      </div>
      <FormComponent />
    </div>
  )
}

export default Contatos
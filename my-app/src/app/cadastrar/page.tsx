import FormCadastro from '@/components/form-cadastro/form-cadastro'
import MainHeader from '@/components/main-header/main-header'
import React from 'react'
import style from './page.module.css'

const Cadastrar: React.FC = () => {
   return (
      <>
         <MainHeader />
         <div className={ style.mainBody }>
            <main className={ style.mainWrapper }>
               <FormCadastro />
            </main>
         </div>
      </>
   )
}

export default Cadastrar

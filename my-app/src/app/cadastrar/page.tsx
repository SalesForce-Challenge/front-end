import FormCadastro from '@/components/form-cadastro/form-cadastro'
import MainHeader from '@/components/main-header/main-header'
import React from 'react'

const Cadastrar: React.FC = () => {
   return (
      <>
         <MainHeader />
         <main>
            <FormCadastro />
         </main>
      </>
   )
}

export default Cadastrar

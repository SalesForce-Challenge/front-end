import Footer from '@/components/footer/footer'
import MainHeader from '@/components/main-header/main-header'
import ProtudosLista from '@/components/produtos-content/produtos-list'
import React from 'react'

const Produtos: React.FC = () => {
   return (
      <>
         <MainHeader/>
         <ProtudosLista/>
         <Footer/>
      </>
   );
};

export default Produtos;

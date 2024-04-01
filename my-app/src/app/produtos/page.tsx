import Footer from '@/components/footer/footer'
import MainHeader from '@/components/main-header/main-header'
import ProdutosHero from '@/components/produtos-content/produtos-hero';
import ProtudosLista from '@/components/produtos-content/produtos-list'
import ProdutosMiddleTop from '@/components/produtos-content/produtos-middle-top';
import React from 'react'
import classes from './page.module.css'

const Produtos: React.FC = () => {
   return (
      <>
         <MainHeader/>
         <ProdutosHero/>
         <ProdutosMiddleTop/>
         <section className={classes.sectionWrapper}>
               
            <div className={classes.sectionTitleWrapper}>
               <p>Os Melhores Aplicativos</p>
               <h3>Todos em um único local</h3>
            </div>
            
            <p>Explore cada produto abaixo para descobrir como ele pode impulsionar seus objetivos de negócios.</p>

            <div>
               <p className={classes.dicaStrong}>Dica Valiosa:</p>
               <p>Esses aplicativos incríveis se complementam ainda mais quando usados juntos.</p>
            </div>
            <ProtudosLista/>
         </section>
         <Footer/>
      </>
   );
};

export default Produtos;

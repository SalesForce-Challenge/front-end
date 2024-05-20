import Image from 'next/image'
import ScottiImg from '../../assets/profiles/Scotti.jpg'
import KauaImg from '../../assets/profiles/kaua.jpg'
import MarianaImg from '../../assets/profiles/mari.jpg'

import camping from '../../assets/illustrations/fogueira.png'
import classes from './main-content-equipe.module.css'
const MainContentEquipe = () => {

   const equipe = [
      {
         img: MarianaImg,
         nome: 'Mariana',
         rm: 'RM553476',
         link: ''
      },
      {
         img: ScottiImg,
         nome: 'Matheus Scotti',
         rm: 'RM553073',
         link: ''
      },
      {
         img: KauaImg,
         nome: 'Kauã Almeida',
         rm: 'RM552618',
         link: ''
      },
   ]

   return (
      <section className={ classes.sectionWrapper } aria-labelledby="equipe-title">
         <h1 id="equipe-title">Conheça nossa equipe</h1>
         <div className={ classes.sectionContentWrapper }>
            <ul>
               { equipe.map((membro, index) => (
                  <li key={ index } className={ classes.listItemWrapper }>
                     <Image src={ membro.img } alt={ `Foto de ${ membro.nome }` } />
                     <div>
                        <p>{ membro.nome } - { membro.rm }</p>
                        { membro.link ? (
                           <a href={ membro.link } target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        ) : (
                           <span>LinkedIn</span>
                        ) }
                     </div>
                  </li>
               )) }
            </ul>
         </div>
         <Image src={ camping } alt="Illustration of a campfire" aria-hidden="true" />
      </section>
   )
}

export default MainContentEquipe

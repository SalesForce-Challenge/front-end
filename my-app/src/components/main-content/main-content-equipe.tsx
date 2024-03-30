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
   ];

   return (
      <section className={classes.sectionWrapper}>
         <h1>Conheça nossa equipe</h1> 
         <div className={classes.sectionContentWrapper}>
               <ul>
                  {equipe.map((membro) => ( 
                     <li className={classes.listItemWrapper}>
                        <Image src={membro.img} alt={membro.nome} />
                        <div>
                           <p>{membro.nome} - {membro.rm}</p>
                           <a href={membro.link} target='_blank'>Linkedin</a>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
               <Image src={camping} alt='' aria-hidden='true'/>
      </section>
   );
};

export default MainContentEquipe;

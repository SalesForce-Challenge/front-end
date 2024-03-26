import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../assets/icon/logo_desk.svg'
import Navegation from './navegation'

import classes from './main-header.module.css'

const MainHeader = () => {
   const navigationItems = [
      { nome: "inicio", href: "/" },
      { nome: "produtos", href: "/produtos" },
      { nome: "sobre nós", href: "/sobre-nos" },
      { nome: "aprendizado", href: "/aprendizado" },
      { nome: "indústrias", href: "/industrias" },
      { nome: "suporte", href: "/suporte" },
      { nome: "login", href: "/login" }
   ];

   return (
      <>
         <header className={classes.wrapperHeader}>
            <Link href={"/"} className={classes.WrapperLogoImg}>
               <Image src={logoImg} alt='Nuvem azul escrito salesforce' className={classes.logoImg}/>
            </Link>

            <nav className={classes.navegation}>
               <ul className={classes.wrapperListLink} >
                  {navigationItems.map((item, index) => (
                     <Navegation key={index} href={item.href}>
                           {item.nome}
                     </Navegation>
                  ))}
               </ul>
            </nav>
         </header>
      </>
   );
}

export default MainHeader;

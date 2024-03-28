import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../assets/icon/logo_desk.svg'
import homeImg from '../../assets/icon/home-blue_desk.svg'
import loginImg from '../../assets/icon/login-blue-desk.svg'

import Navegation from './navegation'
import classes from './main-header.module.css'
import SearchBar from './searchbar'



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
                        {item.nome === 'inicio' ? (
                           <Image src={homeImg} alt='Inicio' className={classes.navigationImage} />
                        ) : item.nome === 'login' ? (
                           <span className={classes.loginWrapper}>
                              <Image src={loginImg} alt='Login' className={classes.navigationImage} />
                              <p>{item.nome}</p>
                           </span>
                        ) : (
                           <span>{item.nome}</span>
                        )}
                     </Navegation>
                  ))}
               </ul>
            </nav>
            <SearchBar />
         </header>
      </>
   );
}

export default MainHeader;

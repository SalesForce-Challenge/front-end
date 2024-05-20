import Image from 'next/image'
import Link from 'next/link'

import homeImg from '../../assets/icon/home-blue_desk.svg'
import loginImg from '../../assets/icon/login-blue-desk.svg'
import logoImg from '../../assets/icon/logo_desk.svg'

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
   ]

   return (
      <header className={ classes.wrapperHeader } aria-label="Site header">
         <Link href="/" className={ classes.wrapperLogoImg } aria-label="Salesforce home" tabIndex={ 0 }>
            <Image src={ logoImg } alt="Salesforce logo" className={ classes.logoImg } />
         </Link>

         <nav className={ classes.navegation } aria-label="Main navigation">
            <ul className={ classes.wrapperListLink }>
               { navigationItems.map((item, index) => (
                  <li key={ index } className={ classes.navigationItem }>
                     { item.nome === 'inicio' ? (
                        <Link href="/" className={ classes.navigationImageLink } aria-label="Página inicial do site">
                           <Image src={ homeImg } alt="Página inicial do site" className={ classes.navigationImage } />
                        </Link>
                     ) : item.nome === 'login' ? (
                        <Link href={ item.href } className={ classes.navigationTextLink } aria-label="Link para a página de login">
                           <Image src={ loginImg } alt="Login" className={ classes.navigationImage } />
                        </Link>
                     ) : (
                        <Link href={ item.href } className={ classes.navigationTextLink }>
                           { item.nome }
                        </Link>
                     ) }
                  </li>
               )) }
            </ul>
         </nav>
         <SearchBar />
      </header>
   )
}

export default MainHeader

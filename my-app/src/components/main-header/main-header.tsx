import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../assets/icon/logo_desk.svg'
import Navegation from './navegation'



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
         <header>
            <Link href={"/"}>
               <Image src={logoImg} alt='Nuvem azul escrito salesforce'/>
            </Link>

            {navigationItems.map((item, index) => (
               <Navegation key={index} href={item.href}>
                     {item.nome}
               </Navegation>
            ))}
         </header>
      </>
   );
}

export default MainHeader;

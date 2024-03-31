import Image from 'next/image'
import logo from '../../assets/icon/logo_desk.svg'
import classes from './footer.module.css'

const Footer = () => {

   return (
      <footer className={classes.footerWrapper}> 
         <div className={classes.logoWrapper}>
            <Image src={logo} alt="Sales Force" />
            <p>Entre em contato 0800 891 1887</p>
         </div>

         <div className={classes.footerLinksWrapper}>
               <div className={classes.collumWrapper}>
                  <h4>Conheça a Salesforce</h4>
                  <ul className={classes.collumItemWrapper}>
                     <li ><a href="#">O que é CRM?</a></li>
                     <li><a href="#">O que é a Salesforce?</a></li>
                     <li><a href="#">Explorar todos os produtos</a></li>
                     <li><a href="#">Edições e Preços</a></li>
                     <li><a href="#">História de Clientes</a></li>
                     <li><a href="#">Investidores</a></li>
                     <li><a href="#">Política de Privacidade</a></li>
                     <li><a href="#">Segurança</a></li>
                  </ul>
               </div>

               <div className={classes.collumWrapper}>
                  <h4>Sobre a Salesforce</h4>
                  <ul className={classes.collumItemWrapper}>
                     <li ><a href="#">Nossa História</a></li>
                     <li><a href="#">Blog</a></li>
                     <li><a href="#">Carreira</a></li>
                     <li><a href="#">Salesforce.org</a></li>
                     <li><a href="#">Dê nos o seu feedback</a></li>
                  </ul>
               </div>
         </div>
      </footer>
   );
};

export default Footer;

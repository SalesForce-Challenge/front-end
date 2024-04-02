import Image from 'next/image'
import React from 'react'
import logo from '../../assets/icon/logo_desk.svg'
import classes from './login-form.module.css'
const LoginForm: React.FC = () => {
   return (
      <section className={classes.sectionFromWrapper}> 
         <Image src={logo} alt="Salesforce" />
         <form>
            <label htmlFor="username">Nome do usuário:</label>
            <input type="text" id="username" placeholder="Digite o nome do usuário" />
            
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" placeholder="Digite sua senha" />
            
            <input className={classes.buttonSelected}type="submit" value="Submit" />

            <div className={classes.wrapperFromLinks}>
               <span>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Lembrar-me</label>
               </span>
               <a href="#">Esqueceu sua senha?</a>
            </div>
         </form>
      </section>
   );
};

export default LoginForm;

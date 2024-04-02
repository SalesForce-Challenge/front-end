import classes from './login-hero.module.css'

const LoginHero = () => {
   return (
      <section className={classes.sectionWrapper}>
         <div className={classes.sectionTitleWrapper}>
            <h1>Não é um cliente?</h1>
            <h2>Experimente o Salesforce Starter Suite gratuitamente.</h2>
         </div>
         <p>Experimente hoje mesmo o Salesforce Starter Suite, a solução perfeita que reúne marketing, vendas e atendimento em um único aplicativo. Sem necessidade de instalação, sem exigir cartão de crédito. </p>
         <p>Simplificamos para você. Vamos começar juntos!</p>
         <button className={classes.buttonSelected}>
            <a href="/cadastrar">Criar Conta </a>
         </button>
      </section>
   );
};

export default LoginHero;

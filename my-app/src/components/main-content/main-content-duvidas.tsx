import Image from 'next/image'
import duvidasImg from '../../assets/illustrations/duvidas-bike 4.svg'
import classes from './main-content-duvidas.module.css'

const MainContentDuvidas= () => {
      return (
            <section className={classes.sectionWrapper}>
                  <div className={classes.sectionTitlesWrapper}>
                        <h1 className={classes.title}>Dúvidas?</h1>
                        <h2 className={classes.subTitle}>Vamos ajudá-lo a encontrar a resposta certa.</h2>
                        <button className={classes.buttonSelected}>Entrar em contato</button>
                  </div>

                  <div className={classes.contentWrapper}>
                        <Image src={duvidasImg} alt="Image" />
                  </div>
            </section>
      );
};

export default MainContentDuvidas;

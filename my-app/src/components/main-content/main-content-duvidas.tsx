import Image from 'next/image'
import duvidasImg from '../../assets/illustrations/duvidas-bike 4.svg'
import classes from './main-content-duvidas.module.css'

const MainContentDuvidas = () => {
      return (
            <section className={ classes.sectionWrapper } aria-labelledby="duvidas-title">
                  <div className={ classes.sectionTitlesWrapper }>
                        <h1 id="duvidas-title" className={ classes.title }>Dúvidas?</h1>
                        <h2 className={ classes.subTitle }>Vamos ajudá-lo a encontrar a resposta certa.</h2>
                        <button className={ classes.buttonSelected }>Entrar em contato</button>
                  </div>

                  <div className={ classes.contentWrapper }>
                        <Image src={ duvidasImg } alt="Illustration of a person on a bike" />
                  </div>
            </section>
      )
}

export default MainContentDuvidas

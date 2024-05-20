import Image from "next/image";

import customerImg from '../../assets/icon/cutomer 360.svg'
import einsteinImg from '../../assets/icon/customer-360-mulher_desk.svg'

import classes from './produtos-hero.module.css'

const ProdutosHero = () => {
    return (
        <section className={classes.produtosHeroWrapper} aria-labelledby="produtos-hero-heading">

            <div className={classes.produtosTextWrapper}>
                <div className={classes.titleWrapper}>
                    <h1 id="produtos-hero-heading">Agora todo mundo é um Einstein!</h1>
                    <p>Explore. Conecte. Capacite.</p>
                </div>

                <div className={classes.produtosCustomerWrapper}>
                    <Image src={customerImg} alt="Ícone do Customer 360" />
                    <div>
                        <p>O Customer 360, abrangendo todo o nosso conjunto de produtos, simplifica a sua interação com os clientes de uma forma totalmente nova.</p>
                        <p>Agora, todas as suas equipes - marketing, vendas, e-commerce, atendimento ao cliente, TI e dados - podem operar de maneira mais perspicaz e eficiente, com dados interligados, IA confiável e o líder em CRM.</p>
                    </div>
                </div>
            </div>

            <Image src={einsteinImg} alt="" aria-hidden />
        </section>  
    );
}

export default ProdutosHero

import Image from 'next/image'
import csImg from '../../assets/illustrations/customer success.svg'
import classes from './main-content-middle.module.css'

const MainContentMiddle = () => {
    return (
        <section className={classes.sectionWrapper}>
            <div className={classes.sectionTitleWrapper}>
                <h1 className={classes.title}>Todo tipo de conteúdo.</h1>
                <h2 className={classes.subTitle}>Tudo para te ajudar a crescer.</h2>
            </div>

            <div className={classes.contentWrapper}>
                    <Image src={csImg} alt="Customer Success"  aria-hidden="true"/>

                <div className={classes.contentWrapperText}>
                    <div>
                        <h3>O que é CRM?</h3>
                    </div>
                    <p>Vamos aprender sobre o CRM</p>
                    <p>Descubra como juntar todas as suas equipes e fazer sua empresa crescer mais e ser mais produtiva.</p>
                    <button className={classes.buttonSelected}>Conheça nossos produtos</button>
                </div>
            </div>
        </section>
    );
};

export default MainContentMiddle;

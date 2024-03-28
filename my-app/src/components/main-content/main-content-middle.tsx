import React from 'react';
import classes from './main-content-middle.module.css';
import Image from 'next/image';
import csImg from '../../assets/illustrations/customer success.svg'

const MainContentMiddle = () => {
    return (
        <section className={classes.sectionWrapper}>
            <div>
                <h1 className={classes.title}>Todo tipo de conteúdo.</h1>
                <h2 >Tudo para te ajudar a crescer.</h2>
            </div>

            <div className={classes.contentWrapper}>
                    <Image src={csImg} alt="Image" />

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
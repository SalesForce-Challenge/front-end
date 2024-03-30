import Image from 'next/image'
import React from 'react'
import Eistein360Img from '../../assets/illustrations/einstein-mulher-360_desktop.svg'
import classes from './main-content-top.module.css'

const MainContentTop: React.FC = () => {
    // Your code here

    return (
            <section className={classes.sectionTopHero}>
                <div>
                    <div className={classes.wrapperTitle}>
                        <h1>Alcance o sucesso facilmente com a ajuda do</h1>
                        <h1><span>Salesforce Customer 360.</span></h1>
                    </div>

                    <div className={classes.wrapperParagraph}>
                        <p>O Customer 360 é a nossa coleção de produtos e serviços projetada para auxiliar 98% dos clientes a atingir ou superar suas metas de retorno sobre investimento (ROI).</p>
                    </div>
                    
                    <div className={classes.wrapperButton}>
                        <button  className={classes.buttonSelected }>Testar gratis</button>
                        <button  className={classes.buttonOutline }>Saber mais</button>
                    </div>
                </div>

                <div className="image-container">
                    <Image src={Eistein360Img} alt="Image" />
                </div>
            </section>
    );
};

export default MainContentTop;

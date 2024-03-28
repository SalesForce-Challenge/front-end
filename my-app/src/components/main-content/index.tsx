
import Image from 'next/image';
import Eistein360Img from '../../assets/illustrations/einstein-mulher-360_desktop.svg'
import ButtonSelect from '../buttons/button-select';

import classes from './main-content.module.css';

const MainContent = () => {
    return (
        <main className={classes.main}>
            <section className={classes.sectionTopHero}>
                <div>
                    <div className={classes.wrapperTitle}>
                        <h1>Alcance o sucesso facilmente com a ajuda do <span>Salesforce Customer 360.</span></h1>
                    </div>

                    <div>
                        <p>O Customer 360 é a nossa coleção de produtos e serviços projetada para auxiliar 98% dos clientes a atingir ou superar suas metas de retorno sobre investimento (ROI).</p>
                    </div>
                    
                    <div>
                        <ButtonSelect>Testar gratis</ButtonSelect>
                    </div>
                </div>

                <div className="image-container">
                    <Image src={Eistein360Img} alt="Image" />
                </div>
            </section>
        </main>
    );
};

export default MainContent;
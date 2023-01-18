import { useState } from 'react';
import Content from './content.component';
import '../../styles/styles.scss';


const Mission = () => {
    const [ choosenContent, setChoosenContent ] = useState('mission');

    const onHandleChoosenContent = (content) => {
        setChoosenContent(content);
    }

    return(
        <main className="main">
            <section className="main__container">
                <div className="mission">
                    <div className="main__mission">
                        <div className="mission__text">
                            <h3 className="title">Missão, visão e valores</h3>
                            <p className="content">Conheça os três pilares que sustentam a nossa empresa.</p>
                            <div>
                                <ul className="mission__link">
                                    <li className="link" onClick={() => {onHandleChoosenContent('mission')}}>
                                        <span className="rocket"></span>
                                        <div>
                                            <h3 className="mission__link-header">Nossa Missão</h3>
                                            <p className="mission__link-content">Conheça nossa missão e o que nos move todos os dias para transformar vidas.</p>       
                                        </div>
                                    </li>
                                    <li className="link" onClick={() => {onHandleChoosenContent('vision')}}>
                                        <span className="vision"></span>
                                        <div>
                                            <h3 className="mission__link-header">Nossa Visão</h3>
                                            <p className="mission__link-content">Saiba qual a nossa visão e objetivos em relação ao mercado de trabalho</p>
                                        </div>
                                    </li>    
                                    <li className="link" onClick={() => {onHandleChoosenContent('values')}}>
                                        <span className="values"></span>
                                        <div>
                                            <h3 className="mission__link-header">Nossos Valores</h3>
                                            <p className="mission__link-content">Conheça quais os valores guiam todas as nossas tomadas de decisões.</p>
                                        </div>    
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Content content={choosenContent}/>
                    </div>
                </div>
            </section> 
        </main>
    )
}
export default Mission;
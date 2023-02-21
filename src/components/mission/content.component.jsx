// import { useEffect, useState } from "react";

const items = [
    {
        id: 1,
        label: 'mission',
        title: 'Missão',
        content: 'Gerir negócios pautados na gestão humanizada e transformar a vida das pessoas por meio dos serviços, produtos, oportunidades e experiências oferecidas.',
        imageUrl: 'https://grupokpg.com/images/home/missao.png'
    },
    {
        id: 2,
        label: 'vision',
        title: 'Visão',
        content: 'Ser reconhecido como um dos maiores grupos empresariais do Brasil por sua excelência em gestão de empresas, negócios, pessoas e impacto na sociedade em que atuamos.',
        imageUrl: 'https://grupokpg.com/images/home/visao.png'
    },
    {
        id: 3,
        label: 'values',
        title: 'Valores',
        content: 'Crescemos! Mas sempre mantemos como base valores sólidos e inegociáveis: Trabalho duro, Respeito, Overdeliver, Honestidade, Gestão humanizada e Consistência.',
        imageUrl: 'https://grupokpg.com/images/home/valoress.png'
    },
]

const Content = (props) => {
    return(
        <div className="mission__photo">
            {
                items.map(item => (
                    item.label === props.content && 
                        <div key={item.id}  className="card">
                            <div className="mission__photo-image">
                                <img src={item.imageUrl} alt="Sobre nós" />
                            </div>
                            <div className="mission__photo-content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </div>
                        
                ))
            }
        </div>
    )
}

export default Content;
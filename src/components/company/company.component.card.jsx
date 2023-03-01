import "../../styles/styles.scss";


const items = [

    {
        id:1,
        imageUrl:'https://grupokpg.com/images/home/logoBraip.png',
        title:'Braip',
        content:'A Braip é uma plataforma de pagamentos que oferece as melhores ferramentas e funcionalidades para quem quer empreender no meio digital, comercializando produtos físicos e infoprodutos com autonomia, segurança e rentabilidade.',
        link:'Saiba mais ->'
    },
    {
        id:2,
        imageUrl:'https://grupokpg.com/images/home/iconeKapsula.png',
        title:'Kapsula',
        content:'A Kapsula é uma empresa que oferece soluções para produção de produtos encapsulados, shakes, solúveis e cosméticos. Também disponibiliza serviços de logística para sua empresa independente do que segmento que você atue.',
        link:'Saiba mais ->'       
    },
    {
        id:3,
        imageUrl:'https://grupokpg.com/images/home/azplex.webp',
        title:'Azplex',
        content:'A Azplex é uma empresa que oferece soluções para produção de produtos encapsulados, shakes, solúveis e cosméticos. Também disponibiliza serviços de logística para sua empresa independente do que segmento que você atue.',
        link:'Saiba mais ->'
    }
]


const Card = (props) =>{
    return(
        <div className="company__data__cards">
            {
                items.map(item => (
                    <div key={item.id} className="card">
                        <div className="card__img">
                            <img src={item.imageUrl} alt="KPG" />
                        </div>
                        <div className="card__content">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <p>{item.link}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default Card;
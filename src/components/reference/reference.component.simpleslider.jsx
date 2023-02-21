import Slider from "react-slick";

import "../../styles/styles.scss";

const ListText = {
  items: [
    {
      title: "Negócios",
      label:
        "Construímos e alavancamos negócios que crescem exponencialmente, atingindo níveis que fazem das empresas verdadeiras referências no mercado.",
    },
    {
      title: "Colaboradores",
      label:
        "Nosso time de colaboradores é o nosso maior ativo. Eles sonham, abraçam e batalham pelo propósito da empresa. São a força vital que nos move para o extraordinário. ",
    },
    {
      title: "Faturamento",
      label:
        " As empresas do grupo atingem faturamentos mensais milionários, alcançando receitas em diversos nichos do meio digital e físico, além de ajudar a transformar a vida de milhões de pessoas.",
    },
    {
      title: "Global",
      label:
        "Nossos serviços e produtos alcançam todo o mundo. Tanto os produtos físicos, como também os digitais, ajudam a construir um mundo melhor e com pessoas mais prósperas.",
    },
  ],
};

export const SimpleSlider = () => {
  
    if (window.innerWidth > 1024) {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
      };

      return (
        <Slider {...settings}>
          {ListText?.items.map((item) => (
            <div className="main-list-item-custom">
              <h3 className="title">{item.title}</h3>
              <p className="label">{item.label}</p>
            </div>
          ))}
        </Slider>
      );
    } else {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <Slider {...settings}>
          {ListText?.items.map((item) => (
            <div className="main-list-item-custom">
              <h3 className="title">{item.title}</h3>
              <p className="label">{item.label}</p>
            </div>
          ))}
        </Slider>
      );
    }
  
};

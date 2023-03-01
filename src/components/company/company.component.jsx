import "../../styles/styles.scss";
import Card from "./company.component.card";

const Company = () => {
  return (
    <div>
      {window.innerWidth > 1024 ? (
        <section className="company">
          <div className="company__container">
            <div className="company__data__main">
              <div className="company__data__main__img">
                <img
                  src="https://grupokpg.com/images/home/company.webp"
                  alt=""
                />
              </div>
              <div className="company__data__main__info">
                <h3>Empresas da KPG S/A</h3>
                <p>
                  “Sonhe grande, mas comece pequeno”, essa frase nos guiou no
                  início. Começamos pequenos, mas sempre com visão de futuro.
                  Hoje, somos referência, possuimos um crescimento exponencial e
                  estamos focados no nosso propósito.
                </p>
              </div>
            </div>

            <div className="company__data__cards">
              <Card />
            </div>
          </div>
        </section>
      ) : (
        <section className="company__mobile">
          <div className="company__mobile__container">
            <div className="company__mobile__data__main">
              <div className="company__mobile__data__main__img">
                <img  src="https://grupokpg.com/images/home/company.webp" alt="" />
              </div>
              <div className="company__mobile__data__main__info">
                <h3>Empresas da KPG S/A</h3>
                <p>
                  “Sonhe grande, mas comece pequeno”, essa frase nos guiou no
                  início. Começamos pequenos, mas sempre com visão de futuro.
                  Hoje, somos referência, possuimos um crescimento exponencial e
                  estamos focados no nosso propósito.
                </p>
              </div>
            </div>
          
            <div className="company__mobile__data__cards">
              <Card/>
            </div>
          </div>


        </section>
      )}
    </div>
  );
};

export default Company;

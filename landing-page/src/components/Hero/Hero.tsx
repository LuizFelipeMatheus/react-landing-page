import Button from "../Button/Button";
import Statistics from "./components/Statistics";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-contentainer">
        <span className="badge">Plataforma de Aprendizado do Futuro</span>
        <h1 className="hero-title">
          Gestão de aprendizado inteligente para <span>escolas técnicas</span>
        </h1>
        <p className="hero-description">
          Centralize avaliações, presença e progresso dos alunos em uma
          interface intuitiva e potente. Desenvolvido para instituições que
          buscam excelência acadêmica.
        </p>

        <div className="hero-buttons">
          <Button
            label="Explorar Funcionalidades"
            onClick={() => {}}
            filled={true}
            border={false}
          />
          <Button
            label="Saiba mais"
            onClick={() => {}}
            filled={false}
            border={true}
          />
        </div>

        <div className="hero-statistics">
            <Statistics data="+120" description="escolas técnicas" />
            <Statistics data="+48 mil" description="alunos ativos" />
            <Statistics data="4.9⭐" description="avaliação média" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
 
// Barra de navegação fixa do site
import "./Navbar.css";
import Button from "../Button/Button";

function showMessage() {
    alert("Botão clicado!");
}

function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">EduTrack</a>
                <ul className="navbar-menu">
                    <li><a className="link" href="#sobre">Sobre</a></li>
                    <li><a className="link" href="#funcionalidades">Funcionalidades</a></li>
                    <li><a className="link" href="#equipe">Equipe</a></li>
                    <li><a className="link" href="#contato">Contato</a></li>
                </ul>
                <div className="navbar-buttons">
                    <Button label="Login" onClick={showMessage} filled={false} border={false} />
                    <Button label="Começar agora" onClick={showMessage} filled={true} border={false} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
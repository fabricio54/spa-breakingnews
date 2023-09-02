// importando a logo
import logo from '../../images/LogoBN.png';
// importando o css
import "./Navbar.css";

export function Navebar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Pesquise por um título"/>
                </div>

                <img src={ logo } alt="Logo Breaking News" />

                <button>Entrar</button>
            </nav>
        </>
    )
}
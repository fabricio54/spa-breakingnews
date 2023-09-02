// importando a logo
import logo from '../../images/LogoBN.png';
// importando o css
//import "./Navbar.css";
import { Nav, Button, ImageLogo, InputSpace } from './NavbarStyled';

export function Navebar() {
    return (
        <>
            <Nav>
                <InputSpace>
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Pesquise por um título" />
                </InputSpace>

                <ImageLogo src={logo} alt="Logo Breaking News" />

                <Button>
                    Entrar
                </Button>
            </Nav>

        </>
    )
}

// criamos um componente css fora da função (nesse ou em outro arquivo. nesse caso vamos utilizar esse mesmo arquivo) criamos um componente css com crase com na linguagem isso com a tag que você deseja configurar e configuramos. e depois podemos importar o componente para a função acima

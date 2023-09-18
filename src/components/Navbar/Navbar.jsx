// importando a logo
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../images/LogoBN.png';
// importando o css
//import "./Navbar.css";
import { Nav, ImageLogo, InputSpace, ErrorSpan } from './NavbarStyled';
import { Button } from '../Button/Button';
// modulo de formularios do hook
import { useForm } from 'react-hook-form';
// importando o zod
import { z } from 'zod';
// importando a função que você nomeou para validação
import { zodResolver } from "@hookform/resolvers/zod";

// criando a constante fora do escopo da função
const searchSchema = z.object({
    title: z.string().nonempty({ message: "A pesquisa não pode ser vazia " }).refine(value => !/^\s*$/.test(value), { message: "A pesquisa não pode ter apenas espaço" }),
})

export function Navebar() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(searchSchema)
    });
    // navega pelas rotas 
    const navigate = useNavigate();

    function onSearch(data) {
        // descontruindo o objeto data
        const { title } = data;
        // navegando para uma rota com função do react-root-dom 
        navigate(`/search/${title}`);
        reset();
    }

    function goAuth() {
        navigate("/auth");
    }

    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>
                        <button type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                        <input {...register("title")} type="text" placeholder="Pesquise por um título" />
                    </InputSpace>
                </form>

                <Link to="/">
                    <ImageLogo src={logo} alt="Logo Breaking News" />
                </Link>

                <Link to="/auth">
                    <Button onClick={goAuth} type="button" text="Entrar">
                        Entrar
                    </Button>
                </Link>
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            <Outlet />
        </>
    )
}

// criamos um componente css fora da função (nesse ou em outro arquivo. nesse caso vamos utilizar esse mesmo arquivo) criamos um componente css com crase com na linguagem isso com a tag que você deseja configurar e configuramos. e depois podemos importar o componente para a função acima

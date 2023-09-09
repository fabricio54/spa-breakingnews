import { Navebar } from "../../components/Navbar/Navbar"
import { Card } from "../../components/Card/Card";
import { news } from "../../Datas";
import { HomeBody } from "./HomeStyled";

//import { Button } from "../../components/Navbar/NavbarStyled";

export default function Home() {
    // regra do react: para retornamos um componente temos que retornalo dentro de uma so tag 

    // utilizando o conceito de props passamos o props e index (o react para indentificar o indice do objeto que estamos passando ele pede o key ) na função do componente que estamos importando (Card) e retornamos
    return (
        <>
            <Navebar />
            <HomeBody>
                {news.map((item, index) => {
                return <Card key={index}props={item}/>;
            })}
            </HomeBody>
        </>
    )
}

// como eu sei o que é um componente: ele retornará html
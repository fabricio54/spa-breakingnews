import { Navebar } from "../../components/Navbar/Navbar"
import { Card } from "../../components/Card/Card";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { getAllPosts, getTopPost } from "../../services/postsServices";
// importando um modulo de hucks do react
import { useState, useEffect } from "react";
// utizamos hucks para atualizar um estado de uma variável já que o react utiliza o conceito de atualização

//import { Button } from "../../components/Navbar/NavbarStyled";

export default function Home() {

    // desconstruindo o array que vem de useState onde pegamos a variável em si para uso e setNews (um padrão de mercado) especificamos o valor dela nos parâmetros da função. toda vez que chamarmos a função setNews ela vai alterar o estado da variável criada.
    const [posts, setPosts] = useState([]);
    const [topPost, setTopPost] = useState({});

    async function findNews() {
        const postsResponse = await getAllPosts();
        console.log(postsResponse)
        // modificamos o valor da variável news chamando a função setNews e passando o que configuramos no useState um array
        setPosts(postsResponse.data.results);

        const topPostResponse = await getTopPost();
        setTopPost(topPostResponse.data.post);
    }

    // nesse estado passamos dois parâmetros: uma erofunction (o que vai acontecer ) e um dependecilist (quem ele precisa monitorar para da o efeito na tela)
    useEffect(() => {
        findNews();
    }, []); // deixar o array vazio signfica que esse efeito será feito uma vez e se colocarmos a news ele ficará em lupping infinito

    // regra do react: para retornamos um componente temos que retornalo dentro de uma so tag 

    // utilizando o conceito de props passamos o props e index (o react para indentificar o indice do objeto que estamos passando ele pede o key ) na função do componente que estamos importando (Card) e retornamos
    return (
        <>
            <HomeHeader>
                <Card
                    top={true}
                    title={topPost.title}
                    text={topPost.text}
                    banner={topPost.banner}
                    likes={topPost.likes}
                    comments={topPost.comments} />
            </HomeHeader>
            <HomeBody>
            {posts.map((item) => {

                return <Card
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    banner={item.banner}
                    likes={item.likes}
                    comments={item.comments}
                />;
            })}
        </HomeBody >
        </>
    )
}

// como eu sei o que é um componente: ele retornará html
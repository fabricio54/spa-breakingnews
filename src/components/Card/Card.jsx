// pegando o array de objetos
//import { news } from '../../Datas.js';

import { CardContainer, CardBody, CardFooter } from "./CardStyled";

export function Card(item) {
    return ( 
        <CardContainer>
            <CardBody>
            <div>
                <h2>{item.props.title}</  h2>
                <p>{item.props.text}</p>
            </div>
            <img src={item.props.image} alt="Imagem" />
            </CardBody>
            <CardFooter>
                <section>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{item.props.likes}</span>
                </section>
                <section>
                    <i className="bi bi-chat"></i>
                    <span>{item.props.comments}</span>
                </section>
            </CardFooter>
    </CardContainer>
    )
}
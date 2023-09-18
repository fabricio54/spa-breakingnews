// componente criado para limitar o texto de acordo com os parâmetros utilizados e retorna o componente
export function TextLimit({ text, limit }) {
    const textLimit = text?.length > limit ? `${text.substring(0, limit)}...` : text;

    return <p>{textLimit}</p>;
}
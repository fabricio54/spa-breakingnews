import { Navebar } from "../../components/Navbar/Navbar"

export default function Home() {
    // regra do react: para retornamos um componente temos que retornalo dentro de uma so tag 
    return (
        <>
            <Navebar />
            <h1>Ola Home</h1>
        </>


    )
}

// como eu sei o que é um componente: ele retornará html
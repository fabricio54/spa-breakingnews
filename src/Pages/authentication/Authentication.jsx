import { AuthContainer } from "./AuthenticationStyled";
import { Section } from "./AuthenticationStyled";
import { Input } from "../../components/input/input";
import { Button } from "../../components/Button/Button";

export function Authentication() {
    return (
        <AuthContainer>
            <Section type="signin">
                <h2>Entrar</h2>
                <form>
                    <Input type="email" placeholder="E-mail"
                    name="email"
                    />
                    <Input type="password" placeholder="Senha" name="password"/>
                    <Button type="submit" text="Entrar"/>
                </form>
            </Section>
            <Section type="signup">
                <h2>Cadastrar</h2>
                <form>
                    <Input type="text" placeholder="Nome" name="name"/>
                    <Input type="email" placeholder="E-mail"/>
                    <Input type="password" placeholder="Senha" name="password" />

                    <Button type="submit" text="Cadastrar"/>
                </form>
            </Section>
        </AuthContainer>
    )
}
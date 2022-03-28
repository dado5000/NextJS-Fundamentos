import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <Layout titulo="Usando componente com PROPS">
            <Cabecalho titulo="Next.js e React" />
            <Cabecalho titulo="na Prática" />
        </Layout>
    )
}
import Layout from "../components/Layout"

export default function Jsx() {

    const titulo = "JSX é um conceito Central"
    const sub = "muito legal"

    function subtitulo() {
        return sub.toUpperCase()
    }

    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                <h1>{titulo}</h1>
                <h2>{subtitulo()}</h2>
                <p>
                    {JSON.stringify({nome: 'Daverson', idade: 32})}
                </p>
            </div>
        </Layout>
    )
}
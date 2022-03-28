import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="/estiloso" texto="Estiloso" cor="crimson" />
            <Navegador destino="/exemplo" texto="Exemplo" />
            <Navegador destino="/jsx" texto="jsx" cor="#4b0082"/>
            <Navegador destino="/navegacao" texto="Navegação" cor="green"/>
        </div>
    )
}

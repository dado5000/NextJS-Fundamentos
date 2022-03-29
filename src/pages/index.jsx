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
            <Navegador destino="/cliente/sp/123" texto="Navegação #02" cor="blue"/>
            <Navegador destino="/estado" texto="Componente com Estado" cor="grey"/>
            <Navegador destino="/integracao_01" texto="Integracao com API local #01" cor="red"/>
            <Navegador destino="/estatico" texto="Conteúdo Estático" cor="#fa054a"/>
        </div>
    )
}

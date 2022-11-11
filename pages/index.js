import { useState } from 'react';

function Home() {
    return (
    <div>
        <h2>HOME</h2>
        <Contador />
    </div>
    )
}

function Contador () {
    const [contador, setContador] = useState(1);

    function adicionarcontador () {
        setContador(contador + 1);
    }
        return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarcontador}>Adicionar</button>
        </div>
    )
}
export default Home
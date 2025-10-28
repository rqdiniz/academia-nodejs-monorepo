import React from 'react'

export interface Cliente {
  id: string
  conta: string
  nome: string
  nif: string
  telemovel: string
  tipo?: string
}

interface Props {
  clientes: Cliente[]
}

const ClientesGrid: React.FC<Props> = ({ clientes }) => {
  if (!clientes || clientes.length === 0) {
    return <p className="card">Sem resultados</p>
  }

  return (
    <ul className="grid" aria-live="polite">
      {clientes.map(c => (
        <li key={c.id} className="card" role="listitem">
          <h3>{c.nome}</h3>
          <p>NIF: {c.nif}</p>
          <p>Conta: {c.conta}</p>
          <p className="tipo">{c.tipo}</p>
        </li>
      ))}
    </ul>
  )
}

export default ClientesGrid

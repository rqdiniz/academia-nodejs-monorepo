import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

export default function SearchBar() {
  const ctx = useContext(SearchContext)
  if (!ctx) return null
  const { query, setQuery, handleSearch, handleClear, filter, setFilter } = ctx

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex gap-2">
        <input
          aria-label="Pesquisar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSearch() }}
          placeholder="Pesquisar..."
          className="flex-1 p-2 border rounded"
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 border rounded">
          <option>Nº cliente</option>
          <option>Nº de conta</option>
          <option>NIF/NIPC</option>
        </select>
        <button onClick={handleSearch} className="px-4 py-2 rounded bg-yellow-400 text-white">Pesquisar</button>
        <button onClick={handleClear} className="px-4 py-2 rounded border">Limpar</button>
      </div>
    </div>
  )
}

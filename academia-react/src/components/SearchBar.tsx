import React from 'react'

type Props = {
  query: string
  onQueryChange: (v: string) => void
  onSubmit: () => void
  onClear: () => void
  filter: string
  setFilter: (v: string) => void
}

export default function SearchBar({
  query,
  onQueryChange,
  onSubmit,
  onClear,
  filter,
  setFilter
}: Props) {
  const filters: string[] = ['Nº cliente', 'Nº de conta', 'NIF/NIPC', 'Nome', 'Nº telemóvel']

  return (
    <div className="w-full flex flex-col items-center px-4">
      <h2 className="text-xl font-bold mb-4">Pesquise o cliente que pretende consultar</h2>

      <div className="w-full max-w-4xl flex items-center gap-4">
        <div className="flex items-center border border-gray-300 rounded px-3 py-2 w-full">
          <svg className="w-5 h-5 text-gray-400 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') onSubmit() }}
            placeholder="Ex: 8708790"
            className="flex-1 outline-none text-lg bg-transparent"
          />
          {query && (
            <button aria-label="clear" onClick={onClear} className="ml-2 text-gray-500 hover:text-red-500">✕</button>
          )}
        </div>

        <button
          onClick={onSubmit}
          title="Pesquisar"
          className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center shadow-md text-white text-xl"
        >
          ➜
        </button>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        {filters.map((chip: string) => (
          <button
            key={chip}
            onClick={() => setFilter(chip)}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              filter === chip
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  )
}

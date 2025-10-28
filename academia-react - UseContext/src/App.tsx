import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import ClientCard from './components/ClientCard'
import { MOCK_CLIENTS, Client } from './data/mockClients'

function App() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Nº cliente')
  const [results, setResults] = useState<Client[]>([])

  const handleSearch = () => {
    const q = query.toLowerCase()
    const filtered = MOCK_CLIENTS.filter((client) => {
      if (filter === 'Nº cliente') return client.clientNumber.includes(q)
      if (filter === 'Nº de conta') return client.accountNumber?.includes(q)
      if (filter === 'NIF/NIPC') return client.nif.includes(q)
      if (filter === 'Nome') return client.name.toLowerCase().includes(q)
      if (filter === 'Nº telemóvel') return client.phone?.includes(q)
      return false
    })
    setResults(filtered)
  }

  const handleClear = () => {
    setQuery('')
    setResults([])
  }

 
  useEffect(() => {
    if (query.trim() !== '') {
      handleSearch()
    } else {
      setResults([])
    }
  }, [query, filter])

  return (
    <div className="bg-udcsBg text-gray-800 font-sans min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <SearchBar />
        {results.length > 0 && (
          <>
            <h3 className="mb-2 font-medium">Seleciona o cliente</h3>
            <div className="flex flex-col gap-4">
              {results.map((client) => (
                <ClientCard key={client.id} client={client} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App

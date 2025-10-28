import React, { createContext, useState, ReactNode } from 'react'
import { Client, MOCK_CLIENTS } from '../data/mockClients'

type SearchContextType = {
  query: string
  setQuery: (v: string) => void
  filter: string
  setFilter: (v: string) => void
  results: Client[]
  handleSearch: () => void
  handleClear: () => void
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Nº cliente')
  const [results, setResults] = useState<Client[]>([])

  const handleSearch = () => {
    const q = query.toLowerCase()
    const filtered = MOCK_CLIENTS.filter((client) => {
      if (filter === 'Nº cliente') return client.clientNumber.includes(q)
      if (filter === 'Nº de conta') return client.accountNumber?.includes(q)
      if (filter === 'NIF/NIPC') return client.nif.includes(q)
      return false
    })
    setResults(filtered)
  }

  const handleClear = () => {
    setQuery('')
    setResults([])
  }

  return (
    <SearchContext.Provider value={{ query, setQuery, filter, setFilter, results, handleSearch, handleClear }}>
      {children}
    </SearchContext.Provider>
  )
}

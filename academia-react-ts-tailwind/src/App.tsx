import React, { useState } from 'react';
import { mockClients } from './data/mockClients';
import { SearchBar } from './components/SearchBar';
import { ClientCard } from './components/ClientCard';

const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtered = mockClients.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='flex flex-col items-center min-h-screen py-10'>
      <h1 className='text-3xl font-bold mb-8'>Academia React / TS / Tailwind</h1>
      <SearchBar query={query} onChange={setQuery} />
      <div className='flex flex-wrap justify-center gap-4'>
        {filtered.map(client => (
          <ClientCard key={client.id} {...client} />
        ))}
      </div>
    </div>
  );
};

export default App;

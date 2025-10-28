import React from 'react'
import { Client } from '../data/mockClients'

type Props = {
  client: Client
}

export default function ClientCard({ client }: Props) {
  return (
    <div className="flex flex-col gap-3 p-4 bg-white rounded shadow hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 rounded-full p-3">
          <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.304.48 6.121 1.342M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{client.name}</h3>
          <p className="text-sm text-gray-500">
            Nº cliente <span className="font-semibold">{client.clientNumber}</span> &nbsp;
            NIPC <span className="font-semibold">{client.nif}</span>
          </p>
        </div>
      </div>
      <div className="mt-2">
        <span className={`px-2 py-1 text-xs rounded-full font-medium ${client.type === 'EMPRESA' ? 'bg-indigo-100 text-indigo-800' : 'bg-green-100 text-green-800'}`}>
          {client.type}
        </span>
      </div>
    </div>
  )
}

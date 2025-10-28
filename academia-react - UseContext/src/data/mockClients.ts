export type Client = {
  id: string
  clientNumber: string
  accountNumber?: string
  nif: string
  name: string
  phone?: string
  type: 'EMPRESA' | 'PESSOA'
}

export const MOCK_CLIENTS: Client[] = [
  {
    id: '1',
    clientNumber: '8708790',
    accountNumber: 'ACC001',
    nif: '181452006',
    name: 'TESTE DA MARIA JOÃO',
    phone: '912345678',
    type: 'EMPRESA'
  },
  {
    id: '2',
    clientNumber: '1234567',
    accountNumber: 'ACC002',
    nif: '205678901',
    name: 'PEDRO ALMEIDA',
    phone: '913456789',
    type: 'PESSOA'
  },
  {
    id: '3',
    clientNumber: '9988776',
    accountNumber: 'ACC003',
    nif: '123123123',
    name: 'ACME INDUSTRIES LDA',
    phone: '914567890',
    type: 'EMPRESA'
  },
  {
    id: '4',
    clientNumber: '5553339',
    accountNumber: 'ACC004',
    nif: '321654987',
    name: 'JOANA SOUSA',
    phone: '915678901',
    type: 'PESSOA'
  },
  {
    id: '5',
    clientNumber: '8844221',
    accountNumber: 'ACC005',
    nif: '987654321',
    name: 'XPTO SOLUÇÕES DIGITAIS',
    phone: '916789012',
    type: 'EMPRESA'
  },
  {
    id: '6',
    clientNumber: '7788990',
    accountNumber: 'ACC006',
    nif: '111222333',
    name: 'CARLOS MARTINS',
    phone: '917890123',
    type: 'PESSOA'
  },
  {
    id: '7',
    clientNumber: '1100220',
    accountNumber: 'ACC007',
    nif: '999888777',
    name: 'DELTA COMÉRCIO, LDA',
    phone: '918901234',
    type: 'EMPRESA'
  },
  {
    id: '8',
    clientNumber: '4433221',
    accountNumber: 'ACC008',
    nif: '555666777',
    name: 'ANA TEIXEIRA',
    phone: '919012345',
    type: 'PESSOA'
  },
  {
    id: '9',
    clientNumber: '6677889',
    accountNumber: 'ACC009',
    nif: '444555666',
    name: 'ALPHA GROUP',
    phone: '910123456',
    type: 'EMPRESA'
  },
  {
    id: '10',
    clientNumber: '9990001',
    accountNumber: 'ACC010',
    nif: '333444555',
    name: 'MIGUEL TORRES',
    phone: '911234567',
    type: 'PESSOA'
  }
]

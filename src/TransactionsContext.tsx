import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';



interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category:string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id'| 'createdAt'>;

interface TransactionsProviderProps{
    children: ReactNode;
}

interface TranscationsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TranscationsContextData>({} as TranscationsContextData);

export function TransacionsProvider({children}: TransactionsProviderProps){
    const data = useContext(TransactionContext);

    const[transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        api.get('/transactions')
            .then(response=>setTransactions(response.data.transactions))
    },[]);

    async function createTransaction(transaction: TransactionInput){
          await api.post('/transactions', transaction)
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    ); 
}
import { Dashboard } from './components/Dashboard';
import {Header} from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import {useState} from 'react';
import {NewTransactionModal} from './components/NewTransactionModal'
import { TransacionsProvider, TransactionContext } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {

  const[isNewTransactionModalOpen, setIsNewTransactionModalOpen]= useState(false);
  
  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransacionsProvider>
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onResquestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransacionsProvider>
  );
}


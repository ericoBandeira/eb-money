import Modal from 'react-modal'

interface NewTransactionModalProps{
    isOpen: boolean;
    onResquestClose: () => void;
}

export function NewTransactionModal({isOpen, onResquestClose}:NewTransactionModalProps){

    

    return(
        <Modal
          isOpen={isOpen}
          onRequestClose={onResquestClose}
        >
          <h2>cadastrar transação</h2>
      </Modal>
    );
}
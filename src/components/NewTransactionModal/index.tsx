import Modal from 'react-modal'
import { Container } from './styles'
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps{
    isOpen: boolean;
    onResquestClose: () => void;
}

export function NewTransactionModal({isOpen, onResquestClose}:NewTransactionModalProps){

    

    return(
        <Modal
          isOpen={isOpen}
          onRequestClose={onResquestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <button 
            type="button" 
            onClick={onResquestClose}
            className="react-modal-close"
          >
            <img src={closeImg} alt="Fechar modal"/>
          </button>
          <Container>
              <h2>Cadastrar transações</h2>
              <input
                placeholder="Título"
              />
              <input
                type = "number"
                placeholder="Valor"
              />
              <input
                placeholder="Categoria"
              />
              <button type="submit">
                Cadastrar
              </button>
          </Container>
      </Modal>
    );
}
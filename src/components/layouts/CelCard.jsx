/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './CelCard.css';
import Modal from 'react-modal';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

export default function CelCard({
  modelo,
  marca,
  specs,
  preco,
  imagem,
  id,
  handleRemove,
}) {
  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalRemove, setRemove] = useState(false);

  function precoPadrao() {
    return preco.toFixed(3);
  }

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleOpenModalRemove() {
    setRemove(true);
  }
  function afterOpenModal() {
    subtitle.style.color = '#808080';
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  function handleCloseModalRemove() {
    setRemove(false);
  }

  function remove(e) {
    e.preventDefault();
    handleRemove(id);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: '#80808099',
    },
  };
  return (
    <div>
      <div className="cel_card">
        <a onClick={handleOpenModal}>
          <div>
            <h4>{modelo}</h4>

            <p className="marca">{marca}</p>

            <img src={imagem} alt={'...'}></img>
            <p className="preco">
              {(preco * 1).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <p className="vista">
              à vista (10% de desconto) Economize{' '}
              {(preco * 0.1 * 1).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        </a>
        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          onAfterOpen={afterOpenModal}
        >
          <div className="titulo_fechar">
            <h4>{modelo}</h4>
            <a onClick={handleCloseModal}>
              <AiOutlineClose />
            </a>
          </div>
          <p className="modal_marca">{marca}</p>

          <img className="modal_imagem" src={imagem} alt={'...'}></img>
          <p className="modal_preco">
            {(preco * 1).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <p className="modal_specs"> Tamanho: {specs}</p>

          <Link to={`/celular/${id}`}>
            <div className="div_ver_mais">
              <p className="ver_mais">Ver mais</p>
            </div>
          </Link>
          <button className="button_excluir" onClick={handleOpenModalRemove}>
            Excluir
          </button>
          <Modal
            style={customStyles}
            isOpen={modalRemove}
            onRequestClose={handleCloseModalRemove}
            onAfterOpen={afterOpenModal}
          >
            <h4>Tem certeza que deseja excluir esse celular ?</h4>
            <div className="delete_buttons">
              <button className="button_delete" onClick={remove}>
                Sim
              </button>
              <button
                className="button_delete"
                onClick={handleCloseModalRemove}
              >
                Não
              </button>
            </div>
          </Modal>
        </Modal>
      </div>
    </div>
  );
}

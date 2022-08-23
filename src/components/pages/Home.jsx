import './Home.css';
import { useState, useEffect } from 'react';
import CelCard from '../layouts/CelCard';

export default function Home() {
  const [celulares, setCel] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/celulares', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCel(data);
      })
      .catch((err) => console.log(err));
  });
  function removeCelular(id) {
    fetch(`http://localhost:5000/celulares/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(resp => resp.json())
      .then(() => {
        setCel(celulares.filter((project) => project.id !== id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="div_cards">
        <h1 className="tittle">Todos os celulares</h1>
        <div className="cards">
          {celulares.length > 0 &&
            celulares.map((celular) => (
              <CelCard
                imagem={celular.imagem}
                marca={celular.marca}
                modelo={celular.modelo}
                preco={celular.preco}
                specs={celular.specs}
                key={celular.id}
                id={celular.id}
                handleRemove={removeCelular}
              />
            ))}
        </div>
      </div>
    </>
  );
}

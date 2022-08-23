import './NewCel.css';
import CelForm from '../form/CelForm';
import { useNavigate } from 'react-router-dom';

export default function NewCel() {
  const history = useNavigate();

  function createCelular(celular) {
    fetch('http://localhost:5000/celulares', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(celular),
    })
      .then((resp) => resp.json())
      .then(() => {
        history('/');
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <h1 className="create_tittle">Cadastrar Celular</h1>
      <div className="form_container">
        <CelForm handleSubmit={createCelular} />
      </div>
    </>
  );
}

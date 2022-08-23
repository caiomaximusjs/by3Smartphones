import './CelForm.css';
import { useState } from 'react';
import SubmitButton from './SubmitButton';
import Input from './Input';

export default function CelForm({ handleSubmit, celData }) {
  const [cel, setCel] = useState(celData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(cel);
    
  };

  function handleChange(e) {
    setCel({ ...cel, [e.target.name]: e.target.value });
    
  }

  return (
    <form onSubmit={submit} className="form">
      <Input
        type="text"
        text="Marca do celular"
        name="marca"
        placeholder="ex: Samsung, Xiaomi, Apple..."
        handleOnChange={handleChange}
        value={cel.marca ? cel.marca : 'sabor'}
      />
      <Input
        type="text"
        text="Modelo do celular"
        name="modelo"
        placeholder="Ex: Iphone 13 Pro Max, s22 Ultra..."
        handleOnChange={handleChange}
        value={cel.modelo ? cel.modelo : ''}
      />
      <Input
        type="text"
        text="especificações do celular"
        name="specs"
        placeholder="ex: 16gb/128gb"
        handleOnChange={handleChange}
        value={cel.specs ? cel.specs : ''}
      />
      <Input
        type="text"
        text="URL da imagem do celular"
        name="imagem"
        placeholder="URL da imagem do celular"
        handleOnChange={handleChange}
        value={cel.imagem}
      />
      <Input
        type="number"
        text="Preço"
        name="preco"
        placeholder="Insira o preço do celular ex:"
        handleOnChange={handleChange}
        value={cel.preco ? cel.preco : ''}
      />
      <SubmitButton text="cadastrar" />
    </form>
  );
}

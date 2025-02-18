import React, { useState } from 'react';
import './ConsultaCEP.css';

const ConsultaCEP = () => {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const buscarCEP = async () => {
    if (cep.length !== 9) {
      setErro("CEP inválido! Certifique-se de digitar no formato 99999-999.");
      return;
    }

    setLoading(true);
    setErro('');
    setDados(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro("CEP não encontrado!");
      } else {
        setDados(data);
      }
    } catch {
      setErro("Erro ao buscar CEP. Tente novamente.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Consulta de CEP</h1>
      
      <input
        type="text"
        value={cep}
        onChange={(e) => {
          let valor = e.target.value.replace(/\D/g, "");
          if (valor.length > 5) {
            valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
          }
          if (valor.length <= 9) {
            setCep(valor);
          }
        }}
        maxLength="9"
        className="input"
        placeholder="Digite o CEP"
      />

      <button className="button" onClick={buscarCEP} disabled={loading}>
        {loading ? "Carregando..." : "Buscar"}
      </button>

      {erro && <p className="error">{erro}</p>}

      {dados && (
        <div className="resultado">
          <h2>Endereço</h2>
          <p><strong>Logradouro:</strong> {dados.logradouro}</p>
          <p><strong>Bairro:</strong> {dados.bairro}</p>
          <p><strong>Cidade:</strong> {dados.localidade} - {dados.uf}</p>
          <p><strong>CEP:</strong> {dados.cep}</p>
        </div>
      )}
    </div>
  );
};

export default ConsultaCEP;

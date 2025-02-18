import React, { useState, useEffect } from 'react';
import './Formulario.css';  // Importando o CSS

const Formulario = () => {
  // States para armazenar os valores dos campos
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefoneFixo, setTelefoneFixo] = useState('');
  const [celular, setCelular] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [nomePai, setNomePai] = useState('');
  const [nomeMae, setNomeMae] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const [erroNome, setErroNome] = useState('');
  const [erroNascimento, setErroNascimento] = useState('');
  const [erroCPF, setErroCPF] = useState('');
  const [erroTelefoneFixo, setErroTelefoneFixo] = useState('');
  const [erroCelular, setErroCelular] = useState('');
  const [erroCEP, setErroCEP] = useState('');
  const [erroEndereco, setErroEndereco] = useState('');
  const [erroNumero, setErroNumero] = useState('');
  const [erroCidade, setErroCidade] = useState('');
  const [erroEstado, setErroEstado] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState('');
  const [erroNomePai, setErroNomePai] = useState('');
  const [erroNomeMae, setErroNomeMae] = useState('');
  const [idade, setIdade] = useState(null);

  useEffect(() => {
    const calcularIdade = () => {
      if (dataNascimento) {
        const nascimento = new Date(dataNascimento);
        const hoje = new Date();
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const m = hoje.getMonth() - nascimento.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
          idade--;
        }
        setIdade(idade);
      }
    };

    calcularIdade();
  }, [dataNascimento]);

  // Máscaras
  useEffect(() => {
    const aplicarMascara = () => {
      setCpf(cpf.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
      setTelefoneFixo(telefoneFixo.replace(/\D/g, '').replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'));
      setCelular(celular.replace(/\D/g, '').replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2$3-$4'));
      setCep(cep.replace(/\D/g, '').replace(/(\d{5})(\d{3})/, '$1-$2'));
    };

    aplicarMascara();
  }, [cpf, telefoneFixo, celular, cep]);

  // Validação de campos
  const validarCampos = () => {
    let valido = true;

    if (!nomeCompleto.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
      setErroNome('Nome completo inválido. Deve conter nome e sobrenome.');
      valido = false;
    } else {
      setErroNome('');
    }

    const cpfValido = validarCPF(cpf.replace(/\D/g, ''));
    if (!cpfValido) {
      setErroCPF('CPF inválido.');
      valido = false;
    } else {
      setErroCPF('');
    }

    if (!telefoneFixo.match(/^\(\d{2}\)\s\d{4}-\d{4}$/)) {
      setErroTelefoneFixo('Telefone fixo inválido.');
      valido = false;
    } else {
      setErroTelefoneFixo('');
    }

    if (!celular.match(/^\(\d{2}\)\s9\d{4}-\d{4}$/)) {
      setErroCelular('Celular inválido.');
      valido = false;
    } else {
      setErroCelular('');
    }

    if (!cep.match(/^\d{5}-\d{3}$/)) {
      setErroCEP('CEP inválido.');
      valido = false;
    } else {
      setErroCEP('');
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setErroEmail('Email inválido.');
      valido = false;
    } else {
      setErroEmail('');
    }

    if (senha.length < 8) {
      setErroSenha('Senha deve ter pelo menos 8 caracteres.');
      valido = false;
    } else {
      setErroSenha('');
    }

    if (senha !== confirmarSenha) {
      setErroConfirmarSenha('As senhas não coincidem.');
      valido = false;
    } else {
      setErroConfirmarSenha('');
    }

    if (!endereco) {
      setErroEndereco('Endereço é obrigatório.');
      valido = false;
    } else {
      setErroEndereco('');
    }

    if (!numero) {
      setErroNumero('Número é obrigatório.');
      valido = false;
    } else {
      setErroNumero('');
    }

    if (!cidade) {
      setErroCidade('Cidade é obrigatória.');
      valido = false;
    } else {
      setErroCidade('');
    }

    if (!estado) {
      setErroEstado('Estado é obrigatório.');
      valido = false;
    } else {
      setErroEstado('');
    }

    return valido;
  };

  // Função para validar o CPF
  const validarCPF = (cpf) => {
    if (cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || 
        cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || 
        cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || 
        cpf === "99999999999") {
      return false;
    }
    
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (validarCampos()) {
    setSucesso(true);
    setTimeout(() => setSucesso(false), 3000);
  }

};

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Informações Pessoais</legend>
        <label>Nome Completo</label>
        <input
          type="text"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
        />
        <span>{erroNome}</span>

        <label>Data de Nascimento</label>
        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
        <span>{erroNascimento}</span>

        <label>CPF</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <span>{erroCPF}</span>

        <label>Telefone Fixo</label>
        <input
          type="text"
          value={telefoneFixo}
          onChange={(e) => setTelefoneFixo(e.target.value)}
        />
        <span>{erroTelefoneFixo}</span>

        <label>Celular</label>
        <input
          type="text"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
        <span>{erroCelular}</span>
      </fieldset>

      {idade < 18 && (
        <fieldset>
          <legend>Informações dos Pais</legend>
          <label>Nome do Pai</label>
          <input
            type="text"
            value={nomePai}
            onChange={(e) => setNomePai(e.target.value)}
          />
          <span>{erroNomePai}</span>

          <label>Nome da Mãe</label>
          <input
            type="text"
            value={nomeMae}
            onChange={(e) => setNomeMae(e.target.value)}
          />
          <span>{erroNomeMae}</span>
        </fieldset>
      )}

      <fieldset>
        <legend>Endereço</legend>
        <label>Endereço</label>
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <span>{erroEndereco}</span>

        <label>Número</label>
        <input
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <span>{erroNumero}</span>

        <label>Complemento (opcional)</label>
        <input
          type="text"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />

        <label>Cidade</label>
        <input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <span>{erroCidade}</span>

        <label>Estado</label>
        <input
          type="text"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
        <span>{erroEstado}</span>
      </fieldset>

      <fieldset>
        <legend>Credenciais</legend>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>{erroEmail}</span>

        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <span>{erroSenha}</span>

        <label>Confirmar Senha</label>
        <input
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
        <span>{erroConfirmarSenha}</span>
      </fieldset>
      
      {sucesso && <div className="sucesso">Formulário enviado com sucesso!</div>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;

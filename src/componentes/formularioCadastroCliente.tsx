import React from "react";
import "./formularioCadastroCliente.css";
import Pets from '../static/dogdog.png';

interface Props {
  tema: string;
}

interface State {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  cep: string;
}

export default class FormularioCadastroCliente extends React.Component<Props, State> {
  state: State = {
    nome: "",
    telefone: "",
    email: "",
    endereco: "",
    cep: "",
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    } as Pick<State, keyof State>);
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Dados do formulário:", this.state);

    this.setState({
      nome: "",
      telefone: "",
      email: "",
      endereco: "",
      cep: "",
    });
  };

  render() {
    const { tema } = this.props;

    return (
      <div className="container d-flex align-items-center justify-content-center tela-inicial">
        <form className="form" onSubmit={this.handleSubmit}>
          <p className="title">Cadastrar Cliente</p>
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
              required
            />
            <span>Nome</span>
          </label>
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              name="telefone"
              value={this.state.telefone}
              onChange={this.handleChange}
              required
            />
            <span>Telefone</span>
          </label>

          <label>
            <input
              className="input"
              type="email"
              placeholder=""
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <span>Email</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              name="endereco"
              value={this.state.endereco}
              onChange={this.handleChange}
              required
            />
            <span>Endereço</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              name="cep"
              value={this.state.cep}
              onChange={this.handleChange}
              required
            />
            <span>CEP</span>
          </label>
          <button className="submit" type="submit">
            Cadastrar
          </button>
        </form>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={Pets}
            alt="Imagem de destaque"
            className="img-fluid"
          />
        </div>
      </div>
    );
  }
}

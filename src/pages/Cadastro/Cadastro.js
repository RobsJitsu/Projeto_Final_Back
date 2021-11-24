import React from 'react'
import './Cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const nome = evento.target.nome.value; 
    const vocalista = evento.target.vocalista.value;
    const ano = evento.target.ano.value;
    const musica = evento.target.musica.value;

    const banda = {
      nome,
      vocalista,
      ano,
      musica
    }
    
    try {
      const response = await Api.fetchPost(banda)
      const result = await response.json();
      alert(result.message);
      history.push('/'); // forca o historico a voltar para a rota de / => home
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Vagas</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="nome" id="floatingInput" placeholder="Qual o nome"/>
                  <label htmlFor="floatingInput">nome</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="vocalista" id="floatingsalario" placeholder="Qual o vocalista"/>
                  <label htmlFor="floatingsalario">vocalista</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="ano" id="floatingInput" placeholder="Qual o ano"/>
                  <label htmlFor="floatingInput">ano</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select className="form-control" name="musica" id="floatingsenioridade" placeholder="Qual a música">
                    <option value="junior">Junior</option>
                    <option value="pleno">Pleno</option>
                    <option value="pleno">Senior</option>
                  </select>
                  <label htmlFor="floatingsenioridade">musica</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro

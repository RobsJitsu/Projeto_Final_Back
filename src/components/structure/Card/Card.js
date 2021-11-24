import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const vaga = props.data;
  return (
    <Link to={`/view/${vaga._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ vaga.resultado }</h5>
          <span className="badge bg-primary">{ vaga.resultado02 }</span>
          <span className="badge bg-light text-dark">R$ { vaga.resultado03 }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card

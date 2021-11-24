const Api = {
  apiUrl: 'https://projeto-final-mod03.herokuapp.com/',
  fetchGetAll: () => fetch(`${Api.apiUrl}/listar`),
  fetchGetById: id => fetch(`${Api.apiUrl}/listarnome/${id}`),
  
  fetchPost: (banco) => {
    return fetch(`${Api.apiUrl}/adicionar`, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(banco)
    })
  },
  fetchPut: (banco, id) => {
    return fetch(`${Api.apiUrl}/update/${id}`, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(banco)
    })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/deletar/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;

let headers = {
  'Content-Type': 'application/json'
}

const mget = ($url) => {
  return fetch($url)
          .then(response => response.json())
          .catch(e => console.error('Error: ', e))
}
 
const mpost = ($url) => {
  return fetch($url, {
    method: 'POST',
    headers: headers
  })
    .then(response => response.json())
    .catch(e => console.error('Error: ', e))
}

const mput = ($url, $id) => {
  return fetch($url + '/' + $id, {
    method: 'PUT',
    headers: headers
  })
    .then(response => response.json())
    .catch(e => console.error('Error: ', e))
}

const mdelete = ($url, $id) => {
  return fetch($url + '/' + $id, {
    method: 'DELETE',
    headers: headers
  })
    .then(response => response.json())
    .catch(e => console.error('Error: ', e))
}
export {mget, mpost, mput, mdelete}
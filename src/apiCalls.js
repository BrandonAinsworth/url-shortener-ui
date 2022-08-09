export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}


export const postUrls = (long, title) => {
  console.log('long',long)
  console.log('title',title)
   fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      'Content-Type' : "application/json"
    } ,
    body: JSON.stringify({
      long_url: long,
      title: title
    })
  })
}

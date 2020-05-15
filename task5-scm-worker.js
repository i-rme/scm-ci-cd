async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(someHTML, init)
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})
const someHTML =  `<!DOCTYPE html>
<html>
  <body>
  <h1>Hello World, this is Task5</h1>
  <p>This is all generated using a Worker</p>
  <p>Raúl</p>
  </body>
</html>
`

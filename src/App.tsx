// import ListGroup from './components/ListGroup'
// function App() {
//   let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
//   return (
//     <div>
//       <ListGroup items={items} heading="Cities" />
//     </div>
//   )
// }
// export default App

import Alert from './components/Alert'

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  )
}
export default App

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

import Button from './components/Button'

function App() {
  return (
    <div>
      <Button children="Button" color="primary" onClick={() => console.log('Clicked')} />
    </div>
  )
}
export default App

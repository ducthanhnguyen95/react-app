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

import { useState } from 'react'
import Button from './components/Button'
import Alert from './components/Alert'

function App() {
  const [alertVisible, setAlertVisible] = useState(false)
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  )
}
export default App

import { useState } from 'react'

interface Props {
  items: string[]
  heading: string
}

// import { MouseEvent } from 'react'
function ListGroup({ items, heading }: Props) {
  //   let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
  //   let selectedIndex = 0

  const [selectedIndex, setSelectedIndex] = useState(-1)

  // items = []
  //   const message = items.length === 0 ? <p>No item found</p> : null

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null
  //   }

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     )

  // Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>{heading}</h1>

      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {/* {message} */}
      {/* {getMessage} */}

      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          // onClick={() => console.log(item, index)
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup

import { useState } from 'react'
import styles from './ListGroup.module.css'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding: 0;
`
interface ListItemProps {
  active: boolean
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? 'blue' : 'none')};
`

interface Props {
  items: string[]
  heading: string
}

// import { MouseEvent } from 'react'
function ListGroup({ items, heading }: Props) {
  //   let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
  //   let selectedIndex = 0

  const [selectedIndex, setSelectedIndex] = useState(0)

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

      <List>
        {items.map((item, index) => (
          // onClick={() => console.log(item, index)
          <ListItem
            active={index === selectedIndex}
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index)
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListGroup

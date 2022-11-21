import React from 'react'
import { Nav } from 'react-bootstrap'

const NavCarousel = () => {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>Loooonger NavLink</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link> Disabled </Nav.Link>
    </Nav.Item>
  </Nav>
  )
}

export default NavCarousel
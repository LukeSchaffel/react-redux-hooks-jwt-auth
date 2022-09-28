import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth"
import { useCallback } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.authReducer);


  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);


  return (
    <>
      {user ?
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Friday Auth Template</Navbar.Brand>
            <Nav className="me-auto">
              {user.role === 'ADMIN' ?
                <Nav.Link href="/dashboard">Admin Dashboard</Nav.Link>
                :
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              }
              <Nav.Link href="/" onClick={logOut}>Log Out</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        :
        <Navbar bg="info" variant="dark">
          <Container>
            <Navbar.Brand href="/">Friday Auth Template</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">Log In</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      }
    </>
  )
}

export default NavBar

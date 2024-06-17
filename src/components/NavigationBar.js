/* import Library */
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

function NavigationBar(props) {
  let history = useHistory();

  const goHome = () => {
    props.shoes변경([props.shoes[0], props.shoes[1], props.shoes[2]]);
    history.push('/');
  };
  const goCart = () => {
    history.push('/cart');
  };

  const url = 'https://team-introduce.vercel.app/';

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={goHome}>
            <div className="opacity">NCT react</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={goHome}>홈화면</Nav.Link>
              <Nav.Link onClick={goCart}>장바구니</Nav.Link>
              <button
                onClick={() => {
                  window.open(url);
                }}
              >
                팀 소개
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;

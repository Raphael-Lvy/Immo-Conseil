import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo from "../../Assets/logo.svg";
import "./Navigation.css";

const Navigation = () => {
    return (
        <Navbar className='navTop fixed-top'  >

            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <h5 className='textLogo'>Immo conseil</h5>
            </Navbar.Brand>

            <DropdownButton
                menuAlign="right"
                title="Menu"
                id="dropdown-menu-align-right"
                bsPrefix='custom-btn'
                variant='theme'
                className='smallScreen'


            >
                <Dropdown.Item eventKey="1" href="/" className='item-mobile'>Financement immobilier</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="2" href="/shop" className='item-mobile'>Chasse</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="3" href="/cart" className='item-mobile'>Acheter</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4" href="/about" className='item-mobile'>Vendre</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="5" href="/about" className='item-mobile RDV'>Prendre RDV</Dropdown.Item>
            </DropdownButton>

            <Nav className="largeScreen" defaultActiveKey='#home'>
      <Nav.Link href="#home" >Financement immobilier</Nav.Link>
      <Nav.Link href="#features" >Chasse</Nav.Link>
      <Nav.Link href="#pricing" >Acheter</Nav.Link>
      <Nav.Link href="#vendre" >Vendre</Nav.Link>
    </Nav>



        </Navbar>

    );
};

export default Navigation;

/* const Styles = {

    menuButton : {
        backgroundcolor:'rgb(69,180,254)',
        fontSize: 50,
        borderRadius : 50
    }
} */
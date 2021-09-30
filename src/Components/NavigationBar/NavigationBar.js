import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './NavigationBar.css'


class NavigationBar extends React.Component{
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg = "light" variant="light" onToggle={(expanded) => {
                if(expanded)
                    document.getElementById("mynavs").classList.replace("gap-6", "gap-1");
                else
                    document.getElementById("mynavs").classList.replace("gap-1", "gap-6");
            }}>
                <Container>
                    <Navbar.Brand href="/" >
                        <img alt="DTU logo" src="https://i2.wp.com/mlsm.man.dtu.dk/wp-content/uploads/2018/10/technical-university-of-denmark-dtu-19-logo.png?fit=733%2C238&ssl=1"
                             width="200" height="70"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="gap-6" id="mynavs">
                            <Nav.Link href="/">Kurser</Nav.Link>
                            <Nav.Link href="/kalender">Kalender</Nav.Link>
                            <Nav.Link href="/karakter">Karakter</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div>
                        <Navbar.Collapse className="gap-3">
                            <img alt="profile picture" src="https://cdn.lifehack.org/wp-content/uploads/2014/03/shutterstock_97566446.jpg" className="rounded-circle" width="50" height="50"/>
                            <div className="d-grid">
                                <text className="" >Maria</text>
                                <text className="">s123456@student.dtu.dk</text>
                            </div>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar;
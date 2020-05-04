import React, { Component } from 'react';
import ItemModal from './ItemModal'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container
} from 'reactstrap';


class AppNavbar extends Component {

    state = {
        isOpen: false
    }

    toogle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Kitap Yorum</NavbarBrand>
                        <NavbarToggler onClick={this.toogle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="">Ana Sayfa</NavLink>

                                </NavItem>
                                <NavItem>
                                    <NavLink href="">Kitaplar</NavLink>

                                </NavItem>
                                <NavItem>
                                    <NavLink href="">Kullanıcı Girişi</NavLink>

                                </NavItem>
                                <NavItem>
                                   <ItemModal></ItemModal>

                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default AppNavbar;
import React from "react"
import logo from "../../images/logo.jpg"
import {
  Container,
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
} from "reactstrap"
// import "../main-nav/main-nav.scss"

class MainNav extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const navLinks = {
      linkOneText: "Home",
      linkTwo: "/home-renovation",
      linkTwoText: "Home Renovation",
      linkThree: "/home-additions",
      linkThreeText: "Home Additions",
      linkFour: "/custom-home-building",
      linkFourText: "Custom Home Building",
      linkFive: "/second-floor-additions",
      linkFiveText: "Second Floor Additions",
      linkSix: "/rear-home-additions",
      linkSixText: "Rear Home Additions",
      projectsLinkText: "Projects",
      projectOneText: "Project 1",
      projectTwoText: "Project 2",
      projectThreeText: "Project 3",
    }
    return (
      <div className="sticky-top">
        <Container>
          <Navbar light expand="lg">
            <NavbarBrand href="/">
              <img src={logo} alt="MC Aesthetics" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Services
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href={navLinks.linkTwo}>
                          {navLinks.linkTwoText}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href={navLinks.linkThree}>
                          {navLinks.linkThreeText}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href={navLinks.linkFour}>
                          {navLinks.linkFourText}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href={navLinks.linkFive}>
                          {navLinks.linkFiveText}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href={navLinks.linkSix}>
                          {navLinks.linkSixText}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href={navLinks.linkSeven}>
                    {navLinks.linkSevenText}
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {navLinks.projectsLinkText}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href={navLinks.linkTwo}>
                          {navLinks.projectOneText}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href={navLinks.linkThree}>
                          {navLinks.projectTwoText}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href={navLinks.linkFour}>
                          {navLinks.projectThreeText}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    )
  }
}

export default MainNav

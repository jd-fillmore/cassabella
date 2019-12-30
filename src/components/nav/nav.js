import React from "react"
import logo from "../../images/logo.png"
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
} from "reactstrap"
import "../nav/nav.scss"

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
      linkServices: "/services",
      linkServicesText: "Services",
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
      linkSeven: "/about",
      linkSevenText: "About",
      linkEight: "/contact",
      linkEightText: "Contact",
      projectsLinkText: "Projects",
      projectOneText: "Project 1",
      projectTwoText: "Project 2",
      projectThreeText: "Project 3",
    }
    return (
      <div className="container-fluid" data-aos="fade-in">
        <Navbar light expand="lg">
          <NavbarBrand href="/">
            <img src={logo} alt="Cass-A-Bella Construction" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {navLinks.linkServicesText}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href={navLinks.linkServices}>
                        {navLinks.linkServicesText}
                      </NavLink>
                    </NavItem>
                  </DropdownItem>
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
                <NavLink href={navLinks.linkSeven}>
                  {navLinks.linkSevenText}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={navLinks.linkEight}>
                  {navLinks.linkEightText}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MainNav

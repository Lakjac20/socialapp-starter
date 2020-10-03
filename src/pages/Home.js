import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import RegistrationForm from "../components/registrationForm/RegistrationForm";

import { userIsNotAuthenticated } from "../redux/HOCs";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBFormInline,
  MDBAnimation,
  MDBTabPane, MDBTabContent, MDBLink
} from "mdbreact";
import './Home.css'
class Home extends React.Component {
  state = {
    activeItemPills: '1'
  };
  togglePills = tab => () => {
    const { activePills } = this.state;
    if (activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  };
  render() {
    const { activeItemPills } = this.state;
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.togglePills("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">
        <Router>
          <div>
            <MDBNavbar dark expand="md" fixed="top">
              <MDBContainer>
               <MDBNavbarBrand>
                  <strong className="white-text">The Power Of Fifth</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
               onClick={this.togglePills("navbarCollapse")}
               />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.activeItemPills}
                  navbar
                >
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.tab && overlay}
          </div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    The 5th Power is a network of people who are helping others to find relaxation and strengthen their way of living 
                  </h6>
                  <MDBLink to='#' active={activeItemPills === '1'} onClick={this.togglePills('2')} link>
                  <MDBBtn color="indigo">
                    Click to get Sign Up Menu
                   </MDBBtn>
                   </MDBLink>
                   <MDBContainer>
          <MDBRow> 
            <MDBCol md='12'>
                <MDBTabContent activeItem={activeItemPills}>
                  <MDBTabPane tabId='2'>
                    <p>
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <RegistrationForm/>
                        <div className="text-center mt-4 black-text">
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
                </MDBAnimation>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Login:
                        </h3>
                        <hr className="hr-light" />
                        <LoginForm/>
                        <div className="text-center mt-4 black-text">
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="twitter"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="linkedin"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="instagram"
                                className="white-text"
                              />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
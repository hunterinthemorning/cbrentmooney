import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Button from 'react-bootstrap/Button'; 
import Modal from 'react-bootstrap/Modal'; 
import MediaQuery from 'react-responsive';

class App extends Component {

  state = {
    showNavMenu: false,
    showSidebar: false,
    //isMobile: false
    showModal: false
  }

  toggleNavMenu = (event) => {
    const doesShow = this.state.showNavMenu;
    this.setState({showNavMenu: !doesShow});
  }

  toggleModal = (event) => {
    const doesShow = this.state.showModal;
    this.setState({showModal: !doesShow});
  }

  openSidebar = (event) => {
    //const doesShow = this.state.showSidebar;
    //this.setState({showSidebar: !doesShow});
    this.setState({showSidebar: true});
  }

  closeSidebar = (event) => {
    this.setState({showSidebar: false});
  }

  render() {

    let navMenu = null;
    //Look at react meetup code to slide this in slowly
    if(this.state.showNavMenu){
      navMenu = (
        <div id="navMenu">
          <ul>
            <li><a onClick={(event) => this.openSidebar(event)}>About Me</a></li>
            <li><a onClick={(event) => this.openSidebar(event)}>Portfolio</a></li>
            <li><a onClick={(event) => this.openSidebar(event)}>Contact</a></li>
          </ul>
        </div>
      );
    }

    let sidebar = null;
    if(this.state.showSidebar){
      sidebar = (
        <Col>  
          <div id="sidebar">
            <a id="closeButton" onClick={(event) => this.closeSidebar(event)}>X</a>
            <div className="videoModalButton" onClick={(event) => this.toggleModal(event)}>Test</div>
          </div>
        </Col>
      );
    }

    return (
      <div className="App">

        <Modal
          show={this.state.showModal}
          onHide={(event) => this.toggleModal(event)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
          </Modal.Body>
        </Modal>

        <MediaQuery query="(min-device-width: 1224px)">

          <Row>
            {sidebar}
            <Col>
              <div id="navigation">
                {navMenu}
                <div id="navNameBox" onClick={(event) => this.toggleNavMenu(event)}>C Brent Mooney</div>
              </div>
            </Col>
          </Row>

        </MediaQuery>

        <MediaQuery query="(max-device-width: 1224px)">
        
        {this.state.showSidebar ? (
          <Row>
            {sidebar}
          </Row>
        ) : (
          <Row>
            <Col>
              <div id="navigationMobile">
                {navMenu}
                <div id="navNameBoxMobile" onClick={(event) => this.toggleNavMenu(event)}>C Brent Mooney</div>
              </div>
            </Col>
          </Row>
        )}

        </MediaQuery>
      </div>
    );
  }
}

export default App;

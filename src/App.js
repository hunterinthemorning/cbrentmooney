import React, { Component } from 'react';
import './App.css'; 
import MediaQuery from 'react-responsive';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';

const HomePage = ({ visible,navVisible,click,sidebarClick,aboutClick,portfolioClick,contactClick,navClose }) => (
  <div id="homepageContainer">  
    <MediaQuery query="(min-device-width: 1224px)">
      <div id="homepage" className={visible ? 'slideRight' : 'slideLeft'}>
        <NavMenu visible={navVisible} click={sidebarClick} aboutClick={aboutClick} portfolioClick={portfolioClick}
          contactClick={contactClick} close={navClose} />
        <div id="nameBox" onClick={click}>C Brent Mooney</div>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div id="homepageMobile" className={visible ? 'slideRight' : 'slideLeft'}>
        <NavMenu visible={navVisible} aboutClick={aboutClick} portfolioClick={portfolioClick}
          contactClick={contactClick} close={navClose} />
        <div id="nameBox" onClick={click}>C Brent Mooney</div>
      </div>
    </MediaQuery>
  </div>  
)

const NavMenu = ({ visible,aboutClick,portfolioClick,contactClick,close }) => (
  <div id="navmenu" className={visible ? 'slideDown' : 'slideUp'}>
    <ul>
      <li><a onClick={aboutClick}>About Me</a></li>
      <li><a onClick={portfolioClick}>Portfolio</a></li>
      <li><a onClick={contactClick}>Contact</a></li>
      <li><a onClick={close}>X</a></li>
    </ul>
  </div>  
)

const AboutSideBar = ({ visible,close }) => ( 
  <div id="aboutmeContainer">
    <MediaQuery query="(min-device-width: 1224px)">
      <div id="aboutme" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="aboutmeCloseButton" onClick={close}>X</div>
        <div id="aboutmeContents">
          <h2>About Me</h2>
          <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!</p>
        </div>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div id="aboutmeMobile" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="aboutmeCloseButton" onClick={close}>X</div>
        <div id="aboutmeContents">
          <h2>About Me</h2>
          <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!</p>
        </div>
      </div>
    </MediaQuery>
  </div>
)

const PortfolioSideBar = ({ visible,close }) => ( 
  <div id="portfolioContainer">
    <MediaQuery query="(min-device-width: 1224px)">
      <div id="portfolio" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="portfolioCloseButton" onClick={close}>X</div>
        <div id="portfolioContents">
          <h2>Portfolio</h2>
          <Container>
            <Row id="desktopRow">
              <Col>
                <ReactPlayer
                url='https://vimeo.com/67325367'
                className='react-player'
                width='100%'
                height='100%'
                />
              </Col>
              <Col>
                <ReactPlayer
                url='https://vimeo.com/67907078'
                className='react-player'
                width='100%'
                height='100%'
                />
              </Col>
            </Row>
            
            <Row id="desktopRow">
              <Col>
                <ReactPlayer
                url='https://vimeo.com/120757161'
                className='react-player'
                width='100%'
                height='100%'
                />
              </Col>
              <Col>
                <ReactPlayer
                url='https://vimeo.com/214726261'
                className='react-player'
                width='100%'
                height='100%'
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div id="portfolioMobile" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="portfolioCloseButton" onClick={close}>X</div>
        <div id="portfolioContents">
          <h2>Portfolio</h2>
          <Container>
            <Row>
              <Col>
                <ReactPlayer
                url='https://vimeo.com/67325367'
                className='react-player'
                width='100%'
                height='100%'
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <ReactPlayer
                url='https://vimeo.com/67907078'
                className='react-player'
                width='100%'
                height='100%'
                />
              </Col>
            </Row>
            
            <Row>
              <Col>
                <ReactPlayer
                url='https://vimeo.com/120757161'
                className='react-player'
                width='100%'
                height='100%'
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <ReactPlayer
                url='https://vimeo.com/214726261'
                className='react-player'
                width='100%'
                height='100%'
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </MediaQuery>
  </div>
)

const ContactSideBar = ({ visible,close }) => ( 
  <div id="contactContainer">
    <MediaQuery query="(min-device-width: 1224px)">
      <div id="contact" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="contactCloseButton" onClick={close}>X</div>
        <div id="contactContents">
          <h2>Contact</h2>
          <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!</p>
        </div>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div id="contactMobile" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="contactCloseButton" onClick={close}>X</div>
        <div id="contactContents">
          <h2>Contact</h2>
          <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!</p>
        </div>
      </div>
    </MediaQuery>
  </div>
)

class App extends Component {

  state = {
    sidebarVisible: false,
    aboutVisible: false,
    portfolioVisible: false,
    contactVisible: false,
    navmenuVisible: false
  }

  openNavMenu = () => {
    this.setState({navmenuVisible: true});
  }

  closeNavMenu = () => {
    this.setState({navmenuVisible: false});
  }

  /* About Me */
  openAboutMe = () => {
    this.setState({
      sidebarVisible: true,
      aboutVisible: true,
      portfolioVisible: false,
      contactVisible: false
    });
  }

  closeAboutMe = () => {
    this.setState({
      sidebarVisible: false,
      aboutVisible: false,
      portfolioVisible: false,
      contactVisible: false});
  }

  /* Portfolio */
  openPortfolio = () => {
    this.setState({
      sidebarVisible: true,
      aboutVisible: false,
      portfolioVisible: true,
      contactVisible: false});
  }

  closePortfolio = () => {
    this.setState({
      sidebarVisible: false,
      aboutVisible: false,
      portfolioVisible: false,
      contactVisible: false});
  }

  /* Contact */
  openContact = () => {
    this.setState({
      sidebarVisible: true,
      aboutVisible: false,
      portfolioVisible: false,
      contactVisible: true});
  }

  closeContact = () => {
    this.setState({
      sidebarVisible: false,
      aboutVisible: false,
      portfolioVisible: false,
      contactVisible: false});
  }

  render() {

    return (
      <div id="App">

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

        <HomePage visible={this.state.sidebarVisible} navVisible={this.state.navmenuVisible} click={this.openNavMenu}
          sidebarClick={this.openSidebar} aboutClick={this.openAboutMe} portfolioClick={this.openPortfolio} contactClick={this.openContact}
          navClose={this.closeNavMenu} />
        <AboutSideBar visible={this.state.aboutVisible} close={this.closeAboutMe} />
        <PortfolioSideBar visible={this.state.portfolioVisible} close={this.closePortfolio} />
        <ContactSideBar visible={this.state.contactVisible} close={this.closeContact} />
      </div>
    );
  }
}

export default App;
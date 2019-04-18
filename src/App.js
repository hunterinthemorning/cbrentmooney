import React, { Component } from 'react';
import './App.css'; 
import MediaQuery from 'react-responsive';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';
import {VimeoPlayer} from 'react-video-players';

const BgPlayer = () => (
  <VimeoPlayer videoId="126742773" config={{autoplay:'true',muted:'true',playsinline:'true'}} />
)
const BgPlayer1 = () => (
  <VimeoPlayer videoId="126742773" config={{playsinline:'true'}} />
)
const BgPlayer2 = () => (
  <ReactPlayer
  url='https://vimeo.com/126742773'
  className='react-player'
  width='100%'
  height='100%'
  />
)

const HomePage = ({ visible,navVisible,click,aboutClick,servicesClick,portfolioClick,contactClick,navClose,slide,blinking }) => (
  <div id="homepageContainer" className={slide}>
    <BgPlayer1 />
    <MediaQuery query="(min-device-width: 1224px)">
      <div id="homepage" className={visible ? 'slideRight' : 'slideLeft'}>
        <NavMenu visible={navVisible} aboutClick={aboutClick} servicesClick={servicesClick} 
          portfolioClick={portfolioClick} contactClick={contactClick} close={navVisible ? navClose : click} />
        <div id="nameBox" onClick={click}>C Brent Mooney</div>
        <div id="blinking">{blinking}</div>
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

const NavMenu = ({ visible,aboutClick,servicesClick,portfolioClick,contactClick,close }) => (
  <div id="navmenu" className={visible ? 'slideDown' : 'slideUp'}>
    <ul>
      <li><div onClick={aboutClick}>About Me</div></li>
      <li><div onClick={servicesClick}>Services</div></li>
      <li><div onClick={portfolioClick}>Portfolio</div></li>
      <li><div onClick={contactClick}>Contact</div></li>
      <li><div id="navmenuClose" onClick={close}>X</div></li>
    </ul>
  </div>  
)

const AboutSideBar = ({ visible,close }) => ( 
  <div id="aboutmeContainer" className={visible ? 'slideIn' : 'slideOut'}>
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

const ServicesSideBar = ({ visible,close }) => ( 
  <div id="servicesContainer">
    <MediaQuery query="(min-device-width: 1224px)">
      <div id="services" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="servicesCloseButton" onClick={close}>X</div>
        <div id="servicesContents">
          <h2>Services</h2>
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
      <div id="servicesMobile" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="servicesCloseButton" onClick={close}>X</div>
        <div id="servicesContents">
          <h2>Services</h2>
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
        <div id="portfolioContents" className="scrollable">
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
        <div id="portfolioContents" className="scrollable">
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
    servicesVisible: false,
    portfolioVisible: false,
    contactVisible: false,
    navmenuVisible: false,
    slide: 'slideLeft',
    blinking: 'true'
  }

  openNavMenu = () => {
    this.setState({navmenuVisible: true,
      blinking: 'false'});
  }

  closeNavMenu = () => {
    this.setState({navmenuVisible: false});
  }

  /* About Me */
  openAboutMe = () => {
    const left = 0
    this.setState({
      sidebarVisible: true,
      aboutVisible: true,
      servicesVisible: false,
      portfolioVisible: false,
      contactVisible: false,
      slide: 'slideRightSm'
    });
  }

  closeAboutMe = () => {
    this.setState({
      sidebarVisible: false,
      aboutVisible: false,
      servicesVisible: false,
      portfolioVisible: false,
      contactVisible: false,
      slide: 'slideLeft'
    });
  }

  /* Services */
  openServices = () => {
    this.setState({
      sidebarVisible: true,
      aboutVisible: false,
      servicesVisible: true,
      portfolioVisible: false,
      contactVisible: false,
      slide: 'slideLeft'
    });
  }

  closeServices = () => {
    this.setState({
      sidebarVisible: false,
      aboutVisible: false,
      servicesVisible: false,
      portfolioVisible: false,
      contactVisible: false
    });
  }

  /* Portfolio */
  openPortfolio = () => {
    this.setState({
      sidebarVisible: true,
      aboutVisible: false,
      servicesVisible: false,
      portfolioVisible: true,
      contactVisible: false,
      slide: 'slideRightLg'    
    });
  }

  closePortfolio = () => {
    this.setState({
      sidebarVisible: false,
      aboutVisible: false,
      servicesVisible: false,
      portfolioVisible: false,
      contactVisible: false,
      slide: 'slideLeft'
    });
  }

  /* Contact */
  openContact = () => {
    this.setState({
      sidebarVisible: true,
      aboutVisible: false,
      servicesVisible: false,
      portfolioVisible: false,
      contactVisible: true,
      slide: 'slideRightXSm'
    });
  }

  closeContact = () => {
    this.setState({
      sidebarVisible: false,
      aboutVisible: false,
      servicesVisible: false,
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
          aboutClick={this.openAboutMe} servicesClick={this.openServices}
          portfolioClick={this.openPortfolio} contactClick={this.openContact}
          navClose={this.closeNavMenu} slide={this.state.slide} blinking={this.state.blinking} />
        <AboutSideBar visible={this.state.aboutVisible} close={this.closeAboutMe} />
        <ServicesSideBar visible={this.state.servicesVisible} close={this.closeServices} />
        <PortfolioSideBar visible={this.state.portfolioVisible} close={this.closePortfolio} />
        <ContactSideBar visible={this.state.contactVisible} close={this.closeContact} />
      </div>
    );
  }
}

export default App;
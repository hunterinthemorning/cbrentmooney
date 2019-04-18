import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css'; 
import MediaQuery from 'react-responsive';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player';

const BgPlayer = () => (
  <ReactPlayer
  url='https://vimeo.com/255828084'
  className='react-player'
  width='100%'
  height='100%'
  playing
  />
)

const BgStill = () => (
  <div id="bgStill"></div>
)

const HomePage = ({ visible,navVisible,click,aboutClick,servicesClick,portfolioClick,contactClick,navClose,slide,blinking,vidRef,showBgVid }) => (
  <div id="homepageContainer" className={slide}>
    <MediaQuery query="(min-device-width: 1224px)">
      {showBgVid ? <BgPlayer /> : null }
      <div id="homepage" className={visible ? 'slideRight' : 'slideLeft'}>
        <NavMenu visible={navVisible} aboutClick={aboutClick} servicesClick={servicesClick} 
          portfolioClick={portfolioClick} contactClick={contactClick} close={navClose} />
        <div id="nameBox" onClick={click}>C Brent Mooney</div>
        <div id="blinking">{blinking}</div>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div id="homepageMobile" className={visible ? 'slideRight' : 'slideLeft'}>
        <NavMenu visible={navVisible} aboutClick={aboutClick} servicesClick={servicesClick} 
          portfolioClick={portfolioClick} contactClick={contactClick} close={navClose} />
        <div id="nameBox" onClick={click}>C Brent Mooney</div>
        <div id="blinking">{blinking}</div>
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

const NavMenuSidebar = ({ aboutClick,servicesClick,portfolioClick,contactClick,close,active }) => (
  <div id="navmenuSidebar">
  <ul>
    {active != 'about' ? <li><div onClick={aboutClick}>About Me</div></li> : null }
    {active != 'services' ? <li><div onClick={servicesClick}>Services</div></li> : null }
    {active != 'portfolio' ? <li><div onClick={portfolioClick}>Portfolio</div></li> : null }
    {active != 'contact' ? <li><div onClick={contactClick}>Contact</div></li> : null }
    <li><div onClick={close}>X</div></li>
  </ul>
</div> 
)

const AboutSideBar = ({ visible,close,aboutClick,servicesClick,portfolioClick,contactClick }) => ( 
  <div>
  <MediaQuery query="(min-device-width: 1224px)">
    <div id="aboutmeContainer" className={visible ? 'slideIn' : 'slideOut'}>
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
    </div>
    <div id="aboutmePic" className={visible ? 'slideIn' : 'slideOut'}></div>
  </MediaQuery>
  <MediaQuery query="(max-device-width: 1224px)">
    <div id="aboutmeContainerMobile" className={visible ? 'slideIn' : 'slideOut'}>
      <div id="aboutmeMobile" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="aboutmeContents">
          <NavMenuSidebar close={close} active={'about'} aboutClick={aboutClick} servicesClick={servicesClick} portfolioClick={portfolioClick} contactClick={contactClick} />
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
    </div>
  </MediaQuery>
  </div>
)

const ServicesSideBar = ({ visible,close,aboutClick,servicesClick,portfolioClick,contactClick }) => ( 
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
        <div id="servicesContents">
          <NavMenuSidebar close={close} active={'services'} aboutClick={aboutClick} servicesClick={servicesClick} portfolioClick={portfolioClick} contactClick={contactClick} />
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

const PortfolioFilter = ({allClick,cClick,sClick,pClick,allColor,cColor,sColor,pColor}) => (
  <div id="pfilter">
    <Button variant="dark" onClick={allClick} className={allColor ? 'active' : null}>All</Button>
    <Button variant="dark" onClick={cClick} className={cColor ? 'active' : null}>Commercial</Button>
    <Button variant="dark" onClick={sClick} className={sColor ? 'active' : null}>Short Film</Button>
    <Button variant="dark" onClick={pClick} className={pColor ? 'active' : null}>Photography</Button>
  </div> 
)

const PortfolioSideBar = ({ visible,close,allClick,cClick,sClick,pClick,allColor,cColor,sColor,pColor,aboutClick,servicesClick,portfolioClick,contactClick }) => ( 
  <div id="portfolioContainer">
    <MediaQuery query="(min-device-width: 1224px)">
      <div id="portfolio" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="portfolioCloseButton" onClick={close}>X</div>
        <div id="portfolioContents" className="scrollable">
          <h2>Portfolio</h2>
          <PortfolioFilter allClick={allClick} cClick={cClick} sClick={sClick} pClick={pClick} allColor={allColor}
            cColor={cColor} sColor={sColor} pColor={pColor} />
          
          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/67325367'
          className='react-player'
          width='100%'
          height='58%'
          /> : cColor ? <ReactPlayer
          url='https://vimeo.com/67325367'
          className='react-player'
          width='100%'
          height='58%'
          /> : null }

          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/67907078'
          className='react-player'
          width='100%'
          height='58%'
          /> : sColor ? <ReactPlayer
          url='https://vimeo.com/67907078'
          className='react-player'
          width='100%'
          height='58%'
          /> : null }

          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/120757161'
          className='react-player'
          width='100%'
          height='58%'
          /> : pColor ? <ReactPlayer
          url='https://vimeo.com/120757161'
          className='react-player'
          width='100%'
          height='58%'
          /> : null }
          
          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/214726261'
          className='react-player'
          width='100%'
          height='58%'
          /> : cColor ? <ReactPlayer
          url='https://vimeo.com/214726261'
          className='react-player'
          width='100%'
          height='58%'
          /> : null }

          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/120757161'
          className='react-player'
          width='100%'
          height='58%'
          /> : sColor ? <ReactPlayer
          url='https://vimeo.com/120757161'
          className='react-player'
          width='100%'
          height='58%'
          /> : null }

          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/214726261'
          className='react-player'
          width='100%'
          height='58%'
          /> : pColor ? <ReactPlayer
          url='https://vimeo.com/214726261'
          className='react-player'
          width='100%'
          height='58%'
          /> : null }

        </div>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div id="portfolioMobile" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="portfolioContents" className="scrollable">
          <NavMenuSidebar close={close} active={'portfolio'} aboutClick={aboutClick} servicesClick={servicesClick} portfolioClick={portfolioClick} contactClick={contactClick} />
          <h2>Portfolio</h2>
          <PortfolioFilter allClick={allClick} cClick={cClick} sClick={sClick} pClick={pClick} allColor={allColor}
            cColor={cColor} sColor={sColor} pColor={pColor} />

          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/67325367'
          className='react-player'
          width='100%'
          height='34%'
          /> : cColor ? <ReactPlayer
          url='https://vimeo.com/67325367'
          className='react-player'
          width='100%'
          height='34%'
          /> : null }

          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/67907078'
          className='react-player'
          width='100%'
          height='34%'
          /> : sColor ? <ReactPlayer
          url='https://vimeo.com/67907078'
          className='react-player'
          width='100%'
          height='34%'
          /> : null }

          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/120757161'
          className='react-player'
          width='100%'
          height='34%'
          /> : pColor ? <ReactPlayer
          url='https://vimeo.com/120757161'
          className='react-player'
          width='100%'
          height='34%'
          /> : null }
          
          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/214726261'
          className='react-player'
          width='100%'
          height='34%'
          /> : cColor ? <ReactPlayer
          url='https://vimeo.com/214726261'
          className='react-player'
          width='100%'
          height='34%'
          /> : null }

          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/120757161'
          className='react-player'
          width='100%'
          height='34%'
          /> : sColor ? <ReactPlayer
          url='https://vimeo.com/120757161'
          className='react-player'
          width='100%'
          height='34%'
          /> : null }

          {allColor ?   
          <ReactPlayer
          url='https://vimeo.com/214726261'
          className='react-player'
          width='100%'
          height='34%'
          /> : pColor ? <ReactPlayer
          url='https://vimeo.com/214726261'
          className='react-player'
          width='100%'
          height='34%'
          /> : null }

        </div>
      </div>
    </MediaQuery>
  </div>
)

const ContactSideBar = ({ visible,close,aboutClick,servicesClick,portfolioClick,contactClick }) => ( 
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
        <div id="contactContents">
          <NavMenuSidebar close={close} active={'contact'} aboutClick={aboutClick} servicesClick={servicesClick} portfolioClick={portfolioClick} contactClick={contactClick} />
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
    blinking: 'true',
    showBgVid: true,
    allColor: true,
    cColor: false,
    sColor: false,
    pColor:false
  }

  openNavMenu = () => {
    this.setState({navmenuVisible: true,
      blinking: 'false', showBgVid: false});
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
      contactVisible: false,
      slide: 'slideLeft'});
  }

  allClick = () => {
    this.setState({
      allColor: true,
      cColor: false,
      sColor: false,
      pColor: false
    });
  }

  cClick = () => {
    let c = this.state.cColor
    this.setState({
      allColor: false,
      cColor: !c
    });
  }

  sClick = () => {
    let s = this.state.sColor
    this.setState({
      allColor: false,
      sColor: !s
    });
  }

  pClick = () => {
    let p = this.state.pColor
    this.setState({
      allColor: false,
      pColor: !p
    });
  }

  render() {

    return (
      <div id="App">
        <HomePage visible={this.state.sidebarVisible} navVisible={this.state.navmenuVisible} click={this.openNavMenu}
          aboutClick={this.openAboutMe} servicesClick={this.openServices}
          portfolioClick={this.openPortfolio} contactClick={this.openContact}
          navClose={this.closeNavMenu} slide={this.state.slide} blinking={this.state.blinking}
          showBgVid={this.state.showBgVid} />
        <AboutSideBar visible={this.state.aboutVisible} close={this.closeAboutMe}
          aboutClick={this.openAboutMe} servicesClick={this.openServices}
          portfolioClick={this.openPortfolio} contactClick={this.openContact} />
        <ServicesSideBar visible={this.state.servicesVisible} close={this.closeServices} 
          aboutClick={this.openAboutMe} servicesClick={this.openServices}
          portfolioClick={this.openPortfolio} contactClick={this.openContact} />
        <PortfolioSideBar visible={this.state.portfolioVisible} close={this.closePortfolio} 
          allClick={this.allClick} cClick={this.cClick} sClick={this.sClick} pClick={this.pClick}
          allColor={this.state.allColor} cColor={this.state.cColor} sColor={this.state.sColor} pColor={this.state.pColor} 
          aboutClick={this.openAboutMe} servicesClick={this.openServices}
          portfolioClick={this.openPortfolio} contactClick={this.openContact} />
        <ContactSideBar visible={this.state.contactVisible} close={this.closeContact}
          aboutClick={this.openAboutMe} servicesClick={this.openServices}
          portfolioClick={this.openPortfolio} contactClick={this.openContact} />
      </div>
    );
  }
}

export default App;
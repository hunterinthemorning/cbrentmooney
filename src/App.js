import React, { Component } from 'react';
import './App.css'; 
import MediaQuery from 'react-responsive';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player';

const BgPlayer = () => (
  <ReactPlayer
  url='https://vimeo.com/255828084'
  className='react-player'
  width='100%'
  height='100%'
  playing
  muted
  />
)

const HomePage = ({ visible,navVisible,click,aboutClick,servicesClick,portfolioClick,navClose,slide,blinking,vidRef,showBgVid }) => (
  <div id="homepageContainer" className={slide}>
    <MediaQuery query="(min-device-width: 1224px)">
      {showBgVid ? <BgPlayer /> : null }
      <div id="homepage" className={visible ? 'slideRight' : 'slideLeft'}>
        <NavMenu visible={navVisible} aboutClick={aboutClick} servicesClick={servicesClick} 
          portfolioClick={portfolioClick} close={navClose} />
        <div id="nameBox" onClick={click}>C Brent Mooney</div>
        <div id="blinking">{blinking}</div>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div id="homepageMobile" className={visible ? 'slideRight' : 'slideLeft'}>
        <NavMenu visible={navVisible} aboutClick={aboutClick} servicesClick={servicesClick} 
          portfolioClick={portfolioClick} close={navClose} />
        <div id="nameBox" onClick={click}>C Brent Mooney</div>
        <div id="blinking">{blinking}</div>
      </div>
    </MediaQuery>
  </div>  
)

const NavMenu = ({ visible,aboutClick,servicesClick,portfolioClick,close }) => (
  <div id="navmenu" className={visible ? 'slideDown' : 'slideUp'}>
    <ul>
      <li><div onClick={aboutClick}>About Me</div></li>
      <li><div onClick={servicesClick}>Services</div></li>
      <li><div onClick={portfolioClick}>Portfolio</div></li>
      <li><div id="navmenuClose" onClick={close}>X</div></li>
    </ul>
  </div>  
)

const NavMenuSidebar = ({ aboutClick,servicesClick,portfolioClick,close,active }) => (
  <div id="navmenuSidebar">
  <ul>
    {active !== 'about' ? <li><div onClick={aboutClick}>About Me</div></li> : null }
    {active !== 'services' ? <li><div onClick={servicesClick}>Services</div></li> : null }
    {active !== 'portfolio' ? <li><div onClick={portfolioClick}>Portfolio</div></li> : null }
    <li><div onClick={close}>X</div></li>
  </ul>
</div> 
)

const AboutSideBar = ({ visible,close,aboutClick,servicesClick,portfolioClick }) => ( 
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
          <div id="contactIcons">
            <a href="//linkedin.com/in/c-brent-mooney-41400064" target="_blank" rel="nofollow"><i className="fab fa-linkedin"></i></a>
            <a href="//vimeo.com/cbrentmooney" target="_blank" rel="nofollow"><i className="fab fa-vimeo"></i></a>
            <a href="mailto:manningha@gmail.com" target="_blank" rel="nofollow"><i className="far fa-envelope" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div id="aboutmePic" className={visible ? 'slideIn' : 'slideOut'}></div>
  </MediaQuery>
  <MediaQuery query="(max-device-width: 1224px)">
    <div id="aboutmeContainerMobile" className={visible ? 'slideIn' : 'slideOut'}>
      <div id="aboutmeMobile" className={visible ? 'slideIn' : 'slideOut'}>
        <div id="aboutmeContents">
          <NavMenuSidebar close={close} active={'about'} aboutClick={aboutClick} servicesClick={servicesClick} portfolioClick={portfolioClick} />
          <h2>About Me</h2>
          <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!</p>

          <div id="contactIcons">
            <a href="//linkedin.com/in/c-brent-mooney-41400064" target="_blank" rel="nofollow"><i className="fab fa-linkedin"></i></a>
            <a href="//vimeo.com/cbrentmooney" target="_blank" rel="nofollow"><i className="fab fa-vimeo"></i></a>
            <a href="mailto:manningha@gmail.com" target="_blank" rel="nofollow"><i className="far fa-envelope" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  </MediaQuery>
  </div>
)

const ServicesSideBar = ({ visible,close,aboutClick,servicesClick,portfolioClick }) => ( 
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
          <NavMenuSidebar close={close} active={'services'} aboutClick={aboutClick} servicesClick={servicesClick} portfolioClick={portfolioClick} />
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

const PortfolioSideBar = ({ visible,close,allClick,cClick,sClick,pClick,allColor,cColor,sColor,pColor,aboutClick,servicesClick,portfolioClick }) => ( 
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
          <NavMenuSidebar close={close} active={'portfolio'} aboutClick={aboutClick} servicesClick={servicesClick} portfolioClick={portfolioClick} />
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

class App extends Component {

  state = {
    sidebarVisible: false,
    aboutVisible: false,
    servicesVisible: false,
    portfolioVisible: false,
    navmenuVisible: false,
    slide: 'slideLeft',
    blinking: 'true',
    showBgVid: true,
    allColor: true,
    cColor: false,
    sColor: false,
    pColor:false,
    cName: null,
    cEmail: null,
    cText: null,
    mailSent: false,
    error: null
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
      slide: 'slideRightSm'
    });
  }

  closeAboutMe = () => {
    this.setState({
      sidebarVisible: false,
      aboutVisible: false,
      servicesVisible: false,
      portfolioVisible: false,
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
      slide: 'slideLeft'
    });
  }

  closeServices = () => {
    this.setState({
      sidebarVisible: false,
      aboutVisible: false,
      servicesVisible: false,
      portfolioVisible: false
    });
  }

  /* Portfolio */
  openPortfolio = () => {
    this.setState({
      sidebarVisible: true,
      aboutVisible: false,
      servicesVisible: false,
      portfolioVisible: true,
      slide: 'slideRightLg'    
    });
  }

  closePortfolio = () => {
    this.setState({
      sidebarVisible: false,
      aboutVisible: false,
      servicesVisible: false,
      portfolioVisible: false,
      slide: 'slideLeft'
    });
  }

  allClick = () => {
    this.setState({
      allColor: true,
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

  handleNameChange = (event) => {
    this.setState({cName: event.target.value})
  }

  handleEmailChange = (event) => {
    this.setState({cEmail: event.target.value})
  }

  handleTextChange = (event) => {
    this.setState({cText: event.target.value})
  }

  render() {

    return (
      <div id="App">
        <HomePage visible={this.state.sidebarVisible} navVisible={this.state.navmenuVisible} click={this.openNavMenu}
          aboutClick={this.openAboutMe} servicesClick={this.openServices}
          portfolioClick={this.openPortfolio}
          navClose={this.closeNavMenu} slide={this.state.slide} blinking={this.state.blinking}
          showBgVid={this.state.showBgVid} />
        <AboutSideBar visible={this.state.aboutVisible} close={this.closeAboutMe}
          aboutClick={this.openAboutMe} servicesClick={this.openServices}
          portfolioClick={this.openPortfolio} />
        <ServicesSideBar visible={this.state.servicesVisible} close={this.closeServices} 
          aboutClick={this.openAboutMe} servicesClick={this.openServices}
          portfolioClick={this.openPortfolio} />
        <PortfolioSideBar visible={this.state.portfolioVisible} close={this.closePortfolio} 
          allClick={this.allClick} cClick={this.cClick} sClick={this.sClick} pClick={this.pClick}
          allColor={this.state.allColor} cColor={this.state.cColor} sColor={this.state.sColor} pColor={this.state.pColor} 
          aboutClick={this.openAboutMe} servicesClick={this.openServices}
          portfolioClick={this.openPortfolio} />
       </div>
    );
  }
}

export default App;
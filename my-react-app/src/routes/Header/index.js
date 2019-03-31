import React from 'react';
import './styles.scss';
import { ReactstrapNavbar } from './ReactstrapNavbar';
import { Col } from 'reactstrap';


var links = [
  {
    name: "Main",
    path: '#Main'
  },
  {
    name: "About",
    path: '#About'
  },
  {
    name: "Contacts",
    path: '#Contacts'
  }
];

export class Header extends React.Component {
  render() {
    return <header className="header">
      <div className="container">
        <div className="header-holder">
          {/* <Col md={2} className="logo">
            <img src={logo} alt="logo"/>
          </Col>
          <div className="navigation">
            <nav className="nav">
              <a href="#" className="menu-opener"><span></span></a>
              <ul className="nav__ul">
                { links.map(
                  function(item, id){
                    return <MenuItem item={item} key={id} className="nav-item"/>
                  }               
                )};
              </ul>
            </nav>
          </div> */}
          { 
            <ReactstrapNavbar/>
          }
          </div>
        </div>
      </header>
  }
}


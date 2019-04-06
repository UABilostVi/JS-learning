import React from 'react';
import './styles.scss';
import { ReactstrapNavbar } from './ReactstrapNavbar';
import { Col } from 'reactstrap';


export class Header extends React.Component {
  render() {
    return <header className="header">
        <div className="header-holder">

            <ReactstrapNavbar/>

          </div>
      </header>
  }
}


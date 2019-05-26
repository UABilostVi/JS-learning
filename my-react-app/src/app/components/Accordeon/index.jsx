// import React from 'react';
// import PropTypes from 'prop-types';

// export class Accordeon extends React.Component {
// 	render() {
// 		const { title, list, isOpen, onClick } = this.props;
// 		return (
// 			<div onClick={onClick}>
// 				{title}
// 			</div>
// 		);
// 	}
// } 

// Accordeon.propTypes = {
// 	title: PropTypes.string,
// 	list: PropTypes.array,
// 	isOpen: PropTypes.bool,
// 	onClick: PropTypes.func
// }
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class Accordeon extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
             Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

// export default Accordeon;
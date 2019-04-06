import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import { Col } from "reactstrap";
import "./styles.scss";

export class UserItem extends React.Component {
	render() {
		const { user } = this.props;
		return <Col className="user-info">
			<img src={user.avatar_url} />
			<h2> {`User login - ${user.login}`} </h2>
		</Col>
	}
}

UserItem.propTypes = {
	user: PropTypes.object
};
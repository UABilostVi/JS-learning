import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import "./styles.scss";

export class UserItem extends React.Component {
	render() {
		const { user } = this.props;
		return <Col className="user-info">
			<img src={user.avatar_url} alt="github-user"/>
			<p> {`User login - ${user.login}`} </p>
		</Col>
	}
}

UserItem.propTypes = {
	user: PropTypes.object
};
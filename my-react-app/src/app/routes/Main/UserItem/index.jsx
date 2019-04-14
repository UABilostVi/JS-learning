import React from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";
import { Link } from 'react-router-dom';
import "./styles.scss";

export class UserItem extends React.Component {
	render() {
		const { user } = this.props;
		return (
			<Col className="user-info">
				<img src={user.avatar_url} alt="github-user" />
				<Link to={`user/${user.login}`}>
					<p> {`User login - ${user.login}`} </p>
				</Link>
			</Col >
		);
	}
}

UserItem.propTypes = {
	user: PropTypes.object
};
import React from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";
import { Link } from 'react-router-dom';
import "./styles.scss";

export const UserItem = ({ user}) => {
		return (
			<Col className="user-info">
				<Link to={`user/${user.login}`}>
				    <img src={user.avatar_url} alt="github-user" />
					<p> {`User login - ${user.login}`} </p>
				</Link>
			</Col >
		);
	};

UserItem.propTypes = {
	user: PropTypes.object
};
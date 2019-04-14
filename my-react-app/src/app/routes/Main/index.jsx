import React from 'react';
import { UserItem } from "./UserItem";
import { Container, Alert } from "reactstrap";
import axios from 'axios';

export class Main extends React.Component {
	state = {
		users: [],
		error: null
	};

	componentDidMount(){
		axios
		.get('https://api.github.com/users')
		.then(response => {
			 const { data } = response;
			 this.setState({ users: data });
		})
		.catch(err => this.setState({ error: err }));
	}


	render() {
		const { users, error } = this.state;
		const { history } = this.props;
		const errorComponent = error ? (
			<Alert color="danger">Something went wrong</Alert>
		) : null;

		return (
			<main className="main" onClick={this.onClickHandler}>
				{errorComponent}
				<Container>
					{users.map((user, id) => {
						return <UserItem user={user} key={id} history={history}/>
					})}
				</Container>
			</main>
		)
	}
}

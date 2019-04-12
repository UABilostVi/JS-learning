import React from 'react';
import { UserItem } from "./UserItem";
import { Container } from "reactstrap";
import axios from 'axios';

export class Main extends React.Component {
	state = {
		users: []
	};
	componentDidMount(){
		axios.get('https://api.github.com/users')
		.then(response => {
			 const { data } = response;
			 this.setState({ users:data });
		})
		.catch((err)=>console.log('something wrong'));
	}


	render() {
		const { users } = this.state;
		return (
			<main className="main" onClick={this.onClickHandler}>
				<Container id="test">
					{users.map((user, id) => (
						<UserItem user={user} key={id} />
					))}
				</Container>
			</main>
		)
	}
}

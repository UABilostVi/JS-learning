import React from 'react';
import { UserItem } from "./UserItem";
import { Container } from "reactstrap";

const users = [
	{
		login: "defunkt",
		avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4"
	},
	{
		login: "defunkt",
		avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4"
	},
	{
		login: "defunkt",
		avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4"
	},
	{
		login: "defunkt",
		avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4"
	},
	{
		login: "defunkt",
		avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4"
	},
	{
		login: "defunkt",
		avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4"
	},
	{
		login: "defunkt",
		avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4"
	},
	{
		login: "defunkt",
		avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4"
	}
];

export class Main extends React.Component {
	render() {
		return (
			<main className="main">
				<Container>
			    { users.map((user, id) => (
				<UserItem user={user} key={id} />
			    ))}
			    </Container>
		</main>	
		)
	}
}

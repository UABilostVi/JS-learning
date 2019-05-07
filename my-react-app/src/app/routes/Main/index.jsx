import React from 'react';
import { UserItem } from "./UserItem";
import { Container, Alert, Button, Col } from "reactstrap";
import { Accordeon } from '../../components'
import axios from 'axios';
import './styles.scss';

export class Main extends React.Component {
	state = {
		users: [],
		sort: null,
		error: null,
		isOpen: false
	};

	constructor(props) {
		super(props);
		this.butRef = React.createRef();
	}

	componentWillMount() {
		console.log(this.butRef);
	}

	async componentDidMount() {
		try {
			console.log(this.butRef);
			const { data } = await axios.get('https://api.github.com/users')
			this.setState({ users: data });
	    } catch(e) {
				this.setState({ error: e })
			}
		}
		

	sortItems = () => {
		const { users, sort } = this.state;
		let sortedUsers = [...users];
		let sortDirection = sort;
		if (!sortDirection) {
			sortedUsers = sortedUsers.sort((a, b) => {
				const firstLogin = a.login.toLowerCase();
				const secondLogin = b.login.toLowerCase();
				if (firstLogin > secondLogin) {
					return 1;
				}
				if (firstLogin < secondLogin) {
					return -1;
				}
				return 0;
			});
			sortDirection = 'ASC';
		} else {
			sortedUsers = sortedUsers.reverse();
			sortDirection = 'DESC';
		}

		this.setState({ users: sortedUsers, sort: sortDirection});
	};

	onClickAccordeon = () => {
		this.setState({ isOpen: !this.state.isOpen });
		console.log('click')
	};

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
					<Col className="sort-controls">
						<Button color='primary' onClick={this.sortItems} id="but123">
							Sort
						</Button>
						<Accordeon 
							title="Section 1" 
							list={['list 1.1', 'list 1.2']}
							isOpen={this.state.isOpen}
							onClick={this.onClickAccordeon}
						/>
					</Col>
					<Col className="d-flex flex-wrap">
						{users.map((user, id) => {
							return <UserItem user={user} key={id} history={history} />
						})}
					</Col>
				</Container>
			</main>
		)
	}
}

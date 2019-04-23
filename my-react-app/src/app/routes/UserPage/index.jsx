import React from 'react';
import { Col, Container, Spinner, Row, Table } from 'reactstrap';
import axios from 'axios';
import "./styles.scss";

export class UserPage extends React.Component {
	state = {
		user: null,
		repos: []
	};

	componentDidMount() {
		const { login } = this.props.match.params;
		if (login) {
			Promise.all([
				axios.get(`https://api.github.com/users/${login}`), 
				axios.get(`https://api.github.com/users/${login}/repos`)
			])
			.then(([userResponse, reposResponse]) => {
				this.setState({user: userResponse.data, repos: reposResponse.data})
			})
			.catch(err => this.props.history.push("/404"));
		}
	}

	sortItems = id => {
		switch(id) {
			case 'id':
				this.setState({ repos: this.state.repos.sort() });
				break;
			case 'language':
				this.setState({ repos: this.state.repos.sort() });
				break;
			case 'createdAt':
				this.setState({ repos: this.state.repos.sort() });	
				break;
			default:
				break;
		}
	};

	render() {
		const { user, repos } = this.state;

		if (!user) {
			return (
				<Col className="spinner d-flex justify-content-center align-items-center">
					<Spinner color="secondary" />
				</Col>
				
			);
		}

		return (
			<Container className='user-page'>
			  <Row className='py-4 d-flex flex-content-between'>
					<Col md={12} lg={8} xl={10} className="d-flex flex-column flex-items-start">
						<h2>{user.name}</h2>
						<h5>
							<span className="fa fa-map-marker" /> {user.location}
						</h5>
						<h5>
							GitHub: <a href={user.html_url}>{user.html_url}</a>
						</h5>
						<h5>
							Organization: <a href={user.organizations_url}>{user.organizations_url}</a>
						</h5>
						{/* <p clasName="text-left">{user.bio}</p> */}
					</Col>
					<Col>
						<img src={ user.avatar_url } alt="user-avatar"/> 
					</Col>
			  </Row>
			  <Row>
					<h3>Repositories</h3>
					<Table responsive bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th onClick={this.sortItems.bind(this, 'id')}>Name:</th>
								<th onClick={this.sortItems.bind(this, 'language')}>Language:</th>
								<th onClick={this.sortItems.bind(this, 'createdAt')}>Created at:</th>
								<th>Description:</th>
							</tr>
						</thead>
						<tbody>
							{repos.map(rep=>(
								<tr key={rep.id}>
									<th scope="row">{rep.id}</th>
									<td>{rep.name}</td>
									<td>{rep.language}</td>
									<td>{rep.created_at}</td>
									<td>{rep.description}</td>
								</tr>
							))}
						</tbody>
					</Table>
			  </Row>
			</Container>
		);
	}
}
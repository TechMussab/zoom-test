import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		let url = '172.20.1.93'
		if (this.state.url !== "") {
			 url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			 url += Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="container2">
				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Go</Button>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Create meeting</p>
					<Button variant="contained" color="primary" onClick={this.join} style={{ }}>Create</Button>
				</div>

			</div>
		)
	}
}

export default Home;
let React = require('react');

let examples = require('./examples.jsx');
let graphVM = require('./vm.js');

class LabGraph extends React.Component {

	componentWillMount(){
		this.VM = graphVM.create(() => this.VM);
	}

	render(){
    let state = this.VM;
		return <div>
			<h1>On recommence</h1>
			{examples.render(state)}
		</div>;
	}
}

module.exports = LabGraph;

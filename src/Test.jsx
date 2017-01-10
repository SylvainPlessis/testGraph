let React = require('react');

let Graph = require('reactchart');
let vm = require('./vm.js');


class Test extends React.Component {

  render(){
    return <div>
      <Graph {...vm.plain}/>
      <Graph {...vm.fill}/>
    </div>;
  }

}

module.exports = Test;

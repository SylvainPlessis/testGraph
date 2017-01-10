let React = require('react');

let Graph = require('reactchart');
let vm = require('./vm.js');


class Test extends React.Component {

  render(){
    return <div>
      <Graph {...vm.plain}/>
      <Graph {...vm.fill}/>
      <button className='btn btn-primary' onClick={vm.launch}>Play</button>
      <Graph {...vm.dyn}/>
    </div>;
  }

}

module.exports = Test;

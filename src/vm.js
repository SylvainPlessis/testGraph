let React = require('react');
let utils = require('reactchart/helpers');
let data = [];

for(let i = 0; i < 100; i++){
  data.push({
    x: i,
    y: Math.cos(i)
  });
}

let m = {};

m.plain = {
  height: 300,
  width: 600,
  data: [{series: data}],
  graphProps: [{}]
};

m.fill = {
  height: 300,
  width: 600,
  data: [{series: data}],
  graphProps: [{mark: false, fill: '#F1D4E5'}]
};

m.dyn = utils.init({
  height: 300,
  width: 600,
  data: [{series: [{x:0,y:0}]}],
  graphProps: [{onlyMarks: true, fill: '#F1D4E5'}],
  axisProps: {
    abs: [{min: 0, max: 100}],
    ord: [{min: -1, max: 1}],
  },
  foreground : {
    ix: 0.05,
    iy: 0.95,
    content : () => React.createElement('text',null,'#data points: 0')
  }
});
let dynDone = true;
let dynModel = m.dyn.props().curves[0].marks[0];
let dynModelize = (point,idx) => {
  let out = dynModel.toJS();
  out.position = point;
  out.key = "Plain.0.d." + idx;
  return out;
};
m.launch = () => {
		if(!dynDone){return;}
		dynDone = false;
		let d = 0;
		let oneMore = (idx) => m.dyn.props().pivot()
			.foreground.set('content',() => React.createElement('text',null,'#data points: ' + d))
			.curves[0].marks.push(dynModelize(data[idx],idx));
		let add = () => setTimeout(() => {
			oneMore(d);
			d++;
			return d < data.length ? add() : dynDone = true;
		},
		0);
		m.dyn.props().curves[0].set('marks',[]);
		add();
	};

module.exports = m;

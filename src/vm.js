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

module.exports = m;

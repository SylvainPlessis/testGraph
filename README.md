#### Testing react chart

Testing [Fund KIS React Chart](https://github.com/fundkis/reactchart)

This is the same thing that [the library github page](https://fundkis.github.io/reactchart)
except that we use here the library instead of the sources.

### Either see it locally
```
git clone git@github.com:SylvainPlessis/testGraph.git
cd testGraph
npm install
./node_modules/.bin/http-server
```

You can play in the ```src``` folder, ```example.jsx``` is
the one actually printing the charts, and all the props
are defined in the ```vm.js``` file.
You need to regulp the ```test.js``` file before refreshing:
```
gulp
```

To disable React's warning about minification of dev files, just
put the environement variable ```NODE_ENV``` to _production_:
```export NODE_ENV=production```, it'll make React happy.

Then open a web browser and look up ```localhost:8080```

### Or see it online

[here](https://SylvainPlessis.github.io/testGraph)

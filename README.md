#### Testing react chart

Testing [this](https://github.com/fundkis/reactchart)

To download:

```git clone git@github.com/SylvainPlessis/testGraph.git```

### Either see it locally
```
cd testGraph
npm install
./node_modules/.bin/http-server
```

You can play in the ```src``` folder, ```Test.jsx``` prints
the charts. Regulp the ```test.js``` file before refreshing:
```
gulp
```

To disable React's warning about minification of dev files, just
put the environement variable ```NODE_ENV``` to _production_:
```export NODE_ENV=production```, it'll make React happy.

Then open a web browser and look up ```localhost:8080```

### Or see it online

[here](https://SylvainPlessis.github.io/testGraph)

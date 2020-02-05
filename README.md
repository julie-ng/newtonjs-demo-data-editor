# Newton.js demo - data server

[![Build Status](https://dev.azure.com/julie-ng/newtonjs/_apis/build/status/julie-ng.newtonjs-demo-data-editor?branchName=master)](https://dev.azure.com/julie-ng/newtonjs/_build/latest?definitionId=1&branchName=master)

This is a fake server used to mimic real time data for [Newton.js network graph](https://github.com/julie-ng/newtonjs-graph). This server uses a [pre-built Ace code editor](https://github.com/ajaxorg/ace-builds).

![Editor Preview](./images/editor-preview.png)

## Use

First install dependencies as usual:

```
npm install
```

And then start the server:

```
npm start
```

Then open [http://localhost:3000/](http://localhost:3000) in your browser to edit the data as JSON. 

### Push updates

Click the **save button** to push server updates.
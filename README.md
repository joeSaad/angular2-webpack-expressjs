# angular2-webpack-expressjs

Here's a package for having webpack, expressjs co-existing. Webpack will transpile typescript code and rebundle it on save. This will reflect in the browser refreshed with the new changes. You can test your angular2 code and upon save see it in the browser via webpack, making your AJAX calls to your own controlled backend node expressjs framework. 
As you create and change your express API, you can test your application on both ends. 

## Installation

```bash
# clone our repo
git clone https://github.com/joeSaad/angular2-webpack-expressjs

# change directory to our repo
cd angular2-webpack-expressjs

# install dependencies of package
npm install

# install the typescript typings with tsd
tsd install

# install dependencies for frontend piece
cd public 
npm install
npm start 

# start the server
cd .. 
npm start


```

  - access http://localhost:3000
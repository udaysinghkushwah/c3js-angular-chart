# C3JS AngularJS directives

```html
<c3chart bindto-id="chart1">
	<chart-column column-id="data-1" 
				  column-values="30,200,100,400,150,250"
				  column-type="line"/>		
</c3chart>

```

## Documentation
The project contains a number of examples that can be started using grunt:

```
grunt devserver
```

## Goal
Come up with a number of directives to integrate C3js with AngularJS

## References
Homepage c3js library [http://c3js.org]
Homepage AngularJS [https://angularjs.org]
Homepage d3 library [http://d3js.org]


## Installation and development
We are using grunt and bower during development. Bower makes it easier to use it for your own project as well. More on this in the next section. If you want to try out the project and change sources or something like that, you can use bower and grunt to do development.

First use npm to install all grunt plugins, than use bower to install all bower dependencies.
```
npm install
bower install
```
Now grunt is available, you can use some of the utilities that grunt has in store for you. A nice one is to use the watch task and change one of the samples. There is also a plugin in place for running a development server. Just type _grunt devserver_ and connect to port 8888 on your localhost.





# React Rails

# setup

```
gem install rails --no-document
brew install mysql # brew services start mysql
brew install node
brew install yarn
```

# create project

```
rails new rails-react-tutorial --webpack=react --database=mysql --skip-test
```

# run

```
rails generate react:install
```

# create db

```
rake db:create
```

# create controller

```
rails g controller v1::things index
```

# Add HelloWorld component

```
rails g react:component HelloWorld greeting:string
```

# react-router

```
yarn add react-router-dom
```


# Add App component

```
rails generate react:component App
```

# Add babel-polyfill reselect react-redux

```
yarn add redux babel-polyfill reselect react-redux
```

# Add redux-thunk

```
yarn add redux-thunk
```

# Add redux-devtools

* [chrome redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

```
yarn add redux-devtools-extension
```

# Add semantic-ui

```
yarn add semantic-ui-css semantic-ui-react
```

#  Using a Reasonable Directory Structure

```
app
|-- javascript
|   |-- actions
|   |-- index.js
|   └── things.js
|-- components
|-- packs
└── reducers
    |-- index.js
    └── things.js
```

# Reference

* [How to create a Rails project with a React and Redux front-end](https://www.freecodecamp.org/news/how-to-create-a-rails-project-with-a-react-and-redux-front-end-8b01e17a1db/)

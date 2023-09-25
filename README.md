# Headless To Do React App
This is a simple todo app made with React that uses WordPress based backend and JSON Web Token authentication. Originally it was just a given task related to a recruitment process and a personal learning project back in 2021. Now I decided to publish it with some improvements, if someone finds it useful in any kind.

Please note that this implementation stores the authentication token in local storage, that is not the most secure way to do it. However, this app is not meant to contain any that sensitive information and fully hacker proof authorization method was not the main subject of this implementation. If you wish to implement it in more secure way, I would recommend to read this **[article](https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81)** for example.

A WordPress environment running, **[this helper plugin](https://github.com/henritik/todo-helper-plugin)** installed and **[JWT Authentication for WP REST API](https://fi.wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)** plugin are needed.

Live demo: **[https://henritikkanen.info/headless-todo/app](https://henritikkanen.info/headless-todo/app)**

Username: demo<br>
Password: demo

## Features

 - Using WordPress REST API
 - Create a new entry, delete and mark entries as done
 - Filtering and counts todos by their statuses
 - User management by WordPress and JWT authentication method
 - Simple user dashboard with basic user information
 - Loading animation while updating the data
 - Clear and mobile friendly UI

## Packages
- [@wordpress/components](https://github.com/WordPress/gutenberg)
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [react-simple-loading](https://github.com/bbstilson/react-simple-loading)
- [axios](https://www.npmjs.com/package/axios)

## Project setup
```
npm install
```

## Run dev
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

### Run test watcher
```
npm test
```

### Setting up env.locals
```
REACT_APP_BASE_URL = <!-- The full path of your WP-instance. NOTE! With a slash at the end (e.g. "https://yourdomain.com/wp/" ) -->
REACT_APP_DONE_TAXONOMY_ID = <!-- Taxonomy ID for your "Done" todos -->
REACT_APP_TODO_TAXONOMY_ID=3 <!-- Taxonomy ID for your "To do" todos -->
```

### Changelog

#### 1.0.0
- Initial release
  
## License

MIT License

Copyright (c) 2023 Henri Tikkanen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

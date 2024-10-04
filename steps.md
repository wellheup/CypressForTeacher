## Cypress Setup
### install node and npm
Note: You'll probably need to restart your shell for node commands to work
```
Phillip Wellheuser@DESKTOP-L26IESM MINGW64 ~/Cypress/CypressForTeacher
$ node -v
v20.17.0

Phillip Wellheuser@DESKTOP-L26IESM MINGW64 ~/Cypress/CypressForTeacher
$ npm -v
10.8.2
```

### setup node project
Only need to do this the first time
```
Phillip Wellheuser@DESKTOP-L26IESM MINGW64 ~/Cypress/CypressForTeacher
$ npm init -y
Wrote to C:\Users\Phillip Wellheuser\Cypress\CypressForTeacher\package.json:

{
  "name": "cypressforteacher",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

### install cypress
``` 
Phillip Wellheuser@DESKTOP-L26IESM MINGW64 ~/Cypress/CypressForTeacher
$ npm install cypress

Phillip Wellheuser@DESKTOP-L26IESM MINGW64 ~/Cypress/CypressForTeacher
$ npx cypress -v
Cypress package version: 13.14.1
Cypress binary version: 13.14.1
Electron version: 27.3.10
Bundled Node version:
18.17.1

Phillip Wellheuser@DESKTOP-L26IESM MINGW64 ~/Cypress/CypressForTeacher
$ npx cypress verify

✔  Verified Cypress! C:\Users\Phillip Wellheuser\AppData\Local\Cypress\Cache\13.14.1\Cypress
```

### install TypeScript
```
$ npm install typescript 

$ npx tsc --init --types cypress --lib dom,es6
```

### open cypress
```
Phillip Wellheuser@DESKTOP-L26IESM MINGW64 ~/Cypress/CypressForTeacher
$ npx cypress open
```

### write cypress tests


## Docker Setup
### download, install, launch, verify docker
use the manual installer exe, it's more convenient. A restart will be necessary. Also, make sure you're installing the AMD64 not ARM64, the UI is deceptive
[text](https://www.docker.com/get-started/)
```
$ docker --version
Docker version 27.2.0, build 3ab4256

$ docker ps
CONTAINER ID   IMAGE                             COMMAND                  CREATED          STATUS          PORTS                  NAMES
85a783212e98   docker/welcome-to-docker:latest   "/docker-entrypoint.…"   12 minutes ago   Up 12 minutes   0.0.0.0:8088->80/tcp   welcome-to-docker
```
also install the Docker VS Code extension, it's convenient to use

### Create your docker image
make a Dockerfile to use because it is easier at volume and to read than command line

first build docker image
```
$ docker build -t cypress-for-teacher .
```

view your image 
```
$ docker image ls
```

run your dockerized app
```
$ docker run -t cypress-for-teacher .
```
### install node
```
Phillip Wellheuser@DESKTOP-L26IESM MINGW64 ~/Cypress/CypressForTeacher
$ node -v
v20.17.0

Phillip Wellheuser@DESKTOP-L26IESM MINGW64 ~/Cypress/CypressForTeacher
$ npm -v
10.8.2
```

### setup node project
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
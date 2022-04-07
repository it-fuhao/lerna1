{
  "name": "@lerna1/{{ componentName }}",
  "version": "1.0.0",
  "description": "",
  "author": "",
  "homepage": "",
  "license": "ISC",
  "main": "dist/index.js",
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "scripts": {
    "build": "node ../../command/build.js package={{ componentName }}"
  }
}

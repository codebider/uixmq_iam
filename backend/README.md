# bit-BACKEND

1. Install (development env only)
```
$ npm i && npm run typings
$ mkdir -p tmp && mkdir -p upload && chmod 777 tmp upload
$ apt-get update && apt-get -y --no-install-recommends install imagemagick ghostscript poppler-utils vim curl
$ npm i apidoc -g
$ npm i apidoc-markdown -g
```

2. Collect configurations for external services
Seek help from other engineers in getting this folder `backend/src/node_modules/config/` with all the configurations of external services
Run Migrate DB
```
$ npm run sequelize db:migrate
```

3. Run
Watch (Dev Mode)
```
$ npm run dev
```

Start Nodejs Server
```
$ npm run compile && npm start
```

4. Build Docs
```
$ apidoc -i apidoc/ -o .tmp/
$ apidoc-markdown -p .tmp/  -o .tmp/docs.md
```

5. Test
```
$ npm run compile && npm run test
```
Wiki: `https://github.com/alsatian-test/alsatian/wiki/test-structure`

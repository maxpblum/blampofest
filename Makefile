.PHONY: install serve

install:
	npm install

serve:
	./node_modules/webpack-dev-server/bin/webpack-dev-server.js

.PHONY: install serve

SRCDIR = src

lint:
	./node_modules/eslint/bin/eslint.js $(SRCDIR) --max-warnings 0 --ext .jsx,.js

install:
	npm prune
	npm install

serve:
	./node_modules/webpack-dev-server/bin/webpack-dev-server.js

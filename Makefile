NODE_MODULES ?= $(PWD)/node_modules

SCRIPTS        := $(NODE_MODULES)/.bin/react-scripts

run:
	NODE_ENV=development BROWSER=none $(SCRIPTS) start
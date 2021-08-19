.PHONY: install

install:
	docker compose build
	docker compose run --rm mailmason npm install

build:
	docker compose run --rm mailmason npx grunt

deploy:
	docker compose run --rm mailmason npm run deploy

shell:
	docker compose run --rm mailmason /bin/bash

up:
	docker compose up

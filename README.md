# Digital Foundry Technical Exercise



An Event Manager web application that allow employees to organize events and join events.

## Requirements

The application is built in `react` `node.js`

## Setup

Install `nvm`: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

Install `node`: `nvm install 10.16.0`

Install `docker` and `docker-compose`

## Run

Build application: `docker build`

Run service: `docker-compose up backend ui`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Add backend data from [http://localhost:8000/playground](http://localhost:8000/playground) if needed.


## Assumptions

* Assumes all employees emails are already stored in database so that it can be selected from the dropdown list.

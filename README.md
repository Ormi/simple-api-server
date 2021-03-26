## General information

I focused mostly to demonstrate CI/CD processes here then make an amazing application. As my field of interest is DevOps. So the app is not even elegant.
But my application still passes the requirements and with little adjustments can be used in production.

Building and debugging an app took a lot of energy / free time. For example, one webpack library bug took me almost two hours, so the FE can work properly. And when I dockerize it, it broke again. Not too much time has been left to protect the pipelines. For this, I am quite sad about it.
For the future, I would advise you to provide an already made application so the person doing the assignment for a DevOps position can concentrate and demonstrate mostly his CI/CD skills. This was more for a full-stack position I believe.

I did not have too much free time to do it more elegantly due to my other life/work responsibilities at the moment, but I put in comments on what I would improve in the future. They are marked with the `TODO` tag in the comments in source files. Especially `Dockerfile`, `server.js`, `PreviewComponent.js` and folder `.github/workflows`.

I have bread experience with GitLab CI/CD from my professional experience, but I wanted to try and learn something new here, this is why I choose GitHub and his Actions, also due to fact that you are using them and all my personal repos are on GitHub.

## Application Information

This is simple API application that fetch data from a remote mentimeter API server, procced them, and sends them to the client. The client show this data in a nice interactive bar graph.

![ezgif-2-c6dc0b160f99](https://user-images.githubusercontent.com/3997725/112688038-99a6d780-8e78-11eb-94f2-f2f53e41ecf1.gif)

Server side - NodeJS
Client side - React
Infrastructure - Docker

Available API endpoints:
1. `/<random>` - only return same random request
2. `/48d75c359ce4` - returns mentimeter data payload
3. `/` - client endpoint to show a bar graph of mentimeter data

### How to run

#### Localy

1. `npm i`
2. `npm run build`
3. `npm start`
4. access client side it on `127.0.0.1:8080`
5. access server API on `127.0.0.1:8080/48d75c359ce4`

#### In Docker localy

1. `docker build -t mentimeter .`
2. `docker run -p 8080:8080 mentimeter`
3. access client side it on `127.0.0.1:8080`
4. access server api on `127.0.0.1:8080/48d75c359ce4`

#### In Docker from GitHub container registry


1. `docker pull docker.pkg.github.com/ormi/simple-api-server/image:latest`
2. `docker run -p 8080:8080 docker.pkg.github.com/ormi/simple-api-server/image:latest`
3. access client side it on `127.0.0.1:8080`
4. access server api on `127.0.0.1:8080/48d75c359ce4`


## Infrasturcture information

The pipeline consists of three stages:

1. Test including unit-test, integration-test, and build test of front end
2. Application build from Dockerfile to stagging
3. Application publish to GitHub Docker Hub.

## Things to improve

1. Divide pipeline for dev and production, make main production branch and dev branch as development branch.
2. Prepare some cluster on Kubernetes where this will be deployed.
3. Write unit, application, and integration tests.
4. Take a look at security of this application.
5. Improve everything what has TODO tag inside the applicaion.


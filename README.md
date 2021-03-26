## General information

I focused mostly to demonstrate CI/CD processes here than make an amazing application. As my field of interest is for DevOps. So the app is not even elegant.
But my application still pass the requirements and with little adjustments can be used in production.

Building and debugging an app took a lot of energy / free time. For example one webpack library bug took me almost two hours, so the FE can work properly. And when I dockerize it, it broke again. Not too much time have left to pertect the pipelines. For this I am quite sad about.
For future I would advise you to provide already made applciation so the person doing assesment for a DevOps position can concentrate and demonstrate mostly his CI/CD skills. This was more for fullstack position I believe.

I did not have too much free time to do it more elegantly due to my other life/work responsibilities at the moment, but I put in comments what I would improve in future. They are marked with the TODO tag in comments in source files. Especially Dockerfile, Server.js, PreviewComponent.js and folder .github/workflows

I have bread experience with GitLab CI/CD from my work envinroment, but I wanted to try and learn something new here, this is why I choose GitHub and his Actions, aslo due to fact that your are using them.

## Application Information

Availible api end points:
1. /<random> - only return same random request
2. /48d75c359ce4 - returns mentimeter data payload
3. / - client endpoint to show bar graph of mentimeter data

### How to run

#### Localy

```
1. npm i
2. npm run build
3. npm start
4. access client side it on "127.0.0.1:8080"
5. access server api on "127.0.0.1:8080/48d75c359ce4"
```

#### In Docker localy

```
1. docker build -t mentimeter .
2. docker run -p 8080:8080 mentimeter
3. access client side it on "127.0.0.1:8080"
4. access server api on "127.0.0.1:8080/48d75c359ce4"
```

#### In Docker from GitHub container registry

```
1. docker pull docker.pkg.github.com/ormi/simple-api-server/image:latest
2. docker run -p 8080:8080 docker.pkg.github.com/ormi/simple-api-server/image:latest
3. access client side it on "127.0.0.1:8080"
4. access server api on "127.0.0.1:8080/48d75c359ce4"
```

## Infrasturcture information

## Things to improve

1. Divide pipeline for dev and production, make main production branch and dev branch as development branch
2. Prepare some cluster on Kubernetes where this will be deployed
3. 


# Nestjs + Heroku Sample 2

-   This project is a submodule part of a docker container workspace
-   Instructions to run it locally [here](https://github.com/Badaueba/backend-challenge) with his workspace

#### setting up a heroku deploy

-   install [heroku](https://devcenter.heroku.com/articles/heroku-cli) cli

```
heroku git:remote -a <APP_NAME>

heroku config:set NPM_CONFIG_PRODUCTION=false

due to nestjs-heroku-sample1 dependency to provide api resources, add
heroku config:set API1_HOST=<your_nestjs-heroku-sample1 host name>

touch Procfile

content for procfile: web: npm run start:prod

git add .

git commit -m "Your message start"

git push heroku master


```

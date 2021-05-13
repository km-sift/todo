# To run the container

1. `docker-compose build`
1. `docker-compose up db`
1. in a separate shell, `docker-compose run --rm --service-ports ruby_dev`

# To run the server in the container

1. `bundle install`
1. `rails server -p $PORT -b 0.0.0.0`

Copied from https://www.freecodecamp.org/news/painless-rails-development-environment-setup-with-docker/
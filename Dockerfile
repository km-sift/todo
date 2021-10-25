FROM ruby

WORKDIR /home/app

ENV PORT 3000

EXPOSE $PORT

RUN apt-get update -qq && apt-get install -y nodejs npm
RUN npm i -g yarn
RUN gem install rails bundler
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle

ENTRYPOINT [ "/bin/bash" ]

FROM ruby

WORKDIR /home/app

ENV PORT 3000

EXPOSE $PORT

RUN gem install rails bundler
RUN apt-get update -qq && apt-get install -y nodejs npm
RUN npm i -g yarn

ENTRYPOINT [ "/bin/bash" ]

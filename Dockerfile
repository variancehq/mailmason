FROM ubuntu:latest

RUN apt-get update \ 
    && apt-get install -y curl ruby \
    && curl -fsSL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get autoremove -y \
    && apt-get clean

RUN gem install premailer \
    && gem install nokogiri

WORKDIR /mailmason

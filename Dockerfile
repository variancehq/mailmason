FROM ubuntu:latest

RUN apt update \ 
    && apt install -y curl ruby build-essential \
    && curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt install -y nodejs \
    && rm -rf /var/lib/apt/lists/* \
    && apt autoremove -y \
    && apt clean

RUN gem install premailer \
    && gem install nokogiri

WORKDIR /mailmason

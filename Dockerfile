FROM node:17-bullseye

# Disable prompts on apt-get install
ENV DEBIAN_FRONTEND noninteractive

# Install latest stable LibreOffice
RUN apt-get update -qq \
    && apt-get install -y -q libreoffice \
    && apt-get remove -q -y libreoffice-gnome

# Cleanup after apt-get commands
RUN apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /var/cache/apt/archives/*.deb /var/cache/apt/*cache.bin

# Create user 'converter'
RUN useradd --create-home --shell /bin/bash converter \
    # Give user right to run libreoffice binary
    && chown converter:converter /usr/bin/libreoffice

USER converter
WORKDIR /home/converter

ADD package.json ./package.json
ADD src/index.js ./index.js
RUN mkdir output && npm install
#ADD src/resources ./resources
#ADD src/fonts/* /usr/share/fonts/

CMD ["node", "index.js"]

FROM node:18-alpine

# Install libreoffice
RUN apk add --no-cache --progress --quiet libreoffice-writer \
# Create a new group and user in a single go
&& addgroup -S converter && adduser -S converter -G converter \
# Give user right to run libreoffice binary
&& chown converter:converter /usr/bin/libreoffice

USER converter
WORKDIR /home/converter

ADD package.json ./package.json
ADD src/index.js ./index.js
RUN mkdir resources && npm install
ADD src/resources/doc.docx ./resources/doc.docx
ADD src/fonts/* /usr/share/fonts/

# If you need to install custom fonts, just copy them
#ADD src/custom-fonts/* /usr/share/fonts/

CMD ["node", "index.js"]

# libreoffice-docx-to-pdf
Web API to convert docx document to PDF using libreoffice

# Requirements
You need to have libreoffice installed on your system

Good news! 
You can run the application in docker, with all dependencies installed, including libreoffice. See more bellow!

# Run it
You can run it on your machine with:
```
npm install
npm start
```

Or you can run in docker. The image exists in docker hub.
```
docker run --rm -d genilto/libreoffice-docx-to-pdf
```

Or You can build the image yourself before run:
```
docker build . --tag genilto/libreoffice-docx-to-pdf
```
# Next Steps
```
[X] Run everything in docker
[X] Allow to install and use custom fonts in docx document
[X] Run in some web api endpoint
[ ] Create some authentication
[ ] Include an endpoint to install custom fonts? Maybe not
[ ] Include an api that receive a base64 docx and return a pdf document
[ ] Include an api that receive an url to a docx document and return a pdf document
[ ] Include an api that receive an url to a docx document and an webhook url and calls the webhook with the pdf document in body
```

# libreoffice-docx-to-pdf
Web API to convert docx document to PDF using libreoffice

# Requirements
You need to have libreoffice installed on your system.

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
docker run -d -p 3000:3000 --name docx-pdf genilto/libreoffice-docx-to-pdf
```

Or You can build the image yourself:
```
docker build . --tag genilto/libreoffice-docx-to-pdf
```

## Attach a shell to the container
```
docker exec -u root -it docx-pdf sh
```

# How to test?
Just access in your browser http://localhost:3000 and you will see the pdf generated from the docx that is inside src/resources/doc.docx

Works very well as a POC, but it really needs that the Next Steps to be implemented!

# Next Steps
```
[X] Run everything in docker
[X] Allow to install and use custom fonts in docx document
[X] Run in some web api endpoint
[ ] Create some authentication
[ ] Include an endpoint to install custom fonts? Maybe not
[ ] Include an api that receive a base64 docx and return a pdf document
[ ] Include an api that receive an url to a docx document and return a pdf document
[ ] Include an api that receive an url to a docx document and an webhook url, make pdf and calls the webhook with the pdf document in body
[ ] Include an api that receive an google cloud storage docx file path and an webhook url, make pdf, upload back to cloud storage, and calls the webhook informing the process is done
```

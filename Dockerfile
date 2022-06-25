FROM nikolaik/python-nodejs:latest

RUN apt update && apt install -y libcairo2 unzip wget libpoppler-qt5-dev libcairo2-dev poppler-data

WORKDIR /home/node

COPY fw9.pdf .
COPY index.js .
COPY package.json .
COPY write_w9.js .

RUN chmod a+x write_w9.js index.js

RUN npm install
CMD node index.js && echo " " && echo "Now running pdf filling example" && echo " " && node ./write_w9.js



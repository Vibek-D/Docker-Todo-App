## docker image will be created from this dockerfile and this image will be run  
FROM node:15
WORKDIR /app
## docker caches internally so, if package.json changes then copy all the files into container workdir
COPY package.json .
## fisrt only take the package.json file and run npm install to install dependencies and then mode all other files such as index.js into container
RUN npm install
## index file and all other files moved
COPY . ./
EXPOSE 3000
## when the container is run
CMD ["npm", "run", "start"]
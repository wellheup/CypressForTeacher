# base docker image to use: this one should be cypress on node on an OS
FROM cypress/included:latest 
# project file to copy contents of to be used in docker env and the folder to put it all into in the container
COPY . /cypress-for-teacher
# directory to cd into after copying
WORKDIR /cypress-for-teacher
# setup action to do prior to actual purpose of container
RUN npm install
# the command that will be executed when a container is started from this image. 
# It runs the cypress run command using npm
CMD ["npm", "run", "npx cypress run --browser chrome"]
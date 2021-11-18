Documentation for EthanDocherty/healthAPI
NOTE: This code exists purely as a proof of concept it is highly unlikely you will find much use for it but feel free to forward questions
about it to ethandocherty@yahoo.com.au if you do have any interest
NOTE: The image will NOT build or run properly without command prompt running with Administrator privileges and Docker Engine running in the background

How to build the image:
There are two ways to build this container. A prebuilt image exists at https://hub.docker.com/repository/docker/edocherty/healthapi
If you pull this using the command "docker pull edocherty/healthapi:latest" you can simply skip to the section of this document that
 details running the imageIf you wish to manually containerise the files yourself you can simply download these files as a zip or 
pull them using the command "git pull https://github.com/EthanDocherty/HealthAPI/" and build them using the 
command "docker build --build-arg GIT_HASH=$(git rev-parse HEAD) -t buildname:tag ."
replacing "buildname:tag" with whatever you want (I use healthapi:latest) and "." with preferred path 
(. will use whatever path you are running command prompt in)

How to Run: 
Simply run the command "docker run -p 3000:3000 -d buildname:tag"
Replacing “buildname:tag” with the appropriate build name and tag (edocherty/healthapi:latest for the automatic build)

Testing:
The container with run the program outputting to the url http://localhost:3000/health
Open this using your browser of choice. You can verify the authenticity of the output by comparing Name and Version against 
the package.json in the repository and the Git Hash against the SHA at the top of this page of the GitHub API 
https://api.github.com/repos/ethandocherty/healthapi/commits

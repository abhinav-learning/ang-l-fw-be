SHELL := /bin/bash  # Specify bash as the shell for commands

.PHONY: docker_build create_cluster deploy

docker_build:
	./docker_build.sh

create_cluster:
	./create_cluster.sh 

deploy:
	./deploy.sh 


SHELL := /bin/bash  # Specify bash as the shell for commands

.PHONY: docker_build docker_push create_cluster create_ns deploy remove delete_cluster

docker_build:
	./docker_build.sh

docker_push:
	./docker_push.sh

create_cluster:
	./create_cluster.sh

create_ns:
	./create_ns.sh 

deploy:
	./deploy.sh

remove:
	./remove.sh

delete_cluster:
	./delete_cluster.sh


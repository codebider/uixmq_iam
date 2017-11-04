#!/usr/bin/env bash

set -xeuo pipefail

export ENVIRONMENT=deployment
source ./configuration/deployment/config


if [ "$(uname)" == "Darwin" ]; then
	export DOCKERHOST_IP="$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)"
else
    export DOCKERHOST_IP="$(ifconfig $(ip route | head -1 | awk '{ print $5 }') | grep "inet " | awk '{ print $2 }' | awk -F':' '{ print $2 }')"
fi
echo "DOCKERHOST_IP: $DOCKERHOST_IP"

export PORT=${PORT:-5555}

DOCKER_COMPOSE="docker-compose -p bit${ENVIRONMENT} -f docker-compose.yml -f docker-${ENVIRONMENT}.yml"

${DOCKER_COMPOSE} build
${DOCKER_COMPOSE} down || true
${DOCKER_COMPOSE} up

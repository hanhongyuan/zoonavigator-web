#!/bin/sh

ZOONAV_VERSION="$1"
DOCKER_IMAGE="$DOCKER_USERNAME/$DOCKER_REPOSITORY"

docker login -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD" \
  && docker build -t $DOCKER_IMAGE --build-arg ZOONAV_VERSION=$ZOONAV_VERSION . \
  && docker push $DOCKER_IMAGE \
  && docker tag $DOCKER_IMAGE $DOCKER_IMAGE:$ZOONAV_VERSION \
  && docker push $DOCKER_IMAGE:$ZOONAV_VERSION

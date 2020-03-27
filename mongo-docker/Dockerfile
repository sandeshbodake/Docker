# step 1] install os
FROM alpine

#  step 2] install  a software
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories
RUN apk update
RUN apk add mongodb=3.4.4-r0
RUN apk add binutils
# 3] configure that software
VOLUME ["/data/db"]
WORKDIR /data
EXPOSE 27017

RUN apk add isl
# 4] set defualt commands
CMD ["mongod"]
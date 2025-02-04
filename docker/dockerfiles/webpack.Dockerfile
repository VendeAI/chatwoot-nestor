FROM chatwoot:development

# Remove existing nodejs and yarn, then install specific versions
RUN apk del nodejs nodejs-current yarn && \
    apk add --no-cache nodejs=20.15.1-r0 && \
    apk add --no-cache yarn

RUN chmod +x docker/entrypoints/webpack.sh

EXPOSE 3035
CMD ["bin/webpack-dev-server"]
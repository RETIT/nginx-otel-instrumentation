FROM nginx:1.23.1
RUN apt-get update ; apt-get install unzip
ADD https://github.com/open-telemetry/opentelemetry-cpp-contrib/releases/download/webserver/v1.0.3/opentelemetry-webserver-sdk-x64-linux.tgz /opt
RUN cd /opt ; tar -xf opentelemetry-webserver-sdk-x64-linux.tgz -C /opt
RUN cd /opt/opentelemetry-webserver-sdk; ./install.sh
RUN echo "load_module /opt/opentelemetry-webserver-sdk/WebServerModule/Nginx/1.23.1/ngx_http_opentelemetry_module.so;\n$(cat /etc/nginx/nginx.conf)" > /etc/nginx/nginx.conf
ENV LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/opt/opentelemetry-webserver-sdk/sdk_lib/lib
COPY opentelemetry_module.conf /etc/nginx/conf.d
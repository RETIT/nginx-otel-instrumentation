# OpenTelemetry instrumentation of nginx

This repository contains an example setup based on docker compose containing two services connected via a nginx reverse proxy that is instrumented
with the otel-webserver-module.

To start the setup run:

`docker compose up --build`

This will start
- service-a: a simple NodeJS application providing a `/serviceA` endpoint which when called is initiating a request against `/serviceB` via the reverse proxy and returning the combined result
- service-b: a simple NodeJS application providing a `/serviceB` endpoint
- nginx: a reverse proxy connecting both services
- opentelemetry-collector: an OpenTelemetry collector that is forwarding the collected traces to the tracing backend
- jaeger: a tracing backend to store and visualize the recorded traces


Initiate requests against http://localhost/ServiceA and have a look at the resulting traces in jeager http://localhost:16686.
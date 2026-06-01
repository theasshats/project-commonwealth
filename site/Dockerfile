# Build the site into a tiny static binary, then ship it on distroless.
# The HTML/CSS/JS are embedded into the binary (see main.go), so the runtime
# image carries no filesystem assets and runs as a non-root user.
FROM golang:1.22-alpine AS build
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o /derpack-site .

FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=build /derpack-site /derpack-site
# Non-root can't bind :80, so the service listens high and Caddy proxies to it.
EXPOSE 8080
ENV LISTEN_ADDR=:8080
ENTRYPOINT ["/derpack-site"]

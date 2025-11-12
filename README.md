# Hello World REST API

A simple REST API server with a single endpoint.

## Endpoint

**GET /hello**
- Returns: `{ "message": "hello world" }`

## Local Development

```bash
npm install
npm start
```

Server runs on port 3000 by default (configurable via PORT environment variable).

## Testing

Visit `http://localhost:3000/hello` in your browser or use curl:

```bash
curl http://localhost:3000/hello
```

# node-express-prisma

A simple app framework to create basic REST APIs.

## Overview

This framework uses **functional programming** and is built on the basic layers — **route**, **controller**, and **model** — extended with a **service** layer.

## Architecture

| Layer | Responsibility |
| ---------- | ------------------------------------------- |
| Route | Maps HTTP endpoints to controllers |
| Controller | Handles requests and responses |
| Service | Contains business logic |
| Model | Manages data access |

## Getting Started

It is dockerized, so it can be tried by running:

```bash
docker compose up
```

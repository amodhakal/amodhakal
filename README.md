<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:7c3aed&height=140&text=Amodh%20Dhakal&fontSize=56&fontColor=ffffff&animation=fadeIn" alt="Amodh Dhakal" width="100%">
</p>

**Software engineer focused on backend systems, distributed systems, and performance, and reliability**

Raleigh, NC · Authorized to work in the USA

[![Email](https://img.shields.io/badge/Email-amodhakal@gmail.com-2563eb?style=for-the-badge&logo=Gmail&logoColor=white)](mailto:amodhakal@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-amodhakal-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://linkedin.com/in/amodhakal)
[![Portfolio](https://img.shields.io/badge/Portfolio-amodhakal.tech-7c3aed?style=for-the-badge)](https://amodhakal.tech)
[![Resume](https://img.shields.io/badge/Resume-PDF-111827?style=for-the-badge)]([LINK_TO_RESUME_PDF])

## Open Source

Contributions to MariaDB Server, one of the most widely deployed relational databases:

- [**MDEV-38349**](https://github.com/MariaDB/server/pull/4715): fixed an assertion failure on `INSERT`/`REPLACE` error paths that left inconsistent state after a failed query. Merged 2026-03-03.
- [**MDEV-38922**](https://github.com/MariaDB/server/pull/4710): fixed incorrect progress reporting for `REPAIR TABLE` by tracing it through the storage engine's status layer. Merged 2026-03-17.

## Projects

**[PolicyManager](https://github.com/amodhakal/PolicyManager)**: insurance policy administration API · *C#, ASP.NET Core, EF Core, RabbitMQ, Azure*
Handled ~13,600 req/s across 6 instances in load tests. Uses optimistic concurrency to prevent lost updates, a transactional outbox for reliable event delivery, and encrypted PII at rest. 90%+ test coverage, including a real-SQL-Server suite via Testcontainers.

**[QuadroURL](https://github.com/amodhakal/quadrourl)**: distributed URL shortener · *Python, Flask, Kafka, Redis, Terraform*
12,400+ req/s at 200ms p95 in load tests. Two-tier caching with cache-stampede protection, Prometheus/Grafana monitoring, one-command Terraform deploy, and a React dashboard for analytics.

**[uBlockAI](https://github.com/amodhakal/uBlockAI)**: Chrome extension that flags AI-generated misinformation in social feeds · *TypeScript, Python, LangGraph*
An LLM agent with web search and source-credibility scoring. The scoring is deterministic, so results are reproducible. The API is hardened with hashed keys, rate limiting, and SSRF protection.

**[Medilin](https://github.com/amodhakal/Medilin)**: multilingual voice medical intake, **3rd place at SolHacks 2026** · *TypeScript, Next.js, ElevenLabs, WebSockets*
Patients book appointments by voice or form in English, Spanish, or Portuguese. Real-time voice agents over WebSockets, with HIPAA-aligned design: envelope-encrypted patient data and a tamper-evident audit log.

**[Linterra](https://github.com/amodhakal/linterra)**: voxel engine from scratch · *C++23, OpenGL, GLSL*
GPU compute-shader terrain generation, multithreaded chunk meshing, and a cross-platform shader pipeline.

### More Projects

| Project | What it does |
|---|---|
| [FastTute.dev](https://github.com/amodhakal/fasttute.dev) | AI lessons from YouTube tutorials |
| [vecsearch](https://github.com/amodhakal/vecsearch) | Vector search from scratch in pure Python |
| [Pathtracer](https://github.com/amodhakal/pathtracer) | GPU path tracing in WebGL2 |
| [OpenTodoist](https://github.com/amodhakal/opentodoist) | Turns freeform text into Todoist tasks |

## Education

**North Carolina State University**: B.S. Computer Science · Graduated 2025 · GPA 3.96 / 4.00

Coursework: Data Structures & Algorithms, Operating Systems, Computer Graphics, Network Security, Software Engineering

## Skills

**Languages & Tech:** TypeScript · Python · C# · C++ · SQL · React · Next.js · ASP.NET Core · Flask · PostgreSQL · SQL Server · Redis · Kafka · RabbitMQ · Docker · Terraform · Azure · GitHub Actions · Prometheus · Grafana · OpenTelemetry · Java · Go · Rust · C · Vue · Angular · Spring Boot · gRPC · AWS · Kubernetes · MySQL

**Testing:** xUnit · Vitest · Pytest · JUnit · Playwright · Testcontainers

**AI:** LangGraph · OpenAI / Gemini APIs · ElevenLabs · pgvector · AI-assisted development (Claude Code)

---

**Open to roles.** Email is the fastest way to reach me: [amodhakal@gmail.com](mailto:amodhakal@gmail.com)

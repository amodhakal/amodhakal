<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:7c3aed&height=180&text=Amodh%20Dhakal&fontSize=64&fontColor=ffffff&animation=fadeIn" alt="Amodh Dhakal" width="100%">
</p>

<p align="center">
  <b>Software engineer building distributed systems, real-time applications, and low-level performance work.</b>
</p>

<p align="center">
  <a href="mailto:amodhakal@gmail.com"><img src="https://img.shields.io/badge/Email-amodhakal@gmail.com-2563eb?style=for-the-badge&logo=Gmail&logoColor=white" alt="Email"></a>
  <a href="https://linkedin.com/in/amodhakal"><img src="https://img.shields.io/badge/LinkedIn-amodhakal-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white" alt="LinkedIn"></a>
  <a href="https://amodhakal.tech"><img src="https://img.shields.io/badge/Portfolio-amodhakal.tech-7c3aed?style=for-the-badge" alt="Portfolio"></a>
  <img src="https://img.shields.io/badge/Open%20to%20SWE%20roles-22c55e?style=for-the-badge" alt="Open to SWE roles">
</p>

---

## Upstream Work

Two bug fixes merged into [MariaDB Server](https://github.com/MariaDB/server), one of the most widely-deployed relational databases in the world, through public review with core maintainers.

- **[MDEV-38349](https://github.com/MariaDB/server/pull/4715)** — Fixed an assertion failure on error paths in `INSERT`/`REPLACE`, leaving inconsistent state after a failed query. Merged 2026-03-03.
- **[MDEV-38922](https://github.com/MariaDB/server/pull/4710)** — Corrected incorrect CLI progress reporting for `REPAIR TABLE`, traced through the storage engine's status-reporting layer. Merged 2026-03-17.

## Featured Projects

**[PolicyManager](https://github.com/amodhakal/PolicyManager)** · Insurance policy administration API · *C# · ASP.NET Core · EF Core · RabbitMQ · Azure*
Sustains **~13,600 req/s across 6 instances** on Azure Container Apps, with OpenTelemetry tracing and Polly resilience wired once at the composition root.
- Every write carries an optimistic-concurrency token, so a stale edit is rejected with a `409` instead of silently overwriting a concurrent change. A transactional outbox commits domain writes and their events atomically, published over RabbitMQ with a leased dispatcher that survives process death mid-batch and dead-letters after bounded backoff.
- PII stays encrypted at rest (AES-GCM via an EF value converter) behind a keyed blind index for equality lookup, rolled out in two phases that refuse to tighten the index until a backfill has provably completed.
- 90%+ coverage deliberately split: the EF InMemory provider's blind spots (no unique indexes, foreign keys, column precision, or transactions) are covered by a second suite against real SQL Server via Testcontainers. Auditing the README against the code surfaced real defects, including an unauthenticated reports endpoint.

**[QuadroURL](https://github.com/amodhakal/quadrourl)** · Distributed URL shortener · *Python · Flask · Kafka · Redis · Terraform*
Sustains **12,400+ req/s at 200ms p95** under load, with a React/TypeScript dashboard for redirects and analytics.
- Two-tier caching (in-app L1, Redis L2) with cache-stampede protection via request coalescing and jittered TTLs, plus tuned indexing and connection pooling. Added semantic search and a RAG Q&A endpoint on pgvector with Redis-cached retrieval.
- Full observability stack in Prometheus and Grafana, cutting incident detection to under 5 minutes. Infrastructure defined in Terraform — one command to deploy or tear down. 80%+ coverage enforced through GitHub Actions.

**[uBlockAI](https://github.com/amodhakal/uBlockAI)** · Chrome extension + Flask service that flags AI-generated misinformation in social feeds · *TypeScript · Python · LangGraph · Tesseract*
A LangGraph ReAct agent calls web search, credibility tiering, and numeric verification, returning schema-validated output via Pydantic. Scores are **reproducible by construction** — a deterministic code-level credibility mapping blended 50/50 with the model score and clamped to ±0.15, so the model picks a tier and never the arithmetic.
- Hardened a service that spends money per request: SHA-256-hashed keys with constant-time comparison, per-token rate limiting shared across single and batch endpoints, fail-closed CORS, and an allowlist-first SSRF guard that resolves all A/AAAA records and refuses any private address including IPv4-mapped IPv6.
- Progress is driven by observed tool invocations rather than a scripted timeline, so the UI never reports work that did not happen. A 12-gate CI pipeline plus a boot probe asserting the health endpoint returns 200 and analysis returns 401 without a key, so a regression cannot quietly reopen the service.

**[Medilin](https://github.com/amodhakal/Medilin)** · **3rd place, SolHacks 2026** — multilingual medical intake · *TypeScript · Next.js · ElevenLabs · WebSockets*
Patients submit details by form or voice in English, Spanish, or Portuguese and receive a confirmed appointment, with an `.ics` invite, in their own language.
- A real-time WebSocket relay to two ElevenLabs conversational agents, modelling turn-taking as an explicit state machine with exponential-backoff reconnect and a context recap on resume.
- A HIPAA-compliant PHI layer using AES-256-GCM envelope encryption with a fresh data key per record, plus a tamper-evident SHA-256 hash-chained audit log that fails closed. PHI was removed from URLs in favor of short opaque references and single-use revocable tokens, verified by a deny-by-default log scrubber asserted against serialised wire payloads.

**[Linterra](https://github.com/amodhakal/linterra)** · Voxel engine from scratch · *C++23 · OpenGL · GLSL · CMake*
- GPU compute shaders generate procedural terrain heightmaps through Shader Storage Buffer Objects, with a platform-adaptive noise fallback and CPU-parallelized vertex meshing per chunk.
- Renderer abstraction, multithreaded chunk generation, and GLSL that compiles to SPIR-V, Metal, and OpenGL from one source.

## More Projects

| Project | What it does |
|---|---|
| [FastTute.dev](https://github.com/amodhakal/fasttute.dev) | AI-generated chapters, synchronized transcripts, and cited Q&A that turns YouTube tutorials into interactive lessons |
| [vecsearch](https://github.com/amodhakal/vecsearch) | Vector search from scratch in pure Python — brute-force KNN with pluggable metrics, working toward graph-based HNSW |
| [Pathtracer](https://github.com/amodhakal/pathtracer) | Progressive path tracing entirely on the GPU in WebGL2, with area lights and soft shadows |
| [OpenTodoist](https://github.com/amodhakal/opentodoist) | Extracts prioritized, dated tasks from freeform text and syncs them to Todoist behind a review-and-approve flow |

## Experience

**Software Engineer — Game2Learn Lab** · Raleigh, NC · *Jan 2025 – Apr 2025*
- Built the core UI layer in JavaScript and Vue.js for a medical training simulation, including hospital floor navigation, dynamic ward maps, patient charting, and branching clinical conversations validated by medical faculty.
- Cut Vite build times **78% to 28 seconds** by manually chunking and pre-bundling dependencies, shortening the team's feedback loop during active feature work.
- Automated **85%+ test coverage** with Vitest and GitHub Actions across store modules and views, catching regressions before weekly stakeholder demos.

## Education

**North Carolina State University** · B.S. Computer Science · *2023 – 2025* · GPA 3.96/4.00

Relevant coursework: Data Structures & Algorithms · Operating Systems · Computer Graphics · Human-Centered Security · Network Security · Software Engineering · Automata, Grammars, and Computation · Probability & Statistics · Linear Algebra · Discrete Mathematics · Building Game AI

## Tech

| | |
|---|---|
| **Languages** | TypeScript · Python · JavaScript · Java · C++ · C · Go · Rust · SQL · HTML · CSS |
| **Backend** | ASP.NET Core · Spring Boot · Flask · Node.js · REST · gRPC |
| **Frontend** | React · Next.js · Vue · Angular · Tailwind CSS |
| **Data** | SQL Server · PostgreSQL · MySQL · Redis · Kafka · RabbitMQ · pgvector · Entity Framework Core · Hibernate |
| **AI** | LangGraph · OpenAI · Gemini · ElevenLabs · Tesseract OCR · Claude Code |
| **Infrastructure** | AWS · Azure · Docker · Terraform · GitHub Actions · Kubernetes |
| **Observability** | Prometheus · Grafana · OpenTelemetry · Polly |
| **Testing** | xUnit · Vitest · Pytest · JUnit · Playwright · Testcontainers · Postman |

## GitHub Stats

<a href="https://github-stats-extended.vercel.app/api/top-langs?username=amodhakal&amp;layout=compact&amp;langs_count=12&amp;hide_values=true&amp;theme=dark_github"><img src="https://github-stats-extended.vercel.app/api/top-langs?username=amodhakal&amp;layout=compact&amp;langs_count=12&amp;hide_values=true&amp;theme=dark_github" alt="Top languages"></a>
<a href="https://github-stats-extended.vercel.app/api?username=amodhakal&amp;hide_rank=true&amp;show_icons=true&amp;include_all_commits=true&amp;theme=dark_github"><img src="https://github-stats-extended.vercel.app/api?username=amodhakal&amp;hide_rank=true&amp;show_icons=true&amp;include_all_commits=true&amp;theme=dark_github" alt="GitHub stats"></a>

---

<p align="center">
  <b>Open to software engineering roles.</b> The fastest way to reach me is <a href="mailto:amodhakal@gmail.com">email</a> — happy to talk through anything above.
</p>

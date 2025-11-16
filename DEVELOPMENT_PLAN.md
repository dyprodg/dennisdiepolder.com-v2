# Development Plan: dennisdiepolder.com Evolution

## Executive Summary
Transform dennisdiepolder.com from a static portfolio into an interactive platform showcasing frontend excellence and automation capabilities, built with production-grade infrastructure.

---

## 1. Design Concept: "Swiss Precision Meets Digital Automation"

### Design Philosophy
**Swiss Design Principles Applied:**
- **Grid Systems**: Strict mathematical grid-based layouts
- **Typography-First**: Bold, sans-serif type hierarchy (continuing with Inter)
- **Asymmetric Balance**: Dynamic layouts that break traditional symmetry
- **Negative Space**: Generous whitespace for breathing room
- **Functional Color**: Color used purposefully, not decoratively
- **Precision & Clarity**: Every element serves a purpose

### Visual Identity
```
Current Palette (Keep & Enhance):
--color-primary: #1a1a1a     → Pure Black (#000000) for Swiss contrast
--color-secondary: #333333   → Keep
--color-accent: #666666      → Add Red accent (#E4000F) Swiss railway red
--color-light: #f5f5f5       → Pure White (#FFFFFF) for maximum contrast
--color-grid: #CCCCCC        → Grid visualization (toggle-able)
```

---

## 2. Interactive Features & Animations

### Feature Set

#### A. **Interactive Automation Playground** (Main Feature)
A live, browser-based automation demonstrator where visitors can:
- Create simple automation workflows visually
- See real-time execution (backend powered)
- Export/import workflow configurations
- Leaderboard for most creative automations

**Tech Stack:**
- Frontend: Custom SVG-based node graph editor
- Backend: Golang workflow engine
- Storage: PostgreSQL for workflows, Redis for execution state

#### B. **Swiss Grid Visualizer**
Toggle-able overlay showing:
- 12-column grid system
- Baseline grid for typography
- Golden ratio proportions
- Animation paths and bezier curves

#### C. **Kinetic Typography**
- Text that responds to scroll position
- Words that fragment and reassemble
- SVG path animations for section headers
- Variable font weight transitions

#### D. **Performance Metrics Dashboard**
Real-time display of:
- Page load performance (Core Web Vitals)
- Animation frame rates
- API response times
- Lighthouse scores

#### E. **Code Snippet Tester**
Live code playground for:
- JavaScript/TypeScript
- Golang (backend execution)
- Terraform snippets (validation only)
- Syntax highlighting with Shiki

### Animation Philosophy
**Micro-interactions:**
- Page transitions: 400ms cubic-bezier(0.16, 1, 0.3, 1) (Swift Out)
- Hover effects: 200ms cubic-bezier(0.4, 0, 0.2, 1) (Standard)
- Scroll reveals: Intersection Observer with stagger
- Parallax: Subtle depth (max 20px offset)

**Macro-animations:**
- Section transitions with clipping masks
- SVG morphing between page states
- Grid-based reveal animations
- Text masking effects

---

## 3. Technical Architecture

### 3.1 Frontend Architecture

```
frontend/
├── src/
│   ├── components/
│   │   ├── automation/
│   │   │   ├── WorkflowCanvas.astro
│   │   │   ├── NodeEditor.astro
│   │   │   └── ExecutionPanel.astro
│   │   ├── swiss-grid/
│   │   │   ├── GridOverlay.astro
│   │   │   └── GridToggle.astro
│   │   ├── animations/
│   │   │   ├── KineticText.astro
│   │   │   ├── ScrollReveal.astro
│   │   │   └── ParallaxSection.astro
│   │   ├── playground/
│   │   │   ├── CodeEditor.astro
│   │   │   └── ExecutionResult.astro
│   │   └── metrics/
│   │       └── PerformanceDashboard.astro
│   ├── layouts/
│   │   └── Layout.astro (enhanced)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── playground.astro
│   │   └── api/
│   │       └── [...].ts (Astro endpoints for proxying)
│   ├── styles/
│   │   ├── global.css
│   │   ├── swiss-grid.css
│   │   └── animations.css
│   └── lib/
│       ├── api-client.ts
│       ├── animations.ts
│       └── workflow-engine.ts
├── public/
│   ├── fonts/ (Inter variable font)
│   └── assets/
└── tests/
    ├── unit/
    ├── integration/
    └── e2e/
```

**Dependencies to Add:**
```json
{
  "dependencies": {
    "astro": "^5.15.4",
    "@astrojs/node": "^8.0.0",
    "d3": "^7.9.0",
    "gsap": "^3.12.0",
    "monaco-editor": "^0.45.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.40.0",
    "vitest": "^1.0.0",
    "@vitest/ui": "^1.0.0",
    "typescript": "^5.3.0",
    "prettier": "^3.1.0",
    "eslint": "^8.55.0"
  }
}
```

### 3.2 Backend Architecture (Golang)

```
backend/
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   ├── api/
│   │   ├── handlers/
│   │   │   ├── workflow.go
│   │   │   ├── playground.go
│   │   │   └── metrics.go
│   │   ├── middleware/
│   │   │   ├── cors.go
│   │   │   ├── ratelimit.go
│   │   │   └── security.go
│   │   └── router.go
│   ├── workflow/
│   │   ├── engine.go
│   │   ├── executor.go
│   │   └── validator.go
│   ├── playground/
│   │   ├── sandbox.go (Docker-based execution)
│   │   └── validator.go
│   ├── models/
│   ├── repository/
│   │   ├── postgres/
│   │   └── redis/
│   └── config/
├── pkg/
│   ├── logger/
│   ├── metrics/
│   └── utils/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── deployments/
│   └── docker/
│       └── Dockerfile
├── go.mod
├── go.sum
└── Makefile
```

**Key Packages:**
- `github.com/gin-gonic/gin` - HTTP framework
- `github.com/lib/pq` - PostgreSQL driver
- `github.com/go-redis/redis/v8` - Redis client
- `github.com/golang-migrate/migrate` - Database migrations
- `github.com/stretchr/testify` - Testing utilities
- `go.uber.org/zap` - Structured logging
- `github.com/prometheus/client_golang` - Metrics

### 3.3 Infrastructure (Terraform)

```
infrastructure/
├── environments/
│   ├── dev/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── terraform.tfvars
│   ├── staging/
│   └── production/
├── modules/
│   ├── cloudfront/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   └── cloudfront-function.js
│   ├── s3-static-site/
│   ├── ecs-backend/
│   │   ├── main.tf (Fargate)
│   │   ├── alb.tf
│   │   └── autoscaling.tf
│   ├── rds-postgres/
│   ├── elasticache-redis/
│   ├── waf/
│   ├── route53/
│   └── acm/
├── global/
│   ├── s3-backend.tf
│   └── dynamodb-lock.tf
└── scripts/
    ├── init.sh
    └── deploy.sh
```

**AWS Services:**
- **CloudFront** - CDN for static assets
- **S3** - Static site hosting
- **ECS Fargate** - Backend containers
- **ALB** - Application Load Balancer
- **RDS PostgreSQL** - Workflow storage
- **ElastiCache Redis** - Session & cache
- **WAF** - Security rules
- **Route53** - DNS management
- **ACM** - SSL certificates
- **CloudWatch** - Logging & metrics
- **Secrets Manager** - Sensitive data

---

## 4. Security & Best Practices

### Application Security
1. **Input Validation**
   - Strict schema validation (Zod on frontend, struct tags in Go)
   - SQL injection prevention (parameterized queries)
   - XSS prevention (CSP headers, HTML escaping)

2. **Code Execution Sandbox**
   - Docker containers with resource limits
   - Network isolation
   - Execution timeout (5 seconds max)
   - Whitelist allowed packages

3. **Rate Limiting**
   - Per-IP: 100 req/min general, 10 req/min for playground
   - Redis-backed distributed rate limiting
   - Exponential backoff for repeated violations

4. **Authentication** (Future Phase)
   - JWT with short expiry (15 min)
   - Refresh tokens in httpOnly cookies
   - CSRF protection

### Infrastructure Security
1. **Network**
   - Private subnets for backend & databases
   - Security groups with minimal access
   - VPC Flow Logs enabled

2. **Data**
   - Encryption at rest (RDS, S3)
   - Encryption in transit (TLS 1.3)
   - Secrets in AWS Secrets Manager

3. **WAF Rules**
   - SQL injection protection
   - XSS protection
   - Rate limiting
   - Geo-blocking (optional)

### Code Quality
1. **Linting & Formatting**
   - ESLint + Prettier (frontend)
   - golangci-lint (backend)
   - Pre-commit hooks

2. **Testing Requirements**
   - Unit tests: 80% coverage minimum
   - Integration tests for all API endpoints
   - E2E tests for critical user flows
   - Performance tests (Lighthouse CI)

---

## 5. Testing Strategy

### 5.1 Frontend Testing

```bash
# Unit Tests (Vitest)
npm run test:unit

# E2E Tests (Playwright)
npm run test:e2e

# Visual Regression (Playwright)
npm run test:visual

# Performance (Lighthouse CI)
npm run test:perf
```

**Test Files:**
```
tests/
├── unit/
│   ├── components/
│   │   ├── WorkflowCanvas.test.ts
│   │   └── CodeEditor.test.ts
│   └── lib/
│       └── animations.test.ts
├── integration/
│   └── api/
│       └── workflow-api.test.ts
└── e2e/
    ├── automation-playground.spec.ts
    ├── code-playground.spec.ts
    └── performance.spec.ts
```

### 5.2 Backend Testing

```bash
# Unit Tests
make test

# Integration Tests (requires Docker)
make test-integration

# E2E Tests
make test-e2e

# Coverage Report
make coverage
```

**Test Structure:**
```go
internal/
└── workflow/
    ├── engine.go
    └── engine_test.go

tests/
├── integration/
│   ├── api_test.go
│   └── workflow_test.go
└── e2e/
    └── scenarios_test.go
```

### 5.3 Infrastructure Testing

```bash
# Terraform Validation
terraform fmt -check
terraform validate

# Security Scanning (tfsec)
tfsec infrastructure/

# Cost Estimation (Infracost)
infracost breakdown --path infrastructure/
```

---

## 6. CI/CD Pipeline (GitHub Actions)

### Workflows

#### `.github/workflows/frontend-ci.yml`
```yaml
name: Frontend CI

on:
  push:
    branches: [main, develop]
    paths:
      - 'src/**'
      - 'public/**'
      - 'package.json'
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test:unit
      - run: npm run build
      - run: npx playwright install
      - run: npm run test:e2e

  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:4321
          uploadArtifacts: true
```

#### `.github/workflows/backend-ci.yml`
```yaml
name: Backend CI

on:
  push:
    paths:
      - 'backend/**'
      - '.github/workflows/backend-ci.yml'

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
        with:
          go-version: '1.22'
      - run: cd backend && make test
      - run: cd backend && make test-integration

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: securego/gosec@master
        with:
          args: ./backend/...

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: docker/build-push-action@v5
        with:
          context: ./backend
          push: false
          tags: backend:test
```

#### `.github/workflows/terraform-ci.yml`
```yaml
name: Infrastructure CI

on:
  push:
    paths:
      - 'infrastructure/**'
  pull_request:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: hashicorp/setup-terraform@v3
      - run: terraform fmt -check -recursive infrastructure/
      - run: cd infrastructure/environments/dev && terraform init -backend=false
      - run: cd infrastructure/environments/dev && terraform validate

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: aquasecurity/tfsec-action@v1.0.0
        with:
          working_directory: infrastructure/

  cost:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: infracost/actions/setup@v2
      - run: infracost breakdown --path infrastructure/environments/production
```

#### `.github/workflows/deploy.yml`
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - run: aws s3 sync ./dist s3://dennisdiepolder-com-prod
      - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DIST_ID }} --paths "/*"

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: aws-actions/configure-aws-credentials@v4
      - uses: docker/build-push-action@v5
        with:
          context: ./backend
          push: true
          tags: ${{ secrets.ECR_REGISTRY }}/backend:${{ github.sha }}
      - run: |
          aws ecs update-service \
            --cluster dennisdiepolder-com \
            --service backend \
            --force-new-deployment
```

---

## 7. Local Development Plan

### Phase 1: Environment Setup

#### Prerequisites
```bash
# Required Tools
- Node.js 20+
- Go 1.22+
- Docker Desktop
- Terraform 1.6+
- AWS CLI v2
- Make
```

#### Initial Setup
```bash
# 1. Clone and install frontend
npm install

# 2. Set up backend
cd backend
go mod download
make docker-deps-up  # Starts postgres + redis in Docker

# 3. Environment variables
cp .env.example .env
# Edit .env with local credentials

# 4. Database migration
make migrate-up

# 5. Verify setup
make test
npm run test:unit
```

### Phase 2: Development Workflow

#### Terminal 1: Frontend Dev Server
```bash
npm run dev
# Runs on http://localhost:4321
# Hot reload enabled
```

#### Terminal 2: Backend Dev Server
```bash
cd backend
make dev
# Runs on http://localhost:8080
# Uses air for hot reload
```

#### Terminal 3: Supporting Services
```bash
# Docker Compose for local dependencies
docker-compose up
# Runs: PostgreSQL (5432), Redis (6379), LocalStack (4566)
```

### Phase 3: Local Testing

```bash
# Frontend
npm run lint
npm run test:unit
npm run test:e2e
npm run build

# Backend
cd backend
make lint
make test
make test-integration

# Infrastructure (validation only locally)
cd infrastructure/environments/dev
terraform init
terraform plan
```

### Development Tools

#### docker-compose.yml
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:16
    environment:
      POSTGRES_DB: dennisdiepolder
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: devpass
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  localstack:
    image: localstack/localstack
    environment:
      SERVICES: s3,cloudfront,secretsmanager
    ports:
      - "4566:4566"
    volumes:
      - localstack_data:/var/lib/localstack

volumes:
  postgres_data:
  redis_data:
  localstack_data:
```

#### Makefile (Root)
```makefile
.PHONY: dev test build deploy clean

dev:
	docker-compose up -d
	@echo "Starting development servers..."
	make -C backend dev &
	npm run dev

test:
	npm run test:unit
	make -C backend test

build:
	npm run build
	make -C backend build

clean:
	docker-compose down -v
	rm -rf dist/
	rm -rf backend/bin/

install:
	npm install
	cd backend && go mod download

setup: install
	docker-compose up -d
	sleep 5
	make -C backend migrate-up
	@echo "Setup complete! Run 'make dev' to start development."
```

---

## 8. Cloud Migration & Release Plan

### Pre-Migration Checklist

#### Week 1-2: Infrastructure Preparation
- [ ] AWS account setup with organizational structure
- [ ] Create terraform backend (S3 + DynamoDB)
- [ ] Set up AWS CLI profiles
- [ ] Domain DNS migration planning (dennisdiepolder.com)
- [ ] SSL certificate request in ACM
- [ ] Create ECR repositories
- [ ] Set up CloudWatch log groups

#### Week 3: Development Environment
```bash
# 1. Initialize Terraform
cd infrastructure/environments/dev
terraform init
terraform plan
terraform apply

# 2. Deploy backend to dev
cd backend
make docker-build
make docker-push-dev
make deploy-dev

# 3. Deploy frontend to dev
npm run build
aws s3 sync ./dist s3://dennisdiepolder-com-dev
```

**Dev Environment Infrastructure:**
- t3.small ECS Fargate tasks (backend)
- db.t3.micro RDS PostgreSQL
- cache.t3.micro ElastiCache Redis
- S3 + CloudFront (dev subdomain)

### Migration Phases

#### Phase 1: Parallel Running (Week 4)
- Deploy to dev.dennisdiepolder.com
- Keep existing Amplify site running
- Internal testing
- Smoke tests on all features

#### Phase 2: Staging Deployment (Week 5)
```bash
cd infrastructure/environments/staging
terraform init
terraform apply

# Deploy
make deploy-staging
```

- staging.dennisdiepolder.com goes live
- Load testing
- Security penetration testing
- Performance benchmarking

#### Phase 3: Production Preparation (Week 6)
- [ ] Database backup strategy tested
- [ ] Monitoring dashboards configured
- [ ] Alerting rules set up
- [ ] Runbook documentation complete
- [ ] Rollback procedure tested

#### Phase 4: Production Deployment (Week 7)

**Deployment Steps:**
```bash
# 1. Infrastructure
cd infrastructure/environments/production
terraform init
terraform plan  # Review carefully
terraform apply

# 2. Database setup
make migrate-production

# 3. Deploy backend
make deploy-production

# 4. Deploy frontend
npm run build
aws s3 sync ./dist s3://dennisdiepolder-com-prod --delete
aws cloudfront create-invalidation --distribution-id XXX --paths "/*"

# 5. DNS cutover
# Update Route53 A record to point to CloudFront
```

**Cutover Window:** Sunday 2:00 AM - 6:00 AM EST
- 2:00 AM: Final production deployment
- 2:30 AM: DNS propagation begins
- 3:00 AM: Smoke tests on production
- 4:00 AM: Monitor traffic & errors
- 6:00 AM: Go/no-go decision

**Rollback Plan:**
```bash
# If issues detected
aws route53 change-resource-record-sets \
  --hosted-zone-id XXX \
  --change-batch file://rollback-dns.json
# Points back to Amplify
```

### Post-Migration

#### Week 8: Monitoring & Optimization
- Monitor CloudWatch metrics daily
- Optimize ECS task sizing based on actual load
- Review costs and adjust resources
- Collect user feedback

#### Week 9: Amplify Decommission
- [ ] Verify all traffic on new infrastructure
- [ ] No errors for 7 consecutive days
- [ ] Performance metrics meet targets
- [ ] Delete Amplify app
- [ ] Clean up old DNS records

---

## 9. Cost Estimation

### Monthly Costs (Production)

| Service | Specs | Monthly Cost |
|---------|-------|--------------|
| **CloudFront** | 1TB data transfer | $85 |
| **S3** | 10GB storage, 100k requests | $2 |
| **ECS Fargate** | 2x 0.5 vCPU, 1GB RAM | $30 |
| **ALB** | Standard load balancer | $23 |
| **RDS PostgreSQL** | db.t3.small, 20GB | $35 |
| **ElastiCache Redis** | cache.t3.micro | $15 |
| **Route53** | Hosted zone + queries | $5 |
| **CloudWatch** | Logs + metrics | $10 |
| **Secrets Manager** | 5 secrets | $2 |
| **WAF** | Basic rules | $10 |
| **Data Transfer** | Misc | $10 |
| **TOTAL** | | **~$227/month** |

**Cost Optimization Strategies:**
- Use Savings Plans for ECS (save 30%)
- CloudFront reserved capacity (save 20%)
- S3 Intelligent-Tiering
- RDS reserved instance (save 40%)

**Optimized Monthly Cost:** ~$160/month

---

## 10. Success Metrics

### Performance Targets
- **Lighthouse Score:** 95+ (all categories)
- **FCP:** < 1.0s
- **LCP:** < 2.0s
- **TTI:** < 2.5s
- **CLS:** < 0.1
- **API Latency:** p95 < 200ms

### Reliability Targets
- **Uptime:** 99.9% (43min downtime/month max)
- **Error Rate:** < 0.1%
- **Deployment Success:** 95%+

### User Engagement (after 3 months)
- Automation playground: 100+ workflows created
- Code playground: 500+ executions
- Avg session duration: > 3 minutes
- Bounce rate: < 40%

---

## Timeline Summary

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Phase 1: Foundation** | 2 weeks | Project setup, design system, base components |
| **Phase 2: Frontend Features** | 3 weeks | All interactive features, animations |
| **Phase 3: Backend Development** | 3 weeks | Golang API, workflow engine, sandbox |
| **Phase 4: Infrastructure** | 2 weeks | Terraform modules, networking, security |
| **Phase 5: Testing & CI/CD** | 2 weeks | Test suite, GitHub Actions, automation |
| **Phase 6: Dev Environment** | 1 week | Local dev environment, documentation |
| **Phase 7: Cloud Migration** | 3 weeks | Dev → Staging → Production |
| **Phase 8: Optimization** | 1 week | Performance tuning, cost optimization |
| **TOTAL** | **17 weeks (~4 months)** | Production-ready platform |

---

## Next Steps

1. **Review & Approve** this plan
2. **Set up project structure** (create directories)
3. **Initialize infrastructure** (Terraform backend)
4. **Begin Phase 1** (Foundation)
5. **Weekly sprint planning** (Agile methodology)

---

## Additional Resources

### Documentation to Create
- `CONTRIBUTING.md` - Contribution guidelines
- `ARCHITECTURE.md` - System architecture diagrams
- `API.md` - API documentation
- `DEPLOYMENT.md` - Deployment runbook
- `SECURITY.md` - Security policies

### Tools & Services Needed
- GitHub repo (already exists)
- AWS account with admin access
- Docker Hub or ECR for images
- Terraform Cloud (optional, for remote state)
- Monitoring: DataDog or CloudWatch
- Error tracking: Sentry (optional)

---

**Ready to build something exceptional!** 🚀

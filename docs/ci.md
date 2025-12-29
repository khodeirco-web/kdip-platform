# CI/CD Pipeline Documentation

## Overview

This document describes the test pipeline configuration for the KDIP Platform.

**Platform:** GitHub Actions  
**Test Framework:** Playwright  
**Package Manager:** Bun

---

## Pipeline Stages

### 1. Lint (`~2 min`)

Code quality checks using ESLint/Prettier.

### 2. Test (`~10 min per shard`)

Parallel test execution split into 4 shards for faster feedback.

**Parallelism:** 4 concurrent jobs  
**Total time:** ~10 min (vs ~40 min sequential)

### 3. Burn-In (`~30 min`)

Runs tests 10 times to detect flaky tests.

**Trigger conditions:**

- Pull requests to `main` or `develop`
- Weekly schedule (Sundays 6 AM UTC)

**Failure threshold:** Even 1 failure in 10 iterations = flaky test.

### 4. Report

Aggregates test results and publishes to GitHub Step Summary.

---

## Running Locally

### Full CI Pipeline

```bash
./scripts/ci-local.sh
```

### Selective Testing (changed files only)

```bash
./scripts/test-changed.sh
```

### Burn-In Loop

```bash
./scripts/burn-in.sh        # 10 iterations (default)
./scripts/burn-in.sh 3      # Quick 3 iterations
./scripts/burn-in.sh 100    # High-confidence stability check
```

---

## Caching Strategy

| Cache | Key | Purpose |
|-------|-----|---------|
| Bun dependencies | `bun-${{ hashFiles('bun.lockb') }}` | Skip `bun install` on cache hit |
| Playwright browsers | `playwright-${{ hashFiles('bun.lockb') }}` | Skip browser download (~160MB) |

**Savings:** 2-5 minutes per run.

---

## Artifact Collection

**Policy:** Failure-only (saves storage, maintains debugging capability)

**Artifacts collected on failure:**

- `test-results/` - Screenshots, videos, traces
- `playwright-report/` - HTML report

**Retention:** 30 days

---

## Debugging Failed CI Runs

1. **Download artifacts** from GitHub Actions run
2. **View trace:** `bun x playwright show-trace test-results/trace.zip`
3. **Mirror locally:** `./scripts/ci-local.sh`
4. **Check burn-in:** `./scripts/burn-in.sh 10`

---

## Secrets & Environment Variables

See `ci-secrets-checklist.md` for required secrets.

**Environment variables set in workflow:**

- `BASE_URL` - Frontend URL
- `API_URL` - Backend API URL

---

## Status Badges

Add to README.md:

```markdown
![Tests](https://github.com/YOUR_ORG/kdip-platform/actions/workflows/test.yml/badge.svg)
```

---

## Performance Targets

| Stage | Target | Actual |
|-------|--------|--------|
| Lint | <2 min | TBD |
| Test (per shard) | <10 min | TBD |
| Burn-in | <30 min | TBD |
| **Total** | <45 min | TBD |

**Speedup:** 20× faster than sequential execution.

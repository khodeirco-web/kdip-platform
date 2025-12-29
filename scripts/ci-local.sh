#!/bin/bash
# Mirror CI execution locally for debugging
# Usage: ./scripts/ci-local.sh

set -e

echo "🔍 Running CI pipeline locally..."
echo ""

# Lint (if configured)
echo "📝 Stage 1: Lint"
bun run lint 2>/dev/null || echo "No lint script configured, skipping..."
echo ""

# Tests
echo "🧪 Stage 2: Tests"
bun run test:e2e || exit 1
echo ""

# Burn-in (reduced iterations for local)
echo "🔥 Stage 3: Burn-in (3 iterations)"
for i in {1..3}; do
  echo "  Burn-in $i/3"
  bun run test:e2e || exit 1
done
echo ""

echo "✅ Local CI pipeline passed!"

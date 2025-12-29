#!/bin/bash
# Standalone burn-in execution for flaky test detection
# Usage: ./scripts/burn-in.sh [iterations]
# Default: 10 iterations

set -e

ITERATIONS=${1:-10}

echo "🔥 Starting burn-in loop ($ITERATIONS iterations)"
echo ""

for i in $(seq 1 $ITERATIONS); do
  echo "🔥 Iteration $i/$ITERATIONS"
  bun run test:e2e || {
    echo ""
    echo "❌ FLAKY TEST DETECTED at iteration $i"
    echo "Review test-results/ for failure artifacts"
    exit 1
  }
done

echo ""
echo "✅ All $ITERATIONS iterations passed - tests are stable!"

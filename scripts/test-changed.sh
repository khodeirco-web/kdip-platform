#!/bin/bash
# Run only tests for changed files (compared to main branch)
# Usage: ./scripts/test-changed.sh

set -e

CHANGED_FILES=$(git diff --name-only origin/main...HEAD 2>/dev/null || git diff --name-only HEAD~1)

if echo "$CHANGED_FILES" | grep -qE "\.(ts|tsx|js|jsx)$"; then
  echo "🔍 Changed files detected:"
  echo "$CHANGED_FILES" | grep -E "\.(ts|tsx|js|jsx)$"
  echo ""
  echo "🧪 Running affected tests..."
  bun run test:e2e
else
  echo "✅ No test-affecting changes detected"
  exit 0
fi

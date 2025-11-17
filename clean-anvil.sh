#!/bin/bash
# Clean Anvil deployment artifacts (for use outside Docker)
# Run this script after stopping docker-compose to clean up Anvil state

set -e

echo "🧹 Cleaning Anvil deployment artifacts..."

# Remove Truffle build artifacts
if [ -d "build/contracts" ]; then
    echo "   Removing build/contracts/*.json"
    rm -f build/contracts/*.json
    echo "   ✅ Cleaned build/contracts/"
fi

# Remove client contract artifacts
if [ -d "client/src/contracts" ]; then
    echo "   Removing client/src/contracts/*.json"
    rm -f client/src/contracts/*.json
    echo "   ✅ Cleaned client/src/contracts/"
fi

echo ""
echo "✅ Cleanup complete!"
echo "   Next time you run 'docker compose up', contracts will be freshly deployed."

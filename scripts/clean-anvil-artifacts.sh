#!/bin/sh
# Clean Anvil deployment artifacts
# This script removes old contract artifacts from previous Anvil sessions

set -e

echo "🧹 Cleaning Anvil deployment artifacts..."

# Remove Truffle build artifacts (except for source contracts)
if [ -d "/app/build/contracts" ]; then
    echo "   Removing /app/build/contracts/*.json"
    rm -f /app/build/contracts/*.json
fi

# Remove client contract artifacts (these contain network-specific deployment info)
if [ -d "/app/client/src/contracts" ]; then
    echo "   Cleaning /app/client/src/contracts/*.json"
    # We need to remove the network-specific deployment info from the JSON files
    # Instead of deleting, we'll let Truffle regenerate them
    rm -f /app/client/src/contracts/*.json
fi

echo "✅ Cleanup complete! Ready for fresh deployment."

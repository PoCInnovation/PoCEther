#!/bin/sh
# Wait for Anvil to be ready before deploying contracts

set -e

host="$1"
port="$2"
shift 2
cmd="$@"

echo "⏳ Waiting for Anvil at $host:$port..."

max_attempts=30
attempt=0

while [ $attempt -lt $max_attempts ]; do
  if nc -z "$host" "$port" 2>/dev/null; then
    echo "✅ Anvil is ready!"
    exec $cmd
  fi

  attempt=$((attempt + 1))
  echo "⏳ Attempt $attempt/$max_attempts - Anvil not ready yet..."
  sleep 2
done

echo "❌ Anvil failed to start after $max_attempts attempts"
exit 1

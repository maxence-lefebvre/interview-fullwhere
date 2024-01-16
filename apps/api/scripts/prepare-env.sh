#!/usr/bin/env sh

API_VERSION=$(jq -r '.version' package.json)
export API_VERSION

NODE_VERSION=$(jq -r '.volta.node' package.json)
export NODE_VERSION

echo "API_VERSION=$API_VERSION\nNODE_VERSION=$NODE_VERSION\n"

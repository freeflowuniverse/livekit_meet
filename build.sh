#!/bin/bash

# Change to the directory of the script
cd "$(dirname "$0")"

# Build the project
pnpm build

# Move the built files to the docs directory
mv out/* docs/

# Create a .nojekyll file in the docs directory
touch docs/.nojekyll
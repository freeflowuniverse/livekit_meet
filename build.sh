#!/bin/bash

# Change to the directory of the script
cd "$(dirname "$0")"

# Build the project
pnpm build

rm -r docs
mkdir docs

# Move the built files to the docs directory
mv -f out/* docs/

# Create a .nojekyll file in the docs directory
touch docs/.nojekyll
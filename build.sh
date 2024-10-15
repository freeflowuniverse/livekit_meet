#!/bin/bash

# Change to the directory of the script
cd "$(dirname "$0")"

# Build the project
pnpm build

# Get the directory of the script
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="$REPO_DIR/out"
DOCS_DIR="$REPO_DIR/docs"
OUTPUT_FILE="$DOCS_DIR/flist.txt"

# 1. Create the docs directory if it doesn't exist
mkdir -p "$DOCS_DIR"

# 2. Create the output file if it doesn't exist
touch "$OUTPUT_FILE"

# 3. Generate a list of all files in out/ and add them to flist.txt
# Temporary file to hold new file paths before merging
TEMP_FILE=$(mktemp)

# Find all files in the out directory, remove the "out/" prefix, and check for duplicates
find "$OUT_DIR" -type f | sed "s|$REPO_DIR/out/||" > "$TEMP_FILE"

# Sort the current flist.txt if it exists
if [[ -f "$OUTPUT_FILE" ]]; then
  sort "$OUTPUT_FILE" -o "$OUTPUT_FILE"
fi

# Add new files to flist.txt if they don't already exist
while IFS= read -r file; do
  if ! grep -Fxq "$file" "$OUTPUT_FILE"; then
    echo "$file" >> "$OUTPUT_FILE"
  fi
done < "$TEMP_FILE"

# Remove temporary file
rm "$TEMP_FILE"

echo "File list has been updated and saved to $OUTPUT_FILE"


# 4. Move all files from out/ to docs/
find "$OUT_DIR" -type f | while read -r file; do
  # Get the relative path of the file
  relative_path="${file#$OUT_DIR/}"

  # Destination path in docs/
  dest_path="$DOCS_DIR/$relative_path"

  # Check if the file already exists in docs/
  if [ ! -e "$dest_path" ] || [[ "$file" == *.html ]]; then
    # Create the directory structure if necessary
    mkdir -p "$(dirname "$dest_path")"

    # Move or overwrite the file (overwrites only if it's an HTML file)
    mv -f "$file" "$dest_path"
    echo "Moved/Overwritten: $file to $dest_path"
  else
    echo "File already exists, skipping: $dest_path"
  fi
done

echo "Move completed."

# Create a .nojekyll file in the docs directory
touch docs/.nojekyll
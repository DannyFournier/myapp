# This script will add documents to CouchDB from the NodeJS API while assigning the ID from rfd:value

SERVER="http://admin:admin@localhost:5984/myapp"
API="http://localhost:3000/skilltypes"
FILES="testfiles/*.json"

echo "Deleting database..."
curl -X DELETE "$SERVER"

echo "Creating database..."
curl -X PUT "$SERVER" 

echo "Adding records..."
for f in $FILES; do
    # do some stuff here with "$f"
    # remember to quote it or spaces may misbehave

    id=$(cat $f | jq '."levelA"."levelB"."rdf:value"')

    URL="$API/$id"
    echo "File: $f, id: $id, url: $URL"
    curl -H 'Content-Type: application/json' \
    -X PUT "$URL" \
    -d "@$f"
done

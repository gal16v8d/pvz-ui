#! /bin/bash
rm -rf /tmp/api.json /tmp/api-types ./src/api/models
curl http://localhost:8000/openapi.json > /tmp/api.json
npx @openapitools/openapi-generator-cli generate -i /tmp/api.json -g typescript-angular -o /tmp/api-types --skip-validate-spec --additional-properties=stringEnums=true --type-mappings=set=Array
mv /tmp/api-types/model ./src/api/models
mv ./src/api/models/models.ts ./src/api/models/index.ts
# MyApp #
  
## Replication Steps ##

1. From the root of the project, run docker-compose up -d to start CouchDB instance.
2. Start the application with npm start.
3. In another prompt, run the included shell script: script/init_db_custom_id_nodejs.sh

## Notes ##

- When running the included shell script:
  - after the first document gets inserted, the reponse returned is curl: (52) Empty reply from server.  This will make the NodeJS server crash.
  - in the NodeJS server prompt, the following error will be displayed: AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value: assert(doc._id)
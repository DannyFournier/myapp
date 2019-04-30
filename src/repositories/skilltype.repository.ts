import {DefaultCrudRepository} from '@loopback/repository';
import {Skilltype} from '../models';
import {CouchdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SkilltypeRepository extends DefaultCrudRepository<
  Skilltype,
  typeof Skilltype.prototype.id
> {
  constructor(
    @inject('datasources.couchdb') dataSource: CouchdbDataSource,
  ) {
    super(Skilltype, dataSource);
  }
}

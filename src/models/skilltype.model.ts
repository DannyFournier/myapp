import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Skilltype extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  _id?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Skilltype>) {
    super(data);
  }
}

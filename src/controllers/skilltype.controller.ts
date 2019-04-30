import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Skilltype} from '../models';
import {SkilltypeRepository} from '../repositories';

export class SkilltypeController {
  constructor(
    @repository(SkilltypeRepository)
    public skilltypeRepository : SkilltypeRepository,
  ) {}

  @post('/skilltypes', {
    responses: {
      '200': {
        description: 'Skilltype model instance',
        content: {'application/json': {schema: {'x-ts-type': Skilltype}}},
      },
    },
  })
  async create(@requestBody() skilltype: Skilltype): Promise<Skilltype> {
    return await this.skilltypeRepository.create(skilltype);
  }

  @get('/skilltypes/count', {
    responses: {
      '200': {
        description: 'Skilltype model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Skilltype)) where?: Where,
  ): Promise<Count> {
    return await this.skilltypeRepository.count(where);
  }

  @get('/skilltypes', {
    responses: {
      '200': {
        description: 'Array of Skilltype model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Skilltype}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Skilltype)) filter?: Filter,
  ): Promise<Skilltype[]> {
    return await this.skilltypeRepository.find(filter);
  }

  @patch('/skilltypes', {
    responses: {
      '200': {
        description: 'Skilltype PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() skilltype: Skilltype,
    @param.query.object('where', getWhereSchemaFor(Skilltype)) where?: Where,
  ): Promise<Count> {
    return await this.skilltypeRepository.updateAll(skilltype, where);
  }

  @get('/skilltypes/{id}', {
    responses: {
      '200': {
        description: 'Skilltype model instance',
        content: {'application/json': {schema: {'x-ts-type': Skilltype}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Skilltype> {
    return await this.skilltypeRepository.findById(id);
  }

  @patch('/skilltypes/{id}', {
    responses: {
      '204': {
        description: 'Skilltype PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() skilltype: Skilltype,
  ): Promise<void> {
    await this.skilltypeRepository.updateById(id, skilltype);
  }

  @put('/skilltypes/{id}', {
    responses: {
      '204': {
        description: 'Skilltype PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() skilltype: Skilltype,
  ): Promise<void> {
    await this.skilltypeRepository.replaceById(id, skilltype);
  }

  @del('/skilltypes/{id}', {
    responses: {
      '204': {
        description: 'Skilltype DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.skilltypeRepository.deleteById(id);
  }
}

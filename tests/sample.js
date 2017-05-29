process.env.NODE_ENV = 'test'

const server = require('../server')
const Sample = require('../app/models/sample')

const chai = require('chai')
chai.should()
chai.use(require('chai-http'))
chai.use(require('chai-json-schema'))

const successResponseSchema = {
    title: 'json schema v1',
    type: 'object',
    required: ['isSuccessful'],
    properties: {
        isSuccessful: {
            type: 'boolean'
        }
    }
}
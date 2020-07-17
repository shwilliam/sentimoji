const request = require('supertest')
const {app} = require('./server')

describe('server', () => {
  describe('/:query', () => {
    it('should return 200', async () => {
      const res = await request(app).get('/boop')

      expect(res.statusCode).toEqual(200)
    })
  })
})

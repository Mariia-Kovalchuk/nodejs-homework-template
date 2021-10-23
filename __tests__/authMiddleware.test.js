const { authMiddleware } = require('../middlewares')
const { Unauthorized } = require('http-errors')

describe('Auth middleware test', () => {
  test('should call next() with error if authorization header was not passed', () => {
    const mReq = {
      headers: {}
    }
    const mRes = {}
    const mockNext = jest.fn()

    authMiddleware(mReq, mRes, mockNext)

    expect(mockNext).toHaveBeenCalledWith(new Unauthorized('Please, provide a token in request authorization header'))
  })

  test('Invalid token ', () => {

    // const token = jwt.sign({
    //     id: user._id
    // }, process.env.JWT_SECRET);
    //       const decodedToken = jwt.decode(token, process.env.JWT_SECRET)
    // if (!decodedToken) {
    //   next(new Unauthorized('Not authorized'))
  })

  test('Valid token ', () => {

  })
})

const {authMiddleware} = require('../middlewares');
const { Unauthorized } = require('http-errors')


describe("Auth middleware test", () => {
    test('should call next() with error if authorization header was not passed', () => {
        const mReq = {
            headers: {}
        };
        const mRes = {};
        const mockNext = jest.fn();

        authMiddleware(mReq, mRes, mockNext);

        expect(mockNext).toHaveBeenCalledWith(new Unauthorized('Please, provide a token in request authorization header'));
    });

    test('Invalid token ', () => {
        
    });

    test('Valid token ', () => {
        
    })
    
    
    
});
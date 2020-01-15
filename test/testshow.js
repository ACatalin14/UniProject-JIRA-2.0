process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../');
let should = chai.should();

chai.use(chaiHttp);

const userToAuthenticate = {
    email: 'cata@gmail.com',
    password: '12wq!@WQ',
};

describe('test ', () => {

    describe('[authenticated] User', () => {
        let token = null;

        beforeEach(done => {
            chai.request(server)
                .post('/login')
                .send(userToAuthenticate)
                .end((err, res) => {
                    token = res.body.token;
                    done();
                });
        });

        it('should list all users', done => {
            chai.request(server)
                .get('/users')
                .set({ Authorization: 'Bearer ' + token })
                .end((err, res) => {
                    
                    assert(res.header.statusCode === 200, "nu e 200");
                    done();
                });
                
        });

    })

})
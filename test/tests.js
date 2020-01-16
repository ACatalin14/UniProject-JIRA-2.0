process.env.NODE_ENV = 'test';

var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('..');
let should = chai.should();

chai.use(chaiHttp);

const mockUser = {
    userId: '123',
    name:'Dude',
    email: 'john.was.here@clopotel.ro',
    password: 'test1234',
};

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
                    console.log('Dudddeeeee',res);
                    done();
                });
        });

        let createdUserId = null;

        it('should create a new user', done => {
            chai.request(server)
              .post('/users')
              .send(mockUser)
              .set({ Authorization: 'Bearer ' + token })
              .end((err, res) => {
                createdUserId = res.body.id;
                
                res.should.have.status(200);
                done();
              })
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
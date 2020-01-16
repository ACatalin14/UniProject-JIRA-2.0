process.env.NODE_ENV = 'test';

var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('..');
let should = chai.should();

chai.use(chaiHttp);

const mockUser = {
    name: 'Andreeaaaaaaa',
    email: 'john.was.here@clopotel.ro',
    password: 'test1234',
};

const userToAuthenticate = {
    email: 'cata@gmail.com',
    password: '12wq!@WQ',
};

describe('[auth User]Login, Create, Update, Delete, Show Users methods', (done) => {
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

    let createdUserId = null;


    it('should create + update + delete a new user', done => {
        chai.request(server)
            .post('/users')
            .send(mockUser)
            .set({ Authorization: 'Bearer ' + token })
            .end((err, res) => {
                createdUserId = res.body.userId;
                assert.notDeepStrictEqual(res, null);
                assert.deepStrictEqual(res.status, 200);
                if (err) {
                    return done(new Error(err));
                }

                chai.request(server)
                    .put('/users/' + createdUserId)
                    .send({
                        name: 'Gigel'
                    })
                    .set({ Authorization: 'Bearer ' + token })
                    .end((err, raspuns) => {
                        updatedUserId = raspuns.body.userId;
                        assert.notDeepStrictEqual(raspuns, null);
                        assert.deepStrictEqual(raspuns.status, 200);
                        if (err) {
                            return done(new Error(err));
                        }
                        
                        chai.request(server)
                            .delete('/users/' + updatedUserId)
                            .set({ Authorization: 'Bearer ' + token })
                            .end((err, rasp) => {
                                if (err) {
                                    return done(new Error(err));
                                }
                                assert.deepStrictEqual(rasp.status, 200);
                                done();
                            })
                    })
            })
      })


    it('should list all users', done => {
        chai.request(server)
            .get('/users')
            .set({ Authorization: 'Bearer ' + token })
            .end((err, res) => {
                assert.notDeepStrictEqual(res, null);
                assert.deepStrictEqual(res.status, 200);
                done();
            });

    });

})

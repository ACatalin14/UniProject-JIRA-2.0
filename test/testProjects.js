process.env.NODE_ENV = 'test';

var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('..');
let should = chai.should();

chai.use(chaiHttp);

const mockUser = {
    name: 'Andreea2',
    email: 'john.was.here@clopotel.ro',
    password: 'test1234',
};

describe('Validation Tests on Projects', (done) => {

    describe('For a non-auth user', (done) => {

        it('[non-auth user] should list all projects', done => {
            chai.request(server)
                .get('/projects')
                .end((err, res) => {
                    assert.deepStrictEqual(res.status, 200);
                    done();
                });
        });

        it('[non-auth user] should list a project', done => {
            chai.request(server)
                .get('/projects/1')
                .end((err, res) => {
                    assert.deepStrictEqual(res.status, 200);;
                    done();
                })
        });

        it('[non-auth user] should not create a project', done => {
            chai.request(server)
                .post('/projects')
                .send(mockUser)
                .end((err, res) => {
                    assert.deepStrictEqual(res.status, 401);
                    done();
                });
        })
    })
});

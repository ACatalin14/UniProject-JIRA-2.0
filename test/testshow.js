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

describe('Users', () => {
  describe('[unauthenticated] User', () => {
   

  describe('[authenticated] User', () => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJDYXRhIiwiZW1haWwiOiJjYXRhQGdtYWlsLmNvbSIsImpvYlRpdGxlIjoiRGV2ZWxvcGVyIiwicGFzc3dvcmQiOiIxMndxIUBXUSIsImlzTG9nZ2VkSW4iOnRydWUsImlhdCI6MTU3ODU2NzM2M30.0dgK81e_l9ReSHr-tsw-O-PdEyoGqZJFBn_YDZm-fmw';

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
          // res.should.have.status(200);
          // res.should.have.property('array');
          assert(res.header.statusCode === 200, "nu e 200");
          // assert(res.body, Array);
          done();
        });
    });

    it('should list one user', done => {
      chai.request(server)
        .get('/users/7')
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  })
});
})
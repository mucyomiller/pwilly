import chai from 'chai';
import chaiHttp from 'chai-http';
import {data} from '../server/model';

import app from '../server';

chai.use(chaiHttp);
const should = chai.should();
const expect = chai.expect;

describe('Test Server',  () => {
    describe('Test GET item route',  () => {
        it('it should GET All items',  (done) => {
            chai.request(app)
            .get('/api/v1/items')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.be.eql(data);
                done();
            });
        });

        it('it should GET specific  item',  (done) => {
            chai.request(app)
            .get('/api/v1/items/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.be.eql(data[0]);
                done();
            });
        });
    });
    describe('POST TESTS', () => {
        const newItem = {id: 5,name: 'name4',size: 3,location: 'gasabo'};
        it('it shoud add new item', (done) => {
            chai.request(app)
            .post('/api/v1/items')
            .send(newItem)
            .end((err, res) => {
                  res.should.have.status(201);
                  res.body.should.be.a('object');
                  res.body.should.have.property('status').eql(201);
                  res.body.should.have.property('message').eql('Created!');
                  res.body.should.have.property('message').be.a('string');
                  expect(res.body).to.have.property('data').eql(newItem);
                  res.body.should.have.property('data').have.property('id').be.a('number');
                  expect(res.body).to.have.property('status').eql(201);
              });

              done();
        });        
    })
    
});
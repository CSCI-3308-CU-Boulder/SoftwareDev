// Imports the server.js file to be tested.
let server = require("../server");
//Assertion (Test Driven Development) and Should, Expect(Behaviour driven development) library
let chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp); 
const { expect } = chai;
var assert = chai.assert;


describe("Server!", () => {

  it("Add Positive Test Case Works", done => {
    chai
    .request(server)
    .post("/add").send({ num1: 1, num2: 2 })
    .end((err, res) => {
    expect(res.body.result).to.be.equal(3);
    done();
    });
});


  it("Add Negative Test Case Works", done => {
     chai
    .request(server)
    .post("/add").send({num1: 2, num2: "string"})
    .end((err, response) => {
      expect(response.status).to.be.equal(404);
      done();
    });
});


  it("Divide Positive Test Case Works", done => {
    chai
      .request(server)
      .post("/divide").send({num1: 8, num2: 2})
      .end((err, response) => {
        expect(response.body.result).to.equal(4);
        done();
     });
});

  it("Divide Negative Test Case Works", done => {
    chai
    .request(server)
    .post("/divide").send({num1: 2, num2: 0})
    .end((err, response) => {
      expect(response.status).to.be.equal(404);
      done();
    });
});

});
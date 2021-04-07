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

    // Sample test case given to test / endpoint. 
    it("Returns the default welcome message", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equals("success");
          assert.strictEqual(res.body.message, "Welcome!");
          done();
        });
    });

    // Please add your test cases here.
    
    //This API returns a list of operations.

    it("Type array and not empty", done => {
      chai
        .request(server)
        .get("/operations")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          expect(res.body.length).to.not.equal(0);
          done();
        });
    });

    //This API returns the details of operation based on the ID passed.

    it("Properties success", done => {
      chai
        .request(server)
        //post request
        .post("/operations").send({name: 'Divide', sign: '/'})

        .end((err, res) => {
          expect(res.body.id).to.be.equal(4);
          expect(res.body.name).to.be.equal("Divide");
          done();
        });
    });

   //This API allows us to add a new operation to the ops list in server.js


   it("Properties success", done => {
    chai
      .request(server)
      //post request
      .get("/operations/4")
      .end((err, res) => {
        expect(res.body).to.have.property("id",4);
        expect(res.body).to.have.property("name","Divide");
        expect(res.body).to.have.property("sign","/");
        done();
      });
  });


    

  });
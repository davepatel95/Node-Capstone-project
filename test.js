'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');


const expect = require('chai').expect;
const express = require('express');
const app = express();

chai.use(chaiHttp);
app.use(express.static('public'));
app.listen(process.env.PORT || 8080);

describe('/', function() {
    it('should return status of 200', function () {
        let res;
        return chai.request(app)
            .get('/')
            .then(function (_res){
                res = _res;
                expect(res).to.have.status(200);
            })
    });
  }
);
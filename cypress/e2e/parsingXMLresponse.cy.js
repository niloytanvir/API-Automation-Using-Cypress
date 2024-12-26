// Install xml2js Library
// npm install xml2js

const xml2js = require('xml2js');
const parser = new xml2js.Parser({explicitArray: false});

describe("XML Parser",()=>{
    const xmlpayload = "<Pet><id>0</id><Category><id>0</id><name>string</name></Category><name>doggie</name><photoUrls><photoUrl>string</photoUrl></photoUrls><tags><Tag><id>0</id><name>string</name></Tag></tags><status>available</status></Pet>"
    let petid = null;

    before("creating Pet",()=>{
        cy.request({
            method:"POST",
            url:"https://petstore.swagger.io/v2/pet",
            body: xmlpayload,
            headers:{ 'Content-Type':"application/xml",
                'accept':'application/xml'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result)=>{
                petid = result.Pet.id;
            })
        })
    })

    it("Feticing pet data-parsing xml response",()=>{
        cy.request({
            methos: 'GET',
            url: "https://petstore.swagger.io/v2/pet/"+petid,
            headers:{  'accept':'application/xml' }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result)=>{
               expect(result.Pet.name).equal("kutta");
               expect(result.Pet.id).equal(petid);

        })
    })


})

})
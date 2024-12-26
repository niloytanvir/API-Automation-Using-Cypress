describe("API testing",()=>
{
    let authToken= null;
    before("Creating access token",()=>{
        cy.request(
            {
                method: 'POST',
                url: 'https://simple-books-api.glitch.me/api-clients/',
                headers: {
                            'Content-Type': 'application/json'
                          },
                body: {
                    clientName: 'ABC1',
                    clientEmail: Math.random().toString(5).substring(2)+"gmail.com"
                }
            }).then((response)=>{
                authToken = response.body.acessToken;
            });
    });

    before("Creating new order",()=>{
        cy.request(
            {
                method: 'POST',
                url: 'https://simple-books-api.glitch.me/orders/',
                headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer'+authToken
                          },
                body: {
                    "bookId":1,
                    "customerName": "emon"
                }
            }).then((response)=>{
                expect(response.status).to.eq(200),
                expect(response.body.created).to.eq(true)
            });
    });

    it("Fetching the orders",()=>
    {
        cy.request(
            {
                methos: 'GET',
                url: 'https://simple-books-api.glitch.me/orders/',
                headers:{
                    'Content-Type': 'application/json',
                     'Authorization': 'Bearer'+authToken
                },
                cookies:{
                    'cookieName': 'mycookie'
                }

            }
        ).then((response)=>{
            expect(response.status).to.eq(200),
            expect(response.body).has.length(1);
        });

    })
    

})
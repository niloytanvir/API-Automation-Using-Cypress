describe("API Testing",()=>{

    const queryParam= {page:2}

    it("passing Query parameters", ()=>{

        cy.request({
            methos: 'GET',
            url: 'https://reqres.in/api/users',
            qs: queryParam
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.status).eq(200);
            expect(response.body.page).to.eq(2);
            expect(response.body.data).has.length(6);
            
            expect(response.body.data[0]).has.property('id',7);
            expect(response.body.data[0]).has.property('first_name','Michael');
 

        })
    })
})
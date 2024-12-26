describe ("HTTP Requests", ()=>
{
    it("Get Call", ()=>{
        cy.request('GET', "https://jsonplaceholder.typicode.com/posts/1")
        .its('status')
        .should('equal',200);
        
    })
    it("Post Call", ()=>{
        cy.request({
            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts/",
            body: {
                title:"Test post",
                body: "this is post call",
                userID:1
            }

        } )
        .its('status')
        .should('equal',201);

    })

        it("PUT Call", ()=>{
            cy.request({
                method: 'PUT',
                url: "https://jsonplaceholder.typicode.com/posts/1",
                body: {
                    title:"Test post - Updated",
                    body: "this is put call",
                    userID:1,
                    id: 1

                }
    
            } )
            .its('status')
            .should('equal',200);
        
    })

    it("Delete Call", ()=>{
        cy.request({
            method: 'Delete',
            url: "https://jsonplaceholder.typicode.com/posts/1"
            
        })
        .its('status')
        .should('equal',200);
    })
})
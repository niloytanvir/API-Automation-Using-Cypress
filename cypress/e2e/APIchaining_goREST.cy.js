describe("GoREST API Chaining",()=>{

   const auth_token = 'Bearer 9a73735e031e9e95e1a4f4d5ce999d60a807c016e47452e1b1e4af68be32f894'

   it("create, update and delete user in Go Rest API",()=>{

    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        body:{
            name: 'Tanvir Ahmed',
            gender: 'male',
            email: Math.random().toString(5).substring(2)+"@gmail.com",
            status: 'inactive'

        },
        headers:{
            Authorization:auth_token
        }
    })
    .then((response)=>{
        expect(response.status).to.equal(201)
        const userID = response.body.id
        //update user name

        cy.request({
            method: 'PUT',
            url: `https://gorest.co.in/public/v2/users/${userID}`,
            body:{
                name: 'Tanvir Niloy'
            },
            headers:{
                Authorization:auth_token
            }
        })    .then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal('Tanvir Niloy')
    
            //delete resource
    
            cy.request({
                method:'DELETE',
                url:`https://gorest.co.in/public/v2/users/${userID}`,
                headers:{
                    Authorization:auth_token
                }
            })
            .then((response)=>{
                expect(response.status).to.equal(204)
            })
        })

        
    })


   })

     


})
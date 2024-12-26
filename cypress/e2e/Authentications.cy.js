describe("Authentication",()=>{
    it("Basic Authentication",()=>{
        cy.request(
            {
                method: 'GET',
                url: 'https://postman-echo.com/basic-auth',
                auth:{
                    user: 'postman',
                    pass: 'password'
                }
            }
        )
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true);
        })
    })

    it("Digest Authentication",()=>{
        cy.request(
            {
                method: 'GET',
                url: 'https://postman-echo.com/basic-auth',
                auth:{
                    username: 'postman',
                    password: 'password',
                    method: 'digest'
                }
            }
        )
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true);
        })
    })

    it("Bearer Token Authentication",()=>{
        const token = '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'
        cy.request(
            {
                method: 'GET',
                url: 'https://api.github.com/user/repos',
                headers:{
                    Authorization: 'Bearer'+token
                }
            }
        )
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })

    it("API Key Authentication",()=>{
        const token = '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'
        cy.request(
            {
                method: 'GET',
                url: 'https://api.openweathermap.org/data/2.5/forecast/daily?q=Dhaka&cnt=1',
                qs:{
                    appid: 'fe9c5cddb7e01d747b4611c3fc9eaf2c'
                }
            }
        )
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})
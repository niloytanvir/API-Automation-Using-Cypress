
describe("OAuth2",()=>{

    let accessToken="";

    it("get OAuth2 access token",()=>{
        cy.request({
            method:'POST',
            url:'https://github.com/login/oauth/acess_token',
            qs:{
                client_id:'<id provided by github>',
                client_secret:'<secret provided by github>',
                code:'<code provided by github>'
            }
        })
    })
    .then((response)=>{
        //access_token=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&scope=&token_type=bearer

       const params = response.body.split('&');
       accessToken = params[0].split("=")[1];
    })

    
    it("OAuth2 request",()=>{
        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Authorization:'Bearer'+accessToken
            }
        })
    })
    .then((response)=>{
        expect(response.status).to.eq(200),
        expect(response.body[0].id).to.eq(468714424)
    })

})
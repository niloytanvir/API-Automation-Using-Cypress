describe("Parsing JSON Response", ()=>
{
    it(("Parsing simple json response"), ()=>

{
    let totalprice=0;
    cy.request(
        {
            method: 'GET',
            url: "https://fakestoreapi.com/products",
            qs:{limit:5}
        }
    )
    .then((response)=>{
        expect(response.status).to.be.equal(200)
        expect(response.body[0].id).to.be.equal(1)
        expect(response.body[0].title).to.be.title("Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday")
        expect(response.body[0].rating.rate).to.be.equal(3.9)

        response.body.forEach(element=>{
            totalprice=totalprice+element.price;
        });
        expect(totalprice).to.equal(899.23);
    })
})

})
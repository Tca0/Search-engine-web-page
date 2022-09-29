const req = require("supertest")
const server = require('../server')




describe('API server', () => {
    let api; 
    beforeAll( ()=> {
        api = server.listen(4000, () => {
            console.log('testing api running on port 4000');
        })
    })
    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });
    it('responds to get / with status 200', (done) => {
        req(api).get('/').expect(200, done);
    });
    it('responds to sreach request by status 202 and return un empty array as aresults',
        async () => {
            const rawRes = await req(api).get('/search/curry').expect(202)
            const res = await rawRes.body
            console.log(res[0]);
            expect(res[0]).toStrictEqual(
                {
                    "title": "easy chicken curry",
                    "description": "28 Sept 2020 — Seal the chicken in a pan with a little oil. · Add chopped onion and cook for 5 minutes to soften. · Add in garlic, ginger, curry powder, ground ",
                    "url": "https://www.kitchensanctuary.com/easy-chicken-curry",
                    "tags": [
                        "how",
                        "to",
                        "make",
                        "curry",
                        "recipes",
                        "indian",
                        "food",
                        "chicken"
                    ]
                }
            )
    })
    it('responds to emptyt sreach request by status 204',
        () => {
            req(api).get('/search/').expect(204)
    })
})
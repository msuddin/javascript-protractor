describe("TheTestRoom blog site", function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get('https://www.thetestroom.com')
    })

    it("should see blog title", function() {
        element(by.css('[id=site-logo-inner]')).getText().then(function(text) {
            expect(text).toContain("The Test Room")
        })
    })

    describe('blog posts should be viisble', function() {

        var blogEntires;

        beforeEach(function() {
            blogEntires = element.all(by.css('.entry-title'))
        })

        it('should see at least 5 blogs', function() {
            expect(blogEntires.count()).toBeGreaterThan(5)
        })

        it('should see a specific blog', function() {
            var foundBlog = false
            blogEntires.each(function(element, index) {
                element.getText().then(function(text) {
                    if(text.includes('Interviewing through Conversation')) {
                        foundBlog = true
                    }
                })
            }).then(function(){
                expect(foundBlog).toBe(true)
            })
        })
    })

    describe('perform searches', function() {

        it('should see some results returned from search', function() {
            element(by.css('[id=search-2] [id=s]')).sendKeys('agile')
            element(by.css('[id=search-2] [id=s]')).sendKeys(protractor.Key.ENTER)
            var blogEntires = element.all(by.css('.entry-title'))
            expect(blogEntires.count()).toBe(1)
            expect(blogEntires.get(0).getText()).toBe('Purpose of Agile Pairing and is it for Everyone')
        })

    })
})
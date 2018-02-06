$(function() {

    describe('RSS Feeds', function() {

        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        
        it('Urls of feeds are defined', function() {
            for(let x = 0 ; x < allFeeds.length ; x++){
                expect(allFeeds[x].url).toBeDefined();
            }
        });



        it('Urls of feeds are defined', function() {
            for(let x = 0 ; x < allFeeds.length ; x++){
                expect(allFeeds[x].name).toBeDefined();
            }
        });
        

    });
    
    
    /* "The menu" */
    describe('The menu', function() {
        
        var menu;
    
        it('menu is hidden by defult', function() {
            menu = document.body.classList.contains("menu-hidden");
            expect(menu).toBe(true);
        });

        it('menu is toggled when click on menu button', function() {
                var menuBtn = $(".menu-icon-link");
            // after 1st click
                menuBtn.click();
                menu = document.body.classList.contains("menu-hidden");
                expect(menu).toBe(false); // it must not exit
            // after 2nd click
                menuBtn.click();
                menu = document.body.classList.contains("menu-hidden");
                expect(menu).toBe(true); // it must exit
    
        });
    });
    
    
    
    
    describe('Initial Entries',function(){
        
        beforeEach(function(done){
             loadFeed(0,done);
        });


        it("load function is loaded and compeletes it's work", function(done){

            var feed = $(".feed .entry").length;
            expect(feed).toBeGreaterThan(0);
            done();
        });
        
        

    });

    
    
    describe("New Feed Selection", function() {

        var firFeeds,secFeeds;

        beforeEach(function(done){
            loadFeed(0);
            firFeeds = $(".feed");
            done();
        });

    
        it("when a new feed is loaded by the loadFeed function that the content actually changes", function(done){
            loadFeed(1);
            secFeeds = $(".feed");
            expect(firFeeds).not.toBe(secFeeds);
            done();
        });
     
    
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}());

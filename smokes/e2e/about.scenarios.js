// test goal: checks the capability to navigate on about web page
// to use previous and next link

const aboutPage = require('./pages/about.js');

describe('', function() {
    let about = null;

    beforeEach(() => about = new aboutPage('runtests'));


    describe('check about page', () =>
        it('should navigate to the about page, check the default elements inside', function() {
            about.goAbout();
            about.checkAboutPage();
            about.checkBuildbotTitle();
            about.checkConfigTitle();
            about.checkDependenciesTitle();
    })
);
});

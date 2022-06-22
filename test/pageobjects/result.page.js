

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    get presentation () {
        return $('#result-message');
    }
}

module.exports = new ResultPage();

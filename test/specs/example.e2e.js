const RetirementCalc = require('../pageobjects/retirement.calc');
const SecurePage = require('../pageobjects/secure.page');

describe('My Retirement calculation', () => {
    it('should be able to submit form with all required fields filled in', async () => {
        await RetirementCalc.open();

        await RetirementCalc.calculate(40, 68, 100000, 75000, 500000, 10, 2);
        const resultMessage = $('#result-message');
        resultMessage.waitForDisplayed();
        await expect($('#result-message')).toHaveTextContaining('In order to retire by 68, you might need to consider increasing your monthly savings by ');
    });
});

describe('My Retirement calculation with social security', () => {
    it('should display/hide additional Social Security fields based on Social Security benefits toggle ', async () => {
        await RetirementCalc.open();

        await RetirementCalc.radioCheck(40, 68, 100000, 75000, 500000, 10, 2);
        const resultMessage = $('div[class="row social-security-field"]');
        await expect(resultMessage).toBeDisplayed();
    });
});



const Page = require('./page');
const { default: pause } = require('webdriverio/build/commands/browser/pause');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get inputCurrentAge () {
        return $('#current-age');
    }

    get inputRetirementAge () {
        return $('#retirement-age');
    }

    get inputCurrentIncome () {
        return $('#current-income');
    }

    get inputSpouseIncome () {
        return $('#spouse-income');
    }

    get inputCurrentTotalSavings () {
        return $('#current-total-savings');
    }

    get inputCurrentAnnualSavings () {
        return $('#current-annual-savings');
    }

    get inputSavingsIncreaseRate () {
        return $('#savings-increase-rate');
    }

    get btnCalculate () {
        return $('button[class="dsg-btn-primary btn-block"]');
    }

    get inputYesSocialBenefits () {
        return $('input[id="yes-social-benefits"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        console.log("**************************In LOGIN function************************")
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await pause(3000);
    }

    async calculate (currentAge, retirementAge, currentIncome, spouseIncome, currentTotalSavings, currentAnnualSavings, savingsIncreaseRate) {
        console.log("**************************In CALCULATE function************************");
        await this.inputCurrentAge.setValue(currentAge);
        //await pause(1000);
        await this.inputRetirementAge.setValue(retirementAge);
        //await pause(1000);
        await this.inputCurrentIncome.setValue(currentIncome);
        //await pause(2000);
        await this.inputSpouseIncome.setValue(spouseIncome);
        //await pause(2000);
        await this.inputCurrentTotalSavings.setValue(currentTotalSavings);
        //await pause(2000);
        await this.inputCurrentAnnualSavings.setValue(currentAnnualSavings);
        //await pause(1000);
        await this.inputSavingsIncreaseRate.setValue(savingsIncreaseRate);
        //await pause(1000);
        await this.btnCalculate.click();
        //await pause(3000);
    }

    async radioCheck (currentAge, retirementAge, currentIncome, spouseIncome, currentTotalSavings, currentAnnualSavings, savingsIncreaseRate) {
        console.log("**************************In RADIO CHECK function************************");
        //this.inputYesSocialBenefits.waitForDisplayed();
        console.log(this.inputYesSocialBenefits);
        await this.inputYesSocialBenefits.click();
        await pause(5000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        //return super.open('login');
        return super.open('insights-tools/retirement-calculator.html');
    }
}

module.exports = new LoginPage();



const { Browser } = require('puppeteer-core');
const { default: pause } = require('webdriverio/build/commands/browser/pause');
const { default: waitUntil } = require('webdriverio/build/commands/browser/waitUntil');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RetirementCalculatorPage extends Page {
    /**
     * define selectors using getter methods
     */
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

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to calculate using currentAge, retirementAge, currentIncome, spouseIncome, currentTotalSavings, currentAnnualSavings, savingsIncreaseRate
     */
    async calculate (currentAge, retirementAge, currentIncome, spouseIncome, currentTotalSavings, currentAnnualSavings, savingsIncreaseRate) {
        console.log(currentAge + ", " +retirementAge+ ", " + currentIncome+ ", " + spouseIncome+ ", " + currentTotalSavings+ ", " + currentAnnualSavings+ ", " + savingsIncreaseRate);
        await this.inputCurrentAge.setValue(currentAge);
        await pause(1000);
        await this.inputRetirementAge.setValue(retirementAge);
        await pause(1000);
        //console.log("PRINTING inputRetirementAge object")
        //console.log(this.inputRetirementAge);
        //console.log("PRINTING inputCurrentIncome object")
        //console.log(this.inputCurrentIncome);
        //await this.inputCurrentIncome.click();
        //console.log("PRINTING inputCurrentIncome focus status")
        //console.log(await inputCurrentIncome.isFocused());
        await this.inputCurrentIncome.setValue(currentIncome);
        await pause(2000);
        //await Browser.keys(['Meta', 'Right arrow'])
        await this.inputCurrentIncome.setValue(currentIncome);
        await pause(2000);
        await this.inputSpouseIncome.setValue(spouseIncome);
        await pause(2000);
        await this.inputCurrentTotalSavings.setValue(currentTotalSavings);
        await pause(2000);
        await this.inputCurrentAnnualSavings.setValue(currentAnnualSavings);
        await pause(1000);
        await this.inputSavingsIncreaseRate.setValue(savingsIncreaseRate);
        await pause(1000);

        await this.btnCalculate.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('insights-tools/retirement-calculator.html');
    }
}

module.exports = new RetirementCalculatorPage();

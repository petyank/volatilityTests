import { WebDriver } from "selenium-webdriver";

/**
 * Represents the Finance Page object.
 */
class FinancePage {
  /**
   * Creates an instance of FinancePage.
   * @param {WebDriver} driver - The WebDriver instance.
   */
  constructor(driver) {
    this.driver = driver;
    // ToDo: add all needed selectors
    // Example selector
    // this.priceSelector = 'By.css("someCssSelector)';
  }
  // ToDo: implement methods for getting price
}

export default FinancePage;

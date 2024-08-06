import { WebDriver } from "selenium-webdriver";
import { Builder, Browser, By, Key, until } from "selenium-webdriver";
import { BASE_URL } from "../config.js";

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
    this.url = BASE_URL;

    // ToDo: add all needed selectors
    // Example selector
    // this.priceSelector = 'By.css("someCssSelector)';
    this.priceSelector = By.css("#yDmH0d > c-wiz.zQTmif.SSPGKf.u5wqUe > div > div.e1AOyf > div > main > div.Gfxi4 > div.yWOrNb > div.VfPpkd-WsjYwc.VfPpkd-WsjYwc-OWXEXe-INsAgc.KC1dQ.Usd1Ac.AaN0Dd.QZMA8b > c-wiz > div > div:nth-child(1) > div > div.rPF6Lc > div > div:nth-child(1) > div > span > div > div");
  }

  // ToDo: implement methods for getting price
  
  //Method to open the page
  async openBtcPage() {
      await this.driver.get(this.url);
  }
  
  //Method to find the price element and get the numeric value of the price
  async getPrices() {
    const priceElement = await this.driver.findElement(this.priceSelector);
    const priceText = await priceElement.getText();
    const price = parseFloat(priceText);
    return price;
  }
}

export default FinancePage;

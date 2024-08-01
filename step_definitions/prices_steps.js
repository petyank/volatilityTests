// features/step_definitions/prices_steps.js
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import softAssert from "soft-assert";
import { BASE_URL } from "../config.js";
import Utils from "../support/utils.mjs";

// This can be also done using CustomWorld like in the API tests project
let initialPrice;
let prices = [];

/**
 * Step definition for opening the Google Finance page for a given symbol.
 * @param {string} symbol - The symbol of the stock to open.
 */
Given("example", async function (symbol) {
    // TODO: implement this step
});

/**
 * Step definition for collecting prices at regular intervals.
 * TODO: This step will stop after 10000ms due to default cucumber timeout.
 *  Find a way around this problem.
 * @param {number} pollInterval - The interval in seconds between price collection.
 * @param {number} collectDuration - The duration in minutes for price collection.
 */
When("example", async function (pollInterval, collectDuration) {
    // TODO: implement this step
});

/**
 * Step definition for validating the average price variation.
 * @param {number} threshold - The maximum allowed percentage variation of the average price.
 */
Then("example", function (threshold) {
    // TODO: implement this step
});

/**
 * Step definition for validating individual price variations.
 * @param {number} threshold - The maximum allowed percentage variation of each price.
 */
Then("example", function (threshold) {
    // TODO: implement this step
});

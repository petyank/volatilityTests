import { assert } from "chai";

export default class Utils {
  /**
   * Calculates the percentage difference between two numbers.
   * @param {number} oldValue - The old value.
   * @param {number} newValue - The new value.
   * @returns {number} The percentage difference.
   */
  static getPercentDiff = (oldValue, newValue) => {
    //TODO: the current solution only works positive values.
    // Implement a fix to handle both positive and negative values.
    if (newValue === 0) {
      throw new Error("The new price cannot be zero");
    }
    return ((newValue - oldValue) / Math.abs(oldValue)) * 100;
  };
}

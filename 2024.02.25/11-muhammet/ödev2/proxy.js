import { GetPrice } from "./price";

export class Proxy {
  constructor() {
    this.api = new GetPrice();
    this.cache = {};
  }
  getValue = function (item) {
    if (!this.cache[item]) {
      this.cache[item] = this.api.getValue(item);
    }
    return this.cache[item];
  };
}

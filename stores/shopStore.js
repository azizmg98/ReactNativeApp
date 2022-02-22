import { makeAutoObservable } from "mobx";
import {instance} from "./instance";

class ShopStore {
  shops = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchShops = async () => {
    try {
      const res = await instance.get("/products");
      this.shops = res.data;
      console.log(this.shops);
    } catch (error) {
      console.log(error);
    }
  };
}
const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;

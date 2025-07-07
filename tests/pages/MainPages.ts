import { BasePage } from "./BasePage"

export class Mainpage extends BasePage {

  async open() {
    await this.page.goto('https://rutube.ru/')
  }
  
  

}
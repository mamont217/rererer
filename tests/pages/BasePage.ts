import { Locator, Page } from "@playwright/test"

export class BasePage {
  readonly page: Page
 private readonly cookiePopup: Locator
 private readonly cookieButtonOk: Locator
 private readonly popupRegistration: Locator
 private readonly buttonclosePopupRegistration: Locator

  
  constructor(page: Page) {
    this.page = page
    this.cookiePopup = this.page.locator('.cookie-notify-module__cookie-consent__content')
    this.cookieButtonOk = this.page.locator('.cookie-notify-module__cookie-button')
    this.popupRegistration = this.page.locator('.wdp-popup-module__popup ')
    this.buttonclosePopupRegistration = this.page.getByRole('button', { name: 'Закрыть' })
  }
   async closeCookiePopup() {
    if (this.cookiePopup) { await this.cookieButtonOk.click()} else { console.log('Продолжаем') }}
    
   async closePopupRegistration() {
    if (this.popupRegistration) { await this.buttonclosePopupRegistration.click()} else { console.log('Продолжаем') } }
   
}
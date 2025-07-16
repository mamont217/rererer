import { Locator, Page } from "@playwright/test"

export class BasePage {
  readonly page: Page
  readonly cookiePopup: Locator
  readonly cookieButtonOk: Locator
  readonly popupRegistration: Locator
  readonly buttonclosePopupRegistration: Locator

  
  constructor(page: Page) {
    this.page = page
    this.cookiePopup = this.page.locator('.cookie-notify-module__cookie-consent__content')
    this.cookieButtonOk = this.page.locator('.cookie-notify-module__cookie-button')
    this.popupRegistration = this.page.locator('.wdp-popup-module__popup ')
    this.buttonclosePopupRegistration = this.page.getByRole('button', { name: 'Закрыть' })
  }
    
    async closeCookieWindow({ expect }) {
      try {
        await expect(this.cookiePopup).toBeVisible()
        await this.cookieButtonOk.click()
      }
       catch{}
    }
    
  async closePopupRegistration({ expect }) {
    try {
      await expect(this.popupRegistration).toBeVisible()
      await this.buttonclosePopupRegistration.click()
    }
     catch{}  
  } 
}

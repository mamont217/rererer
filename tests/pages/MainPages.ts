import { Locator, Page, expect } from "@playwright/test"
import { BasePage } from "./BasePage"

export class Mainpage extends BasePage {
  private readonly headerlocator: Locator
  private readonly categoriesTabslocator: Locator
  private readonly menuLocator: Locator

 constructor(page: Page) {
  super(page)
  this.headerlocator = this.page.locator('.header-module__charHeaderWrapper')
  this.categoriesTabslocator = this.page.locator('section').filter({hasText: 'ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ '}).nth(1)
  this.menuLocator = this.page.getByRole('navigation').locator('section').filter({ hasText: 'ГлавнаяRUTUBE' })

 }
  async open() {
    await this.page.goto('https://rutube.ru/')
    await this.closeCookiePopup()
    await this.closePopupRegistration()
  }
  async headerHasCorrectSnapshot() {
    await expect(this.headerlocator).toMatchAriaSnapshot()
  }
  async categoriesTabslocatorSnapshot() {
    await expect(this.categoriesTabslocator).toMatchAriaSnapshot()
  }
   async menuLocatorSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot()
  }
}
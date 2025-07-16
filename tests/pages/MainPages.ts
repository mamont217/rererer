import { Locator, Page, expect } from "@playwright/test"
import { BasePage } from "./BasePage"

export class Mainpage extends BasePage {
  private readonly headerlocator: Locator
  private readonly categoriesTabslocator: Locator
  private readonly menuLocator: Locator

  private readonly addButtonHeader : Locator
  private readonly popupAddButtonHeader : Locator
  
  private readonly headerNotificationButtonLocator : Locator
  private readonly popupHeaderNotificationButtonLocator : Locator

  private readonly changeThemesButtonLocator : Locator

  private readonly loginAndregistrationButton : Locator
  private readonly popuploginAndregistrationButton : Locator

 constructor(page: Page) {
  super(page)
  this.headerlocator = this.page.locator('.header-module__charHeaderWrapper')
  this.categoriesTabslocator = this.page.locator('section').filter({hasText: 'ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ '}).nth(1)
  this.menuLocator = this.page.getByRole('navigation').locator('section').filter({ hasText: 'ГлавнаяRUTUBE' })
  this.addButtonHeader = this.page.getByRole('button', { name: 'Добавить' });
  this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
  this.changeThemesButtonLocator = this.page.locator('.theme-switcher-module__icon')
  this.loginAndregistrationButton = this.page.locator('div').filter({ hasText: /^Вход и регистрация$/ }).locator('button')
  this.popupAddButtonHeader = this.page.locator('.wdp-header-right-module__uploader ul')
  this.popupHeaderNotificationButtonLocator = this.page.locator('.wdp-notifications-popup-module__wrapper')
  this.popuploginAndregistrationButton = this.page.locator('iframe[title="Multipass"]').contentFrame().locator("div[role='form']")
 }
  async open() {
    await this.page.goto('https://rutube.ru/')
    await this.closeCookieWindow({ expect }) 
    await this.closePopupRegistration({ expect })
  }
  async headerHasCorrectSnapshot() {
    await expect(this.headerlocator).toMatchAriaSnapshot({name: 'headerAreaSnapshot.yml'})
  }
  async categoriesTabslocatorSnapshot() {
    await expect(this.categoriesTabslocator).toMatchAriaSnapshot({name: 'categoriesTabsAreaSnapshot.yml'})
  }
   async menuLocatorSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({name: 'menuLocatorAreaSnapshot.yml'})


  }
  async openAddPopupList() {
    await this.addButtonHeader.click()
  }
   async openNotificationPopup() {
    await this.headerNotificationButtonLocator.click()
  }
  async openAutorizationModal() {
    await this.loginAndregistrationButton.click()
  }


  async addpopupListAreaShapshot() {
    await expect(this.popupAddButtonHeader).toMatchAriaSnapshot({name: 'addbuttonPopupList.yaml'})
  }
  async NotificationPopupAreaShapshot() {
    await expect(this.popupHeaderNotificationButtonLocator).toMatchAriaSnapshot({name: 'NotificationPopup.yaml'})
  }
  async AutorizationModalAreaShapshot() {
    await expect(this.popuploginAndregistrationButton).toMatchAriaSnapshot({name: 'loginAndRegistrationPopup'})
  }


}
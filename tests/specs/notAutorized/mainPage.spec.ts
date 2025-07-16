import { test, expect } from '../../fixtures/mainPageFixtures' 


test ('Тесты доступности элементов хедера', async({ mainPage }) => {
  await mainPage.headerHasCorrectSnapshot()
})
test ('Тесты доступности элементов табой категорий', async({ mainPage }) => {
  await mainPage.categoriesTabslocatorSnapshot()
})
test ('Тесты доступности элементов навигации', async({ mainPage }) => {
  await mainPage.menuLocatorSnapshot()
})
test ('Проверка доступности списка добавления контента', async({ mainPage }) => {
  await mainPage.openAddPopupList()
  await mainPage.addpopupListAreaShapshot()
})
test ('Проверка доступности попап уведомлений', async({ mainPage }) => {
  await mainPage.openNotificationPopup()
  await mainPage.NotificationPopupAreaShapshot()
})
test ('Проверка доступности модуля регистрации', async({ mainPage }) => {
  await mainPage.openAutorizationModal()
  await mainPage.AutorizationModalAreaShapshot()
})


import test from '@playwright/test' 
import { Mainpage } from '../../pages/MainPages'

test.describe('Тесты главной страницы', async() => {

test ('Тест главной страницы', async({ page }) => {
  const mainpage = new Mainpage(page)
  await mainpage.open()
}) 
test ('Тесты доступности элементов хедера', async({ page }) => {
  const mainpage = new Mainpage(page)
  await mainpage.open()
  await mainpage.headerHasCorrectSnapshot()
})
test ('Тесты доступности элементов табой категорий', async({ page }) => {
  const mainpage = new Mainpage(page)
  await mainpage.open()
  await mainpage.categoriesTabslocatorSnapshot()
})

test ('Тесты доступности элементов ', async({ page }) => {
  const mainpage = new Mainpage(page)
  await mainpage.open()
  await mainpage.menuLocatorSnapshot()
})

})

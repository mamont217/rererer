import test from '@playwright/test' 
import { Mainpage } from '../../pages/MainPages'



test ('Тест главной страницы', async({page}) => {
const mainpage = new Mainpage(page)
await mainpage.open()
})
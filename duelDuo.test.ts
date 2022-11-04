
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('All bots show up', async () => {
    await driver.findElement(By.xpath('//button[@id="see-all"]')).click()
    await driver.sleep(2000)
    const bots = await driver.findElement(By.xpath('//div[@class="bot-card outline"]'))
    const displayed = await bots.isDisplayed()
    expect(displayed).toBe(true)
})

test('Add bots to duo to duel', async () => {
    await driver.findElement(By.xpath('//button[@id="draw"]')).click()
    await driver.findElement(By.xpath('//button[@class="bot-btn"]')).click()
    await driver.findElement(By.xpath('//button[@class="bot-btn"]')).click()
    await driver.sleep(2000)
    const duel = await driver.findElement(By.xpath('//button[@id="duel"]'))
    const displayed = await duel.isDisplayed()
    expect(displayed).toBe(true)
})
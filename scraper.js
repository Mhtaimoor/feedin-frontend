const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.tripadvisor.com/Restaurant_Review-g295413-d12124012-Reviews-Arcadian_Cafe_Signature-Lahore_Punjab_Province.html"
  );

  const html = await page.content();
  const $ = cheerio.load(html);

  const products = [];

  $("div.review-container").each((index, element) => {
    const name = $(element).find("span.noQuotes").text().trim();
    const reviewText = $(element).find("p.partial_entry").text().trim();
    const image = $(element).find("img.basicImg ").attr("src");
    // const stars = $(element).find("div.stars").attr("data-rating");

    products.push({ name, reviewText, image });
  });

  console.log(JSON.stringify(products, null, 2));

  await browser.close();
})();

import express from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';

const app = express();
const port = 3001; // 포트를 3001번으로 변경

// CORS 정책 설정
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.get('/events', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://maplestory.nexon.com/News/Event');

    const events = await page.evaluate(() => {
      const eventList = document.querySelectorAll('.event_list_wrap > dl');
      const eventData = [];

      eventList.forEach((event) => {
        const imgUrl = event.querySelector('dt > a > img').src;
        const title = event.querySelector('dd > p > a').textContent || '';
        const period = event.querySelector('dd > p').textContent || '';
        const eventUrl = event.querySelector('dt > a').href || '';

        eventData.push({ imgUrl, title, period, eventUrl });
      });

      return eventData.slice(0, 3);
    });

    await browser.close();
    res.json(events);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching events.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import { Injectable } from '@nestjs/common';
import { parse } from 'node-html-parser';
import axios, { ResponseType } from 'axios';
import Scraper from 'images-scraper';
@Injectable()
export class AppService {
  async getDuck(): Promise<ArrayBuffer> {
    var Scraper = require('images-scraper');
    const google = new Scraper({
      puppeteer: {
        headless: true,
      },
    });
    let value = Math.floor(Math.random() * 99);
    const results = await google.scrape('duck', 100);
    console.log(results[value].url)
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: results[value].url,
      headers: {},
      responseType:"arraybuffer" as ResponseType
    };

    let payload = await axios.request(config)
      .then(async (response) => {
        return await response.data
      })
      .catch((error) => {
        console.log(error);
      });
    return payload
    

  }
}

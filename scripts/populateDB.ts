import axios from 'axios';
import { prisma } from '../src/server/db/client';

/*
 * Populate the local database with Cat API data so that we don't need to make
 * constant calls and use up all our API tokens.
 * If the package imports don't work, set "module" to "CommonJS" in tsconfig.json
 * (don't forget to change it back afterwards!)
 */

async function populateDB() {
  const ENDPOINT_URL =
    'https://api.thecatapi.com/v1/images/search?order=ASC&limit=100&page=';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  axios.defaults.headers.common = {
    'X-API-Key': process.env.CATAPI_KEY || 'error_fetching_api_key',
  };

  for (let page = 0; page <= 113; page++) {
    const catPage = await axios.get(`${ENDPOINT_URL}${String(page)}`);

    console.log(catPage);

    for (const cat of catPage.data) {
      // API 'fixes' dead images by changing the extension to .false
      if (cat.url.search('false') === -1) {
        const createdCat = await prisma.catPic.create({
          data: {
            imageUrl: cat.url,
          },
        });
        if (createdCat) {
          console.log(createdCat);
        } else {
          console.error('error creating cat');
        }
      } else {
        console.log(`Detected bad image: ${cat.url}`);
      }
    }
  }
}

populateDB();

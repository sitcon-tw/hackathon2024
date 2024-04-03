const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { join } = require('path');

const dotenv = require('dotenv');
dotenv.config({ path: ['.env.local', '.env'] });

const { SCRIPT_APP_ID } = process.env;
if (!SCRIPT_APP_ID) process.exit(1);

const path = join(process.cwd(), 'src', 'data', 'json');

if (!existsSync(path)) mkdirSync(path, { recursive: true });

fetch(`https://script.google.com/macros/s/${SCRIPT_APP_ID}/exec`)
  .then((resp) => resp.json())
  .then((data) => {
    for (const key in data) {
      writeFileSync(join(path, `${key}.json`), JSON.stringify(data[key]));
    }
  })
  .then(() => process.exit(0))
  .catch((err) => process.exit(1));

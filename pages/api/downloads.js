import path from 'path'
import fs from 'fs'
import logger from '../../lib/neuLogger'

const getCount = (filePath)=> {
  return new Promise((resolve, reject)=> {
    let dCount = 0;
    fs.readFile(filePath, (err, data)=> {
      if (err) {
        logger.error(err)
      }
      let dataStr = data.toString();
      let dataStrings = dataStr.match(/\{ 1 \};/g);
      let stringCount = dataStrings.length;
      resolve(stringCount)
    })
  })
}

export default function handler(req, res) {
  getCount(path.join(process.cwd(), 'logs/downloadCount.log'))
    .then(downloadCount => {
      res.status(200).json({ downloads: downloadCount })
    })
};
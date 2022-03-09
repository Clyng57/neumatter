import path from 'path'
import fs from 'fs'
import logger from '../../lib/neuLogger'

const getCount = (filePath)=> {
  return new Promise((resolve, reject)=> {
    let dCount = 0;
    fs.readFile(filePath, (err, data)=> {
      let dataStr = data.toString();
      let dataStrings = dataStr.matchAll(/{ [\d]+ };/g);
      console.log(dataStrings)
      console.log(dataStrings.length)
      let stringCount = dataStrings.length;
      if (stringCount === 0)
        resolve(dCount)
      let stringsProcessed = 0;
      dataStrings.forEach(dataString => {
        let dataNumber = parseInt(dataString)
        if (dataNumber === NaN) {
          logger.error('dataNumber is NaN');
          stringsProcessed += 1;
          if (stringCount === stringsProcessed)
            resolve(dCount)
        } else {
          dCount += dataNumber;
          stringsProcessed += 1;
          if (stringCount === stringsProcessed)
            resolve(dCount)
        }
      })
    })
  })
}

export default (req, res)=> {
  getCount(path.join(process.cwd(), 'logs/downloadCount.log'))
    .then(downloadCount => {
      res.status(200).json({ downloads: downloadCount })
    })
};
import path from 'path'
import fs from 'fs'
import logger from '../../lib/neuLogger'

export default (req, res)=> {
  const filePath = path.join(process.cwd(), '_packages/neumatter.zip');     
  const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
  res.setHeader('Content-Disposition',`attachment; filename=${fileName}`);
  let fileStream = fs.createReadStream(filePath)
  fileStream.pipe(res);
  fileStream.on('end', ()=> {
    logger.info(1);
  })
};

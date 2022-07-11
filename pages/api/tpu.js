import path from 'path'
import f from 'fs'
import { convert } from 'convert-svg-to-png'

export default function (req, res) {
  return new Promise((resolve, reject) => {
    console.log(req.url)
    const filePath = path.join(process.cwd(), 'public/tpu-logo.svg');     
    const fileName = filePath.substring(filePath.lastIndexOf("/") + 1).replace('.svg', '.png');
    f.readFile(filePath, (err, fileBuffer) => {
      const jsonBody = JSON.parse(JSON.stringify(req.body))
      const color = `fill="${jsonBody.color}"`
      console.log(color)
      const fileString = fileBuffer.toString().replace(/fill="[^"]*"/g, color)
      const data = fileString
      convert(data, { width: 1273, height: 640 })
        .then(async fileData => {
          res.status(200)
          const stats = f.statSync(filePath)
          res.setHeader('Content-Length', stats.size)
          res.setHeader('Content-Disposition',`attachment; filename=${fileName}`);
          await res.send(fileData)
          resolve(true)
        })
        /*
      f.writeFile(filePath, data, (err) => {
        if (err) throw err
        convert(filePath)
          .then(outputConverted => {
            const fileStream = f.createReadStream(outputConverted)
            fileStream.pipe(res)
          })
      })
      */
    })
  })
}

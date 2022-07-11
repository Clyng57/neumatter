import path from 'path'
import f from 'fs/promises'
import { convert } from 'convert-svg-to-png'
import stream from 'stream'

export default async function sendFile (req, res) {
    console.log(req.url)
    const filePath = path.join(process.cwd(), 'public/tpu-logo.svg');     
    const fileName = filePath.substring(filePath.lastIndexOf("/") + 1).replace('.svg', '.png');
    const fileBuffer = await f.readFile(filePath)
    const jsonBody = JSON.parse(JSON.stringify(req.body))
    const color = `fill="${jsonBody.color}"`
    const fileString = fileBuffer.toString().replace(/fill="[^"]*"/g, color)
    const data = fileString
    const fileData = await convert(data, { width: 1273, height: 640 })
    res.setHeader('Content-Disposition',`attachment; filename=${fileName}`)
    const str = stream.Readable.from(fileData)
    str.pipe(res)
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
}

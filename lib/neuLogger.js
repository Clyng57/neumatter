
import Logger from './logger'
import path from 'path'

const logger = new Logger({
  all: path.join(process.cwd(), '/logs/app.log'),
  info: path.join(process.cwd(), '/logs/downloadCount.log'),
  error: path.join(process.cwd(), '/logs/error.log'),
})

module.exports = logger;

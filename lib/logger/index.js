
const fs = require('fs');
const chroma = require('chroma-palette');

/**
 * @module logger
 */

class Logger {

  /**
   * Create Logger
   * 
   * @param {Object} options
   * @param {string} options.all
   * @param {string | undefined} options.info
   * @param {string | undefined} options.debug
   * @param {string | undefined} options.error
   */
  constructor(options) {
    /** @private */
    this.allStream = options.all;
    /** @private */
    this.infoStream = options && options.info ? options.info : false;
    /** @private */
    this.debugStream = options && options.debug ? options.debug : false;
    /** @private */
    this.errorStream = options && options.error ? options.error : false;
  }

  log = msg => {
    const el = {
      level: 'any',
      timestamp: new Date().toISOString(),
      message: msg
    }
    const content = `[${el.level}] @ [${el.timestamp}] => { ${el.message} };`;
    if (process.env.NODE_ENV !== 'production') {
      let consoleContent = chroma
        .dim.push('[')
        .push(el.level)
        .dim.push(']')
        .magenta.push(' @ ')
        .dim.push('[')
        .push(el.timestamp)
        .dim.push(']')
        .magenta.push(' => ')
        .dim.push('{ ')
        .push(el.message)
        .dim.paint(' };');
      console.log(consoleContent);
    }
    let allStream = fs.createWriteStream(this.allStream, { flags: 'a' });
    allStream.once(content);
  }

  info = msg => {
    const el = {
      level: 'info',
      timestamp: new Date().toISOString(),
      message: msg
    }
    const content = `[${el.level}] @ [${el.timestamp}] => { ${el.message} };`;
    const consoleLog = ()=> {
    if (process.env.NODE_ENV !== 'production') {
      let consoleContent = chroma
        .dim.push('[')
        .cyan.push(el.level)
        .dim.push(']')
        .magenta.push(' @ ')
        .dim.push('[')
        .cyan.push(el.timestamp)
        .dim.push(']')
        .magenta.push(' => ')
        .dim.push('{ ')
        .push(el.message)
        .dim.paint(' };');
        return console.log(consoleContent);
      } else {
        return;
      }
    }
    let allStream = fs.createWriteStream(this.allStream, { flags: 'a' });
    let infoStream = fs.createWriteStream(this.infoStream, { flags: 'a' });
    const writeAll = (data, cb)=> {
      if (!allStream.write(data)) {
        allStream.once('drain', cb);
      } else {
        process.nextTick(cb);
      }
    }
    writeAll(content, ()=> {
      if (infoStream !== false) {
        infoStream.write(content);
        infoStream.end()
      }
    })
  }

  debug = msg => {
    const el = {
      level: 'debug',
      timestamp: new Date().toISOString(),
      message: msg
    }
    const content = `[${el.level}] @ [${el.timestamp}] => { ${el.message} };`;
    const consoleLog = ()=> {
    if (process.env.NODE_ENV !== 'production') {
      let consoleContent = chroma
        .dim.push('[')
        .green.push(el.level)
        .dim.push(']')
        .magenta.push(' @ ')
        .dim.push('[')
        .green.push(el.timestamp)
        .dim.push(']')
        .magenta.push(' => ')
        .dim.push('{ ')
        .push(el.message)
        .dim.paint(' };');
        return console.log(consoleContent);
      } else {
        return;
      }
    }
    let allStream = fs.createWriteStream(this.allStream, { flags: 'a' });
    let debugStream = fs.createWriteStream(this.debugStream, { flags: 'a' });
    const writeAll = (data, cb)=> {
      if (!allStream.write(data)) {
        allStream.once('drain', cb);
      } else {
        process.nextTick(cb);
      }
    }
    writeAll(content, ()=> {
      if (debugStream !== false) {
        debugStream.write(content);
        debugStream.end()
      }
    })
  }

  error = msg => {
    const el = {
      level: 'error',
      timestamp: new Date().toISOString(),
      message: msg
    }
    const content = `[${el.level}] @ [${el.timestamp}] => { ${el.message} };`;
    const consoleLog = ()=> {
      if (process.env.NODE_ENV !== 'production') {
        let consoleContent = chroma
          .dim.push('[')
          .red.push(el.level)
          .dim.push(']')
          .magenta.push(' @ ')
          .dim.push('[')
          .red.push(el.timestamp)
          .dim.push(']')
          .magenta.push(' => ')
          .dim.push('{ ')
          .push(el.message)
          .dim.paint(' };');
        return console.log(consoleContent);
      } else {
        return;
      }
    }
    let allStream = fs.createWriteStream(this.allStream, { flags: 'a' });
    let errorStream = fs.createWriteStream(this.errorStream, { flags: 'a' });
    const writeAll = (data, cb)=> {
      if (!allStream.write(data)) {
        allStream.once('drain', cb);
      } else {
        process.nextTick(cb);
      }
    }
    writeAll(content, ()=> {
      if (errorStream !== false) {
        errorStream.write(content);
        errorStream.end()
      }
    })
  }
  
}

module.exports = Logger;

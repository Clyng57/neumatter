import type fs from 'fs'
/**
 * @module logger
 */
declare module '@neumatter/logger'
/**
 * Class Logger
 */
declare class Logger {
  /**
   * Create Logger
   * 
   * @param {Object} options
   * @param {string} options.all
   * @param {string | undefined} options.info
   * @param {string | undefined} options.debug
   * @param {string | undefined} options.error
   */
  constructor(
    options?: { 
      all: string; 
      info: string | undefined; 
      debug: string | undefined; 
      error: string | undefined;
    }
  )
  /** @private */
  private allStream: fs.WriteStream | boolean;
  /** @private */
  private infoStream: fs.WriteStream | boolean;
  /** @private */
  private debugStream: fs.WriteStream | boolean;
  /** @private */
  private errorStream: fs.WriteStream | boolean;

  log: (msg: any) => void;
  info: (msg: any) => void;
  debug: (msg: any) => void;
  error: (msg: any) => void;

}

export = Logger;

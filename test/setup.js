/* eslint-disable no-console */
global.console = {
  log: jest.fn(), // console.log() are ignored in tests

  // Keep native behaviour for other metods, use those to print out things your own test, not `console.log`
  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug
}
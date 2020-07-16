export class Utility {
  static delay = (ms: number) => new Promise(res => setTimeout(res, ms));
}
import * as fs from 'fs';

export class Storage {
  public static getStorage() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }

    return Storage.instance;
  }

  private static instance: Storage;

  public pack: any;
  public inner: any;
  public str = 'test string';

  private constructor() {
    this.initPack();
  }

  public initPack() {
    const data = fs.readFileSync('package.json', { encoding: 'utf8' });
    const data2 = fs.readFileSync('./storage/test.json', { encoding: 'utf8' });
    this.pack = JSON.parse(data);
    this.inner = JSON.parse(data2);
  }

  public changePack() {
    const change = Object.assign({}, this.inner);
    change.version = '1.0.x';
    fs.writeFileSync('./storage/test.json', JSON.stringify(change));
    this.initPack();
  }
}

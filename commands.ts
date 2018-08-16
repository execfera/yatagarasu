import { Storage } from './storage/storage';

const storage = Storage.getStorage();

export class Commands {
  public static getStorage() {
    return storage.inner;
  }
}

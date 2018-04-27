import { Injectable } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';

@Injectable()
export class LocalstorageService {

  constructor(private persistenceService : PersistenceService) { }

  persist(localStorageName, persistObject) : boolean{
    return this.persistenceService.set(localStorageName, JSON.stringify(persistObject), {
      type: StorageType.SESSION,
      expireAfter : 3600000
    })
  }

  get(localStorageName) : string{
    return this.persistenceService.get(localStorageName, StorageType.SESSION)
  }

  remove(localStorageName) : string{
    return this.persistenceService.remove(localStorageName, StorageType.SESSION)
  }

  removeAll() : void{
    this.persistenceService.removeAll(StorageType.SESSION)
  }
}

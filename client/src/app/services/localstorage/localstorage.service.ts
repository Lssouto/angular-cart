import { Injectable } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';

@Injectable()
export class LocalstorageService {

  constructor(private persistenceService : PersistenceService) { }

  persist(localStorageName, persistObject){
    return this.persistenceService.set(localStorageName, JSON.stringify(persistObject), {
      type: StorageType.SESSION,
      expireAfter : 3600000
    })
  }

  get(localStorageName){
    return this.persistenceService.get(localStorageName, StorageType.SESSION)
  }

  remove(localStorageName){
    return this.persistenceService.remove(localStorageName, StorageType.SESSION)
  }

  removeAll(){
    return this.persistenceService.removeAll(StorageType.SESSION)
  }
}

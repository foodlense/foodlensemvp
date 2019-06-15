import { Injectable } from '@angular/core';

import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk';



@Injectable({
  providedIn: 'root'
})
export class StitchService {

  private client = Stitch.initializeDefaultAppClient('foodlense-api-ctyle');

  constructor() {
    this.loginAnonymously();
    console.log('stitch constructor', this.client);
  }

  private loginAnonymously() {
    this.client.auth.loginWithCredential(new AnonymousCredential());
  }

  public loginWithCredentials() {

  }

}

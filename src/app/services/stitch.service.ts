import { Injectable } from '@angular/core';

import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk';



@Injectable({
  providedIn: 'root'
})
export class StitchService {

  private client = Stitch.initializeDefaultAppClient('foodlense-api-ctyle');

  constructor() {
    console.log('stitch constructor');
  }

  public init() {
    this.client.auth.loginWithCredential(new AnonymousCredential());
  }
}

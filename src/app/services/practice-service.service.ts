import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeServiceService {

  constructor() { }

textedName = new Subject();

}

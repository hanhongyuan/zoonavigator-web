/*
 * Copyright (C) 2018  Ľuboš Kozmon
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {Injectable} from "@angular/core";
import {StorageService} from "./storage.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class LocalStorageService implements StorageService {

  constructor() {
  }

  set(key: string, value: any): Observable<void> {
    return Observable
      .defer(() => Observable.of(localStorage.setItem(key, value)))
      .mapTo(null);
  }

  get(key: string): Observable<any> {
    return Observable.defer(() => Observable.of(localStorage.getItem(key)));
  }

  remove(key: string): Observable<void> {
    return Observable
      .defer(() => Observable.of(localStorage.removeItem(key)))
      .mapTo(null);
  }
}
import { Injectable } from '@angular/core';
import { EVENTS } from '../events';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    constructor() { }

    getEvents(): Observable<Event[]> {
        return of(EVENTS);
    }
}

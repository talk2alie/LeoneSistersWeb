import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Event } from '../models/event';

@Component({
    selector: 'lsu-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    events: Event[];

    constructor(private eventsService: EventsService) { }

    ngOnInit() {
        this.eventsService.getEvents()
            .subscribe(events => this.events = events);
    }
}

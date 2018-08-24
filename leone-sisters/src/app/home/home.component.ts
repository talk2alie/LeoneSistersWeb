import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Event } from '../models/event';

@Component({
    selector: 'lsu-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    upcomingEvents: Event[];

    constructor(private eventsService: EventsService) { }

    ngOnInit() {
        this.setUpcomingEvents();
    }

    private setUpcomingEvents() {
        this.eventsService.getFiveUpcomingEventsInCurrentYear()
            .subscribe(events => {
                if (this.thereAreUpcomingEventsIn(events)) {
                    this.setUpcomingEventsTo(events);
                }
            });
    }

    private setUpcomingEventsTo(events: Event[]) {
        this.upcomingEvents = events;
    }

    private thereAreUpcomingEventsIn(upcomingEvents: Event[]) {
        return upcomingEvents && upcomingEvents.length > 0;
    }
}

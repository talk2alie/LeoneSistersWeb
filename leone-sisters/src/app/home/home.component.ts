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

    private setUpcomingEvents(): void {
        this.eventsService.getFiveUpcomingEventsInCurrentYear()
            .subscribe(serviceEvents => {
                if (this.thereAreUpcomingEventsIn(serviceEvents)) {
                    this.setUpcomingEventsTo(serviceEvents);
                }
            });
    }

    private setUpcomingEventsTo(events: Event[]): void {
        this.upcomingEvents = events;
    }

    private thereAreUpcomingEventsIn(events: Event[]): boolean {
        return events && events.length > 0;
    }
}

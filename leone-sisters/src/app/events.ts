import { Event } from './models/event';

export const EVENTS: Event[] = [
    {
        date: new Date('December 31, 2018 10:00 PM'),
        description: 'It\'s that time of the year again when we get to celebrate our existance with a blast. Please bring the whole family',
        title: 'Annual Gala',
        location: 'Community Center of Philadelphia'
    },
    {
        date: new Date('January 12, 2019 4:00 PM'),
        description: 'We will be having our first meeting of the year. There will be free food and drinks',
        title: 'First Meeting of the Year',
        location: '2220 S 73rd Street, Philadelphia PA 19142'
    },
    {
        date: new Date('March 28, 2019 10:30 PM'),
        description: 'Please join us celebrate the birthday of our sister, Moinjama Karvah on this natal day of hers',
        title: 'Moinjama\'s Birthday',
        location: '1322 Angora Ave, Lasndowne PA 19050'
    },
    {
        date: new Date('April 1, 2019 10:30 AM'),
        description: 'We will be visiting the Memorial hospital of the late Beatrice Boakai',
        title: 'The Beatrice Boakai Memorial Hospital Visit',
        location: 'Beatrice Boakai Memorial Hospital, Darby'
    },
    {
        date: new Date('May 10, 2019 8:45 AM'),
        description: 'Today is the general financial development and independence seminar',
        title: 'Financial Independence Seminar',
        location: '1322 Angora Ave, Lasndowne PA 19050'
    }
];

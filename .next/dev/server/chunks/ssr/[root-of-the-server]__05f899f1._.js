module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Coding/mom-seattle-visit/src/data/tripData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activities",
    ()=>activities,
    "getActivitiesByCategory",
    ()=>getActivitiesByCategory,
    "getActivitiesByCity",
    ()=>getActivitiesByCity,
    "getActivitiesByDate",
    ()=>getActivitiesByDate,
    "getMustDoActivities",
    ()=>getMustDoActivities,
    "tripInfo",
    ()=>tripInfo
]);
const tripInfo = {
    id: 'victoria-seattle-2026',
    name: "Victoria's Seattle Visit",
    visitor: 'Victoria (Mom)',
    startDate: '2026-01-11',
    endDate: '2026-01-27',
    flights: [
        {
            id: 'arr-1',
            type: 'arrival',
            flightNumber: 'AC 543',
            from: 'YYZ',
            to: 'SEA',
            date: '2026-01-11',
            departureTime: '19:50',
            arrivalTime: '22:16',
            confirmation: 'BHJZGY',
            airline: 'Air Canada'
        },
        {
            id: 'dep-1',
            type: 'departure',
            flightNumber: 'AC 542',
            from: 'SEA',
            to: 'YYZ',
            date: '2026-01-27',
            departureTime: '08:10',
            arrivalTime: '15:53',
            confirmation: 'BHJZGY',
            airline: 'Air Canada'
        }
    ],
    hotels: [
        {
            id: 'hotel-1',
            name: 'Kimpton Riverplace Hotel',
            address: '1510 S Harbor Way, Portland, OR 97201',
            checkIn: '2026-01-16',
            checkOut: '2026-01-18',
            checkInTime: '16:00',
            checkOutTime: '12:00'
        }
    ],
    transportation: [
        {
            id: 'trans-1',
            type: 'car',
            from: 'Seattle',
            to: 'Portland',
            date: '2026-01-16',
            departureTime: '09:00',
            estimatedDuration: '3h - 3.5h',
            distance: '175 miles via I-5',
            notes: [
                'Stop at Tacoma Museum of Glass (~45 min from Seattle)',
                'Optional: Olympia State Capitol (~1.5 hrs from Seattle)',
                'Arrive Portland by early afternoon for hotel check-in at 4 PM'
            ]
        },
        {
            id: 'trans-2',
            type: 'car',
            from: 'Portland',
            to: 'Columbia River Gorge',
            date: '2026-01-17',
            departureTime: '10:00',
            estimatedDuration: '45 min - 1h',
            distance: '30-40 miles east on I-84',
            notes: [
                'Multnomah Falls parking lot fills early on weekends',
                'Can visit multiple waterfalls: Latourell, Multnomah, Horsetail',
                'Check road conditions - can be icy in January'
            ]
        },
        {
            id: 'trans-3',
            type: 'car',
            from: 'Portland',
            to: 'Seattle',
            date: '2026-01-18',
            departureTime: '14:00',
            estimatedDuration: '3h - 3.5h',
            distance: '175 miles via I-5',
            notes: [
                'Check out by noon, lunch in Portland before departing',
                'Arrive Seattle by early evening'
            ]
        },
        {
            id: 'trans-4',
            type: 'shuttle',
            from: 'SEA Airport',
            to: 'Downtown Seattle',
            estimatedDuration: '30-45 min',
            notes: [
                'Link Light Rail: $3, runs every 6-15 min',
                'Rideshare (Uber/Lyft): $30-50 depending on traffic',
                'Taxi: ~$50-60 flat rate to downtown'
            ],
            bookingUrl: 'https://www.soundtransit.org/ride-with-us/stations/link-light-rail-stations/seatac-airport-station'
        }
    ]
};
const activities = [
    // OPERA
    {
        id: 'opera-daphne-fri',
        name: 'Seattle Opera: Daphne (Opening Night)',
        venue: 'McCaw Hall',
        address: '321 Mercer Street, Seattle',
        description: 'Richard Strauss\'s rarely performed one-act masterpiece. Heidi Stober makes her Seattle Opera debut in the title role. Conductor: David Afkham.',
        category: 'opera',
        city: 'seattle',
        date: '2026-01-16',
        time: '19:30',
        duration: '1h 45m',
        price: 39,
        seniorPrice: 20,
        seniorDiscount: 'Half-price rush tickets for 65+ available 90 min before curtain at box office',
        bookingUrl: 'https://secure.seattleopera.org/8404/8405',
        bookingRequired: true,
        image: 'https://images.unsplash.com/photo-1580809361436-42a7ec204889?w=800',
        notes: [
            'Opening night',
            'Arrive early for best rush ticket selection'
        ],
        tags: [
            'opera',
            'classical',
            'richard strauss'
        ],
        priority: 'must-do'
    },
    {
        id: 'opera-daphne-sun',
        name: 'Seattle Opera: Daphne (Matinee)',
        venue: 'McCaw Hall',
        address: '321 Mercer Street, Seattle',
        description: 'Richard Strauss\'s rarely performed one-act masterpiece. Afternoon matinee performance.',
        category: 'opera',
        city: 'seattle',
        date: '2026-01-18',
        time: '14:00',
        duration: '1h 45m',
        price: 39,
        seniorPrice: 20,
        seniorDiscount: 'Half-price rush tickets for 65+ available 90 min before curtain',
        bookingUrl: 'https://secure.seattleopera.org/8404/8405',
        bookingRequired: true,
        tags: [
            'opera',
            'classical',
            'matinee'
        ],
        priority: 'must-do'
    },
    // SYMPHONY - SEATTLE
    {
        id: 'symphony-cho',
        name: 'Seong-Jin Cho Solo Piano Recital',
        venue: 'Benaroya Hall',
        address: '200 University Street, Seattle',
        description: 'World-renowned pianist performs Bach, Schoenberg, Chopin, and R. Schumann.',
        category: 'symphony',
        city: 'seattle',
        date: '2026-01-20',
        time: '19:30',
        duration: '2h',
        price: 80,
        seniorPrice: 40,
        seniorDiscount: 'Half-price tickets for 62+ at box office starting 6 PM day-of',
        bookingUrl: 'https://www.seattlesymphony.org/en/concerttickets/calendar/2025-2026/25-seong-jin-cho',
        bookingRequired: true,
        image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800',
        tags: [
            'piano',
            'classical',
            'recital'
        ],
        priority: 'must-do'
    },
    {
        id: 'symphony-noone-1',
        name: 'Eimear Noone: GameSymphonic',
        venue: 'Benaroya Hall',
        address: '200 University Street, Seattle',
        description: 'The legendary video game music conductor leads the Seattle Symphony in an evening of iconic gaming soundtracks.',
        category: 'symphony',
        city: 'seattle',
        date: '2026-01-23',
        time: '20:00',
        duration: '2h',
        price: 159,
        seniorPrice: 80,
        seniorDiscount: 'Half-price tickets for 62+ at box office starting 6 PM day-of',
        bookingUrl: 'https://www.seattlesymphony.org/en/concerttickets/calendar/2025-2026/26-gamesymphonic',
        bookingRequired: true,
        tags: [
            'symphony',
            'video games',
            'pop culture'
        ],
        priority: 'should-do'
    },
    {
        id: 'symphony-noone-2',
        name: 'Eimear Noone: GameSymphonic (Night 2)',
        venue: 'Benaroya Hall',
        address: '200 University Street, Seattle',
        description: 'Second night of the video game music celebration.',
        category: 'symphony',
        city: 'seattle',
        date: '2026-01-24',
        time: '20:00',
        duration: '2h',
        price: 159,
        seniorPrice: 80,
        seniorDiscount: 'Half-price tickets for 62+ at box office starting 6 PM day-of',
        bookingUrl: 'https://www.seattlesymphony.org/en/concerttickets/calendar/2025-2026/26-gamesymphonic',
        bookingRequired: true,
        tags: [
            'symphony',
            'video games'
        ],
        priority: 'nice-to-have'
    },
    {
        id: 'symphony-monarchs',
        name: 'National Geographic Live: Chasing Monarchs',
        venue: 'Benaroya Hall',
        address: '200 University Street, Seattle',
        description: 'Nature documentary experience about monarch butterfly migration.',
        category: 'symphony',
        city: 'seattle',
        date: '2026-01-25',
        time: '14:00',
        duration: '1h 30m',
        price: 45,
        bookingUrl: 'https://www.seattlesymphony.org/en/benaroyahall/bh-calendar/2025-2026/25-nat-geo-2',
        bookingRequired: true,
        tags: [
            'nature',
            'documentary',
            'national geographic'
        ],
        priority: 'should-do'
    },
    // SYMPHONY - PORTLAND
    {
        id: 'oregon-symphony-sat',
        name: 'Oregon Symphony: Beethoven\'s Eroica',
        venue: 'Arlene Schnitzer Concert Hall',
        address: '1037 SW Broadway Ave, Portland',
        description: 'Markus Stenz conducts Lili Boulanger, Alban Berg Violin Concerto, and Beethoven Symphony No. 3.',
        category: 'symphony',
        city: 'portland',
        date: '2026-01-17',
        time: '19:30',
        duration: '2h',
        price: 148,
        seniorPrice: 74,
        seniorDiscount: 'Half-price rush for 62+ starting 2 hrs before concert',
        bookingUrl: 'https://www.orsymphony.org/productions/2526/beethovens-eroica',
        bookingRequired: true,
        image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800',
        tags: [
            'symphony',
            'beethoven',
            'classical'
        ],
        priority: 'must-do'
    },
    {
        id: 'oregon-symphony-sun',
        name: 'Oregon Symphony: Beethoven\'s Eroica (Matinee)',
        venue: 'Arlene Schnitzer Concert Hall',
        address: '1037 SW Broadway Ave, Portland',
        description: 'Sunday matinee of the Beethoven program.',
        category: 'symphony',
        city: 'portland',
        date: '2026-01-18',
        time: '14:00',
        duration: '2h',
        price: 148,
        seniorPrice: 74,
        seniorDiscount: 'Half-price rush for 62+ starting 2 hrs before concert',
        bookingUrl: 'https://www.orsymphony.org/productions/2526/beethovens-eroica',
        bookingRequired: true,
        tags: [
            'symphony',
            'beethoven',
            'matinee'
        ],
        priority: 'should-do'
    },
    // ART MUSEUMS - SEATTLE
    {
        id: 'sam-main',
        name: 'Seattle Art Museum (SAM)',
        venue: 'Seattle Art Museum',
        address: '1300 First Avenue, Seattle',
        description: 'Major art museum featuring Ai Weiwei: Water Lilies and contemporary exhibitions. First Thursday FREE, First Friday $5 for seniors.',
        category: 'art',
        city: 'seattle',
        duration: '2-3h',
        price: 25,
        seniorPrice: 22,
        seniorDiscount: '$5 admission on First Friday (Jan 2)',
        bookingUrl: 'https://secure.seattleartmuseum.org',
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800',
        notes: [
            'Wed-Sun 10 AM-5 PM',
            'Thu until 9 PM',
            'Closed Mon-Tue'
        ],
        tags: [
            'art museum',
            'contemporary',
            'ai weiwei'
        ],
        priority: 'must-do'
    },
    {
        id: 'sam-asian',
        name: 'Seattle Asian Art Museum',
        venue: 'Volunteer Park',
        address: '1400 E Prospect St, Seattle',
        description: 'Beautiful museum in Volunteer Park featuring Anila Quayyum Agha: Geometry of Light and Asian art collections.',
        category: 'art',
        city: 'seattle',
        duration: '2h',
        price: 18,
        seniorPrice: 16,
        bookingUrl: 'https://www.seattleartmuseum.org/visit/seattle-asian-art-museum',
        bookingRequired: false,
        notes: [
            'Wed-Sun 10 AM-5 PM',
            'Free parking in Volunteer Park',
            'First Thursday FREE'
        ],
        tags: [
            'asian art',
            'volunteer park'
        ],
        priority: 'should-do'
    },
    {
        id: 'chihuly',
        name: 'Chihuly Garden and Glass',
        venue: 'Seattle Center',
        address: '305 Harrison Street, Seattle',
        description: 'Stunning glass art exhibition by Dale Chihuly. Indoor galleries and outdoor garden.',
        category: 'art',
        city: 'seattle',
        duration: '1.5-2h',
        price: 35,
        seniorPrice: 32,
        bookingUrl: 'https://www.chihulygardenandglass.com/buy-tickets',
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=800',
        notes: [
            'Daily 10 AM-5:30 PM',
            'Live glassblowing demos from 11 AM',
            'Audio tour included'
        ],
        tags: [
            'glass art',
            'chihuly',
            'seattle center'
        ],
        priority: 'must-do'
    },
    {
        id: 'frye',
        name: 'Frye Art Museum',
        venue: 'Frye Art Museum',
        address: '704 Terry Avenue, Seattle',
        description: 'Always FREE art museum on First Hill. Current exhibitions include Jonathan Lasker drawings and contemporary works.',
        category: 'art',
        city: 'seattle',
        duration: '1.5h',
        price: 0,
        seniorPrice: 0,
        bookingUrl: 'https://fryemuseum.org',
        bookingRequired: false,
        notes: [
            'ALWAYS FREE',
            'Wed-Sun 11 AM-5 PM',
            'Thu until 8 PM',
            'Free parking'
        ],
        tags: [
            'free admission',
            'contemporary art'
        ],
        priority: 'should-do'
    },
    {
        id: 'henry',
        name: 'Henry Art Gallery',
        venue: 'University of Washington',
        address: '15th Ave NE and NE 41st St, Seattle',
        description: 'UW campus art museum featuring contemporary exhibitions and James Turrell Skyspace installation.',
        category: 'art',
        city: 'seattle',
        duration: '1.5h',
        price: 10,
        seniorPrice: 8,
        bookingUrl: 'https://henryart.org',
        bookingRequired: false,
        notes: [
            'Thu 10 AM-7 PM',
            'Fri-Sun 10 AM-5 PM',
            'Closed Mon-Wed'
        ],
        tags: [
            'contemporary art',
            'uw campus',
            'turrell'
        ],
        priority: 'nice-to-have'
    },
    {
        id: 'mopop',
        name: 'Museum of Pop Culture (MoPOP)',
        venue: 'Seattle Center',
        address: '325 5th Ave N, Seattle',
        description: 'Music, sci-fi, and pop culture museum. Keith Haring exhibition and Follow the Yellow Brick Road film festival Jan 17-18.',
        category: 'art',
        city: 'seattle',
        duration: '2-3h',
        price: 28,
        seniorPrice: 25,
        seniorDiscount: '65+ discount at box office with ID',
        bookingUrl: 'https://www.mopop.org/tickets',
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?w=800',
        notes: [
            'Daily 10 AM-5 PM',
            'WA residents 15% off with ID'
        ],
        tags: [
            'pop culture',
            'music',
            'keith haring'
        ],
        priority: 'should-do'
    },
    // ART - PORTLAND (see enhanced entry below with Rothko Pavilion)
    // NATURE - SEATTLE
    {
        id: 'kubota',
        name: 'Kubota Garden',
        venue: 'Kubota Garden',
        address: '9817 55th Ave S, Seattle',
        description: 'Beautiful 20-acre Japanese garden. FREE admission year-round. Serene in winter with evergreens and water features.',
        category: 'nature',
        city: 'seattle',
        duration: '1.5h',
        price: 0,
        seniorPrice: 0,
        bookingUrl: 'https://www.kubotagarden.org',
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1553532434-5ab5b6b84993?w=800',
        notes: [
            'Open sunrise to sunset (~7:30 AM-4:30 PM in Jan)',
            'ALWAYS FREE',
            'Open 365 days'
        ],
        tags: [
            'japanese garden',
            'free',
            'peaceful'
        ],
        priority: 'must-do'
    },
    {
        id: 'wildlanterns',
        name: 'WildLanterns at Woodland Park Zoo',
        venue: 'Woodland Park Zoo',
        address: '5500 Phinney Ave N, Seattle',
        description: 'Magical lantern festival through January 18. Thousands of illuminated lanterns creating animal and nature scenes.',
        category: 'nature',
        city: 'seattle',
        date: '2026-01-11',
        time: '16:00',
        duration: '2h',
        price: 40,
        seniorPrice: 24,
        seniorDiscount: '40% off with Holiday Senior Stroll discount',
        bookingUrl: 'https://tickets.zoo.org/events/0197f61b-a37e-4e6e-75c9-6ba761d94ab8',
        bookingRequired: true,
        image: 'https://images.unsplash.com/photo-1578255321055-d88c51e7d239?w=800',
        notes: [
            'Thu-Sun only',
            '4-9 PM, last entry 8:30 PM',
            'Ends January 18!'
        ],
        tags: [
            'lanterns',
            'zoo',
            'winter event',
            'evening'
        ],
        priority: 'should-do'
    },
    {
        id: 'volunteer-park',
        name: 'Volunteer Park & Conservatory',
        venue: 'Volunteer Park',
        address: '1247 15th Ave E, Seattle',
        description: 'Beautiful park with Victorian glass conservatory (tropical plants), water tower views, and connection to Asian Art Museum.',
        category: 'nature',
        city: 'seattle',
        duration: '1.5h',
        price: 0,
        seniorPrice: 0,
        bookingRequired: false,
        notes: [
            'Park open dawn to dusk',
            'Conservatory 10 AM-4 PM, closed Mon',
            'Conservatory is FREE'
        ],
        tags: [
            'park',
            'conservatory',
            'capitol hill'
        ],
        priority: 'should-do'
    },
    // NATURE - PORTLAND
    {
        id: 'portland-japanese',
        name: 'Portland Japanese Garden',
        venue: 'Washington Park',
        address: '611 SW Kingston Ave, Portland',
        description: 'One of the most authentic Japanese gardens outside Japan. Peaceful winter visit with fewer crowds.',
        category: 'nature',
        city: 'portland',
        duration: '2h',
        price: 23,
        seniorPrice: 20,
        bookingUrl: 'https://secure.japanesegarden.org',
        bookingRequired: true,
        image: 'https://images.unsplash.com/photo-1580700998161-61e86c9e5c84?w=800',
        notes: [
            'Wed-Mon 10 AM-3:30 PM',
            'Closed Tuesdays',
            'Book up to 10 days ahead'
        ],
        tags: [
            'japanese garden',
            'washington park',
            'peaceful'
        ],
        priority: 'must-do'
    },
    // SIGHTSEEING - SEATTLE
    {
        id: 'pike-place',
        name: 'Pike Place Market',
        venue: 'Pike Place Market',
        address: '85 Pike St, Seattle',
        description: 'Iconic Seattle market. Fresh flowers, fish throwing, original Starbucks, local crafts and food.',
        category: 'sightseeing',
        city: 'seattle',
        duration: '2-3h',
        price: 0,
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?w=800',
        notes: [
            'Daily 9 AM-6 PM',
            'Less crowded on weekdays',
            'Lots of stairs - some areas not accessible'
        ],
        tags: [
            'market',
            'iconic',
            'food'
        ],
        priority: 'must-do'
    },
    {
        id: 'space-needle',
        name: 'Space Needle',
        venue: 'Seattle Center',
        address: '400 Broad St, Seattle',
        description: 'Seattle\'s iconic landmark. Observation deck with 360° views. Glass floor experience.',
        category: 'sightseeing',
        city: 'seattle',
        duration: '1h',
        price: 40,
        seniorPrice: 37,
        bookingUrl: 'https://www.spaceneedle.com',
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=800',
        notes: [
            'Daily 10 AM-9 PM',
            'Combo with Chihuly saves money',
            'Best at sunset'
        ],
        tags: [
            'landmark',
            'views',
            'seattle center'
        ],
        priority: 'should-do'
    },
    // SIGHTSEEING - PORTLAND
    {
        id: 'powells',
        name: 'Powell\'s City of Books',
        venue: 'Powell\'s Books',
        address: '1005 W Burnside St, Portland',
        description: 'World\'s largest independent bookstore! Spans a city block with over 500,000 books. Get a map!',
        category: 'sightseeing',
        city: 'portland',
        duration: '2-3h',
        price: 0,
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800',
        notes: [
            'Daily 10 AM-9 PM',
            'FREE admission',
            'Rare Book Room closes at 5 PM',
            'Cafe on-site'
        ],
        tags: [
            'bookstore',
            'iconic portland',
            'free'
        ],
        priority: 'must-do'
    },
    // EN ROUTE STOPS
    {
        id: 'tacoma-glass',
        name: 'Museum of Glass (Tacoma)',
        venue: 'Museum of Glass',
        address: '1801 Dock Street, Tacoma',
        description: 'World-class glass art museum. Chihuly Bridge of Glass connects to downtown. Great stop on the way to Portland.',
        category: 'art',
        city: 'tacoma',
        duration: '2h',
        price: 23,
        seniorPrice: 21,
        bookingUrl: 'https://www.museumofglass.org',
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=800',
        notes: [
            'Wed-Sun 10 AM-5 PM',
            'Third Thursday 5-8 PM FREE',
            'Closed Mon-Tue'
        ],
        tags: [
            'glass art',
            'chihuly',
            'tacoma',
            'en route'
        ],
        priority: 'should-do'
    },
    {
        id: 'olympia-capitol',
        name: 'Washington State Capitol',
        venue: 'Washington State Capitol',
        address: '416 Sid Snyder Ave SW, Olympia',
        description: 'Beautiful state capitol building. FREE guided tours. Great stop on the drive to Portland.',
        category: 'sightseeing',
        city: 'olympia',
        duration: '1.5h',
        price: 0,
        bookingRequired: false,
        notes: [
            'Tours Mon-Fri hourly 10 AM-3 PM',
            'Weekend tours 11:30 AM-2:30 PM',
            'FREE'
        ],
        tags: [
            'capitol',
            'history',
            'free',
            'en route'
        ],
        priority: 'nice-to-have'
    },
    // SPECIAL EVENTS - VIOLIN & FILM CONCERTS
    {
        id: 'blade-runner-live',
        name: 'Blade Runner Live in Concert',
        venue: 'Benaroya Hall',
        address: '200 University Street, Seattle',
        description: 'Seattle Symphony performs Vangelis\'s iconic score live while the film plays on the big screen. A stunning audio-visual experience of the sci-fi masterpiece.',
        category: 'symphony',
        city: 'seattle',
        date: '2026-01-17',
        time: '19:30',
        duration: '2h 30m',
        price: 89,
        seniorPrice: 45,
        seniorDiscount: 'Half-price tickets for 62+ at box office starting 6 PM day-of',
        bookingUrl: 'https://www.seattlesymphony.org/en/concerttickets/calendar/2025-2026/',
        bookingRequired: true,
        image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800',
        notes: [
            'Film plays on screen while orchestra performs live',
            'Arrive early for good seats'
        ],
        tags: [
            'film concert',
            'sci-fi',
            'orchestral',
            'vangelis'
        ],
        priority: 'should-do'
    },
    // BAROQUE & CHAMBER MUSIC
    {
        id: 'candlelight-vivaldi',
        name: 'Candlelight: Vivaldi\'s Four Seasons',
        venue: 'The Ruins (Various locations)',
        address: 'Various Seattle locations',
        description: 'Intimate candlelit performance of Vivaldi\'s beloved Four Seasons by a string quartet. Baroque music in a magical atmosphere.',
        category: 'symphony',
        city: 'seattle',
        date: '2026-01-15',
        time: '18:30',
        duration: '1h',
        price: 45,
        seniorPrice: 45,
        bookingUrl: 'https://feverup.com/seattle/candlelight',
        bookingRequired: true,
        notes: [
            'Multiple show times available',
            'Check Fever website for exact venue',
            'Intimate setting'
        ],
        tags: [
            'candlelight',
            'baroque',
            'vivaldi',
            'chamber music',
            'string quartet'
        ],
        priority: 'should-do'
    },
    {
        id: 'candlelight-bach',
        name: 'Candlelight: Bach\'s Best Works',
        venue: 'The Ruins (Various locations)',
        address: 'Various Seattle locations',
        description: 'Experience Bach\'s greatest compositions performed by candlelight in an intimate setting.',
        category: 'symphony',
        city: 'seattle',
        date: '2026-01-22',
        time: '18:30',
        duration: '1h',
        price: 45,
        seniorPrice: 45,
        bookingUrl: 'https://feverup.com/seattle/candlelight',
        bookingRequired: true,
        notes: [
            'Multiple show times available',
            'Perfect for baroque lovers'
        ],
        tags: [
            'candlelight',
            'baroque',
            'bach',
            'chamber music'
        ],
        priority: 'nice-to-have'
    },
    {
        id: 'seattle-chamber-festival',
        name: 'Seattle Chamber Music Winter Festival',
        venue: 'Nordstrom Recital Hall at Benaroya',
        address: '200 University Street, Seattle',
        description: 'Annual winter festival featuring world-class chamber music performances. Multiple concerts over the weekend.',
        category: 'symphony',
        city: 'seattle',
        date: '2026-01-23',
        time: '20:00',
        duration: '2h',
        price: 55,
        seniorPrice: 50,
        bookingUrl: 'https://www.seattlechambermusic.org/winter-festival/',
        bookingRequired: true,
        notes: [
            'Festival runs Jan 23-25',
            'Different programs each night',
            'Intimate recital hall setting'
        ],
        tags: [
            'chamber music',
            'festival',
            'classical'
        ],
        priority: 'should-do'
    },
    {
        id: 'seattle-series-chamber',
        name: 'The Seattle Series: Chamber Concert',
        venue: 'Town Hall Seattle',
        address: '1119 8th Ave, Seattle',
        description: 'Intimate chamber music performance at historic Town Hall. Features local and visiting musicians in an acoustically superb venue.',
        category: 'symphony',
        city: 'seattle',
        date: '2026-01-16',
        time: '19:30',
        duration: '1h 30m',
        price: 35,
        seniorPrice: 30,
        bookingUrl: 'https://townhallseattle.org/',
        bookingRequired: true,
        notes: [
            'Check Town Hall website for specific program',
            'Great acoustics'
        ],
        tags: [
            'chamber music',
            'town hall',
            'classical'
        ],
        priority: 'nice-to-have'
    },
    // PORTLAND SPECIAL EVENTS (Jan 16-18)
    {
        id: 'portland-candlelight-baroque',
        name: 'Candlelight: Baroque by Candlelight',
        venue: 'Various Portland Venues',
        address: 'Portland, OR',
        description: 'Baroque masterpieces performed by candlelight in intimate Portland venues. Features works by Bach, Vivaldi, and Handel.',
        category: 'symphony',
        city: 'portland',
        date: '2026-01-17',
        time: '19:00',
        duration: '1h',
        price: 40,
        seniorPrice: 40,
        bookingUrl: 'https://feverup.com/portland/candlelight',
        bookingRequired: true,
        notes: [
            'Check Fever app for exact venue',
            'Multiple show times available'
        ],
        tags: [
            'candlelight',
            'baroque',
            'portland'
        ],
        priority: 'should-do'
    },
    {
        id: 'fan-expo-portland',
        name: 'FAN EXPO Portland',
        venue: 'Oregon Convention Center',
        address: '777 NE Martin Luther King Jr Blvd, Portland',
        description: 'Major pop culture convention featuring celebrity guests, comics, anime, gaming, and more. Fun people-watching even if not deep into fandoms!',
        category: 'sightseeing',
        city: 'portland',
        date: '2026-01-16',
        time: '10:00',
        duration: '4-6h',
        price: 55,
        seniorPrice: 55,
        bookingUrl: 'https://fanexpohq.com/fanexpoPortland/',
        bookingRequired: false,
        notes: [
            'Runs Jan 16-18',
            'Day passes available',
            'Great for people watching',
            'Food court on-site'
        ],
        tags: [
            'pop culture',
            'convention',
            'entertainment'
        ],
        priority: 'nice-to-have'
    },
    {
        id: 'powells-author-event',
        name: 'Powell\'s Books Author Events',
        venue: 'Powell\'s City of Books',
        address: '1005 W Burnside St, Portland',
        description: 'Powell\'s hosts author readings and signings almost daily. Check their calendar for January events - always FREE!',
        category: 'sightseeing',
        city: 'portland',
        duration: '1h',
        price: 0,
        bookingUrl: 'https://www.powells.com/events',
        bookingRequired: false,
        notes: [
            'Check website for specific authors',
            'FREE admission',
            'Arrive 30 min early for popular authors'
        ],
        tags: [
            'books',
            'authors',
            'free',
            'literary'
        ],
        priority: 'nice-to-have'
    },
    // PORTLAND NATURE
    {
        id: 'multnomah-falls',
        name: 'Multnomah Falls',
        venue: 'Columbia River Gorge',
        address: 'Historic Columbia River Hwy, Bridal Veil, OR',
        description: 'Oregon\'s tallest waterfall at 620 feet. Iconic Benson Bridge offers stunning views. Easy paved path to the bridge, steeper trail to the top.',
        category: 'nature',
        city: 'portland',
        duration: '1-2h',
        price: 0,
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1519176336903-04be5be8d7c4?w=800',
        notes: [
            'Open 9 AM-5 PM in winter',
            'Parking $5 (free with Discover Pass)',
            '30 min drive from Portland',
            'Can be icy in winter - check conditions'
        ],
        tags: [
            'waterfall',
            'nature',
            'columbia gorge',
            'free',
            'scenic'
        ],
        priority: 'must-do'
    },
    {
        id: 'latourell-falls',
        name: 'Latourell Falls',
        venue: 'Columbia River Gorge',
        address: 'Historic Columbia River Hwy, Corbett, OR',
        description: 'Beautiful 249-foot plunge waterfall with easy trail access. Less crowded than Multnomah. Unique yellow lichen on basalt cliffs.',
        category: 'nature',
        city: 'portland',
        duration: '1h',
        price: 0,
        bookingRequired: false,
        notes: [
            'Easy 2.4 mile loop trail',
            'Great for photos',
            'FREE parking',
            '20 min from Portland'
        ],
        tags: [
            'waterfall',
            'nature',
            'hiking',
            'free',
            'columbia gorge'
        ],
        priority: 'should-do'
    },
    {
        id: 'pittock-mansion',
        name: 'Pittock Mansion',
        venue: 'Pittock Mansion',
        address: '3229 NW Pittock Dr, Portland',
        description: '1914 French Renaissance mansion with stunning views of Portland and Mt. Hood. Beautiful grounds even if you don\'t tour inside.',
        category: 'sightseeing',
        city: 'portland',
        duration: '1.5h',
        price: 16,
        seniorPrice: 13,
        bookingUrl: 'https://pittockmansion.org/',
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800',
        notes: [
            'Grounds are FREE',
            'House tours 10 AM-4 PM',
            'Closed Tuesdays',
            'Great city views'
        ],
        tags: [
            'mansion',
            'historic',
            'views',
            'portland'
        ],
        priority: 'should-do'
    },
    {
        id: 'lan-su-garden',
        name: 'Lan Su Chinese Garden - Lunar New Year',
        venue: 'Lan Su Chinese Garden',
        address: '239 NW Everett St, Portland',
        description: 'Authentic Suzhou-style garden celebrating Lunar New Year through Jan 23! Stunning lantern sculptures, zodiac animals light show, and Dragon Dance procession.',
        category: 'nature',
        city: 'portland',
        duration: '1.5h',
        price: 16,
        seniorPrice: 14,
        bookingUrl: 'https://lansugarden.org/',
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
        notes: [
            'Lunar New Year celebration through Jan 23!',
            'Open 10 AM-4 PM',
            'Tea house on-site',
            'Special lantern displays'
        ],
        tags: [
            'garden',
            'chinese',
            'lunar new year',
            'tea',
            'lanterns'
        ],
        priority: 'must-do'
    },
    {
        id: 'horsetail-ponytail-falls',
        name: 'Horsetail & Ponytail Falls',
        venue: 'Columbia River Gorge',
        address: 'Historic Columbia River Hwy, Cascade Locks, OR',
        description: 'Two stunning waterfalls! Horsetail Falls (176 ft) visible from parking lot. Short 0.4 mile hike to Ponytail Falls where you can WALK BEHIND the waterfall through a basalt cave!',
        category: 'nature',
        city: 'portland',
        duration: '1.5h',
        price: 0,
        bookingRequired: false,
        notes: [
            'Horsetail visible from parking - no hike needed!',
            'Walk behind Ponytail Falls',
            'FREE parking',
            '40 min from Portland',
            'Can be slippery in winter'
        ],
        tags: [
            'waterfall',
            'nature',
            'hiking',
            'free',
            'columbia gorge',
            'unique'
        ],
        priority: 'must-do'
    },
    // ADDITIONAL SEATTLE NATURE/GARDENS
    {
        id: 'washington-arboretum',
        name: 'Washington Park Arboretum',
        venue: 'Washington Park Arboretum',
        address: '2300 Arboretum Dr E, Seattle',
        description: 'Beautiful 230-acre botanical garden. Winter garden features witch hazels, camellias, and evergreens. Connected to Japanese Garden.',
        category: 'nature',
        city: 'seattle',
        duration: '2h',
        price: 0,
        bookingRequired: false,
        notes: [
            'Arboretum is FREE',
            'Open dawn to dusk',
            'Waterfront Trail is paved',
            'Winter blooms available'
        ],
        tags: [
            'arboretum',
            'botanical garden',
            'free',
            'walking'
        ],
        priority: 'should-do'
    },
    {
        id: 'seattle-japanese-garden',
        name: 'Seattle Japanese Garden',
        venue: 'Washington Park',
        address: '1075 Lake Washington Blvd E, Seattle',
        description: 'Tranquil 3.5-acre garden within the Arboretum. Winter hours and peaceful atmosphere. Tea garden when open.',
        category: 'nature',
        city: 'seattle',
        duration: '1.5h',
        price: 12,
        seniorPrice: 9,
        bookingUrl: 'https://www.seattlejapanesegarden.org/',
        bookingRequired: false,
        notes: [
            'Winter hours: Wed-Sun 10 AM-3 PM',
            'Closed Mon-Tue',
            'Near Asian Art Museum'
        ],
        tags: [
            'japanese garden',
            'peaceful',
            'winter'
        ],
        priority: 'should-do'
    },
    // ADDITIONAL ART/MUSEUMS
    {
        id: 'nordic-museum',
        name: 'National Nordic Museum',
        venue: 'National Nordic Museum',
        address: '2655 NW Market St, Seattle',
        description: 'Celebrate Nordic heritage with beautiful exhibits on Scandinavian history, art, and culture. Great cafe with Scandinavian treats.',
        category: 'art',
        city: 'seattle',
        duration: '2h',
        price: 20,
        seniorPrice: 18,
        bookingUrl: 'https://nordicmuseum.org/',
        bookingRequired: false,
        notes: [
            'Tue-Sun 10 AM-5 PM',
            'Closed Mondays',
            'Cafe on-site',
            'First Thursday FREE'
        ],
        tags: [
            'nordic',
            'scandinavian',
            'museum',
            'ballard'
        ],
        priority: 'nice-to-have'
    },
    {
        id: 'wing-luke',
        name: 'Wing Luke Museum of Asian Pacific American Experience',
        venue: 'Wing Luke Museum',
        address: '719 S King St, Seattle',
        description: 'Nationally recognized museum in Chinatown-International District. Walking tours and exhibits on Asian American history.',
        category: 'art',
        city: 'seattle',
        duration: '2h',
        price: 17,
        seniorPrice: 14,
        bookingUrl: 'https://www.wingluke.org/',
        bookingRequired: false,
        notes: [
            'Tue-Sun 10 AM-5 PM',
            'Closed Mondays',
            'Historic building tours available',
            'First Thursday FREE'
        ],
        tags: [
            'asian american',
            'history',
            'chinatown',
            'culture'
        ],
        priority: 'nice-to-have'
    },
    // PORTLAND DINING
    {
        id: 'kann-restaurant',
        name: 'Kann Restaurant',
        venue: 'Kann',
        address: '548 SE Ash St, Portland',
        description: '#1 Best Restaurant in Portland 2025! James Beard Award-winning chef Gregory Gourdet serves Haitian-inspired cuisine. Wood-fired cooking, gluten/dairy-free. Try the warm sweet potato bread!',
        category: 'sightseeing',
        city: 'portland',
        duration: '2h',
        price: 85,
        seniorPrice: 85,
        bookingUrl: 'https://resy.com/cities/portland-or/venues/kann',
        bookingRequired: true,
        notes: [
            'Reservations REQUIRED via Resy',
            'Tue-Sun 4pm-close',
            'Haitian-inspired fine dining',
            'Book 2+ weeks ahead'
        ],
        tags: [
            'fine dining',
            'haitian',
            'james beard',
            'special occasion'
        ],
        priority: 'must-do'
    },
    {
        id: 'le-pigeon',
        name: 'Le Pigeon',
        venue: 'Le Pigeon',
        address: '738 E Burnside St, Portland',
        description: 'Multi-James Beard Award winner! Intimate 35-seat restaurant with French-forward tasting menus. Famous foie gras profiteroles since 2006. Chef\'s counter has kitchen views.',
        category: 'sightseeing',
        city: 'portland',
        duration: '2.5h',
        price: 140,
        seniorPrice: 140,
        bookingUrl: 'https://resy.com/cities/pdx/le-pigeon',
        bookingRequired: true,
        notes: [
            '$140 tasting menu (~$200 with wine)',
            'Reservations essential',
            'Mon-Sat 5-10pm, Sun 4-10pm',
            'Credit card required to book'
        ],
        tags: [
            'fine dining',
            'french',
            'tasting menu',
            'james beard'
        ],
        priority: 'should-do'
    },
    {
        id: 'mothers-bistro',
        name: "Mother's Bistro & Bar",
        venue: "Mother's Bistro",
        address: '121 SW 3rd Ave, Portland',
        description: 'Perfect for mother-daughter! Elevated home cooking since 2000. Famous biscuits, pot roast, chicken & dumplings, and daily mac & cheese. Monthly "Mother of the Month" menu.',
        category: 'sightseeing',
        city: 'portland',
        duration: '1.5h',
        price: 35,
        seniorPrice: 35,
        bookingUrl: 'https://www.mothersbistro.com/',
        bookingRequired: true,
        notes: [
            'Reservations recommended',
            'Great for brunch!',
            'Comfort food classics',
            'Inside historic Multnomah Hotel'
        ],
        tags: [
            'brunch',
            'comfort food',
            'mother daughter',
            'southern'
        ],
        priority: 'must-do'
    },
    {
        id: 'screen-door',
        name: 'Screen Door',
        venue: 'Screen Door',
        address: '2337 E Burnside St, Portland',
        description: 'Portland institution! Southern-inspired comfort food. LEGENDARY fried chicken and waffles. Expect weekend waits but worth it.',
        category: 'sightseeing',
        city: 'portland',
        duration: '1.5h',
        price: 30,
        seniorPrice: 30,
        bookingUrl: 'https://screendoorrestaurant.com/',
        bookingRequired: false,
        notes: [
            'Limited reservations',
            'Arrive early weekends',
            'Famous fried chicken & waffles',
            'Pearl District location has shorter waits'
        ],
        tags: [
            'brunch',
            'southern',
            'comfort food',
            'iconic portland'
        ],
        priority: 'should-do'
    },
    {
        id: 'pine-street-market',
        name: 'Pine Street Market',
        venue: 'Pine Street Market',
        address: '126 SW 2nd Ave, Portland',
        description: 'Curated food hall in beautiful 1886 building. Multiple vendors: ramen, Thai, dumplings, Costa Rican, mini donuts. Great when you can\'t decide!',
        category: 'sightseeing',
        city: 'portland',
        duration: '1h',
        price: 20,
        seniorPrice: 20,
        bookingUrl: 'https://www.pinestreetpdx.com/',
        bookingRequired: false,
        notes: [
            'Mon-Sat 11am-9pm',
            'Multiple cuisines',
            'Communal seating',
            'Taproom for local beers'
        ],
        tags: [
            'food hall',
            'casual',
            'variety',
            'old town'
        ],
        priority: 'should-do'
    },
    {
        id: 'jacqueline-portland',
        name: 'Jacqueline',
        venue: 'Jacqueline',
        address: '2500 SE Clinton St, Portland',
        description: 'Pacific Northwest seafood gem. Famous $1 oyster happy hour 5-6pm daily! James Beard certified sustainable. Winter menu: miso butter scallops, mussels in cider.',
        category: 'sightseeing',
        city: 'portland',
        duration: '1.5h',
        price: 55,
        seniorPrice: 55,
        bookingUrl: 'https://resy.com/cities/portland-or/venues/jacqueline',
        bookingRequired: true,
        notes: [
            '$1 oysters 5-6pm!',
            'Reservations via Resy',
            'Sustainable seafood',
            'Arrive 30 min early for happy hour'
        ],
        tags: [
            'seafood',
            'oysters',
            'happy hour',
            'sustainable'
        ],
        priority: 'should-do'
    },
    // Note: Jan 20 is back in Seattle - Seong-Jin Cho recital already scheduled
    {
        id: 'friends-chamber-music',
        name: 'Friends of Chamber Music: Intimate Concert',
        venue: 'Private Residence',
        address: 'Portland, OR (Location provided after booking)',
        description: 'Intimate chamber concert featuring Sylvia Gray (piano) & Stacey Minkoff (viola). House concert format in a private Portland residence. Very special experience!',
        category: 'symphony',
        city: 'portland',
        date: '2026-01-18',
        time: '15:00',
        duration: '1.5h',
        price: 100,
        seniorPrice: 100,
        bookingUrl: 'https://focm.org/',
        bookingRequired: true,
        notes: [
            'Private residence location',
            'Intimate house concert',
            'Address provided after booking',
            'Limited seating'
        ],
        tags: [
            'chamber music',
            'intimate',
            'house concert',
            'piano',
            'viola'
        ],
        priority: 'should-do'
    },
    // PORTLAND ART MUSEUM - ENHANCED
    {
        id: 'portland-art-rothko',
        name: 'Portland Art Museum - NEW Rothko Pavilion',
        venue: 'Portland Art Museum',
        address: '1219 SW Park Ave, Portland',
        description: '$116 million expansion completed Nov 2025! New Mark Rothko Pavilion, Abstract Painting Exhibition, Native American Art Center with 3,500+ works. Van Gogh, Monet, Renoir.',
        category: 'art',
        city: 'portland',
        duration: '3h',
        price: 28,
        seniorPrice: 25,
        bookingUrl: 'https://portlandartmuseum.org',
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800',
        notes: [
            'NEW Rothko Pavilion!',
            'Tue-Sun 10 AM-5 PM',
            'Closed Mondays',
            'Children 17 & under FREE'
        ],
        tags: [
            'art museum',
            'rothko',
            'van gogh',
            'monet',
            'pacific northwest'
        ],
        priority: 'must-do'
    }
];
const getActivitiesByCategory = (category)=>activities.filter((a)=>a.category === category);
const getActivitiesByCity = (city)=>activities.filter((a)=>a.city === city);
const getActivitiesByDate = (date)=>activities.filter((a)=>a.date === date);
const getMustDoActivities = ()=>activities.filter((a)=>a.priority === 'must-do');
}),
"[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivityCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trees$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/trees.js [app-ssr] (ecmascript) <export default as Trees>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/utensils.js [app-ssr] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarPlus$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/calendar-plus.js [app-ssr] (ecmascript) <export default as CalendarPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-ssr] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/ticket.js [app-ssr] (ecmascript) <export default as Ticket>");
'use client';
;
;
;
;
const categoryIcons = {
    opera: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
    symphony: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
    art: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
    nature: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trees$3e$__["Trees"],
    sightseeing: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
    food: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"]
};
const categoryColors = {
    opera: 'border-l-purple-500 bg-purple-50',
    symphony: 'border-l-indigo-500 bg-indigo-50',
    art: 'border-l-pink-500 bg-pink-50',
    nature: 'border-l-green-500 bg-green-50',
    sightseeing: 'border-l-amber-500 bg-amber-50',
    food: 'border-l-orange-500 bg-orange-50',
    travel: 'border-l-blue-500 bg-blue-50',
    accommodation: 'border-l-teal-500 bg-teal-50'
};
const priorityBadges = {
    'must-do': 'bg-red-100 text-red-700',
    'should-do': 'bg-amber-100 text-amber-700',
    'nice-to-have': 'bg-gray-100 text-gray-600'
};
function ActivityCard({ activity, isDragging = false, isScheduled = false, sortableId, onAutoAdd }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging: isSortableDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSortable"])({
        id: sortableId || activity.id
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
        transition
    };
    const Icon = categoryIcons[activity.category] || __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        className: `
        group rounded-lg border-l-4 shadow-sm transition-all cursor-grab active:cursor-grabbing
        ${categoryColors[activity.category] || 'border-l-gray-400 bg-gray-50'}
        ${isDragging || isSortableDragging ? 'opacity-50 shadow-lg scale-105' : 'hover:shadow-md'}
        ${isScheduled ? 'text-xs' : ''}
      `,
        ...attributes,
        ...listeners,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `p-3 ${isScheduled ? 'p-2' : 'p-3'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `shrink-0 p-1.5 rounded-lg bg-white/60 ${isScheduled ? 'p-1' : 'p-1.5'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: `${isScheduled ? 'w-3 h-3' : 'w-4 h-4'} text-gray-600`
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `font-medium text-gray-900 leading-tight ${isScheduled ? 'text-xs' : 'text-sm'}`,
                                            children: activity.name
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                            className: "w-4 h-4 text-gray-300 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-gray-500 flex items-center gap-1 mt-0.5 ${isScheduled ? 'text-[10px]' : 'text-xs'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-3 h-3 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: activity.venue
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                !isScheduled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-600 mt-2 line-clamp-2",
                            children: activity.description
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2 mt-2",
                            children: [
                                activity.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1 px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this),
                                        activity.date,
                                        " ",
                                        activity.time && `@ ${activity.time}`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1 px-1.5 py-0.5 bg-white rounded text-[10px] text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        activity.duration
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                activity.seniorPrice !== undefined && activity.seniorPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1 px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this),
                                        "$",
                                        activity.seniorPrice
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this),
                                activity.price === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1 px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium",
                                    children: "FREE"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this),
                                activity.priority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `px-1.5 py-0.5 rounded text-[10px] font-medium ${priorityBadges[activity.priority]}`,
                                    children: [
                                        activity.priority === 'must-do' && '★ ',
                                        activity.priority.replace('-', ' ')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this),
                        activity.seniorDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 p-1.5 bg-amber-50 rounded text-[10px] text-amber-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Senior:"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this),
                                " ",
                                activity.seniorDiscount
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 161,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mt-2",
                            children: [
                                activity.date && onAutoAdd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        e.preventDefault();
                                        onAutoAdd(activity);
                                    },
                                    className: "inline-flex items-center gap-1 px-2 py-1 bg-emerald-500 text-white rounded text-[10px] font-medium hover:bg-emerald-600 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarPlus$3e$__["CalendarPlus"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this),
                                        "Add to ",
                                        activity.date.slice(5)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this),
                                activity.bookingUrl && activity.bookingRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: activity.bookingUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-[10px] font-medium hover:bg-blue-200 transition-colors",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 192,
                                            columnNumber: 19
                                        }, this),
                                        "Book",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                isScheduled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mt-1",
                    children: [
                        activity.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-gray-500",
                            children: activity.time
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 205,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-gray-400",
                            children: activity.duration
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SortableActivityCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/tree-pine.js [app-ssr] (ecmascript) <export default as TreePine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
'use client';
;
;
;
;
const categoryConfig = {
    opera: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        color: 'text-purple-600',
        bgColor: 'bg-purple-100 border-purple-200'
    },
    symphony: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-100 border-indigo-200'
    },
    art: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        color: 'text-pink-600',
        bgColor: 'bg-pink-100 border-pink-200'
    },
    nature: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        color: 'text-green-600',
        bgColor: 'bg-green-100 border-green-200'
    },
    sightseeing: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
        color: 'text-amber-600',
        bgColor: 'bg-amber-100 border-amber-200'
    }
};
function SortableActivityCard({ id, activity, onRemove, onClick, isScheduled, compact }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSortable"])({
        id
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1
    };
    const config = categoryConfig[activity.category] || categoryConfig.sightseeing;
    const Icon = config.icon;
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: setNodeRef,
            style: style,
            className: `
          group relative flex items-center gap-2 px-3 py-2 rounded-lg border
          ${config.bgColor} hover:shadow-md transition-all
          ${isDragging ? 'shadow-lg ring-2 ring-blue-400' : ''}
        `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ...attributes,
                    ...listeners,
                    className: "flex items-center gap-2 flex-1 min-w-0 cursor-grab",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: `w-4 h-4 shrink-0 ${config.color}`
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium text-sm text-gray-800 truncate",
                                    children: activity.name
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-xs text-gray-500",
                                    children: [
                                        activity.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this),
                                                activity.time
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        activity.price !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this),
                                                activity.price === 0 ? 'Free' : `$${activity.seniorPrice || activity.price}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        activity.priority === 'must-do' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-3 h-3 text-amber-500 fill-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 shrink-0",
                    children: [
                        onClick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onClick();
                            },
                            className: "p-1.5 hover:bg-white/50 rounded transition-colors text-blue-600",
                            title: "View details",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onRemove();
                            },
                            className: "opacity-0 group-hover:opacity-100 p-1 hover:bg-white/50 rounded transition-opacity",
                            title: "Remove from schedule",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    }
    // Full card (for activity pool)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        ...attributes,
        ...listeners,
        className: `
        group relative p-3 rounded-xl border cursor-grab
        ${config.bgColor} hover:shadow-md transition-all
        ${isDragging ? 'shadow-lg ring-2 ring-blue-400' : ''}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-1.5 rounded-lg bg-white/50`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: `w-4 h-4 ${config.color}`
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-gray-800 text-sm leading-tight",
                                children: activity.name
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600 truncate",
                                children: activity.venue
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    activity.priority === 'must-do' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: "w-4 h-4 text-amber-500 fill-amber-500 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1 text-xs text-gray-600",
                children: [
                    activity.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 text-blue-600 font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            "Fixed: ",
                            activity.date,
                            " ",
                            activity.time && `at ${activity.time}`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            activity.duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    activity.duration
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            activity.price !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    activity.price === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-600 font-medium",
                                        children: "Free"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this) : activity.seniorPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "line-through text-gray-400",
                                                children: [
                                                    "$",
                                                    activity.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this),
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-600 font-medium",
                                                children: [
                                                    "$",
                                                    activity.seniorPrice
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this) : `$${activity.price}`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            activity.city
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            activity.bookingUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: activity.bookingUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (e)=>e.stopPropagation(),
                className: "mt-2 flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this),
                    "Book tickets"
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this),
            onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onRemove();
                },
                className: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 hover:bg-white/50 rounded transition-opacity",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-4 h-4 text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
}),
"[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivityDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/ticket.js [app-ssr] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/tree-pine.js [app-ssr] (ecmascript) <export default as TreePine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const categoryConfig = {
    opera: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        color: 'text-purple-600',
        bgColor: 'bg-purple-100'
    },
    symphony: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-100'
    },
    art: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        color: 'text-pink-600',
        bgColor: 'bg-pink-100'
    },
    nature: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        color: 'text-green-600',
        bgColor: 'bg-green-100'
    },
    sightseeing: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
        color: 'text-amber-600',
        bgColor: 'bg-amber-100'
    }
};
function ActivityDetailModal({ activity, onClose }) {
    // Close on escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEscape = (e)=>{
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return ()=>window.removeEventListener('keydown', handleEscape);
    }, [
        onClose
    ]);
    // Prevent body scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = 'hidden';
        return ()=>{
            document.body.style.overflow = 'unset';
        };
    }, []);
    const config = categoryConfig[activity.category] || categoryConfig.sightseeing;
    const Icon = config.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${config.bgColor} p-6 relative`,
                        children: [
                            activity.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: activity.image,
                                        alt: activity.name,
                                        className: "w-full h-full object-cover opacity-30"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-transparent to-white/80"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "absolute top-0 right-0 p-2 hover:bg-white/30 rounded-full transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5 text-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-2 rounded-lg bg-white/70 ${config.color}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0 pr-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-gray-900 leading-tight",
                                                        children: activity.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 mt-1",
                                                        children: activity.venue
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    activity.priority === 'must-do' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-3.5 h-3.5 fill-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            "Must Do"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 overflow-y-auto max-h-[calc(90vh-200px)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mb-6",
                                children: activity.description
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4 mb-6",
                                children: [
                                    activity.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4 text-blue-500 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 uppercase tracking-wide",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-800",
                                                        children: activity.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    activity.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: activity.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    activity.duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4 text-purple-500 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 uppercase tracking-wide",
                                                        children: "Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-800",
                                                        children: activity.duration
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                className: "w-4 h-4 text-emerald-500 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 uppercase tracking-wide",
                                                        children: "Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 17
                                                    }, this),
                                                    activity.price === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-emerald-600",
                                                        children: "FREE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this) : activity.seniorPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "line-through text-gray-400",
                                                                        children: [
                                                                            "$",
                                                                            activity.price
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-emerald-600 ml-1",
                                                                        children: [
                                                                            "$",
                                                                            activity.seniorPrice
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-emerald-600",
                                                                children: "(Senior price)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-800",
                                                        children: [
                                                            "$",
                                                            activity.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-4 h-4 text-red-500 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 uppercase tracking-wide",
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-800 capitalize",
                                                        children: activity.city
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            activity.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 rounded-lg p-3 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-4 h-4 text-gray-400 mt-0.5 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-700",
                                                    children: activity.address
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `https://maps.google.com/?q=${encodeURIComponent(activity.address)}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-xs text-blue-600 hover:underline mt-1 inline-flex items-center gap-1",
                                                    children: [
                                                        "Open in Google Maps",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            activity.seniorDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-amber-50 border border-amber-100 rounded-lg p-3 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-4 h-4 text-amber-500 mt-0.5 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-medium text-amber-700 uppercase tracking-wide",
                                                    children: "Senior Discount"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-amber-800 mt-1",
                                                    children: activity.seniorDiscount
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this),
                            activity.notes && activity.notes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            "Notes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1",
                                        children: activity.notes.map((note, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-gray-600 flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 21
                                                    }, this),
                                                    note
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            activity.tags && activity.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 text-xs text-gray-500 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            "Tags"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: activity.tags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs",
                                                children: tag
                                            }, i, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            activity.bookingUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: activity.bookingUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    activity.bookingRequired ? 'Book Tickets' : 'View Details & Book',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            !activity.bookingUrl && activity.bookingRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-sm text-amber-600 bg-amber-50 p-3 rounded-lg",
                                children: "Booking required - check venue website for tickets"
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DayRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$isWeekend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/isWeekend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/isToday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$SortableActivityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/SortableActivityCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityDetailModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/coffee.js [app-ssr] (ecmascript) <export default as Coffee>");
'use client';
;
;
;
;
;
;
;
;
// Portland trip dates - January 16-18, 2026
const PORTLAND_START = '2026-01-16';
const PORTLAND_END = '2026-01-18';
function DayRow({ date, items, flights, hotelCheckins, hotelCheckouts, getActivity, onRemove }) {
    const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'yyyy-MM-dd');
    const isWeekendDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$isWeekend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWeekend"])(date);
    const isTodayDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isToday"])(date);
    // Check if this is a Portland trip date
    const isPortlandDate = dateStr >= PORTLAND_START && dateStr <= PORTLAND_END;
    const { setNodeRef, isOver } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: `day-${dateStr}`
    });
    const hasContent = items.length > 0 || flights.length > 0 || hotelCheckins.length > 0 || hotelCheckouts.length > 0;
    // State for showing activity detail modal
    const [selectedActivity, setSelectedActivity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Get background color based on date type
    const getRowBgColor = ()=>{
        if (isOver) return 'bg-blue-50';
        if (isTodayDate) return 'bg-amber-50';
        if (isPortlandDate) return 'bg-rose-50/70';
        if (isWeekendDay) return 'bg-slate-100/70';
        return '';
    };
    // Get border color
    const getBorderClass = ()=>{
        if (isTodayDate) return 'border-l-4 border-amber-400';
        if (isPortlandDate) return 'border-l-4 border-rose-400';
        if (isWeekendDay) return 'border-l-4 border-slate-300';
        return 'border-l-4 border-transparent';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: setNodeRef,
                className: `
          flex flex-col sm:flex-row gap-2 sm:gap-4 p-3 sm:p-4 transition-colors min-h-[80px]
          ${getRowBgColor()}
          ${getBorderClass()}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex sm:flex-col items-center sm:items-start gap-2 sm:gap-0 sm:w-24 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
            text-2xl sm:text-3xl font-bold
            ${isTodayDate ? 'text-amber-600' : isPortlandDate ? 'text-rose-600' : isWeekendDay ? 'text-slate-400' : 'text-gray-700'}
          `,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'd')
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex sm:flex-col gap-1 sm:gap-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `
              text-xs font-medium uppercase tracking-wide
              ${isTodayDate ? 'text-amber-600' : isPortlandDate ? 'text-rose-500' : 'text-gray-500'}
            `,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'EEE')
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 hidden sm:block",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'MMM')
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1 sm:mt-1",
                                children: [
                                    isTodayDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] bg-amber-500 text-white px-1.5 py-0.5 rounded-full font-medium",
                                        children: "TODAY"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    isPortlandDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] bg-rose-500 text-white px-1.5 py-0.5 rounded-full font-medium",
                                        children: "PDX"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    isWeekendDay && !isTodayDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] bg-slate-400 text-white px-1.5 py-0.5 rounded-full font-medium flex items-center gap-0.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    !isWeekendDay && !isTodayDate && !isPortlandDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-medium flex items-center gap-0.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            (flights.length > 0 || hotelCheckins.length > 0 || hotelCheckouts.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-2",
                                children: [
                                    flights.map((flight, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: flight.flightNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-600",
                                                    children: [
                                                        flight.from,
                                                        " → ",
                                                        flight.to
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-500 text-xs",
                                                    children: flight.departureTime
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)),
                                    hotelCheckins.map((hotel, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: "Check-in:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: hotel.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, `in-${i}`, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)),
                                    hotelCheckouts.map((hotel, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-800 rounded-lg text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: "Check-out:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: hotel.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, `out-${i}`, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortableContext"], {
                                items: items.map((item)=>`scheduled-${item.activityId}|${dateStr}`),
                                strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        items.map((item)=>{
                                            const activity = getActivity(item.activityId);
                                            if (!activity) return null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$SortableActivityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                id: `scheduled-${item.activityId}|${dateStr}`,
                                                activity: activity,
                                                onRemove: ()=>onRemove(item.activityId, dateStr),
                                                onClick: ()=>setSelectedActivity(activity),
                                                isScheduled: true,
                                                compact: true
                                            }, item.id, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this);
                                        }),
                                        !hasContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-400 text-sm italic py-2",
                                            children: "Drag activities here"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            selectedActivity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityDetailModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                activity: selectedActivity,
                onClose: ()=>setSelectedActivity(null)
            }, void 0, false, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivityPool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
;
;
function ActivityPool({ activityIds, getActivity, onClose, onAutoAdd }) {
    const { setNodeRef, isOver } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: 'activity-pool'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        className: `
        bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden
        ${isOver ? 'ring-2 ring-blue-400 ring-offset-2' : ''}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 border-b border-gray-100 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                    className: "w-4 h-4 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: "Activities"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full",
                                    children: activityIds.length
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-1 hover:bg-gray-200 rounded transition-colors lg:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 max-h-[calc(100vh-350px)] overflow-y-auto scrollbar-thin space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortableContext"], {
                        items: activityIds,
                        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                        children: activityIds.map((id)=>{
                            const activity = getActivity(id);
                            if (!activity) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                activity: activity,
                                sortableId: id,
                                onAutoAdd: onAutoAdd
                            }, id, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    activityIds.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 text-gray-400 text-sm",
                        children: "All activities scheduled!"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TripHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/parseISO.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/differenceInDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
'use client';
;
;
;
function TripHeader({ tripInfo }) {
    const startDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(tripInfo.startDate);
    const endDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(tripInfo.endDate);
    const totalDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInDays"])(endDate, startDate) + 1;
    const daysUntil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInDays"])(startDate, new Date());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white border-b border-gray-100 sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1800px] mx-auto px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: tripInfo.name
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 text-sm text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 19
                                                }, this),
                                                tripInfo.visitor
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 19
                                                }, this),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(startDate, 'MMM d'),
                                                " - ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(endDate, 'MMM d, yyyy')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 19
                                                }, this),
                                                "Seattle & Portland"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: totalDays
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500",
                                        children: "days"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            daysUntil > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-1.5 bg-blue-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-blue-600",
                                        children: daysUntil
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-blue-500 uppercase tracking-wide",
                                        children: "days away"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                                        className: "w-4 h-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium text-gray-700",
                                                children: [
                                                    tripInfo.flights[0]?.from,
                                                    " → ",
                                                    tripInfo.flights[0]?.to
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-500",
                                                children: [
                                                    tripInfo.flights[0]?.flightNumber,
                                                    " · ",
                                                    tripInfo.flights[0]?.confirmation
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TripSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/tree-pine.js [app-ssr] (ecmascript) <export default as TreePine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
'use client';
;
;
;
function TripSummary({ schedule, getActivity, tripInfo }) {
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const scheduledActivities = [];
        let totalCost = 0;
        let seniorSavings = 0;
        const categories = {};
        const cities = {};
        const mustDoScheduled = [];
        const fixedDateActivities = [];
        // Gather all scheduled activities
        Object.values(schedule).forEach((items)=>{
            items.forEach((item)=>{
                const activity = getActivity(item.activityId);
                if (activity) {
                    scheduledActivities.push(activity);
                    // Calculate costs
                    const price = activity.seniorPrice ?? activity.price ?? 0;
                    totalCost += price;
                    if (activity.seniorPrice && activity.price) {
                        seniorSavings += activity.price - activity.seniorPrice;
                    }
                    // Count categories
                    categories[activity.category] = (categories[activity.category] || 0) + 1;
                    // Count cities
                    cities[activity.city] = (cities[activity.city] || 0) + 1;
                    // Track must-do activities
                    if (activity.priority === 'must-do') {
                        mustDoScheduled.push(activity);
                    }
                }
            });
        });
        // Check which fixed-date activities are scheduled
        const allScheduledIds = new Set(scheduledActivities.map((a)=>a.id));
        return {
            scheduledCount: scheduledActivities.length,
            totalCost,
            seniorSavings,
            categories,
            cities,
            mustDoScheduled
        };
    }, [
        schedule,
        getActivity
    ]);
    const categoryIcons = {
        opera: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        symphony: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        art: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        nature: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        sightseeing: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"]
    };
    const categoryColors = {
        opera: 'text-purple-600 bg-purple-100',
        symphony: 'text-indigo-600 bg-indigo-100',
        art: 'text-pink-600 bg-pink-100',
        nature: 'text-green-600 bg-green-100',
        sightseeing: 'text-amber-600 bg-amber-100'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-gray-800 mb-4 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-5 h-5 text-emerald-500"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    "Trip Summary"
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-50 rounded-lg p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-blue-600 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium",
                                        children: "Scheduled"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-blue-700",
                                children: stats.scheduledCount
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-blue-500",
                                children: "activities"
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-emerald-50 rounded-lg p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-emerald-600 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium",
                                        children: "Est. Cost"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-emerald-700",
                                children: [
                                    "$",
                                    stats.totalCost
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-emerald-500",
                                children: "for 2 people"
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-50 rounded-lg p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-amber-600 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium",
                                        children: "Senior Savings"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-amber-700",
                                children: [
                                    "$",
                                    stats.seniorSavings
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-amber-500",
                                children: "saved"
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-purple-50 rounded-lg p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-purple-600 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium",
                                        children: "Must-Do"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-purple-700",
                                children: stats.mustDoScheduled.length
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-purple-500",
                                children: "booked"
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            Object.keys(stats.categories).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xs font-medium text-gray-500 uppercase tracking-wide mb-2",
                        children: "By Category"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: Object.entries(stats.categories).map(([category, count])=>{
                            const Icon = categoryIcons[category] || __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"];
                            const colors = categoryColors[category] || 'text-gray-600 bg-gray-100';
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm ${colors}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 168,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium capitalize",
                                        children: category
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 169,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs opacity-70",
                                        children: [
                                            "(",
                                            count,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 170,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, category, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 164,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this),
            Object.keys(stats.cities).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xs font-medium text-gray-500 uppercase tracking-wide mb-2",
                        children: "By Location"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: Object.entries(stats.cities).map(([city, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm bg-gray-100 text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium capitalize",
                                        children: city
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            "(",
                                            count,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, city, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this),
            stats.scheduledCount === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-6 text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                        className: "w-8 h-8 mx-auto mb-2 text-gray-300"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "No activities scheduled yet"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400",
                        children: "Drag activities from the pool to days"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Coding/mom-seattle-visit/src/components/TripMapWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TripMapWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
'use client';
;
;
// Dynamically import TripMap with SSR disabled
const TripMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full bg-gray-100 rounded-xl flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-sm",
                children: "Loading map..."
            }, void 0, false, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMapWrapper.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMapWrapper.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
function TripMapWrapper({ activities, onActivityClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TripMap, {
        activities: activities,
        onActivityClick: onActivityClick
    }, void 0, false, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMapWrapper.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
}),
"[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransportationCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tram$2d$front$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Train$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/tram-front.js [app-ssr] (ecmascript) <export default as Train>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bus$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/bus.js [app-ssr] (ecmascript) <export default as Bus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/navigation.js [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
'use client';
;
;
const typeIcons = {
    car: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
    train: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tram$2d$front$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Train$3e$__["Train"],
    bus: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bus$3e$__["Bus"],
    shuttle: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bus$3e$__["Bus"],
    rideshare: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
};
const typeColors = {
    car: 'bg-blue-100 text-blue-700 border-blue-200',
    train: 'bg-green-100 text-green-700 border-green-200',
    bus: 'bg-amber-100 text-amber-700 border-amber-200',
    shuttle: 'bg-purple-100 text-purple-700 border-purple-200',
    rideshare: 'bg-pink-100 text-pink-700 border-pink-200'
};
function TransportationCard({ transportation }) {
    if (!transportation || transportation.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-gray-800 mb-4 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                        className: "w-5 h-5 text-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    "Transportation"
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: transportation.map((trans)=>{
                    const Icon = typeIcons[trans.type] || __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"];
                    const colorClass = typeColors[trans.type] || typeColors.car;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-lg border p-4 ${colorClass}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-white/50 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: trans.from
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-current/60",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: trans.to
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this),
                                            trans.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm opacity-75 mt-0.5",
                                                children: [
                                                    trans.date,
                                                    " ",
                                                    trans.departureTime && `at ${trans.departureTime}`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                lineNumber: 58,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4 text-sm mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4 opacity-70"
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: trans.estimatedDuration
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    trans.distance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-4 h-4 opacity-70"
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: trans.distance
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                lineNumber: 74,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                        lineNumber: 72,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this),
                            trans.notes && trans.notes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/30 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-xs font-medium mb-2 opacity-70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, this),
                                            "Notes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1",
                                        children: trans.notes.map((note, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "opacity-50",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 25
                                                    }, this),
                                                    note
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                                lineNumber: 88,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                lineNumber: 81,
                                columnNumber: 17
                            }, this),
                            trans.bookingUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: trans.bookingUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mt-3 inline-flex items-center gap-1.5 text-sm hover:underline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this),
                                    "View transit options"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                                lineNumber: 99,
                                columnNumber: 17
                            }, this)
                        ]
                    }, trans.id, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/Coding/mom-seattle-visit/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/parseISO.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/eachDayOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/data/tripData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$DayRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/DayRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityPool$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$TripHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$TripSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/TripSummary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$TripMapWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/TripMapWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityDetailModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/ActivityDetailModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$TransportationCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/TransportationCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    // Generate all trip days
    const tripDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"].startDate);
        const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"].endDate);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachDayOfInterval"])({
            start,
            end
        });
    }, []);
    // State for scheduled items per day
    const [schedule, setSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const initial = {};
        tripDays.forEach((day)=>{
            initial[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, 'yyyy-MM-dd')] = [];
        });
        return initial;
    });
    // State for unscheduled activities (pool)
    const [unscheduled, setUnscheduled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activities"].map((a)=>a.id));
    // Filter state
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cityFilter, setCityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPool, setShowPool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showMap, setShowMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modal state
    const [selectedActivity, setSelectedActivity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Drag state
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeActivity, setActiveActivity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem('seattle-trip-schedule');
        if (saved) {
            try {
                const { schedule: savedSchedule, unscheduled: savedUnscheduled } = JSON.parse(saved);
                setSchedule(savedSchedule);
                setUnscheduled(savedUnscheduled);
            } catch (e) {
                console.error('Failed to load saved schedule');
            }
        }
    }, []);
    // Save to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem('seattle-trip-schedule', JSON.stringify({
            schedule,
            unscheduled
        }));
    }, [
        schedule,
        unscheduled
    ]);
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 8
        }
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyboardSensor"], {
        coordinateGetter: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortableKeyboardCoordinates"]
    }));
    // Get activity by ID
    const getActivity = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activities"].find((a)=>a.id === id);
    // Filter activities
    const filteredActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return unscheduled.filter((id)=>{
            const activity = getActivity(id);
            if (!activity) return false;
            if (categoryFilter && activity.category !== categoryFilter) return false;
            if (cityFilter && activity.city !== cityFilter) return false;
            return true;
        });
    }, [
        unscheduled,
        categoryFilter,
        cityFilter
    ]);
    // Handle drag start
    const handleDragStart = (event)=>{
        const { active } = event;
        setActiveId(active.id);
        const activityId = active.id.toString().replace('scheduled-', '').split('|')[0];
        setActiveActivity(getActivity(activityId) || null);
    };
    // Handle drag end
    const handleDragEnd = (event)=>{
        const { active, over } = event;
        if (!over) {
            setActiveId(null);
            setActiveActivity(null);
            return;
        }
        const activeIdStr = active.id.toString();
        const overIdStr = over.id.toString();
        const isFromPool = !activeIdStr.startsWith('scheduled-');
        const activityId = isFromPool ? activeIdStr : activeIdStr.replace('scheduled-', '').split('|')[0];
        const isTargetDay = overIdStr.startsWith('day-');
        const targetDate = isTargetDay ? overIdStr.replace('day-', '') : overIdStr.startsWith('scheduled-') ? overIdStr.split('|')[1] : null;
        if (targetDate) {
            if (isFromPool) {
                setUnscheduled((prev)=>prev.filter((id)=>id !== activityId));
            } else {
                const sourceDate = activeIdStr.split('|')[1];
                if (sourceDate !== targetDate) {
                    setSchedule((prev)=>({
                            ...prev,
                            [sourceDate]: prev[sourceDate].filter((item)=>item.activityId !== activityId)
                        }));
                }
            }
            setSchedule((prev)=>{
                const existing = prev[targetDate] || [];
                const alreadyExists = existing.some((item)=>item.activityId === activityId);
                if (alreadyExists) return prev;
                const newItem = {
                    id: `${activityId}-${targetDate}`,
                    activityId,
                    date: targetDate
                };
                return {
                    ...prev,
                    [targetDate]: [
                        ...existing,
                        newItem
                    ]
                };
            });
        } else if (overIdStr === 'activity-pool' && !isFromPool) {
            const sourceDate = activeIdStr.split('|')[1];
            setSchedule((prev)=>({
                    ...prev,
                    [sourceDate]: prev[sourceDate].filter((item)=>item.activityId !== activityId)
                }));
            setUnscheduled((prev)=>[
                    ...prev,
                    activityId
                ]);
        }
        setActiveId(null);
        setActiveActivity(null);
    };
    // Remove from schedule
    const removeFromSchedule = (activityId, date)=>{
        setSchedule((prev)=>({
                ...prev,
                [date]: prev[date].filter((item)=>item.activityId !== activityId)
            }));
        setUnscheduled((prev)=>[
                ...prev,
                activityId
            ]);
    };
    // Auto-add single activity to its date
    const autoAddActivity = (activity)=>{
        if (!activity.date) return;
        const targetDate = activity.date;
        const existing = schedule[targetDate] || [];
        // Don't add if already scheduled on that date
        if (existing.some((item)=>item.activityId === activity.id)) return;
        setSchedule((prev)=>({
                ...prev,
                [targetDate]: [
                    ...prev[targetDate] || [],
                    {
                        id: `${activity.id}-${targetDate}`,
                        activityId: activity.id,
                        date: targetDate,
                        startTime: activity.time
                    }
                ]
            }));
        setUnscheduled((prev)=>prev.filter((id)=>id !== activity.id));
    };
    // Auto-schedule
    const autoSchedule = ()=>{
        const newSchedule = {
            ...schedule
        };
        const toRemove = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activities"].forEach((activity)=>{
            if (!unscheduled.includes(activity.id)) return;
            if (activity.date) {
                const existing = newSchedule[activity.date] || [];
                if (!existing.some((item)=>item.activityId === activity.id)) {
                    newSchedule[activity.date] = [
                        ...existing,
                        {
                            id: `${activity.id}-${activity.date}`,
                            activityId: activity.id,
                            date: activity.date,
                            startTime: activity.time
                        }
                    ];
                    toRemove.push(activity.id);
                }
            }
        });
        setSchedule(newSchedule);
        setUnscheduled((prev)=>prev.filter((id)=>!toRemove.includes(id)));
    };
    // Reset schedule
    const resetSchedule = ()=>{
        const empty = {};
        tripDays.forEach((day)=>{
            empty[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, 'yyyy-MM-dd')] = [];
        });
        setSchedule(empty);
        setUnscheduled(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activities"].map((a)=>a.id));
        localStorage.removeItem('seattle-trip-schedule');
    };
    // Get special items for a day
    const getFlightsForDay = (date)=>__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"].flights.filter((f)=>f.date === date);
    const getHotelCheckIn = (date)=>__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"].hotels.filter((h)=>h.checkIn === date);
    const getHotelCheckOut = (date)=>__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"].hotels.filter((h)=>h.checkOut === date);
    // Categories
    const categories = [
        {
            id: 'opera',
            label: 'Opera',
            color: 'bg-purple-100 text-purple-700 border-purple-200'
        },
        {
            id: 'symphony',
            label: 'Symphony',
            color: 'bg-indigo-100 text-indigo-700 border-indigo-200'
        },
        {
            id: 'art',
            label: 'Art',
            color: 'bg-pink-100 text-pink-700 border-pink-200'
        },
        {
            id: 'nature',
            label: 'Nature',
            color: 'bg-green-100 text-green-700 border-green-200'
        },
        {
            id: 'sightseeing',
            label: 'Sightseeing',
            color: 'bg-amber-100 text-amber-700 border-amber-200'
        }
    ];
    const cities = [
        {
            id: 'seattle',
            label: 'Seattle'
        },
        {
            id: 'portland',
            label: 'Portland'
        },
        {
            id: 'tacoma',
            label: 'Tacoma'
        }
    ];
    // Group days by week for display
    const weeks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const result = [];
        let currentWeek = [];
        tripDays.forEach((day, index)=>{
            currentWeek.push(day);
            // Start new week on Sunday or at end
            if (day.getDay() === 6 || index === tripDays.length - 1) {
                result.push(currentWeek);
                currentWeek = [];
            }
        });
        return result;
    }, [
        tripDays
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndContext"], {
        sensors: sensors,
        collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closestCenter"],
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$TripHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    tripInfo: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"]
                }, void 0, false, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-7xl mx-auto px-3 sm:px-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowPool(!showPool),
                                    className: `shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${showPool ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border border-gray-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Activities"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-white/20 px-1.5 rounded text-xs",
                                            children: unscheduled.length
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: autoSchedule,
                                    className: "shrink-0 flex items-center gap-2 px-3 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Auto-Schedule"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: resetSchedule,
                                    className: "shrink-0 flex items-center gap-2 px-3 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors",
                                    title: "Reset schedule",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowMap(!showMap),
                                    className: `shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${showMap ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`,
                                    title: "Toggle map",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Map"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-6 w-px bg-gray-200 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this),
                                categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCategoryFilter(categoryFilter === cat.id ? null : cat.id),
                                        className: `shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${categoryFilter === cat.id ? cat.color + ' ring-2 ring-offset-1 ring-gray-300' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`,
                                        children: cat.label
                                    }, cat.id, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row gap-4",
                            children: [
                                showPool && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:w-80 shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:sticky lg:top-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityPool$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            activityIds: filteredActivities,
                                            getActivity: getActivity,
                                            onClose: ()=>setShowPool(false),
                                            onAutoAdd: autoAddActivity
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: weeks.map((week, weekIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-4 py-2 bg-gray-50 border-b border-gray-100",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-gray-600",
                                                                children: [
                                                                    "Week ",
                                                                    weekIndex + 1,
                                                                    ": ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(week[0], 'MMM d'),
                                                                    " - ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(week[week.length - 1], 'MMM d')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "divide-y divide-gray-100",
                                                            children: week.map((day)=>{
                                                                const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, 'yyyy-MM-dd');
                                                                const daySchedule = schedule[dateStr] || [];
                                                                const flights = getFlightsForDay(dateStr);
                                                                const hotelCheckins = getHotelCheckIn(dateStr);
                                                                const hotelCheckouts = getHotelCheckOut(dateStr);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$DayRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    date: day,
                                                                    items: daySchedule,
                                                                    flights: flights,
                                                                    hotelCheckins: hotelCheckins,
                                                                    hotelCheckouts: hotelCheckouts,
                                                                    getActivity: getActivity,
                                                                    onRemove: removeFromSchedule
                                                                }, dateStr, false, {
                                                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, weekIndex, true, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$TripSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    schedule: schedule,
                                                    getActivity: getActivity,
                                                    tripInfo: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"]
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"].transportation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$TransportationCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    transportation: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"].transportation
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this),
                showMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-40 lg:relative lg:inset-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/50 lg:hidden",
                            onClick: ()=>setShowMap(false)
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                            lineNumber: 455,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-0 top-0 bottom-0 w-full max-w-lg lg:max-w-none lg:relative lg:w-full h-full lg:h-[600px] bg-white shadow-xl lg:shadow-none lg:rounded-xl lg:mt-4 lg:mx-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-b lg:hidden flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800",
                                            children: "Trip Map"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 463,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowMap(false),
                                            className: "p-2 hover:bg-gray-100 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                lineNumber: 468,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[calc(100%-60px)] lg:h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$TripMapWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        activities: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activities"],
                                        onActivityClick: (activity)=>{
                                            setSelectedActivity(activity);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                            lineNumber: 461,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                    lineNumber: 453,
                    columnNumber: 11
                }, this),
                selectedActivity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityDetailModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    activity: selectedActivity,
                    onClose: ()=>setSelectedActivity(null)
                }, void 0, false, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                    lineNumber: 485,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragOverlay"], {
                    children: activeActivity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "opacity-90 max-w-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            activity: activeActivity,
                            isDragging: true
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                            lineNumber: 495,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                        lineNumber: 494,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                    lineNumber: 492,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
            lineNumber: 320,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
        lineNumber: 314,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05f899f1._.js.map
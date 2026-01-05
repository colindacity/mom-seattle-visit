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
        bookingUrl: 'https://www.seattleopera.org/performances-events',
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
        bookingUrl: 'https://www.seattleopera.org/performances-events',
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
        bookingUrl: 'https://www.seattlesymphony.org',
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
        name: 'Eimear Noone: Video Game Music',
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
        bookingUrl: 'https://www.seattlesymphony.org',
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
        name: 'Eimear Noone: Video Game Music (Night 2)',
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
        bookingUrl: 'https://www.seattlesymphony.org',
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
        time: '19:30',
        duration: '1h 30m',
        price: 45,
        bookingUrl: 'https://www.seattlesymphony.org',
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
        bookingUrl: 'https://www.orsymphony.org/calendar',
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
        bookingUrl: 'https://www.orsymphony.org/calendar',
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
        bookingUrl: 'https://www.seattleartmuseum.org',
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
        bookingUrl: 'https://www.chihulygardenandglass.com',
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
    // ART - PORTLAND
    {
        id: 'portland-art',
        name: 'Portland Art Museum',
        venue: 'Portland Art Museum',
        address: '1219 SW Park Ave, Portland',
        description: 'Pacific Northwest\'s oldest art museum. Abstract painting exhibition and Black Art galleries.',
        category: 'art',
        city: 'portland',
        duration: '2-3h',
        price: 28,
        seniorPrice: 25,
        bookingUrl: 'https://portlandartmuseum.org',
        bookingRequired: false,
        image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800',
        notes: [
            'Tue-Sun 10 AM-5 PM',
            'Closed Mondays',
            'Children 17 and under FREE'
        ],
        tags: [
            'art museum',
            'pacific northwest'
        ],
        priority: 'must-do'
    },
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
        bookingUrl: 'https://zoo.org/wildlanterns',
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
        bookingUrl: 'https://japanesegarden.org',
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
function ActivityCard({ activity, isDragging = false, isScheduled = false, sortableId }) {
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
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 95,
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
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                            className: "w-4 h-4 text-gray-300 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-gray-500 flex items-center gap-1 mt-0.5 ${isScheduled ? 'text-[10px]' : 'text-xs'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-3 h-3 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: activity.venue
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                !isScheduled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-600 mt-2 line-clamp-2",
                            children: activity.description
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 117,
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
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this),
                                        activity.date,
                                        " ",
                                        activity.time && `@ ${activity.time}`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1 px-1.5 py-0.5 bg-white rounded text-[10px] text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        activity.duration
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                activity.seniorPrice !== undefined && activity.seniorPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1 px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this),
                                        "$",
                                        activity.seniorPrice
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this),
                                activity.price === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1 px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium",
                                    children: "FREE"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 143,
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
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        activity.seniorDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 p-1.5 bg-amber-50 rounded text-[10px] text-amber-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Senior:"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this),
                                " ",
                                activity.seniorDiscount
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 158,
                            columnNumber: 15
                        }, this),
                        activity.bookingUrl && activity.bookingRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: activity.bookingUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "mt-2 inline-flex items-center gap-1 text-[10px] text-blue-600 hover:text-blue-800",
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this),
                                "Book tickets",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    className: "w-2.5 h-2.5"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 165,
                            columnNumber: 15
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
                            lineNumber: 184,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-gray-400",
                            children: activity.duration
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
                    lineNumber: 182,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
"[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlightCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
'use client';
;
;
function FlightCard({ flight }) {
    const isArrival = flight.type === 'arrival';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
      rounded-lg p-2.5 border-l-4
      ${isArrival ? 'bg-green-50 border-l-green-500' : 'bg-blue-50 border-l-blue-500'}
    `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                    className: `w-4 h-4 ${isArrival ? 'text-green-600 rotate-90' : 'text-blue-600 -rotate-90'}`
                }, void 0, false, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-medium text-gray-900",
                            children: [
                                flight.flightNumber,
                                " · ",
                                flight.from,
                                " → ",
                                flight.to
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-[10px] text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        isArrival ? `Arrives ${flight.arrivalTime}` : `Departs ${flight.departureTime}`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: flight.confirmation
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HotelCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/log-in.js [app-ssr] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
'use client';
;
;
function HotelCard({ hotel, type }) {
    const isCheckIn = type === 'checkin';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
      rounded-lg p-2.5 border-l-4
      ${isCheckIn ? 'bg-teal-50 border-l-teal-500' : 'bg-gray-50 border-l-gray-400'}
    `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                isCheckIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                    className: "w-4 h-4 text-teal-600"
                }, void 0, false, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                    className: "w-4 h-4 text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-medium text-gray-900",
                            children: [
                                isCheckIn ? 'Check In' : 'Check Out',
                                ": ",
                                hotel.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-[10px] text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        isCheckIn ? hotel.checkInTime : hotel.checkOutTime
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: hotel.address
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DayColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/isToday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$isWeekend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/date-fns/isWeekend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/ActivityCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$FlightCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/FlightCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$HotelCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/HotelCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
'use client';
;
;
;
;
;
;
;
;
function DayColumn({ date, items, flights, hotelCheckins, hotelCheckouts, getActivity }) {
    const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'yyyy-MM-dd');
    const { setNodeRef, isOver } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: `day-${dateStr}`
    });
    const isPortlandDay = dateStr >= '2026-01-16' && dateStr <= '2026-01-18';
    const isWeekendDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$isWeekend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWeekend"])(date);
    // Create sortable IDs for scheduled items
    const sortableIds = items.map((item)=>`scheduled-${item.activityId}|${dateStr}`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        className: `
        rounded-xl border overflow-hidden transition-all min-h-[400px]
        ${isOver ? 'ring-2 ring-blue-400 bg-blue-50 border-blue-200' : 'bg-white border-gray-100'}
        ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isToday"])(date) ? 'ring-2 ring-amber-400' : ''}
        ${isPortlandDay ? 'bg-orange-50/50' : ''}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        px-3 py-2 border-b
        ${isWeekendDay ? 'bg-gray-100' : 'bg-gray-50'}
        ${isPortlandDay ? 'bg-orange-100 border-orange-200' : 'border-gray-100'}
      `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-xs font-medium uppercase tracking-wide ${isWeekendDay ? 'text-gray-600' : 'text-gray-400'}`,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'EEE')
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-bold text-gray-900",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'd')
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        isPortlandDay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-medium text-orange-600 bg-orange-200 px-1.5 py-0.5 rounded",
                            children: "Portland"
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 space-y-2",
                children: [
                    flights.map((flight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$FlightCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            flight: flight
                        }, flight.id, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)),
                    hotelCheckins.map((hotel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$HotelCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            hotel: hotel,
                            type: "checkin"
                        }, `checkin-${hotel.id}`, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortableContext"], {
                        items: sortableIds,
                        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                        children: items.map((item)=>{
                            const activity = getActivity(item.activityId);
                            if (!activity) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                activity: activity,
                                sortableId: `scheduled-${item.activityId}|${dateStr}`,
                                isScheduled: true
                            }, item.id, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    hotelCheckouts.map((hotel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$HotelCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            hotel: hotel,
                            type: "checkout"
                        }, `checkout-${hotel.id}`, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)),
                    items.length === 0 && flights.length === 0 && hotelCheckins.length === 0 && hotelCheckouts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
            border-2 border-dashed rounded-lg p-4 text-center transition-colors
            ${isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-200'}
          `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: `w-5 h-5 mx-auto mb-1 ${isOver ? 'text-blue-400' : 'text-gray-300'}`
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-xs ${isOver ? 'text-blue-500' : 'text-gray-400'}`,
                                children: "Drop here"
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
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
'use client';
;
;
;
;
;
function ActivityPool({ activityIds, getActivity }) {
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
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: "Activities"
                                }, void 0, false, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full",
                            children: activityIds.length
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                lineNumber: 27,
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
                                sortableId: id
                            }, id, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    activityIds.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 text-gray-400 text-sm",
                        children: "All activities scheduled!"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx",
        lineNumber: 20,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$DayColumn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/DayColumn.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityPool$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/ActivityPool.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$TripHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/TripHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
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
    // Drag state
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeActivity, setActiveActivity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Week view state
    const [weekStart, setWeekStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const visibleDays = tripDays.slice(weekStart, weekStart + 7);
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
        // Find the activity being dragged
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
        // Extract activity ID and source info
        const isFromPool = !activeIdStr.startsWith('scheduled-');
        const activityId = isFromPool ? activeIdStr : activeIdStr.replace('scheduled-', '').split('|')[0];
        // Determine target
        const isTargetDay = overIdStr.startsWith('day-');
        const targetDate = isTargetDay ? overIdStr.replace('day-', '') : overIdStr.startsWith('scheduled-') ? overIdStr.split('|')[1] : null;
        if (targetDate) {
            // Remove from pool if coming from there
            if (isFromPool) {
                setUnscheduled((prev)=>prev.filter((id)=>id !== activityId));
            } else {
                // Remove from previous day
                const sourceDate = activeIdStr.split('|')[1];
                if (sourceDate !== targetDate) {
                    setSchedule((prev)=>({
                            ...prev,
                            [sourceDate]: prev[sourceDate].filter((item)=>item.activityId !== activityId)
                        }));
                }
            }
            // Add to target day
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
            // Moving back to pool
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
    // Auto-schedule suggestions
    const autoSchedule = ()=>{
        const newSchedule = {
            ...schedule
        };
        const toRemove = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activities"].forEach((activity)=>{
            if (!unscheduled.includes(activity.id)) return;
            // If activity has a specific date, schedule it there
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
    };
    // Get special items for a day (flights, hotels)
    const getFlightsForDay = (date)=>__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"].flights.filter((f)=>f.date === date);
    const getHotelCheckIn = (date)=>__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"].hotels.filter((h)=>h.checkIn === date);
    const getHotelCheckOut = (date)=>__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$data$2f$tripData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripInfo"].hotels.filter((h)=>h.checkOut === date);
    // Categories for filtering
    const categories = [
        {
            id: 'opera',
            label: 'Opera',
            color: 'bg-purple-100 text-purple-700'
        },
        {
            id: 'symphony',
            label: 'Symphony',
            color: 'bg-indigo-100 text-indigo-700'
        },
        {
            id: 'art',
            label: 'Art',
            color: 'bg-pink-100 text-pink-700'
        },
        {
            id: 'nature',
            label: 'Nature',
            color: 'bg-green-100 text-green-700'
        },
        {
            id: 'sightseeing',
            label: 'Sightseeing',
            color: 'bg-amber-100 text-amber-700'
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
                    lineNumber: 257,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-[1800px] mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-80 shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-4 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-xl shadow-sm border border-gray-100 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm font-medium text-gray-700 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Filters"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5 mb-3",
                                                    children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCategoryFilter(categoryFilter === cat.id ? null : cat.id),
                                                            className: `px-2.5 py-1 rounded-full text-xs font-medium transition-all ${categoryFilter === cat.id ? cat.color + ' ring-2 ring-offset-1 ring-gray-300' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                            children: cat.label
                                                        }, cat.id, false, {
                                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5",
                                                    children: cities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCityFilter(cityFilter === city.id ? null : city.id),
                                                            className: `px-2.5 py-1 rounded-full text-xs font-medium transition-all ${cityFilter === city.id ? 'bg-blue-100 text-blue-700 ring-2 ring-offset-1 ring-blue-300' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                            children: city.label
                                                        }, city.id, false, {
                                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: autoSchedule,
                                                    className: "flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Auto-Schedule"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: resetSchedule,
                                                    className: "flex items-center justify-center gap-2 px-3 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityPool$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            activityIds: filteredActivities,
                                            getActivity: getActivity
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setWeekStart(Math.max(0, weekStart - 7)),
                                                disabled: weekStart === 0,
                                                className: "p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-gray-600",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(visibleDays[0], 'MMM d'),
                                                    " - ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(visibleDays[visibleDays.length - 1], 'MMM d, yyyy')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setWeekStart(Math.min(tripDays.length - 7, weekStart + 7)),
                                                disabled: weekStart >= tripDays.length - 7,
                                                className: "p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-7 gap-3",
                                        children: visibleDays.map((day)=>{
                                            const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, 'yyyy-MM-dd');
                                            const daySchedule = schedule[dateStr] || [];
                                            const flights = getFlightsForDay(dateStr);
                                            const hotelCheckins = getHotelCheckIn(dateStr);
                                            const hotelCheckouts = getHotelCheckOut(dateStr);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$DayColumn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                date: day,
                                                items: daySchedule,
                                                flights: flights,
                                                hotelCheckins: hotelCheckins,
                                                hotelCheckouts: hotelCheckouts,
                                                getActivity: getActivity
                                            }, dateStr, false, {
                                                fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragOverlay"], {
                    children: activeActivity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "opacity-90",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$src$2f$components$2f$ActivityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            activity: activeActivity,
                            isDragging: true
                        }, void 0, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                            lineNumber: 388,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                        lineNumber: 387,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Coding/mom-seattle-visit/src/app/page.tsx",
        lineNumber: 250,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__66ae13ca._.js.map
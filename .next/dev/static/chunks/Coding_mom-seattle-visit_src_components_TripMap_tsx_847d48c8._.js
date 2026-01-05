(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TripMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/react-leaflet/lib/Polyline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Coding/mom-seattle-visit/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Location coordinates for cities
const cityCoordinates = {
    seattle: [
        47.6062,
        -122.3321
    ],
    portland: [
        45.5152,
        -122.6784
    ],
    tacoma: [
        47.2529,
        -122.4443
    ],
    olympia: [
        47.0379,
        -122.9007
    ]
};
// Activity venue coordinates (approximate)
const venueCoordinates = {
    // Seattle venues
    'McCaw Hall': [
        47.6246,
        -122.3512
    ],
    'Benaroya Hall': [
        47.6090,
        -122.3386
    ],
    'Seattle Art Museum': [
        47.6074,
        -122.3387
    ],
    'Seattle Asian Art Museum': [
        47.6305,
        -122.3145
    ],
    'Chihuly Garden and Glass': [
        47.6206,
        -122.3505
    ],
    'Frye Art Museum': [
        47.6083,
        -122.3239
    ],
    'Henry Art Gallery': [
        47.6567,
        -122.3109
    ],
    'Museum of Pop Culture (MoPOP)': [
        47.6215,
        -122.3481
    ],
    'Kubota Garden': [
        47.5127,
        -122.2695
    ],
    'Woodland Park Zoo': [
        47.6686,
        -122.3536
    ],
    'Volunteer Park': [
        47.6305,
        -122.3145
    ],
    'Pike Place Market': [
        47.6097,
        -122.3422
    ],
    'Space Needle': [
        47.6205,
        -122.3493
    ],
    'Washington Park Arboretum': [
        47.6392,
        -122.2970
    ],
    'Seattle Japanese Garden': [
        47.6367,
        -122.2970
    ],
    'National Nordic Museum': [
        47.6724,
        -122.3835
    ],
    'Wing Luke Museum': [
        47.5988,
        -122.3227
    ],
    'Town Hall Seattle': [
        47.6075,
        -122.3321
    ],
    // Portland venues
    'Portland Art Museum': [
        45.5159,
        -122.6836
    ],
    'Portland Japanese Garden': [
        45.5190,
        -122.7082
    ],
    "Powell's City of Books": [
        45.5230,
        -122.6818
    ],
    'Oregon Convention Center': [
        45.5285,
        -122.6620
    ],
    'Lan Su Chinese Garden': [
        45.5256,
        -122.6729
    ],
    'Pittock Mansion': [
        45.5254,
        -122.7164
    ],
    'Arlene Schnitzer Concert Hall': [
        45.5176,
        -122.6832
    ],
    'Kimpton Riverplace Hotel': [
        45.5060,
        -122.6720
    ],
    // Nature
    'Multnomah Falls': [
        45.5762,
        -122.1158
    ],
    'Latourell Falls': [
        45.5363,
        -122.2177
    ],
    // Tacoma
    'Museum of Glass': [
        47.2455,
        -122.4308
    ],
    // Olympia
    'Washington State Capitol': [
        47.0354,
        -122.9062
    ]
};
// Custom marker icon
const createMarkerIcon = (color)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: 'custom-marker',
        html: `<div style="
      background: ${color};
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    "></div>`,
        iconSize: [
            24,
            24
        ],
        iconAnchor: [
            12,
            12
        ]
    });
};
// Category colors
const categoryColors = {
    opera: '#9333ea',
    symphony: '#4f46e5',
    art: '#ec4899',
    nature: '#22c55e',
    sightseeing: '#f59e0b',
    food: '#ef4444',
    travel: '#3b82f6'
};
// Component to set map view
function MapController({ center, zoom }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    map.setView(center, zoom);
    return null;
}
_s(MapController, "cX187cvZ2hODbkaiLn05gMk1sCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = MapController;
function TripMap({ activities, onActivityClick }) {
    _s1();
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Get unique locations from activities
    const markers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TripMap.useMemo[markers]": ()=>{
            const seen = new Set();
            return activities.map({
                "TripMap.useMemo[markers]": (activity)=>{
                    const coords = venueCoordinates[activity.venue] || cityCoordinates[activity.city];
                    if (!coords) return null;
                    // Avoid duplicate markers for same venue
                    const key = `${coords[0]},${coords[1]}`;
                    if (seen.has(key)) return null;
                    seen.add(key);
                    return {
                        activity,
                        coords,
                        color: categoryColors[activity.category] || '#6b7280'
                    };
                }
            }["TripMap.useMemo[markers]"]).filter(Boolean);
        }
    }["TripMap.useMemo[markers]"], [
        activities
    ]);
    // Route between cities (Seattle -> Portland)
    const routeCoords = [
        cityCoordinates.seattle,
        cityCoordinates.tacoma,
        cityCoordinates.olympia,
        cityCoordinates.portland
    ];
    // Calculate center based on all markers
    const center = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TripMap.useMemo[center]": ()=>{
            if (selectedCity && cityCoordinates[selectedCity]) {
                return cityCoordinates[selectedCity];
            }
            // Default to center between Seattle and Portland
            return [
                46.5607,
                -122.5
            ];
        }
    }["TripMap.useMemo[center]"], [
        selectedCity
    ]);
    const zoom = selectedCity ? 12 : 8;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full rounded-xl overflow-hidden shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 left-3 z-[1000] flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedCity(null),
                        className: `px-3 py-1.5 rounded-full text-xs font-medium shadow-md transition-all ${!selectedCity ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    Object.keys(cityCoordinates).map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedCity(selectedCity === city ? null : city),
                            className: `px-3 py-1.5 rounded-full text-xs font-medium shadow-md transition-all capitalize ${selectedCity === city ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                            children: city
                        }, city, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                center: center,
                zoom: zoom,
                className: "h-full w-full",
                scrollWheelZoom: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapController, {
                        center: center,
                        zoom: zoom
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                        positions: routeCoords,
                        color: "#3b82f6",
                        weight: 3,
                        opacity: 0.6,
                        dashArray: "10,10"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    markers.map(({ activity, coords, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                            position: coords,
                            icon: createMarkerIcon(color),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                className: "custom-popup",
                                maxWidth: 280,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-900 text-sm mb-1",
                                            children: activity.name
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600 mb-2",
                                            children: activity.venue
                                        }, void 0, false, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 text-xs text-gray-500 mb-2",
                                            children: [
                                                activity.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 23
                                                        }, this),
                                                        activity.time
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 21
                                                }, this),
                                                activity.price !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 23
                                                        }, this),
                                                        activity.price === 0 ? 'Free' : `$${activity.seniorPrice || activity.price}`
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this),
                                                activity.priority === 'must-do' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1 text-amber-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            className: "w-3 h-3 fill-amber-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Must Do"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                onActivityClick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onActivityClick(activity),
                                                    className: "flex-1 text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors",
                                                    children: "View Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 21
                                                }, this),
                                                activity.bookingUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: activity.bookingUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex items-center gap-1 text-xs text-blue-600 hover:underline px-2 py-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Book"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        }, activity.id, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)),
                    Object.entries(cityCoordinates).map(([city, coords])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                            position: coords,
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                                className: 'city-marker',
                                html: `<div style="
                background: #1f2937;
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 11px;
                font-weight: 600;
                white-space: nowrap;
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
              ">${city.charAt(0).toUpperCase() + city.slice(1)}</div>`,
                                iconSize: [
                                    60,
                                    20
                                ],
                                iconAnchor: [
                                    30,
                                    10
                                ]
                            })
                        }, `city-${city}`, false, {
                            fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 right-3 z-[1000] bg-white rounded-lg shadow-md p-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-medium text-gray-700 mb-1",
                        children: "Categories"
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-1",
                        children: Object.entries(categoryColors).slice(0, 5).map(([category, color])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full",
                                        style: {
                                            background: color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$mom$2d$seattle$2d$visit$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-600 capitalize",
                                        children: category
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, category, true, {
                                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s1(TripMap, "/XFaaAnfBWHqJ2GnKirh4gLvxFY=");
_c1 = TripMap;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapController");
__turbopack_context__.k.register(_c1, "TripMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Coding/mom-seattle-visit/src/components/TripMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Coding_mom-seattle-visit_src_components_TripMap_tsx_847d48c8._.js.map
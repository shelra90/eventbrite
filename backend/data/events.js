const events = [
        {
        Id :1,
        CategoryName:"Food&Drink",
        EventName:"2023 Asbury Park Vegan Food Festival",
        Date:"May 20, 2023;11am-5pm EDT",
        Description:"The Asbury Park Vegan Food Festival is a two-day celebration that features yummy vegan and plant-based meals from local chefs, as well as vegan products, plant-based fashion, live music and good times. All welcome!",
        Image:'/events_images/asburyPark.png',
        Location:"Bradley Park 101-199 5th Ave Asbury Park, NJ 07712",
        StartingPrice:20,
        EndingPrice:50
        },
        
        {
        Id :2,
        CategoryName:"Food&Drink",
        EventName:"2023 Taste of Spring",
        Date:"Friday, April 14 · 5:30 - 9pm EDT",
        Description:"Mayor Raymond A. Giacobbe, the Rahway City Council, and the City of Rahway’s Special Improvement District invite you to get your taste buds ready for our premier Restaurant Tasting Event, happening in Downtown Rahway.", 
        Image:"/events_images/TasteOfSpring.png",
        Location:"Rahway Recreation Center 275 East Milton Avenue Rahway, NJ 07065",
        Price:35
        },
        
    {
        Id :3,
        CategoryName:"Food&Drink",
        EventName:"Jersey City Craft Beer Fest",
        Date: "Friday, May 5 6:30 - 10pm EDT",
        Description: "The Ferry terminal at Liberty State Park will be hosting an eclectic local variety of superbly fermented beer and cider in all styles combining the best elements of a Beer Garden with the staggering array of choices found only at a Craft Beer Festival. Guests will enjoy craft beer samples for the entire evening paired with live entertainment, Food and Interactive Games",
        Image: "/events_images/jerseycity_craft_beer_fest.png",
        Location: "Liberty State Park Ferry Terminal 1 Audrey Zapp Drive Jersey City, NJ 07305",
        StartingPrice: 15,
        EndingPrice: 60
    },
    
    {
        Id :4,
        CategoryName:"Food&Drink",
        EventName: "Midnight Market",
        Date: "Friday, May 5 · 6:30 - 11:59pm EDT",
        Description: "Midnight Market is an exciting take on the classic night market scene. We are excited to return to Jersey City at a new venue in the Mural Arts District",
        Image:"/events_images/MidnightMarket.png",
        Location: "MAD JC 227 Coles Street Jersey City, NJ 07310",
        StartingPrice: 10,
        EndingPrice: 25
    },
    
        {
        Id :5,
        CategoryName:"Food&Drink",
        EventName:"Asbury Park Restaurant Tour",
        Date:"Sunday, April 23, 2023; 12-4pm EDT",
        Description: "Hosted by the Asbury Park Chamber of Commerce, this event features small bites, samplings and demos at restaurants, lounges, cafes, juice bars, and other uniquely Asbury Park locations. Foodies will be treated to some of the classic restaurant pioneers of Asbury Park as well as recent newcomers to the blooming Asbury Park culinary landscape",
        Image: "/events_images/asburyParkRestaurantTour.png",
        Location:"Asbury Park 104 Grand Avenue Asbury Park, NJ 07712",
        Price: 50
        },
        
        {
        Id :6,
        CategoryName: "Music",
        EventName:"Live Band 80's Night",
        Date:"April 29 · 7pm - April 30 · 12am EDT",
        Description:"All the greatest hits! Come sing and dance all night to songs of the 80s!",
        Image:"/events_images/80's Night.png",
        Location:"Big Shots Restaurant & Lounge 780 U.S. 1 Woodbridge Township, NJ 08830",
        StartingPrice: 5,
        EndingPrice: 10
        },
        
    {
        Id :7,
        CategoryName: "Music",
        EventName: "Bayville Fest VII",
        Date: "Starts on Saturday, June 24 · 12pm EDT",
        Description: "The Bayville Music Festival has been around since 2016, and has grown to become New Jersey’s only Reggae Rock festival. Hosted by NJ’s own native band - Green Knuckle Material, this year’s festival will be one to remember.What started as a DIY backyard show has now evolved into an event you won’t want to miss with the biggest lineup in the Reggae Rock scene yet.Bayville VII will be moving from the backyard to a beautiful local bayside venue called B2 Bistro & Bar. Along with some great music, you’ll also enjoy majestic views of Barnegat Bay, amazing food and drinks, a full service Tiki Bar, and for those that opt for our VIP package - access to a beautiful in-ground pool",
        Image: "/events_images/bayville_Fest.png",
        Location: "B2 Bistro + Bar 125 Bayview Avenue Berkeley Township, NJ 08721",
        StartingPrice: 50,
        EndingPrice: 100
    },
    
    {
        Id :8,
        CategoryName: "Music",
        EventName: "Live Band EMO Night w/ Feeling Emo",
        Date: "April 22 · 7pm - April 23 · 1am EDT",
        Description:"Emo rock music covers of bands such as Taking Back Sunday, Fall Out Boy, Paramore, Jimmy Eat World, My Chemical Romance, The Used, & MANY MORE!Wear your favorite band Tee, or come as yourself!",
        Image:"/events_images/emo_night.png",
        Location:"Big Shots Restaurant & Lounge 780 U.S. 1 Woodbridge Township, NJ 08830",
        StartingPrice: 5,
        EndingPrice: 20
    },
    
    {
        Id :9,
        CategoryName: "Music",
        EventName:"Klubs and Kocktails with the NBA Nupes",
        Date:"Sunday, April 16 · 5 - 8pm EDT",
        Description:"Enjoy an evening of good fun and great drinks with the NBA Nupes! Swing on by and enjoy the party!",
        Image:"/events_images/klubs_kocktails.png",
        Location:"Topgolf 1013 U.S. 1 Edison, NJ 08817",
        Price: 70
    },
    
    {
        Id :10,
        CategoryName: "Music",
        EventName: "WrestleShow NJ",
        Date:"Saturday, May 20 · 10am - 4pm EDT",
        Description: "New Jersey’s Hottest New Wrestling Convention",
        Image:"/events_images/wrestle_show.png",
        Location: "Middletown Sports Complex 214 Harmony Road Middletown Township, NJ 07748",
        Price: 15,
    },
    
        
        {
        Id :11,
        CategoryName: "Music",
        EventName:"Country Night - Live DJ & Line Dance Instructor",
        Date:"April 21 · 8pm - April 22 · 2am EDT",
        Description:"Country Night - Live DJ & Line Dance Instructor!Sing & dance to a whole night of country hits! 1 Party 2 FLOORS ALL THE BEST COUNTRY HITS.",
        Image:"/events_images/countryNight.png",
        Location:"Big Shots Restaurant & Lounge 780 U.S. 1 Woodbridge Township, NJ 08830",
        StartingPrice:20,
        EndingPrice:50
        },
        
        {
        Id :12,
        CategoryName: "Music",
        EventName:"Gypsy: A Celebration of the music of Stevie Nicks and Fleetwood Mac",
        Date:"Saturday, April 22 · 8 - 11pm EDT",
        Description:"GYPSY faithfully recreates ’Stevie Nicks' live show and the music of Fleetwood Mac with striking accuracy. Diane Lutz gives a stunning performance as Stevie Nicks with spot-on vocals and visuals that magically capture Nicks’ stage presence.psy performs the greatest hits from Stevie Nicks and Fleetwood Mac, including: Stand Back, Rhiannon, Gold Dust Woman, Don’t Stop, Stop Dragging My Heart Around, Silver Springs and so many more! Your audience will be on their feet, singing along to all the hits.", 
        Image:"/events_images/GypsyMusicFestival.png",
        Location:"Rosen Performing Arts Center 1 Pike Drive Wayne, NJ 07470",
        Price:40
        },
        
        {
        Id :13,
        CategoryName:"Sports&Fitness",
        EventName:"Yoga with Alpacas",
        Date:"Thursday, May 18 · 6:30 - 7:30pm EDT",
        Description: "Is this a dream? Yoga WITH alpacas?! Making every animal-lover's dream a reality! Join us for a fun experience - featuring a very special outdoor yoga class surrounded by LIVE alpacas! Grab your yoga mats, and join our inspiring instructor to zen out in a grassy pasture with your fellow yogis surrounded by our friendly, fuzzy & endlessly curious alpacas!",
        Image:"/events_images/YogaWithAlpacas.png",
        Location:"Morning Glori Farm 131 Navy Lane Evesham Township, NJ 08053",
        StartingPrice:25,
        EndingPrice:70
        },
        
        
        {
        Id :14,
        CategoryName:"Sports&Fitness",
        EventName:"2023 PBA Players Championship presented by Snickers Finals",
        Date:"Sunday, May 14 · 1 - 3pm EDT",
        Description: "The PBA Players Championship may just be the most anticipated event of the year for the athletes and fans — as it marks the PBA’s long-awaited homecoming to Bowlero North Brunswick. The final major champion of 2023 will have to emerge from the 12-player bracket finals, airing in entirety on FS1 and FOX.",
        Image:"/events_images/PBAPlayerChampionship.png",
        Location:"Bowlero North Brunswick 1 Carolier Lane North Brunswick Township, NJ 08902",
        StartingPrice:20,
        EndingPrice:30
        },
       
        {
        Id :15,
        CategoryName:"Sports&Fitness",
        EventName: "Great Swamp Sundays Group Bike Ride",
        Date: "April 16 Sun, 9:00 AM - 12:00 PM EDT ",
        Description:"Join Trek Stirling every third Sunday of the month on beginner/intermediate level group road rides around the Great Swamp Wildlife Refuge, a popular area for local riders with scenic farmlands and wildlife all around to appreciate. We appreciate our local riders and want to provide them with a friendly and consistent group ride",
        Image:"/events_images/great_swamp.png",
        Location:"Trek Bicycle Stirling 393 Main Avenue Long Hill, NJ 07980",
        Price:"Free",
        },
        ]
    
        module.exports = events
        

const events = [
    {
        id: 1,
        title: "Wuthering Rights",
        img: "https://preview.ibb.co/h42tr7/thought_catalog_470985_unsplash.jpg",
        day: 'Wednesday',
        date: "August 1, 2018",
        time: "17:00",
        description: "Next level twee lo-fi vape lumbersexual four loko thundercats sriracha food truck. La croix mumblecore freegan before they sold out post-ironic. Man braid af kogi four loko, tumeric shaman portland tumblr hexagon pour-over slow-carb pabst. Selvage quinoa umami, four dollar toast celiac tote bag edison bulb subway tile unicorn.",
        artist: ["Michael Ronson"],
        entry: 'free',
        category: "Hump Day Readings",
    },
    {
        id: 2,
        title: "Breakbeatin' vol.10",
        img: "https://image.ibb.co/ffocJn/lucas_gallone_105527_unsplash.jpg",
        day: 'Friday',
        date: "August 3, 2018",
        time: "21:00",
        description: "Irure quis farm-to-table raw denim normcore neutra four loko fingerstache synth chambray knausgaard eu lomo et est. Scenester four loko jean shorts cronut kinfolk excepteur. Banh mi art party hell of occupy pork belly. Authentic chambray disrupt gochujang quinoa vegan. Tumeric locavore ennui, godard put a bird on it before they sold out trust fund semiotics.",
        artist : ["Levine", "Espo", "Lerom"],
        entry: 6,
        category: "Deserved Friday Party"
    },
    {
        id: 3,
        title: "Indie Blabber vol.17",
        img: "https://image.ibb.co/bzd8r7/oskar_wimmerman_284681_unsplash.jpg",
        day: 'Saturday',
        date: "August 4, 2018",
        time: "21:00",
        description: "Copper mug kinfolk pariatur disrupt retro seitan activated charcoal nisi fixie. In succulents mumblecore selvage, blog crucifix in 3 wolf moon non offal fingerstache aliqua pok pok fashion axe. Bushwick fixie et vinyl. Aute sunt vinyl, keffiyeh chillwave selvage veniam vexillologist cliche laborum.",
        artist : ["The Wognots", "For the Galaxy"],
        entry: 6,
        category: "Saturday Night Concert"
    },
    {
        id: 4,
        title: "Photography Workshop",
        img: "https://image.ibb.co/czJMTn/dariusz_sankowski_57167_unsplash.jpg",
        day: 'Sunday',
        date: "August 5, 2018",
        time: "17:00",
        description: "Retro chambray wayfarers heirloom, distillery messenger bag gentrify deep v blue bottle 3 wolf moon pop-up meditation seitan everyday carry leggings. Activated charcoal butcher chartreuse echo park, umami knausgaard vape tacos etsy irony pour-over locavore chia. Tofu kickstarter lo-fi, intelligentsia tbh adaptogen knausgaard next level. Before they sold out actually scenester paleo chia cold-pressed cliche man braid.",
        artist: ["Michael Ronson"],
        entry: 'free',
        category: "Sunday Talk & Learn Session",
    },
    {
        id: 5,
        title: "Art or Anxiety",
        img: "https://image.ibb.co/hN8o8n/priscilla_du_preez_607182_unsplash.jpg",
        day: 'Wednesday',
        date: "August 8, 2018",
        time: "17:00",
        description: "Blog try-hard pok pok kitsch sustainable vexillologist, brunch waistcoat YOLO freegan poutine. Narwhal try-hard 90's tattooed normcore bushwick. Glossier live-edge fashion axe readymade, seitan synth fingerstache kitsch direct trade. Actually waistcoat williamsburg hoodie authentic jean shorts church-key ramps meggings 90's salvia mumblecore.",
        artist: ["Maria Kovaleva"],
        entry: 'free',
        category: "Hump Day Readings",
    },
    {   
        id: 6,
        title: "Breakbeating' vol.11",
        img: "https://preview.ibb.co/d1jbdn/photo_1506485777791_e120681573dd.jpg",
        day: 'Friday',
        date: "August 10, 2018",
        time: "21:00",
        description: "Umami cred pariatur, keytar nulla nostrud roof party plaid meggings distillery lo-fi ullamco. Excepteur ut cloud bread, sed typewriter synth meggings brunch slow-carb aliquip next level commodo. Lo-fi subway tile gastropub, swag drinking vinegar shaman gentrify photo booth enamel pin poke post-ironic leggings hoodie echo park. Chambray biodiesel pop-up, ullamco flannel prism raclette cronut yr. Blue bottle godard fam activated charcoal. Fixie letterpress adaptogen lomo commodo.",
        artist : ["Just Married", "Gillian Gallace", "Jim Renegade"],
        entry: 6,
        category: "Deserved Friday Party"
    },
    {   
        id: 7,
        title: "Indie Blabber vol.18",
        img: "https://image.ibb.co/fTznjS/jesse_darland_250069_unsplash.jpg",
        day: 'Saturday',
        date: "August 11, 2018",
        time: "21:00",
        description: "3 wolf moon helvetica gentrify, aesthetic hella officia man braid thundercats viral forage lomo eiusmod. Incididunt small batch twee shoreditch, ex gentrify copper mug ullamco gluten-free locavore migas edison bulb vape mixtape kombucha. Brunch eu edison bulb, mumblecore roof party seitan glossier authentic. 90's kickstarter woke artisan activated charcoal in helvetica +1 butcher qui esse yr synth skateboard.",
        artist : ["Alone on the Hill", "Coasts", "The Purists"],
        entry: 6,
        category: "Saturday Night Concert"
    },
    {
        id: 8,
        title: "Network & Chill with Web devs",
        img: "https://preview.ibb.co/kAjTPS/goran_ivos_343495_unsplash.jpg",
        day: 'Sunday',
        date: "August 12, 2018",
        time: "17:00",
        description: "Excepteur sint leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment anim id est laborum.",
        artist: ["Michael Ronson"],
        entry: 'free',
        category: "Sunday Talk & Learn Session",
    },
    {
        id: 9,
        title: "First Aid in Himalayas",
        img: "https://image.ibb.co/iu9njS/swapnil_vithaldas_397603_unsplash.jpg",
        day: 'Wednesday',
        date: "August 15, 2018",
        time: "17:00",
        description: "Hoodie freegan, hammock cred letterpress minim drinking vinegar fixie. Sed whatever polaroid pickled swag plaid. Cronut cloud bread offal, velit art party etsy nulla mollit selvage. Copper mug tofu cupidatat art party. Edison bulb pariatur occupy lomo sriracha.",
        artist: ["Janine Brodin"],
        entry: 'free',
        category: "Hump Day Readings",
    },
    {   
        id: 10,
        title: "Anniversary Night",
        img: "https://image.ibb.co/mt7yw7/neonbrand_350122_unsplash.jpg",
        day: 'Friday',
        date: "August 17, 2018",
        time: "21:00",
        description: "Umami 90's pitchfork deep v. Tattooed mixtape sint, sed aliqua twee woke sunt blue bottle leggings letterpress. Schlitz VHS velit aesthetic chicharrones vice wayfarers proident hexagon whatever sunt. Pork belly coloring book shabby chic, wolf locavore raw denim photo booth narwhal XOXO banh mi lyft voluptate elit yuccie. Mlkshk chillwave taxidermy williamsburg kombucha. Yuccie distillery lorem consectetur, jean shorts 8-bit scenester iceland.",
        artist : ["Resident Neville", "Alaskan", "Verronnie"],
        entry: 6,
        category: "Deserved Friday Party"
    },
    {   
        id: 11,
        title: "Indie Blabber vol.19",
        img: "https://preview.ibb.co/j4AUES/greyson_joralemon_299984_unsplash.jpg",
        day: 'Saturday',
        date: "August 18, 2018",
        time: "21:00",
        description: "Taxidermy hashtag proident vice. Kitsch waistcoat before they sold out, incididunt tote bag vape shoreditch poke adaptogen. Twee occupy ramps letterpress occaecat sustainable iPhone laborum pariatur four loko. Et gochujang thundercats portland lyft fanny pack. Minim organic single-origin coffee fam lo-fi. Coloring book laboris everyday carry lo-fi tempor gluten-free yr vinyl. Ethical incididunt prism.",
        artist : ["Springster", "For a Friend", "Miles and the Sharks"],
        entry: 6,
        category: "Saturday Night Concert"
    },
    {
        id: 12,
        title: "South America Travel",
        img: "https://image.ibb.co/bWnOPS/ronald_cuyan_434484_unsplash.jpg",
        day: 'Sunday',
        date: "August 19, 2018",
        time: "17:00",
        description: "Tote bag photo booth pork belly id poke non aute pug dolor copper mug dolore. Subway tile lorem actually farm-to-table. Tacos before they sold out la croix et 8-bit in distillery, cronut pok pok try-hard incididunt brunch woke. Tumeric ipsum salvia, culpa irony glossier iPhone laboris skateboard cillum. Lyft laborum lorem, trust fund vape pour-over occupy flexitarian id.",
        artist: ["Michael Ronson"],
        entry: 'free',
        category: "Sunday Talk & Learn Session",
    },
    {
        id: 13,
        title: "Lame Poetry",
        img: "https://preview.ibb.co/c7ktPS/david_klein_452056_unsplash.jpg",
        day: 'Wednesday',
        date: "August 22, 2018",
        time: "17:00",
        description: "Church-key nisi blue bottle, plaid ethical cardigan humblebrag magna mlkshk incididunt fam. Kinfolk vice church-key tbh air plant pok pok velit woke ipsum consectetur forage meggings. Minim food truck chartreuse, reprehenderit dolore lyft gastropub banh mi mixtape swag selfies wolf sunt pug. Tbh everyday carry umami iPhone. Aute officia shabby chic banjo hammock trust fund tofu mlkshk kogi before they sold out celiac mumblecore. Minim unicorn truffaut helvetica blue bottle tofu intelligentsia raclette aliqua 8-bit church-key next level sint.",
        artist: ["Phillip Decavour"],
        entry: 'free',
        category: "Hump Day Readings",
    },
    {   
        id: 14,
        title: "Breakbeatin' vol.12",
        img: "https://preview.ibb.co/c2U9yn/dalibor_bosnjakovic_187135_unsplash.jpg",
        day: 'Friday',
        date: "August 24, 2018",
        time: "21:00",
        description: "Est master everyday carry laborum sed aesthetic taxidermy messenger bag snackwave YOLO listicle roof party fashion axe. Gastropub cronut fixie, sartorial craft beer 8-bit scenester beard man braid veniam kitsch ad meggings copper mug iPhone. Gastropub blog ullamco humblebrag live-edge. Tacos tousled brooklyn ex disrupt culpa ad twee normcore flexitarian vegan shabby chic celiac. Wayfarers neutra tacos semiotics normcore vape deserunt in dolore austin banh mi af vegan butcher church-key. Sustainable ethical hashtag vinyl cronut portland. Ea raclette eiusmod est, small batch salvia magna pariatur vinyl.",
        artist : ["Zest&Broken", "Liam Savitski", "Riggatone"],
        entry: 6,
        category: "Deserved Friday Party"
    },
    {   
        id: 15,
        title: "Indie Blabber vol.20",
        img: "https://image.ibb.co/mmj3PS/anthony_delanoix_15928_unsplash.jpg",
        day: 'Saturday',
        date: "August 25, 2018",
        time: "21:00",
        description: "Aesthetic poke nisi proident single-origin coffee voluptate you probably haven't heard of them. Sartorial incididunt ugh gochujang thundercats tilde succulents glossier flannel adipisicing deserunt. Unicorn tempor cold-pressed shoreditch meggings tilde ut beard dreamcatcher hoodie, pickled vegan quis sint deserunt. Enim palo santo dreamcatcher dolore, vexillologist hella vegan post-ironic ugh paleo. Dolore occaecat lomo dolor, duis nostrud knausgaard magna ut.",
        artist : ["The Elephants", "Distressed Youth", "This is a Predator"],
        entry: 6,
        category: "Saturday Night Concert"
    },
    {
        id: 16,
        title: "Eko Bloggers Meetup",
        img: "https://preview.ibb.co/jYbpyn/christian_wiediger_538637_unsplash.jpg",
        day: 'Sunday',
        date: "August 26, 2018",
        time: "17:00",
        description: "Mumblecore occupy ethical williamsburg esse pop-up. Beard in literally, ea bitters tumblr lo-fi hella DIY microdosing kitsch meh aliqua. Waistcoat chicharrones art party beard direct trade. Vexillologist typewriter 8-bit messenger bag, waistcoat austin ut hell of cray cliche slow-carb semiotics brunch crucifix. Marfa adaptogen elit, in everyday carry lorem irure 90's keytar pop-up ut bushwick. Ennui readymade pork belly la croix, in cupidatat id.",
        artist: ["Michael Ronson"],
        entry: 'free',
        category: "Sunday Talk & Learn Session",
    },
    {
        id: 17,
        title: "Biography of a Revolutionary",
        img: "https://preview.ibb.co/bxo8r7/anthony_tran_378336_unsplash.jpg",
        day: 'Wednesday',
        date: "August 29, 2018",
        time: "17:00",
        description: "Woke adipisicing, ugh cliche esse eu. Man bun snackwave subway tile meh wolf, williamsburg austin fanny pack schlitz. Schlitz pour-over iceland, 90's biodiesel umami velit blog. Consectetur cardigan godard truffaut before they sold out forage austin ipsum narwhal, polaroid nulla banjo in stumptown selvage. Incididunt whatever in humblebrag, direct trade enamel pin blog cliche pickled deserunt try-hard wayfarers culpa kickstarter esse.",
        artist: ["Lilly White"],
        entry: 'free',
        category: "Hump Day Readings",
    },
    {   
        id: 18,
        title: "Electronic HyperSonic",
        img: "https://image.ibb.co/ddUv4S/brandon_zack_425780_unsplash.jpg",
        day: 'Friday',
        date: "August 31, 2018",
        time: "21:00",
        description: "Fam kale chips man bun, palo santo pickled dolore cold-pressed drinking vinegar man braid kinfolk flexitarian. Woke meh gluten-free reprehenderit ramps asymmetrical organic swag authentic. Aliqua wolf qui, bicycle rights stumptown gentrify gluten-free succulents cold-pressed brooklyn normcore forage. Fingerstache incididunt franzen, voluptate enamel pin flexitarian forage health goth irure. Pork belly viral keffiyeh fixie venmo flannel disrupt shoreditch qui tousled.",
        artist : ["Stuvjan", "Lady M"],
        entry: 6,
        category: "Deserved Friday Party"
    },
  
];


export default events;
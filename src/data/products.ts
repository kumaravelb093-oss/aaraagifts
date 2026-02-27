export interface Product {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    img: string;
    category: string;
    tag?: string;
    href: string;
}

export const allProducts: Product[] = [
    // Wedding Products
    {
        id: "wed-1",
        title: "Peacock Kumkum Plate",
        subtitle: "Meenakari Enamel Brass Plate",
        description: "A stunning meenakari peacock-themed brass plate featuring twin bowls for Haldi and Kumkum. Hand-painted with vibrant red and green enamel patterns, it adds a touch of royal heritage to any ceremony.",
        img: "/assets/images/products/wedding/peacock-kumkum-plate.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-2",
        title: "Pichwai Brass Plates",
        subtitle: "Hand-painted Divine Artistry",
        description: "Exquisite brass plates featuring traditional Pichwai motifs of Kamdhenu cows and lotus blooms. Each plate is a vibrant piece of Indian folk art, perfect as a sacred keepsake for wedding guests.",
        img: "/assets/images/products/wedding/pichwai-brass-plates.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-3",
        title: "Bespoke Favor Box",
        subtitle: "Personalized Wedding Stationary",
        description: "Elegant maroon-and-gold favor boxes adorned with intricate paisley prints and custom cartoon couple illustrations. A premium way to present sweets, dry fruits, or small tokens of gratitude.",
        img: "/assets/images/products/wedding/wedding-favor-box.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-4",
        title: "Hand-Painted Tiffins",
        subtitle: "Artisan Enamelware Set",
        description: "Traditional stainless steel tiffins transformed into modern masterpieces with hand-painted floral patterns. A unique and functional return gift that combines utility with artisanal charm.",
        img: "/assets/images/products/wedding/hand-painted-tiffin.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-5",
        title: "Jute Hamper Bags",
        subtitle: "Eco-Luxury Gift Totes",
        description: "Sustainable jute tote bags accented with delicate white lace and satin ribbons. These elegant hampers are spacious enough for assorted gifts and carry a message of mindful gifting.",
        img: "/assets/images/products/wedding/jute-hamper-bags.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    { id: "wed-6", title: "Copper Hammered Tumblers", img: "/assets/images/categories/wedding.jpg", category: "Wedding Return Gifts", href: "/collections/wedding" },

    // Women's Day Products
    { id: "wd-4", title: "The Silk Bloom Box", img: "/assets/images/products/womens/w2.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },
    { id: "wd-5", title: "Rose Quartz Wellness Kit", img: "/assets/images/products/womens/w3.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },
    { id: "wd-6", title: "Midnight Jasmine Suite", img: "/assets/images/products/womens/w5.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },
    { id: "wd-1", title: "Botanical Gold Chest", img: "/assets/images/insta/2.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },
    { id: "wd-2", title: "Lavender & Lace Hamper", img: "/assets/images/insta/3.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },
    { id: "wd-3", title: "Organic Tea Crate", img: "/assets/images/insta/4.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },

    // Corporate Products
    { id: "corp-1", title: "Executive Gift Combo", subtitle: "Branded combo set with pen, diary & bottle", img: "/assets/images/corporate/combo1.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-2", title: "Premium Desk Combo", subtitle: "Complete desk essentials gift set", img: "/assets/images/corporate/combo2.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-3", title: "Signature Combo Box", subtitle: "Curated corporate combo package", img: "/assets/images/corporate/combo3.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-4", title: "Deluxe Gift Combo", subtitle: "All-inclusive executive combo set", img: "/assets/images/corporate/combo4.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-5", title: "Classic Leather Journal Set", subtitle: "Premium diary with branded pen", img: "/assets/images/corporate/handbook&pen1.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-6", title: "Executive Notebook Duo", img: "/assets/images/corporate/handbook&pen2.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-9", title: "Compact Notes Set", img: "/assets/images/corporate/handbook&pen5.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-13", title: "CEO Signature Series", img: "/assets/images/corporate/handbook&pen9.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-16", title: "Signature Brass Pen", img: "/assets/images/corporate/pen1.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-18", title: "Thermal Insulated Flask", img: "/assets/images/corporate/flask1.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-19", title: "Corporate Tote Bag", img: "/assets/images/corporate/bag1.jpeg", category: "Corporate Studio", href: "/corporate" },

    // Promotional Products
    {
        id: "promo-1",
        title: "The Vanguard Cinematic Flask Set",
        subtitle: "Matte-finish steel duo with iconic graphics",
        description: "A bold, matte-finish duo inspired by legendary narratives. Perfectly engineered for those who carry the spirit of heroism in their everyday pursuits. Featuring a high-grade insulated flask and matching ceramic mug.",
        img: "/assets/images/promotional/flask-mug.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Cinematic Edition"
    },
    {
        id: "promo-2",
        title: "The Heirloom Footprint Chronicle",
        subtitle: "Artisan wooden keepsake for newborns",
        description: "An artisan-crafted wooden keepsake that immortalizes life's most precious beginnings. A timeless piece of decor that tells the story of an angel's arrival with warmth and elegance. Custom laser-engraved on sustainable birch wood.",
        img: "/assets/images/promotional/baby-keepsake.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Handcrafted"
    },
    {
        id: "promo-3",
        title: "The Healer's Signature Chalice",
        subtitle: "3D sculpted medical tribute mug",
        description: "A meticulously sculpted vessel celebrating the dedication of medical professionals. Featuring lifelike 3D detailing of a lab coat and stethoscope, it stands as a prestigious tribute to those who serve with heart and skill.",
        img: "/assets/images/promotional/doctor-mug.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Professional Series"
    },
    {
        id: "promo-4",
        title: "The Caduceus Desktop Prestige",
        subtitle: "Obsidian & Gold medical desk suite",
        description: "A sophisticated desk accompaniment merging authority with artisanal flair. Crafted in obsidian and gold, this pen stand provides a distinguished home for a professional's most vital tool, accented by the ancient symbol of healing.",
        img: "/assets/images/promotional/pen-stand.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Executive"
    },
    {
        id: "promo-5",
        title: "The Horizon Canvas Delegate Suite",
        subtitle: "Cohesive organic event package",
        description: "A comprehensive ensemble for the modern visionary, featuring high-grade organic canvas and precision-bound stationery. Designed to offer a cohesive and elegant brand experience at every touchpoint, from meetings to retreats.",
        img: "/assets/images/promotional/canvas-set.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Bulk Ready"
    },
    {
        id: "promo-6",
        title: "The Marauder's Bronze Chronicle",
        subtitle: "Artisan bronze-finish pirate talisman",
        description: "A meticulously cast bronze-finished talisman celebrating the spirit of adventure and unyielding resolve. This handcrafted piece serves as a sophisticated tribute to the legendary path of the sea's most celebrated visionary.",
        img: "/assets/images/promotional/luffy-keyring.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Limited Edition"
    },
    {
        id: "promo-7",
        title: "The Sovereign Tuscan Portfolio",
        subtitle: "Top-grain leather executive organizer",
        description: "An exquisite zippered companion crafted from top-grain Tuscan leather, designed for the modern executive who values impeccable organization. Featuring hand-stitched details and dedicated compartments for all your professional essentials.",
        img: "/assets/images/promotional/leather-organizer.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Handcrafted"
    },
    {
        id: "promo-8",
        title: "The Terra Organic Collective",
        subtitle: "Bamboo and organic fabric eco-suite",
        description: "A curated ensemble of nature-first essentials, ranging from organic canvas carryalls to precision-crafted bamboo stationery. This collection embodies the harmony between premium utility and ecological stewardship.",
        img: "/assets/images/promotional/eco-collective.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Ecological"
    },
    {
        id: "promo-9",
        title: "The Persona Bespoke Gallery",
        subtitle: "Custom illustrated professional caricatures",
        description: "A vibrant celebration of individual identity, featuring custom-illustrated caricatures that tell a unique story on high-grade ceramic. Each piece is a personalized masterpiece designed to bring character and joy to every morning ritual.",
        img: "/assets/images/promotional/avatar-mugs.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Personalized"
    },

    // Apparel & T-Shirts
    {
        id: "app-1",
        title: "The Virtuous Onyx Tee",
        subtitle: "Typography of Purpose",
        description: "A statement of character rendered in high-contrast typography against a midnight onyx backdrop. Crafted for those who lead with humility and relentless drive. Made from 100% premium combed cotton.",
        img: "/assets/images/apparel/black-humble-tee.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Motivational"
    },
    {
        id: "app-2",
        title: "The Urban Muse Sandbox Tee",
        subtitle: "Illustrated Streetwear",
        description: "An eclectic blend of street art and modern comfort, featuring a bespoke illustration of the contemporary creator. Its sandy beige hue offers a versatile canvas for bold, artistic expression.",
        img: "/assets/images/apparel/beige-illustrated-tee.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Artistic"
    },
    {
        id: "app-3",
        title: "The Optimist's Sandstone Tee",
        subtitle: "Minimalist Affirmation",
        description: "A subtle yet powerful greeting for the world, combining minimalist 'HI' graphics with a gentle whisper of optimism. The sandstone palette brings a sense of calm and clarity to corporate casuals.",
        img: "/assets/images/apparel/beige-hi-tee.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Minimalist"
    },
    {
        id: "app-4",
        title: "The Roadside Heritage Tee",
        subtitle: "Sage Vintage Narrative",
        description: "A Sage-washed canvas featuring a hauntingly beautiful vintage narrative of the open road. This piece captures the spirit of exploration and the timeless allure of heritage routes.",
        img: "/assets/images/apparel/green-raven-tee.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Vintage"
    },
    {
        id: "app-5",
        title: "The Polar Precision Performance Hoodie",
        subtitle: "Technical Arctic Layer",
        description: "A masterclass in technical aesthetics, featuring stark polar white fabric accented by precision black details and high-visibility orange hardware. Engineered for a sleek, modern silhouette with moisture-wicking technology.",
        img: "/assets/images/apparel/white-tech-hoodie.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Technical Edition"
    },
    {
        id: "app-6",
        title: "The Ukiyo-e Feline Zen Pullover",
        subtitle: "Artisan Japanese Illustration",
        description: "A meditative blend of traditional Japanese aesthetic and modern comfort. This heavy-gauge pullover features a masterfully rendered feline monk in the Ukiyo-e style, celebrating the art of the perfect brew and the spirit of tranquility.",
        img: "/assets/images/apparel/beige-cat-tea-pullover.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Artisan Series"
    },
    {
        id: "app-7",
        title: "The Blueprint Plumber's Tribute",
        subtitle: "Technical Pop-Icon Schematic",
        description: "A sophisticated deconstruction of a gaming legend. This premium onyx tee showcases the technical blueprint and vibrant character geometry of the world's most cherished hero, blending nostalgia with high-street technical design.",
        img: "/assets/images/apparel/black-mario-blueprint-tee.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Iconic Series"
    },
    {
        id: "app-8",
        title: "The Wayfarer Calico Pullover",
        subtitle: "Minimalist Traveler Series",
        description: "An endearing tribute to the spirit of petite adventures. Featuring a minimalist calico voyager on a rich forest-olive canvas, this pullover is crafted from French Terry cotton for supreme softness during your own journeys.",
        img: "/assets/images/apparel/olive-backpack-cat-pullover.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Minimalist"
    },

    // Award Gifts
    {
        id: "award-1",
        title: "The Artisan Laurel Wooden Medal",
        subtitle: "Handcrafted Personal Tribute",
        description: "A handcrafted tribute to life's true champions. Meticulously carved from premium compressed wood and finished with a vibrant ceremonial ribbon, this medal serves as a timeless token of appreciation for those who inspire us daily.",
        img: "/assets/images/awards/wooden-medal.jpg",
        category: "Award Gifts",
        href: "/collections/awards",
        tag: "Handcrafted"
    },
    {
        id: "award-2",
        title: "The Stellar Visionary Chrome Trophy",
        subtitle: "Fluid Chrome & Crystal Masterpiece",
        description: "An exquisite fusion of fluid chrome sculpture and precision-cut crystal. This trophy embodies the pursuit of excellence and the weight of global leadership, standing as a prestigious monument to extraordinary achievement.",
        img: "/assets/images/awards/chrome-trophy.jpg",
        category: "Award Gifts",
        href: "/collections/awards",
        tag: "Luxury Series"
    },
    {
        id: "award-3",
        title: "The Obsidian Star Executive Award",
        subtitle: "Midnight Star Plaque",
        description: "A sophisticated blend of natural wood grain and sleek obsidian accents. Featuring a raised geometric star and crisp precision engraving, this plaque is designed to honor the strategic brilliance of top-tier performers.",
        img: "/assets/images/awards/wooden-star-award.jpg",
        category: "Award Gifts",
        href: "/collections/awards",
        tag: "Executive"
    },
    {
        id: "award-4",
        title: "The Dynamic Vanguard Sports Tribute",
        subtitle: "Multi-Layered 3D Accolade",
        description: "A high-impact, multi-layered masterpiece that captures the kinetic energy of athletic prowess. Featuring bold 3D typography and a precision-cut silhouette, it immortalizes the grit and glory of every champion.",
        img: "/assets/images/awards/sports-3d-award.jpg",
        category: "Award Gifts",
        href: "/collections/awards",
        tag: "Custom Series"
    },
    {
        id: "award-5",
        title: "The Virtuoso Glass Guitar Trophy",
        subtitle: "Melodic Crystal Tribute",
        description: "A harmonious blend of crystal-clear acrylic and warm solid wood. This bespoke tribute captures the soul of melody, making it the perfect accolade for those whose talent resonates long after the final note.",
        img: "/assets/images/awards/guitar-award.jpg",
        category: "Award Gifts",
        href: "/collections/awards",
        tag: "Artistic"
    },
    {
        id: "award-6",
        title: "The Legacy Walnut 3D Portrait",
        subtitle: "Dimensional Wood-Grain Monument",
        description: "A revolutionary fusion of portraiture and sculpture. This 3D relief, carved into premium walnut-finished grain, immortalizes the visionary with unparalleled depth. Accented by neon-tech lighting for a modern masterpiece.",
        img: "/assets/images/awards/wooden-portrait-3d.jpg",
        category: "Award Gifts",
        href: "/collections/awards",
        tag: "Bespoke Series"
    },
    {
        id: "award-7",
        title: "The Sovereign Leather Key-Talisman",
        subtitle: "Hand-Stitched Portrait Keepsake",
        description: "A pocket-sized monument of identity. Crafted from top-grain tan leather with precision-illustrated portraiture, this talisman transforms the everyday accessory into a highly personalized badge of honor.",
        img: "/assets/images/awards/leather-portrait-keyring.jpg",
        category: "Award Gifts",
        href: "/collections/awards",
        tag: "Personalized"
    },
    {
        id: "award-8",
        title: "The Bronze Patron Bust",
        subtitle: "Miniature Classical Commemoration",
        description: "A classical tribute returned to the modern era. This miniature bust, finished in warm museum-grade bronze, captures the essence and character of leadership with artisan precision and timeless dignity.",
        img: "/assets/images/awards/bronze-bust-award.jpg",
        category: "Award Gifts",
        href: "/collections/awards",
        tag: "Limited Edition"
    },
    {
        id: "award-9",
        title: "The Gold-Leaf Striker's Accolade",
        subtitle: "Reflective Acrylic Sports Monument",
        description: "A high-octane celebration of victory. Featuring mirror-finish gold-leaf acrylic against a sleek obsidian backdrop, this monument captures the dynamic silhouette of the champion in full flight.",
        img: "/assets/images/awards/gold-striker-award.jpg",
        category: "Award Gifts",
        href: "/collections/awards",
        tag: "Sports Series"
    },

    // Branded Gift Products
    {
        id: "lux-1",
        title: "The Executive Noir Ensemble",
        subtitle: "Premium Men's Personal Suite",
        description: "A masterfully curated collection for the modern gentleman. This all-black suite includes a precision chronograph watch, top-grain leather belt and wallet, designer fragrance, and handcrafted accessories, all presented in a forest-green luxury chest.",
        img: "/assets/images/branded/mens-luxury-set.png",
        category: "Branded Gift",
        href: "/collections/branded",
        tag: "Premium Edition"
    },
    {
        id: "lux-2",
        title: "The Roman Heritage Chess Suite",
        subtitle: "Artisan Wood & Metal Grandmaster Set",
        description: "A breathtaking display of strategic elegance. This handcrafted wooden board features intricate marquetry and a velvet-lined storage drawer, accompanied by heirloom-quality metallic Roman legionnaire chessmen in silver and gold finishes.",
        img: "/assets/images/branded/roman-chess-set.jpg",
        category: "Branded Gift",
        href: "/collections/branded",
        tag: "Artisan Masterpiece"
    },
    {
        id: "lux-3",
        title: "The Grand Muse Beauty Station",
        subtitle: "Professional Three-Tier Vanity Trunk",
        description: "The ultimate sanctuary for the beauty connoisseur. This rose-gold accented professional vanity trunk features three expansive tiers of organization, an integrated studio mirror, and dedicated sections for a complete artisanal collection.",
        img: "/assets/images/branded/pro-makeup-vanity.png",
        category: "Branded Gift",
        href: "/collections/branded",
        tag: "Professional Series"
    },
    {
        id: "lux-4",
        title: "The Artisan Winter Harmony Box",
        subtitle: "Gourmet Celebration Hamper",
        description: "A cozy celebration of refined tastes. This premium midnight-black gift box unveils a curated selection of artisanal conserves, a festive 'Happy Holidays' ceramic mug, handcrafted mouse figurine, and gourmet chocolates.",
        img: "/assets/images/branded/holiday-gourmet-hamper.jpg",
        category: "Branded Gift",
        href: "/collections/branded",
        tag: "Seasonal Luxury"
    },
    {
        id: "lux-5",
        title: "The Blossom Monogram Satchel",
        subtitle: "Artisan Pink Coach Companion",
        description: "A signature statement of grace and style. This exquisite pink monogram satchel features premium textured fabric, gold-tone hardware, and a bespoke pearl-and-bow charm, blending classical femininity with modern luxury.",
        img: "/assets/images/branded/coach-pink-handbag.png",
        category: "Branded Gift",
        href: "/collections/branded",
        tag: "Designer Series"
    },
];

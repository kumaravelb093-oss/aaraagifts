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
        img: "/assets/images/return_gift/peacock-kumkum-plate.png",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-2",
        title: "Pichwai Brass Plates",
        subtitle: "Hand-painted Divine Artistry",
        description: "Exquisite brass plates featuring traditional Pichwai motifs of Kamdhenu cows and lotus blooms. Each plate is a vibrant piece of Indian folk art, perfect as a sacred keepsake for wedding guests.",
        img: "/assets/images/return_gift/pichwai-brass-plates.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-3",
        title: "Bespoke Favor Box",
        subtitle: "Personalized Wedding Stationary",
        description: "Elegant maroon-and-gold favor boxes adorned with intricate paisley prints and custom cartoon couple illustrations. A premium way to present sweets, dry fruits, or small tokens of gratitude.",
        img: "/assets/images/return_gift/wedding-favor-box.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-4",
        title: "Hand-Painted Tiffins",
        subtitle: "Artisan Enamelware Set",
        description: "Traditional stainless steel tiffins transformed into modern masterpieces with hand-painted floral patterns. A unique and functional return gift that combines utility with artisanal charm.",
        img: "/assets/images/return_gift/hand-painted-tiffin-set.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-5",
        title: "Jute Hamper Bags",
        subtitle: "Eco-Luxury Gift Totes",
        description: "Sustainable jute tote bags accented with delicate white lace and satin ribbons. These elegant hampers are spacious enough for assorted gifts and carry a message of mindful gifting.",
        img: "/assets/images/return_gift/jute-hamper-bags.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-6",
        title: "Copper Hammered Duo",
        subtitle: "Lustrous Healthware Set",
        description: "A premium hammered copper bottle accompanied by two matching tumblers. Known for its Ayurvedic benefits and timeless aesthetic, this set is a perfect blend of wellness and elegance for your guests.",
        img: "/assets/images/return_gift/copper-hammered-set.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-7",
        title: "Meenakari Blossom Dibbi",
        subtitle: "Artisan Pink Treasure Box",
        description: "A delicate pink Meenakari container featuring hand-painted floral motifs and gold-plated rims. Perfect for storing jewelry or sacred offerings, it's a vibrant keepsake of traditional craftsmanship.",
        img: "/assets/images/return_gift/meenakari-pink-dibbi.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-8",
        title: "Empire Brass Incense Burner",
        subtitle: "Sacred Aroma Diffuser",
        description: "A majestic brass incense burner with a tea-light base and adjustable aroma tray. Its regal design and polished finish make it an ideal spiritual gift that brings peace and fragrance to any home.",
        img: "/assets/images/return_gift/brass-incense-burner.png",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-9",
        title: "Traditional Ceramic Achaar Jar",
        subtitle: "Handcrafted Mini Martaban",
        description: "A charming handcrafted ceramic jar, traditionally used for pickles (Achaar), now reimagined as a timeless return gift. Featuring classic brown and cream glazing, it brings a touch of vintage Indian heritage to any kitchen or pooja room.",
        img: "/assets/images/return_gift/traditional-ceramic-jar.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "wed-10",
        title: "Heritage Floral Favor Box",
        subtitle: "Elegant Ethnic Gift Packaging",
        description: "An exquisitely designed gift box adorned with traditional floral patterns and vibrant ethnic motifs. Perfect for presenting sweets, dry fruits, or small tokens of appreciation, adding an extra layer of elegance to your special occasion.",
        img: "/assets/images/return_gift/heritage-floral-box.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },

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

    {
        id: "app-9",
        title: "The Spectrum Polo Bundle",
        subtitle: "Multi-Color Corporate Collection",
        description: "A vibrant 5-piece polo set in sky blue, tangerine orange, deep maroon, classic black, and royal blue. Crafted from breathable piqué cotton, ideal for team branding and corporate events.",
        img: "/assets/images/apparel/assorted-polo-shirts-bundle.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Bulk Ready"
    },
    {
        id: "app-10",
        title: "The CoolMars Midnight Polo",
        subtitle: "Premium Navy Piqué Shirt",
        description: "A deep navy CoolMars-branded polo shirt with a refined piqué weave and triple-button placket. The rich midnight hue and tailored fit make it perfect for casual Fridays and corporate outings.",
        img: "/assets/images/apparel/coolmars-black-polo-shirt.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Premium Brand"
    },
    {
        id: "app-11",
        title: "The Classic Polo Collection",
        subtitle: "Six-Shade Essential Range",
        description: "A comprehensive 6-shade polo collection featuring sky blue, navy, silver grey, jet black, deep maroon, and electric royal blue. Premium cotton piqué fabric covers every institutional color requirement.",
        img: "/assets/images/apparel/classic-polo-collection.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Institutional"
    },
    {
        id: "app-12",
        title: "The Premium Polo Assorted Pack",
        subtitle: "Six-Color Corporate Range",
        description: "An expertly curated assortment of six premium polo shirts in a harmonious palette. From cool blues to warm maroons, each shirt features a classic collar, reinforced stitching, and comfortable regular fit.",
        img: "/assets/images/apparel/premium-polo-assorted-pack.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Best Seller"
    },
    {
        id: "app-13",
        title: "The Vibrant Orange Polo",
        subtitle: "Bold Statement Piqué Shirt",
        description: "A striking vibrant orange polo shirt that commands attention. Crafted from soft honeycomb piqué fabric with a classic collar and three-button placket, perfect for high-visibility events and energetic team uniforms.",
        img: "/assets/images/apparel/vibrant-orange-polo-shirt.jpg",
        category: "Apparel & T-Shirts",
        href: "/collections/apparel",
        tag: "Statement Piece"
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
    {
        id: "lux-6",
        title: "Chanel Rose Aura Suite",
        subtitle: "Signature Perfume Ensemble",
        description: "A symphony of floral elegance and classic luxury. This curated Chanel perfume suite features the iconic Chance Eau Tendre, accompanied by a crystalline limited-edition flacon and a handcrafted silk camellia brooch, all presented in a signature rose-blush presentation box.",
        img: "/assets/images/branded/chanel-perfume-set.png",
        category: "Branded Gift",
        href: "/collections/branded",
        tag: "Iconic Luxury"
    },
    {
        id: "lux-7",
        title: "The Emerald Grove Set",
        subtitle: "Modern Minimalist Jewelry",
        description: "Exquisite craftsmanship meets botanical inspiration. This 'Gatherer's Grove' collection features emerald-cut green cubic zirconia earrings set in 18k gold vermeil. A testament to modern minimalism and sophisticated brand identity.",
        img: "/assets/images/branded/gatherers-grove-jewelry.png",
        category: "Branded Gift",
        href: "/collections/branded",
        tag: "Artisanal Gold"
    },
    {
        id: "lux-8",
        title: "Southery Pearl Heritage Collection",
        subtitle: "Lustrous Gemstone Curation",
        description: "Where time-honored elegance meets contemporary design. This Southery heritage suite includes graduated freshwater pearl necklaces and matching rose-quartz accented earrings, each meticulously mounted on signature branded presentation cards.",
        img: "/assets/images/branded/southery-pearl-collection.png",
        category: "Branded Gift",
        href: "/collections/branded",
        tag: "Heritage Edition"
    },
    {
        id: "lux-9",
        title: "Celestial Voyager Mugs",
        subtitle: "Zodiac Constellation Pair",
        description: "Navigate your mornings with the cosmos. These premium ceramic mugs features hand-painted gold constellation patterns for 'Aquarius' and 'Leo', equipped with ergonomic gold-plated handles and matching constellation stirrers.",
        img: "/assets/images/branded/zodiac-constellation-mugs.png",
        category: "Branded Gift",
        href: "/collections/branded",
        tag: "Bespoke Decor"
    },
    {
        id: "lux-10",
        title: "The Navigator's Tech Wrap",
        subtitle: "Full-Grain Leather Pouch",
        description: "Sophistication in every stitch. This navy blue perforated full-grain leather tech wrap provides a luxurious sanctuary for your essential audio cables and accessories, featuring gold-tone hardware and signature 'that's a wrap' branding.",
        img: "/assets/images/branded/leather-tech-wrap.png",
        category: "Branded Gift",
        href: "/collections/branded",
        tag: "Executive Tech"
    },
    {
        id: "new-corporatestudio-100",
        title: "Insulated Water Bottles",
        subtitle: "Double-Wall Vacuum Flasks",
        description: "Keep beverages at the perfect temperature all day with these sleek double-wall vacuum insulated bottles. Ideal for corporate events and employee appreciation gifts.",
        img: "/assets/images/corporate/insulated-water-bottles.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-101",
        title: "Red Executive Suite",
        subtitle: "Premium Corporate Combo",
        description: "A striking red-themed executive gift set featuring a diary, pen, and accessories. Commands attention and makes a bold statement at any corporate event.",
        img: "/assets/images/corporate/red-corporate-gift-set.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-102",
        title: "Metallic Executive Pens",
        subtitle: "Precision Writing Instruments",
        description: "Refined metallic-finish pens that bring gravitas to every signature. A timeless corporate essential for boardroom meetings and executive desks.",
        img: "/assets/images/corporate/metallic-executive-pens.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-103",
        title: "Blue Diary & Pen Set",
        subtitle: "Classic Stationery Duo",
        description: "An elegant blue-toned diary paired with a matching premium pen. The perfect combination for professionals who value organization and style.",
        img: "/assets/images/corporate/blue-diary-pen-set.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-104",
        title: "Black Desktop Essentials",
        subtitle: "Modern Desk Companion",
        description: "A sleek all-black desktop set featuring essential office accessories. Designed to bring order and sophistication to any modern workspace.",
        img: "/assets/images/corporate/black-desktop-essentials.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-105",
        title: "Blue Flask & Diary Set",
        subtitle: "Executive Hydration Suite",
        description: "A premium blue flask paired with a matching executive diary. The ideal duo for the modern professional who stays hydrated and organized.",
        img: "/assets/images/corporate/blue-flask-diary-set.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-106",
        title: "Teal Executive Diary",
        subtitle: "Vibrant Professional Journal",
        description: "A beautifully bound teal diary with premium pages for daily planning. Its vibrant hue adds a splash of personality to corporate gifting.",
        img: "/assets/images/corporate/teal-executive-diary.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-107",
        title: "Camo Sling Bag",
        subtitle: "Urban Adventure Carry",
        description: "A rugged yet stylish camouflage sling bag perfect for on-the-go professionals. Compact enough for daily commute, spacious enough for essentials.",
        img: "/assets/images/corporate/camo-sling-bag.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-108",
        title: "Deco Bottle Umbrellas",
        subtitle: "Compact Designer Shields",
        description: "Innovative bottle-shaped umbrellas with decorative patterns. A clever and practical gift that combines clever design with everyday utility.",
        img: "/assets/images/corporate/deco-bottle-umbrellas.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-109",
        title: "Katzy Blue Backpack",
        subtitle: "Professional Travel Companion",
        description: "A vibrant blue backpack with multiple compartments and ergonomic design. Built for the modern professional who balances work and adventure.",
        img: "/assets/images/corporate/katzy-blue-backpack.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-110",
        title: "Black Flask & Pen Set",
        subtitle: "Noir Executive Duo",
        description: "A sophisticated all-black flask and pen set that exudes professionalism. The perfect gift for executives who appreciate understated elegance.",
        img: "/assets/images/corporate/black-flask-pen-set.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-111",
        title: "Tan Leather Essentials",
        subtitle: "Heritage Leather Collection",
        description: "A luxurious tan leather set featuring timeless accessories. Crafted from premium leather, each piece develops a beautiful patina over time.",
        img: "/assets/images/corporate/tan-leather-essentials.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-corporatestudio-112",
        title: "Colorful Steel Mugs",
        subtitle: "Vibrant Drinkware Collection",
        description: "A cheerful collection of powder-coated stainless steel mugs in an array of vivid colors. Durable, stylish, and perfect for team gifting.",
        img: "/assets/images/corporate/colorful-steel-mugs.jpg",
        category: "Corporate Studio",
        href: "/corporate"
    },
    {
        id: "new-brandedgift-113",
        title: "Cow Lotus Coasters",
        subtitle: "Pichwai Art Ensemble",
        description: "Exquisite coasters adorned with traditional Pichwai motifs of sacred cows and lotus blooms. Each piece is a miniature canvas of Indian folk art.",
        img: "/assets/images/branded/cow-lotus-coasters.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-114",
        title: "Milton Insulated Mugs",
        subtitle: "Premium Thermal Drinkware",
        description: "Milton-branded insulated mugs that keep your beverages at the perfect temperature. Trusted quality meets elegant design for discerning recipients.",
        img: "/assets/images/branded/milton-insulated-mugs.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-115",
        title: "Colorful Jewelry Boxes",
        subtitle: "Artisan Treasure Keepers",
        description: "Vibrant handcrafted jewelry boxes in an assortment of radiant colors. Each box is a delightful keepsake that brings joy to organizing precious trinkets.",
        img: "/assets/images/branded/colorful-jewelry-boxes.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-116",
        title: "Cow Lotus Wooden Boxes",
        subtitle: "Pichwai Heritage Storage",
        description: "Beautifully hand-painted wooden boxes featuring Pichwai cow and lotus motifs. A fusion of traditional artistry and functional elegance for sacred keepsakes.",
        img: "/assets/images/branded/cow-lotus-wooden-boxes.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-117",
        title: "Capsule Umbrellas",
        subtitle: "Ultra-Compact Rain Shields",
        description: "Cleverly designed capsule-shaped umbrellas that fit in any bag or pocket. A perfect blend of innovation and practicality for stylish rain protection.",
        img: "/assets/images/branded/capsule-umbrellas.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-118",
        title: "Wooden Incense Holders",
        subtitle: "Hand-Carved Aroma Stands",
        description: "Intricately carved wooden incense holders that bring serenity to any space. Each piece showcases the artisan's dedication to traditional woodcraft.",
        img: "/assets/images/branded/wooden-incense-holders.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-119",
        title: "Bamboo Premium Gift Set",
        subtitle: "Eco-Luxury Ensemble",
        description: "A sustainably sourced bamboo gift set that embodies eco-conscious luxury. Perfect for those who appreciate nature-inspired premium gifting.",
        img: "/assets/images/branded/bamboo-premium-gift-set.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-120",
        title: "Silver Leaf Idols",
        subtitle: "Divine Silver Figurines",
        description: "Graceful silver-leaf finished deity figurines that radiate spiritual elegance. These sacred idols make for auspicious and memorable gifts.",
        img: "/assets/images/branded/silver-leaf-idols.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-121",
        title: "Wooden Incense Stand",
        subtitle: "Artisan Fragrance Base",
        description: "A beautifully crafted wooden incense stand that serves as both a functional holder and a decorative accent. Brings warmth and tradition to any room.",
        img: "/assets/images/branded/wooden-incense-stand.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-122",
        title: "Lotus Haldi Kumkum",
        subtitle: "Sacred Ritual Container",
        description: "An ornate lotus-shaped Haldi Kumkum container for traditional ceremonies. A beautiful blend of devotion and artisanal craftsmanship.",
        img: "/assets/images/branded/lotus-haldi-kumkum.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-123",
        title: "Pink Flower Umbrella",
        subtitle: "Floral Fashion Shield",
        description: "A charming pink umbrella adorned with delicate floral patterns. This fashionable accessory brightens even the rainiest of days.",
        img: "/assets/images/branded/pink-flower-umbrella.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-124",
        title: "Digital Desktop Clock",
        subtitle: "Modern Time Display",
        description: "A sleek digital desktop clock with a contemporary design. Features clear display and multiple functions — a stylish addition to any desk.",
        img: "/assets/images/branded/digital-desktop-clock.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-125",
        title: "Floral Tumblers",
        subtitle: "Botanical Drinkware",
        description: "Elegant tumblers featuring delicate floral artwork. These eye-catching vessels transform your daily hydration into a visual delight.",
        img: "/assets/images/branded/floral-tumblers.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-126",
        title: "Gold Kamadhenu Statue",
        subtitle: "Sacred Gold Figurine",
        description: "A magnificent gold-finished Kamadhenu statue symbolizing divine abundance and prosperity. A revered spiritual gift for auspicious occasions.",
        img: "/assets/images/branded/gold-kamadhenu-statue.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-127",
        title: "Gold Peacock Box",
        subtitle: "Royal Treasure Chest",
        description: "An opulent gold-finished box adorned with intricate peacock motifs. This regal container is perfect for storing precious keepsakes and jewelry.",
        img: "/assets/images/branded/gold-peacock-box.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-128",
        title: "Silver Kamadhenu Statue",
        subtitle: "Sacred Silver Figurine",
        description: "A beautifully detailed silver-finished Kamadhenu statue representing divine blessings. An auspicious gift that brings grace to any sacred space.",
        img: "/assets/images/branded/silver-kamadhenu-statue.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-129",
        title: "Silver Feather Incense",
        subtitle: "Elegant Aroma Holder",
        description: "A graceful silver-toned feather-shaped incense holder that combines artistic beauty with spiritual function. A unique accent for serene spaces.",
        img: "/assets/images/branded/silver-feather-incense-holder.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-130",
        title: "Digital Handheld Fans",
        subtitle: "Portable Cooling Gadgets",
        description: "Compact and colorful handheld digital fans for instant refreshment. A fun, practical gift that keeps you cool wherever you go.",
        img: "/assets/images/branded/digital-handheld-fans.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-131",
        title: "Pichwai Cow Tray",
        subtitle: "Heritage Serving Art",
        description: "A stunning serving tray featuring traditional Pichwai cow artwork. This functional art piece brings Indian heritage to your dining experience.",
        img: "/assets/images/branded/pichwai-cow-tray.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-brandedgift-132",
        title: "Color Changing Alarm Clock",
        subtitle: "LED Mood Timepiece",
        description: "A mesmerizing alarm clock that cycles through a spectrum of vibrant LED colors. A modern bedside companion that wakes you up in style.",
        img: "/assets/images/branded/color-changing-alarm-clock.jpg",
        category: "Branded Gift",
        href: "/collections/branded"
    },
    {
        id: "new-promotionalgifts-133",
        title: "Floral Mugs Set",
        subtitle: "Botanical Ceramic Collection",
        description: "A delightful set of ceramic mugs adorned with vibrant floral patterns. Perfect for brightening up morning routines and team tea breaks.",
        img: "/assets/images/promotional/floral-mugs-set.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-134",
        title: "Quote Wall Hangings",
        subtitle: "Inspirational Decor Art",
        description: "Beautifully designed wall hangings featuring motivational quotes. These inspiring pieces add character and positive energy to any space.",
        img: "/assets/images/promotional/quote-wall-hangings.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-135",
        title: "Round Wall Plates",
        subtitle: "Decorative Display Discs",
        description: "Elegant round decorative wall plates that serve as stunning focal points. Each plate features intricate designs perfect for home or office decor.",
        img: "/assets/images/promotional/round-wall-plates.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-136",
        title: "Jute Drawstring Bags",
        subtitle: "Eco-Friendly Carry Pouches",
        description: "Sustainable jute drawstring bags that marry eco-consciousness with everyday practicality. An ideal branded giveaway for environmentally minded events.",
        img: "/assets/images/promotional/jute-drawstring-bags.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-137",
        title: "Wooden Key Holders",
        subtitle: "Artisan Wall Organizers",
        description: "Handcrafted wooden key holders that add rustic charm to your entryway. A thoughtful promotional gift that recipients will use every single day.",
        img: "/assets/images/promotional/wooden-key-holders.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-138",
        title: "Printed Jute Bags",
        subtitle: "Custom Eco Totes",
        description: "Durable printed jute bags that carry your brand message sustainably. These eco-friendly totes make a lasting impression at events and trade shows.",
        img: "/assets/images/promotional/printed-jute-bags.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-139",
        title: "Designer Wall Clocks",
        subtitle: "Statement Timepieces",
        description: "Eye-catching designer wall clocks that elevate any room's aesthetic. A promotional gift that reminds recipients of your brand every moment of the day.",
        img: "/assets/images/promotional/designer-wall-clocks.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-140",
        title: "Custom Photo Frames",
        subtitle: "Personalized Memory Displays",
        description: "Elegant photo frames ready for custom branding and personalization. These cherished keepsakes hold precious memories and your brand close to heart.",
        img: "/assets/images/promotional/custom-photo-frames.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-141",
        title: "Lunch Box Sets",
        subtitle: "Gourmet Meal Carriers",
        description: "Practical multi-tier lunch box sets that make meals on the go a delight. A daily-use promotional gift that keeps your brand at the table.",
        img: "/assets/images/promotional/lunch-box-sets.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-142",
        title: "Insulated Lunch Bags",
        subtitle: "Thermal Meal Totes",
        description: "Stylish insulated lunch bags that keep meals fresh and organized. A practical gift that combines brand visibility with everyday convenience.",
        img: "/assets/images/promotional/insulated-lunch-bags.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-143",
        title: "Stainless Steel Bottles",
        subtitle: "Durable Hydration Vessels",
        description: "Premium stainless steel water bottles built to last. These sleek vessels combine durability with modern aesthetics for maximum brand impact.",
        img: "/assets/images/promotional/stainless-steel-bottles.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-144",
        title: "Canvas Tote Bags",
        subtitle: "Versatile Carry-Alls",
        description: "Sturdy canvas tote bags perfect for everyday use and brand promotion. A versatile, eco-conscious gift that goes everywhere with your recipients.",
        img: "/assets/images/promotional/canvas-tote-bags.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-145",
        title: "Metallic Water Bottles",
        subtitle: "Shimmer Hydration Flasks",
        description: "Gleaming metallic-finish water bottles that stand out from the crowd. A premium hydration companion that makes your brand shine.",
        img: "/assets/images/promotional/metallic-water-bottles.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-146",
        title: "Ceramic Coffee Mugs",
        subtitle: "Classic Morning Vessels",
        description: "Quality ceramic coffee mugs ideal for custom branding and daily enjoyment. The quintessential promotional gift for coffee lovers everywhere.",
        img: "/assets/images/promotional/ceramic-coffee-mugs.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-147",
        title: "Bamboo Desk Organizers",
        subtitle: "Sustainable Workspace Tidiers",
        description: "Eco-friendly bamboo desk organizers that bring natural elegance to workspaces. A thoughtful gift that promotes sustainability and productivity.",
        img: "/assets/images/promotional/bamboo-desk-organizers.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-148",
        title: "Leather Notebooks",
        subtitle: "Executive Writing Journals",
        description: "Premium leather-bound notebooks for the discerning professional. These luxurious journals make every note feel important and every idea worth keeping.",
        img: "/assets/images/promotional/leather-notebooks.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-149",
        title: "Portable Chargers",
        subtitle: "On-the-Go Power Banks",
        description: "Compact portable chargers that keep devices powered throughout the day. A modern tech gift that ensures your brand is always within reach.",
        img: "/assets/images/promotional/portable-chargers.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-150",
        title: "Wireless Earbuds",
        subtitle: "Premium Audio Companions",
        description: "Sleek wireless earbuds delivering crisp audio quality. A premium tech promotional gift that recipients will use and appreciate daily.",
        img: "/assets/images/promotional/wireless-earbuds.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-151",
        title: "Bluetooth Speakers",
        subtitle: "Portable Sound Systems",
        description: "Compact Bluetooth speakers with rich, room-filling sound. An impressive promotional gift that amplifies your brand alongside great music.",
        img: "/assets/images/promotional/bluetooth-speakers.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-promotionalgifts-152",
        title: "Smart Fitness Bands",
        subtitle: "Wellness Tech Trackers",
        description: "Feature-packed smart fitness bands for health-conscious professionals. A modern wellness gift that shows your brand cares about well-being.",
        img: "/assets/images/promotional/smart-fitness-bands.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional"
    },
    {
        id: "new-weddingreturngifts-153",
        title: "Assorted Enamel Dibbi Collection",
        subtitle: "Vibrant Meenakari Set",
        description: "A stunning collection of assorted enamel dibbis in various colors and patterns. Each piece showcases exquisite Meenakari craftsmanship, perfect as wedding return gifts.",
        img: "/assets/images/return_gift/assorted-enamel-dibbi-collection.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-154",
        title: "Divine Statue Keepsakes",
        subtitle: "Sacred Deity Figurines",
        description: "Beautifully crafted divine statue keepsakes featuring revered deities. These auspicious figurines bring blessings and spiritual grace to your guests' homes.",
        img: "/assets/images/return_gift/divine-statue-keepsakes.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-155",
        title: "Ganesha Enamel Dibbi Gold",
        subtitle: "Sacred Gold Meenakari Box",
        description: "An exquisite gold-toned enamel dibbi featuring Lord Ganesha. This auspicious container blends devotion with artisanal beauty for a truly blessed keepsake.",
        img: "/assets/images/return_gift/ganesha-enamel-dibbi-gold.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-156",
        title: "Lotus Enamel Diya Purple",
        subtitle: "Purple Meenakari Lamp",
        description: "A resplendent purple lotus-shaped enamel diya that radiates spiritual warmth. Hand-painted with delicate Meenakari patterns for ceremonial elegance.",
        img: "/assets/images/return_gift/lotus-enamel-diya-purple.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-157",
        title: "Lotus Enamel Diya Yellow",
        subtitle: "Golden Meenakari Lamp",
        description: "A radiant yellow lotus-shaped enamel diya bringing sunshine and blessings. Its warm hue and intricate enamel work make every pooja luminous.",
        img: "/assets/images/return_gift/lotus-enamel-diya-yellow.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-158",
        title: "Modern Insulated Tiffin Set",
        subtitle: "Contemporary Meal Carrier",
        description: "A sleek, modern insulated tiffin set that keeps meals warm and fresh. A practical yet elegant return gift that blends utility with contemporary style.",
        img: "/assets/images/return_gift/modern-insulated-tiffin-set.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-159",
        title: "Peacock Blossom Tin Box",
        subtitle: "Printed Keepsake Container",
        description: "A charming tin box adorned with peacock and blossom prints. This delightful container is perfect for storing small treasures and sweet memories.",
        img: "/assets/images/return_gift/peacock-blossom-tin-box.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-160",
        title: "Peacock Enamel Dibbi Classic",
        subtitle: "Traditional Meenakari Box",
        description: "A classic peacock-themed enamel dibbi with timeless Meenakari artistry. Its vibrant colors and heritage design make it an unforgettable keepsake.",
        img: "/assets/images/return_gift/peacock-enamel-dibbi-classic.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-161",
        title: "Peacock Enamel Dibbi Gold",
        subtitle: "Gold Meenakari Treasure Box",
        description: "A luxurious gold-finished peacock enamel dibbi with ornate detailing. This regal keepsake captures the majesty of Indian craftsmanship.",
        img: "/assets/images/return_gift/peacock-enamel-dibbi-gold.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-162",
        title: "Peacock Enamel Dibbi Royal",
        subtitle: "Royal Meenakari Container",
        description: "A royal peacock enamel dibbi in rich, regal tones. This majestic container embodies the grandeur of traditional Indian artistry.",
        img: "/assets/images/return_gift/peacock-enamel-dibbi-royal.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-163",
        title: "Peacock Enamel Dibbi Single",
        subtitle: "Solo Meenakari Keepsake",
        description: "An elegant single peacock enamel dibbi, perfect as an individual return gift. Its compact size and vivid artistry make it a cherished memento.",
        img: "/assets/images/return_gift/peacock-enamel-dibbi-single.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-164",
        title: "Peacock Enamel Dibbi Trio",
        subtitle: "Triple Meenakari Set",
        description: "A magnificent trio of peacock enamel dibbis in complementary designs. This set of three offers a lavish spread of color and traditional craftsmanship.",
        img: "/assets/images/return_gift/peacock-enamel-dibbi-trio.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-165",
        title: "Pink Polka Enamel Box",
        subtitle: "Playful Meenakari Container",
        description: "A delightful pink polka-dotted enamel box with a cheerful, modern twist on traditional Meenakari. A fun and feminine keepsake for your guests.",
        img: "/assets/images/return_gift/pink-polka-enamel-box.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-166",
        title: "Royal Peacock Gold Diya Set",
        subtitle: "Majestic Gold Lamp Collection",
        description: "A grand set of gold-finished peacock diyas that illuminate celebrations with regal splendor. Each diya is a masterpiece of ornamental craftsmanship.",
        img: "/assets/images/return_gift/royal-peacock-gold-diya-set.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    },
    {
        id: "new-weddingreturngifts-167",
        title: "Soup Bowl Combo Blue",
        subtitle: "Ceramic Bowl & Spoon Set",
        description: "A charming blue ceramic soup bowl paired with a matching spoon. This practical and stylish combo makes for a heartwarming return gift.",
        img: "/assets/images/return_gift/soup-bowl-combo-blue.jpg",
        category: "Wedding Return Gifts",
        href: "/collections/wedding"
    }
];

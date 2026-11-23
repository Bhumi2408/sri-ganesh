// Single source for product data — used by the homepage cards and the
// /products/[slug] detail pages.
export const products = [
  {
    slug: "pc-granules-manufacturer",
    code: "PC",
    name: "Polycarbonate",
    seo: {
      title: "PC Granules Manufacturer in Delhi | Shri Ganesh Polymer",
      description:
        "Shri Ganesh Polymer is a Delhi-based PC granules and PC dana manufacturer with 15+ years’ experience. Polycarbonate granules in FR, general & extrusion grades.",
      keywords: ["PC Granules Manufacturer", "Polycarbonate Granules", "PC Dana Manufacturer"],
    },
    // long-form page copy — rendered by components/ProductContent.jsx; `faqs` also feeds the FAQPage schema
    content: {
      h1: "Polycarbonate (PC) Granules Manufacturer in Delhi",
      intro:
        "Shri Ganesh Polymer is an ISO 9001 & 14001 certified Polycarbonate (PC) Granules manufacturer based in Delhi, with over 15 years of experience in engineering polymers. We also supply PC dana, the name most Indian buyers use for polycarbonate granules, to the electrical, lighting and automotive industries. Our focus is simple: consistent material, so your moulding line runs smoothly every time.",
      what: {
        title: "What Are Polycarbonate Granules?",
        text: "Polycarbonate is a tough, transparent and amorphous engineering thermoplastic. It keeps its strength and colour stability over time, even in demanding conditions. In granule form, it is injection moulded or extruded into finished parts. Manufacturers prefer PC because it combines impact strength, heat stability and excellent electrical properties with design flexibility and a premium finish.",
      },
      range: {
        title: "Our PC Granules Range",
        items: [
          { name: "PC Granules (General Purpose)", text: "For everyday moulding of lighting, electrical and consumer products where strength and clarity matter." },
          { name: "PC FR Grade", text: "Flame-resistant polycarbonate for parts that must meet safety requirements, such as switches, sockets, chargers and meter boxes." },
          { name: "PC Extrusion Grade", text: "Suited to sheets and profiles where smooth melt flow and stable processing are needed." },
        ],
        note: "We also supply natural and coloured compounds. Share your colour and grade requirement, and we will recommend the right compound.",
      },
      properties: {
        title: "Key Properties",
        text: "Polycarbonate balances toughness, clarity and electrical safety in one material, which is why lighting and electrical manufacturers rely on it.",
        items: [
          "High impact strength",
          "Heat stability",
          "Flame resistance (FR grade)",
          "Dimensional accuracy",
          "Excellent transparency",
          "Reliable electrical characteristics",
        ],
      },
      uses: {
        title: "Where Our Polycarbonate Granules Are Used",
        text: "As a PC dana manufacturer, we supply granules for LED panels and downlights, LED batten housings, modular switches and sockets, mobile chargers, CCTV housings, electricity meter boxes and luggage shells. If your part is not listed, tell us what you mould and we will suggest a suitable grade.",
      },
      choose: {
        title: "How to Choose the Right PC Grade",
        lead: "The right polycarbonate grade depends on how your product will be used.",
        items: [
          { name: "PC FR grade", text: "Choose when the part must resist flame, such as switches, sockets, chargers and meter boxes." },
          { name: "General purpose PC", text: "Choose for lighting housings, diffusers and consumer products where impact strength and clarity matter." },
          { name: "Extrusion grade", text: "Choose for sheets and profiles." },
        ],
        note: "If you are unsure, tell us the application, colour and expected quantity, and our team will recommend a compound that suits your moulding process.",
      },
      why: {
        title: "Why Choose Shri Ganesh Polymer as Your PC Granules Manufacturer?",
        items: [
          { name: "15+ years of experience", text: "Over 15 years of manufacturing and supplying engineering polymer granules." },
          { name: "Certified quality", text: "ISO 9001:2015 and ISO 14001:2015 certified, MSME registered and RoHS compliant." },
          { name: "In-house compounding and testing", text: "Better control over grade, colour and consistency." },
          { name: "Application-focused guidance", text: "We match the grade to your product, not the other way round." },
          { name: "Delhi-based supply", text: "Located in Mangolpuri Industrial Area, Delhi, serving customers across India." },
          { name: "Complete engineering polymer range", text: "PC, ABS and PBT under one roof." },
        ],
      },
      quote: {
        title: "Get a Quote",
        text: "Looking for a dependable PC granules manufacturer in Delhi? Share your grade, colour and quantity, and our team will respond with the right compound and a quotation.",
        note: "If you are unsure about the grade, describe your product and the team will suggest one.",
      },
      faqs: [
        {
          q: "Who is the best PC granules manufacturer in Delhi?",
          a: "The best PC granules manufacturer is one with certified quality, consistent grades and reliable supply. Shri Ganesh Polymer, based in Mangolpuri Industrial Area, Delhi, is ISO 9001 and ISO 14001 certified and has over 15 years of experience. It supplies polycarbonate granules in general purpose, flame-retardant (FR) and extrusion grades, with in-house compounding and quality testing.",
        },
        {
          q: "What are polycarbonate granules?",
          a: "Polycarbonate granules are small pellets of a tough, transparent, amorphous engineering thermoplastic. Manufacturers melt them and shape them by injection moulding or extrusion into parts such as LED housings, switches, chargers and meter boxes. They are valued for impact strength, heat stability and electrical performance.",
        },
        {
          q: "What is PC dana?",
          a: "PC dana is the common Indian trade term for polycarbonate (PC) granules. “Dana” means granule in Hindi, so PC dana and PC granules refer to the same material. Shri Ganesh Polymer is a PC dana manufacturer in Delhi, supplying it for electrical, lighting and automotive applications.",
        },
        {
          q: "Which grades of PC granules does Shri Ganesh Polymer offer?",
          a: "As a PC granules manufacturer, Shri Ganesh Polymer offers three main grades: PC granules for general moulding, PC FR grade for flame-resistant parts, and PC extrusion grade for sheets and profiles. Natural and coloured compounds can be discussed based on your requirement.",
        },
        {
          q: "What are PC granules used for?",
          a: "PC granules are used to make LED panels and downlights, LED batten housings, modular switches and sockets, chargers, CCTV housings, electricity meter boxes and luggage shells. Their strength, transparency and electrical properties make them common in lighting, electrical and consumer products.",
        },
        {
          q: "When should I choose PC FR grade instead of standard PC?",
          a: "Choose PC FR grade when the finished part must resist flame, which is common in electrical products like switches, sockets, chargers and meter boxes. Standard PC suits applications where flame resistance is not required. Check the safety standard that applies to your product before selecting a grade.",
        },
        {
          q: "What is the difference between PC and ABS granules?",
          a: "PC has higher impact strength, better heat resistance and transparency, while ABS is easier to process and generally more economical for high-volume moulding. Choose PC when strength, clarity or heat resistance matters, and ABS when cost and ease of processing matter more. Shri Ganesh Polymer supplies both PC and ABS, so you can compare options for your part.",
        },
        {
          q: "Do polycarbonate granules need drying before moulding?",
          a: "Yes. PC absorbs moisture, and moulding damp granules can cause defects such as bubbles, silver streaks and reduced strength. Dry the granules before processing, following the temperature and time given in the grade’s technical data sheet.",
        },
        {
          q: "What certifications does Shri Ganesh Polymer hold?",
          a: "Shri Ganesh Polymer is ISO 9001:2015 and ISO 14001:2015 certified, MSME registered and RoHS compliant. It manufactures PC, ABS and PBT engineering polymer granules, with in-house compounding and quality testing.",
        },
        {
          q: "How can I get a quote for PC granules from Shri Ganesh Polymer?",
          a: "Send your required grade, colour and quantity to Shri Ganesh Polymer by calling +91 98180 58610, emailing info@shriganeshpolymer.in, using the Get a Quote form, or messaging on WhatsApp. If you are unsure about the grade, describe your product and the team will suggest one.",
        },
      ],
    },
    image: "/pc-granules.webp",
    tag: "Electrical & Automotive",
    accent: "#1e5eff",
    desc: "Tough, transparent and amorphous granules that hold their strength and colour stability over time.",
    long: [
      "High-performance thermoplastic granules offering cost reduction, design flexibility and enhanced aesthetics. Tough, transparent and amorphous, they hold their strength and colour stability over time — even under unfavourable conditions.",
      "Their high impact strength, heat stability and excellent electrical characteristics make them a preferred choice for lighting, electrical and consumer products.",
    ],
    features: ["High impact strength", "Heat stability", "Flame resistance", "Dimensional accuracy", "Excellent transparency"],
    grades: ["PC Granules", "PC FR Grade", "PC Extrusion Grade"],
    apps: "LED panels, switches & sockets, chargers, CCTV housings, meter boxes",
    applications: [
      { img: "/applications/pc/led.png", label: "LED panel & downlights" },
      { img: "/applications/pc/led-light.png", label: "LED batten housings" },
      { img: "/applications/pc/switch.png", label: "Modular switches & sockets" },
      { img: "/applications/pc/cctv.png", label: "Chargers & CCTV housings" },
      { img: "/applications/pc/meter.png", label: "Meter boxes" },
      { img: "/applications/pc/trolly.png", label: "Luggage shells" },
    ],
  },
  {
    slug: "abs",
    code: "ABS",
    name: "Acrylonitrile Butadiene Styrene",
    seo: {
      title: "Best ABS Granules Manufacturer In Delhi | Shri Ganesh Polymer",
      description:
        "Shri Ganesh Polymer is an ABS Granules Manufacturer in Delhi offering engineering plastic granules for electrical, automotive and industrial applications. Enquire today!",
      keywords: ["ABS Granules Manufacturer", "ABS Granules Manufacturer In Delhi", "ABS Plastic Granules"],
    },
    // long-form page copy from the client doc — rendered by components/AbsContent.jsx.
    // `**text**` marks bold exactly as in the doc; `faqs` also feeds the FAQPage schema.
    content: {
      layout: "abs",
      h1: "ABS Granules Manufacturer - Shri Ganesh Polymer",
      intro: [
        "Shri Ganesh Polymer is an **[ABS Granules Manufacturer](/contact/)** providing engineering plastic granules for electrical, electronics, automotive, and industrial manufacturing applications. ABS (Acrylonitrile Butadiene Styrene) is a widely used thermoplastic material known for its impact resistance, mechanical strength, rigidity, and good surface finish. It is commonly used to manufacture electrical plugs, modular gang boxes, keyboards, set-top boxes, ABS junction boxes, and other injection-moulded plastic components.",
        "Based in Delhi, Shri Ganesh Polymer focuses on engineering polymer solutions supported by in-house compounding and quality testing facilities. We understand that different manufacturing applications require different material properties. Our focus is to help industrial buyers discuss suitable ABS material requirements according to their product applications, processing methods, colours, and quantities.",
      ],
      what: {
        title: "What Are ABS Granules?",
        text: "ABS granules are engineering thermoplastic raw materials made from three components: Acrylonitrile, Butadiene, and Styrene. These materials are supplied in small pellet form and used by manufacturers to produce plastic components through processes such as injection moulding and extrusion.",
        componentsLead: "Each component contributes different properties to ABS plastic:",
        components: [
          { name: "Acrylonitrile:", text: "Helps provide chemical resistance and heat stability." },
          { name: "Butadiene:", text: "Contributes toughness and impact resistance." },
          { name: "Styrene:", text: "Supports rigidity, surface appearance, and processing characteristics." },
        ],
        componentsNote:
          "The combination of these three components makes ABS granules suitable for manufacturing products that require a balance of strength, durability, and good surface finish.",
        traitsLead: "Some important characteristics of ABS granules include:",
        traits: [
          { name: "1. Impact Resistance:", text: "Helps plastic components withstand everyday handling and physical impact." },
          { name: "2. Mechanical Strength:", text: "Provides a useful balance of strength and rigidity for moulded products." },
          { name: "3. Good Surface Finish:", text: "Supports the production of smooth and visually appealing plastic components." },
          { name: "4. Processing Flexibility:", text: "Suitable for commonly used plastic processing methods, including injection moulding." },
          { name: "5. Electrical Insulation:", text: "Makes ABS useful for manufacturing different electrical housings and protective components." },
          { name: "6. Colour and Finishing Options:", text: "ABS can be produced in different colours and supports painting and other finishing processes, depending on the grade." },
        ],
        traitsNote:
          "These properties make ABS granules suitable for manufacturing electrical plugs, modular gang boxes, keyboards, set-top boxes, junction boxes, and various industrial plastic components. Actual performance depends on the selected grade, formulation, and processing conditions.",
      },
      industries: {
        title: "Applications of ABS Granules in Different Industries",
        text: "ABS granules are used across multiple industries because of their useful mechanical properties and moulding characteristics. Manufacturers select suitable ABS grades according to the design, working conditions, and performance requirements of their finished products.",
        table: {
          head: ["Industry", "Common ABS Applications"],
          rows: [
            ["Electrical", "2-pin electrical plugs, modular gang boxes, switch housings"],
            ["Electronics", "Keyboards, set-top boxes, electronic enclosures"],
            ["Industrial", "ABS junction boxes, protective housings"],
            ["Automotive", "Interior moulded components and plastic fittings"],
            ["Consumer Products", "Appliance housings, covers, and durable plastic parts"],
          ],
        },
        items: [
          { name: "Electrical Components:", text: "ABS is commonly used for electrical plugs, modular gang boxes, and junction boxes. These applications require suitable mechanical strength, dimensional stability, and electrical insulating properties." },
          { name: "Electronic Products:", text: "Keyboards, set-top boxes, and electronic housings use ABS for moulded components where appearance, durability, and design flexibility are important." },
          { name: "Automotive Components:", text: "Depending on the selected grade and technical requirements, ABS can be used for different automotive interior and moulded plastic applications." },
          { name: "Industrial Products:", text: "ABS is also used in junction boxes, protective covers, and other moulded components that require suitable strength and surface quality." },
        ],
        note: "Selecting the right ABS grade is important because every application has different material and processing requirements.",
      },
      delhi: {
        title: "ABS Granules Manufacturer in Delhi for Industrial Requirements",
        paras: [
          "Shri Ganesh Polymer is an ABS Granules Manufacturer serving industrial buyers in Delhi and across India. Located in Mangolpuri Industrial Area, Phase-II, Delhi, we provide engineering polymer solutions for manufacturers involved in electrical, electronics, automotive, and plastic component production.",
          "Our manufacturing approach includes in-house compounding and quality testing support for engineering polymer materials. We focus on understanding the application, required material properties, colour, and quantity before discussing suitable ABS granules for different production requirements.",
        ],
        listLead: "Our company credentials and capabilities include:",
        list: [
          "In-house polymer compounding facilities.",
          "Quality testing support for material evaluation.",
          "Engineering polymer products including PC, ABS, and PBT.",
          "ISO 9001:2015 quality management certification.",
          "ISO 14001:2015 environmental management certification.",
          "RoHS compliance information for relevant product requirements.",
        ],
        note: "For businesses searching for an ABS Granules Manufacturer in Delhi, Shri Ganesh Polymer offers direct communication to discuss material specifications, industrial applications, and bulk purchasing requirements.",
      },
      choose: {
        title: "How to Choose the Right ABS Granules for Your Application?",
        lead: "Choosing the right ABS granules is important for maintaining product quality, moulding performance, and manufacturing consistency. A reliable **ABS Granules Manufacturer** can help buyers understand material requirements and select suitable grades according to their applications. Before purchasing, industrial buyers should evaluate the following factors.",
        steps: [
          { name: "1. Identify Your Product Application", text: "First, identify the final component you want to manufacture. Electrical plugs, modular boxes, keyboard housings, and automotive components may require different material properties." },
          { name: "2. Check Impact Strength", text: "If the finished product is likely to experience regular handling or physical impact, review the impact strength requirements before selecting an ABS grade." },
          { name: "3. Consider Processing Requirements", text: "ABS is widely used in injection moulding. However, melt flow properties and recommended processing conditions should match the mould design and production requirements." },
          { name: "4. Review Surface Finish Requirements", text: "For products with visible surfaces, consider the required appearance, colour consistency, and finishing properties of the selected material." },
          { name: "5. Check Technical Specifications", text: "Always review the technical datasheet before finalising an ABS material. Important parameters include density, melt flow rate, tensile strength, impact strength, and heat-related properties." },
          { name: "6. Discuss Bulk and Colour Requirements", text: "Before placing an order, confirm the required colour, material grade, quantity, packaging, and delivery details with the manufacturer." },
        ],
        note: "At Shri Ganesh Polymer, buyers can share their application, grade, colour, and quantity requirements to discuss a suitable engineering polymer solution. Choosing an experienced **ABS Granules Manufacturer** helps you evaluate material requirements for your specific production needs.",
      },
      quality: {
        title: "Quality Testing and Manufacturing Support at Shri Ganesh Polymer",
        paras: [
          "For plastic component manufacturers, material quality and consistency are important for maintaining production standards. Variations in material properties can affect moulding performance, finished product appearance, and manufacturing efficiency.",
          "[Shri Ganesh Polymer](/) supports its engineering polymer manufacturing activities through in-house compounding and quality testing facilities. Our ISO 9001:2015 and ISO 14001:2015 certifications reflect our quality management and environmental management systems.",
          "We focus on understanding the intended application and material requirements before discussing an appropriate ABS solution. This helps industrial buyers make informed decisions when selecting engineering plastic granules for their manufacturing processes.",
        ],
        cta: "**Start your ABS granules enquiry today with Shri Ganesh Polymer.**",
        ctaText: "Looking for quality ABS granules for your industrial manufacturing requirements? Connect with Shri Ganesh Polymer to discuss your required grade, colour, application, and bulk quantity.",
      },
      faqs: [
        { q: "Who is the best ABS Granules Manufacturer in Delhi?", a: "Shri Ganesh Polymer is an ABS Granules Manufacturer in Delhi, offering engineering polymer solutions for electrical, electronics, automotive, and industrial applications." },
        { q: "What are ABS granules commonly used for?", a: "ABS granules are used to manufacture 2-pin electrical plugs, modular gang boxes, keyboards, set-top boxes, junction boxes, automotive components, and other injection-moulded plastic products." },
        { q: "What is the full form of ABS in plastic granules?", a: "ABS stands for Acrylonitrile Butadiene Styrene. It is an engineering thermoplastic known for toughness, rigidity, impact resistance, and processing flexibility." },
        { q: "What are the main properties of ABS granules?", a: "The main properties include impact resistance, mechanical strength, rigidity, electrical insulation, and good surface finish. Actual properties vary according to the material grade." },
        { q: "Are ABS granules suitable for injection moulding?", a: "Yes, ABS granules are widely used in injection moulding to manufacture electrical housings, electronic enclosures, keyboards, and other plastic components." },
        { q: "Which industries use ABS plastic granules in India?", a: "Electrical, automotive, electronics, consumer appliance, and industrial manufacturing companies use ABS granules to produce different moulded plastic components." },
        { q: "How can I select the right ABS granules for my product?", a: "Consider the final application, impact strength, melt flow requirements, surface finish, and processing conditions. Review the technical datasheet before selecting a suitable ABS grade." },
        { q: "Where can I buy ABS granules in bulk in Delhi?", a: "You can contact Shri Ganesh Polymer in Mangolpuri Industrial Area, Phase-II, Delhi, to discuss ABS granules, grade availability, quantity, and bulk purchasing requirements." },
        { q: "What should I check before choosing an ABS granules manufacturer?", a: "Check the manufacturer's compounding capabilities, quality testing facilities, technical specifications, certifications, material consistency, and ability to meet your production requirements." },
        { q: "How can I request an ABS granules quotation from Shri Ganesh Polymer?", a: "Contact Shri Ganesh Polymer and share your required ABS grade, application, colour, and estimated quantity to discuss quotation details." },
      ],
    },
    image: "/abs-granules.webp",
    tag: "Automotive & Electrical",
    accent: "#e11d48",
    desc: "A strong, easy-to-process engineering plastic made for high-volume injection moulding.",
    long: [
      "High-quality thermoplastic engineering plastic widely used for injection moulding. Excellent strength, impact and chemical resistance, temperature stability, electrical insulation and easy paintability.",
      "Balanced toughness and processability make ABS cost-effective for high-volume moulding of electrical and consumer parts.",
    ],
    features: ["Impact & chemical resistance", "Electrical insulation", "Temperature stability", "Easy paintability"],
    grades: ["ABS Granules"],
    apps: "Electrical plugs, gang boxes, keyboards, set-top boxes, junction boxes",
    applications: [
      { img: "/applications/abs/plugs.png", label: "2-pin electrical plug" },
      { img: "/applications/abs/gangbox.png", label: "Modular electrical gang boxes" },
      { img: "/applications/abs/key-board.png", label: "Keyboard" },
      { img: "/applications/abs/setup-box.png", label: "Set-top box" },
      { img: "/applications/abs/junctionbox.png", label: "ABS junction box" },
    ],
  },
  {
    slug: "pbt",
    code: "PBT",
    name: "Polybutylene Terephthalate",
    seo: {
      title: "Top PBT Granules Manufacturer in Delhi | Shri Ganesh Polymer",
      description:
        "Looking for a PBT granules manufacturer in Delhi? Shri Ganesh Polymer supplies ISO certified glass-filled PBT with custom colours. Get a quote today.",
      keywords: ["PBT Granules manufacturer", "PBT Granules manufacturer In Delhi"],
    },
    // long-form page copy from the client doc — rendered by components/PbtContent.jsx.
    // `**text**` marks bold exactly as in the doc; `faqs` also feeds the FAQPage schema.
    content: {
      layout: "pbt",
      h1: "PBT Granules Manufacturer in Delhi – Shri Ganesh Polymer",
      intro: [
        "[Shri Ganesh Polymer](/) is an ISO 9001 and 14001 certified PBT granules manufacturer in Delhi. We compound glass-filled PBT granules at our Mangolpuri plant and supply them to electrical, lighting and automotive manufacturers across India.",
        "If your parts sit near heat and electricity, the raw material must be reliable. As a PBT granules manufacturer in Delhi, we focus on consistent quality, custom colours and on-time supply, so your moulding line keeps running smoothly.",
      ],
      what: {
        title: "What Are PBT Granules?",
        text: "PBT stands for Polybutylene Terephthalate. It is an engineering polymer, which means it performs better than common plastics like PP or PE when parts face heat, load and electrical stress. Glass-filled PBT has glass fiber added to the polymer. This makes it stiffer and more heat resistant, so it is widely used in electrical products.",
        items: ["Stiff and strong", "High heat resistance", "Reliable electrical performance", "Stable shape in finished parts"],
      },
      range: {
        title: "Our Glass-Filled PBT Granules",
        text: "We compound PBT granules in natural and custom colours using twin and single screw extrusion. The pellets have a uniform size and clean cut, so they feed evenly into your moulding machine. If you need a specific shade, send us a sample or a shade code and our lab will match it.",
        items: [
          "Glass-filled PBT grades",
          "Natural and custom colours",
          "Same colour and performance batch after batch",
          "Strong, branded packaging for safe transport and storage",
        ],
      },
      thermal: {
        title: "Thermal Properties of PBT (20% Glass Filled)",
        text: "Heat performance is the main reason buyers choose PBT. These are typical values for PBT GF20.",
        head: ["Property", "Typical Value"],
        rows: [
          ["Heat deflection temperature (HDT)", "205°C"],
          ["Vicat softening point", "215°C"],
          ["Continuous use temperature", "140°C"],
          ["Processing temperature", "230–250°C"],
        ],
      },
      compare: {
        title: "PBT vs ABS vs PC: Which One Should You Choose?",
        text: "Each engineering polymer has its own strength. This comparison helps you match the material to your part's working temperature.",
        head: ["Property", "PBT (GF20)", "PC", "ABS"],
        rows: [
          ["Heat deflection", "205°C", "132°C", "95°C"],
          ["Continuous use", "140°C", "125°C", "80°C"],
          ["Processing", "230–250°C", "280–300°C", "200–220°C"],
          ["Best for", "Parts near hot contacts, MCBs, lamp holders", "LED housings, switches, covers", "Everyday moulded parts"],
        ],
        summary:
          "In short, choose PBT when heat resistance matters most, PC when you need impact strength and transparency, and ABS for easy, economical moulding.",
        footnote:
          "Typical values for standard grades. PBT is shown as 20% glass filled. Actual properties vary by grade, so ask for the datasheet of your specific grade.",
      },
      uses: {
        title: "Where Are PBT Granules Used?",
        text: "PBT is a first choice where parts must stay stable near heat and live electrical contacts.",
        items: ["MCB housings", "Lamp holders", "Parts close to hot contacts", "Electrical and industrial components"],
      },
      why: {
        title: "Why Choose Us as Your PBT Granules Manufacturer in Delhi?",
        text: "We compound our granules in our own plant, so you buy directly from the maker. Every lot is checked before it ships, which keeps your moulding line free from surprises.",
        items: [
          { name: "Certified quality:", text: "ISO 9001:2015, ISO 14001:2015, MSME registered and RoHS compliant" },
          { name: "In-house testing lab:", text: "8 test instruments for colour, impact strength, melt flow and tensile strength" },
          { name: "Strong capacity:", text: "5000+ MT per year" },
          { name: "Custom colour matching:", text: "Shades matched to your sample" },
          { name: "Wide network:", text: "105+ distributors across India" },
          { name: "Application support:", text: "Share your part and working temperature, and we suggest the right grade" },
        ],
      },
      checklist: {
        title: "How to Choose a PBT Granules Manufacturer",
        text: "Not every supplier offers the same quality. Use this checklist before you place an order.",
        items: [
          "Is the supplier a real manufacturer with its own plant?",
          "Does it hold ISO and RoHS certificates?",
          "Does it test every batch in a lab?",
          "Can it match your colour and keep it consistent?",
          "Can it share a datasheet for the grade?",
          "Does it supply on time and in your required quantity?",
        ],
        note: "We are happy to answer yes to each of these.",
      },
      quality: {
        title: "How We Check Quality",
        text: "Every sample travels through our lab before the lot is cleared. Test pieces are moulded, then checked for impact strength, melt flow and tensile strength. The shade is confirmed with a spectrophotometer. This is why granules you receive today perform the same as the last lot.",
      },
      delhi: {
        title: "Made in Delhi, Delivered Across India",
        text: "Our unit is in Mangolpuri Industrial Area, Delhi. Being a PBT granules manufacturer in Delhi NCR means quicker dispatch for nearby buyers and easy communication with our team. Through our distributor network, we also deliver to customers in every region of India.",
      },
      order: {
        title: "How to Order",
        steps: [
          "Share your grade, colour and approximate quantity",
          "Tell us your part and working temperature if you need guidance",
          "Receive your quote and sample",
          "Confirm the order and get dispatch",
        ],
      },
      quote: {
        title: "Get Your Quote Today",
        text: "Looking for a [PBT granules manufacturer in Delhi](/contact/) you can rely on? Send us your requirement and we will respond with the right compound.",
        email: "info@shriganeshpolymer.in",
        address: "E-64 & 51, Mangolpuri Industrial Area, Phase-II, Delhi-110034",
      },
      faqs: [
        { q: "Who is the best PBT granules manufacturer in Delhi?", a: "The best choice is a manufacturer with its own plant, ISO certification, in-house batch testing and steady supply. Shri Ganesh Polymer offers all of this. We are ISO 9001 and 14001 certified, compound glass-filled PBT at our Mangolpuri plant, test every batch in our lab and supply across India through 105+ distributors." },
        { q: "What should I check before choosing a PBT granules manufacturer?", a: "Check that the supplier has its own plant, ISO certification, a testing lab, colour matching ability, a datasheet for the grade and a record of on-time supply." },
        { q: "What are PBT granules?", a: "PBT granules are small pellets of Polybutylene Terephthalate, an engineering polymer. They are moulded into strong, heat-resistant and electrically reliable parts." },
        { q: "What are PBT granules used for?", a: "They are used in MCB housings, lamp holders and other electrical and industrial parts that sit near hot contacts." },
        { q: "What is the heat resistance of glass-filled PBT?", a: "Typical 20% glass-filled PBT has a heat deflection temperature of about 205°C and a continuous use temperature of about 140°C. Exact values depend on the grade." },
        { q: "Can you match a custom colour?", a: "Yes. Share a sample or shade code and our lab will match the colour." },
        { q: "Is PBT better than ABS or PC for electrical parts?", a: "PBT has the highest heat resistance of the three. Glass-filled PBT handles about 140°C continuous use, compared with about 125°C for PC and 80°C for ABS. The best choice depends on your part's working temperature." },
        { q: "How is the quality of your granules checked?", a: "Every batch is tested in our in-house lab for colour, impact strength, melt flow index and tensile strength before dispatch." },
        { q: "Do you supply across India?", a: "Yes. We compound in Delhi and supply across India through 105+ distributors." },
        { q: "How do I get a quote or sample?", a: "Share your grade, colour and approximate quantity by phone, WhatsApp, email or the enquiry form, and our team will respond." },
      ],
    },
    image: "/pbt-granules.webp",
    tag: "Electrical & Industrial",
    accent: "#4caf27",
    desc: "Semi-crystalline polyester compounded with glass fibre and additives for strength and stiffness.",
    long: [
      "Semi-crystalline engineered thermoplastic from the polyester family, with high molecular weight. PBT granules are strong, stiff and engineerable — suitable for demanding industrial applications, in shades ranging from white to light colours.",
      "Compounded with PBT resins, fibreglass fillings and additives that enhance strength and functionality, they are widely used in automotive, electrical and electronic components.",
    ],
    features: ["High stiffness", "Glass-filled grades", "Electrical performance", "Long-term durability"],
    grades: ["PBT Glass Filled"],
    apps: "Terminal blocks, MCB housings, LED bulb bodies, lamp holders, B22 caps",
    applications: [
      { img: "/applications/pbt/terminal.png", label: "Terminal blocks" },
      { img: "/applications/pbt/bulb.png", label: "GU10 LED bulbs" },
      { img: "/applications/pbt/bulb-holder.png", label: "B22 bulb caps" },
      { img: "/applications/pbt/led-bulb.png", label: "LED bulb bodies" },
      { img: "/applications/pbt/MCB.png", label: "MCB housings" },
      { img: "/applications/pbt/connectors.png", label: "Terminal connectors" },
      { img: "/applications/pbt/lamp.png", label: "Lamp holders" },
    ],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

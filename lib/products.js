// Single source for product data — used by the homepage cards and the
// /products/[slug] detail pages.
export const products = [
  {
    slug: "pc",
    code: "PC",
    name: "Polycarbonate",
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
      { img: "/applications/pc/led-panel.webp", label: "LED panel & downlights" },
      { img: "/applications/pc/led-batten.webp", label: "LED batten housings" },
      { img: "/applications/pc/switches.webp", label: "Modular switches & sockets" },
      { img: "/applications/pc/charger-cctv.webp", label: "Chargers & CCTV housings" },
      { img: "/applications/pc/meter-box.webp", label: "Meter boxes" },
      { img: "/applications/pc/luggage.webp", label: "Luggage shells" },
    ],
  },
  {
    slug: "abs",
    code: "ABS",
    name: "Acrylonitrile Butadiene Styrene",
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
      { img: "/applications/abs/plug.webp", label: "2-pin electrical plug" },
      { img: "/applications/abs/gang-box.webp", label: "Modular electrical gang boxes" },
      { img: "/applications/abs/keyboard.webp", label: "Keyboard" },
      { img: "/applications/abs/set-top-box.webp", label: "Set-top box" },
      { img: "/applications/abs/junction-box.webp", label: "ABS junction box" },
    ],
  },
  {
    slug: "pbt",
    code: "PBT",
    name: "Polybutylene Terephthalate",
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
      { img: "/applications/pbt/terminal-block.webp", label: "Terminal blocks" },
      { img: "/applications/pbt/gu10-bulb.webp", label: "GU10 LED bulbs" },
      { img: "/applications/pbt/b22-holder.webp", label: "B22 bulb caps" },
      { img: "/applications/pbt/led-bulb.webp", label: "LED bulb bodies" },
      { img: "/applications/pbt/mcb.webp", label: "MCB housings" },
      { img: "/applications/pbt/connector.webp", label: "Terminal connectors" },
      { img: "/applications/pbt/lamp-holder.webp", label: "Lamp holders" },
    ],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

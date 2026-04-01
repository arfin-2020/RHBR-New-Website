import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ─── Brand Tokens ──────────────────────────────────────────────────────────────
const B      = "#26140a";
const B2     = "#442713";
const CREAM  = "#faf5f0";
const MUTED  = "#9e7a5f";
const BORDER = "#ecdfd4";

// ─── Full Menu Data ────────────────────────────────────────────────────────────
const MENU = {
  "Biryani": {
    color: "#7c2d12",
    items: [
      { id: 1,  name: "Zaffrani Chicken Dum Biryani (Fresh Chicken)",       desc: "Fresh chicken slow-cooked on dum with saffron & whole spices.",              badge: "Signature",  image: "./assets/Zaffrani Chicken Biryani.jpg", pricing: { Single: "1.500", Couple: "3.000", Family: "5.900" } },
      { id: 2,  name: "Chicken Biryani (Regular)",           desc: "Classic Hyderabadi style chicken biryani with aromatic basmati rice.",                      badge: "Popular",    image: "./assets/Chicken Dum Biryani.jpg",          pricing: { Single: "0.990", Couple: "2.100", Family: "3.400" } },
      { id: 3,  name: "Zaffrani Mutton Biryani (Omani Mutton)",             desc: "Omani mutton cooked on dum with saffron for a royal finish.",                 badge: "Royal",      image: "./assets/Zaffrani Mutton Biryani.png",    pricing: { Single: "2.500", Couple: "5.000", Family: "9.900" } },
      { id: 4,  name: "Mutton Biryani",                      desc: "Fragrant basmati rice layered with spiced fresh mutton, slow-cooked on dum.", badge: "Hot",        image: "./assets/Mutton Biryani.jpg",           pricing: { Single: "1.700", Couple: "3.200", Family: "6.000" } },
      { id: 5,  name: "Hyderabadi Chicken Tandoori Biryani", desc: "Tandoori chicken layered in aromatic biryani rice.",                         badge: "Special",    image: "./assets/Chicken Tandoori Biryani.png",            pricing: { Quarter: "1.800", Half: "2.200", Full: "3.400" } },
      { id: 6,  name: "Hyderabadi Chicken 65 Biryani",       desc: "Crispy chicken 65 tossed through fragrant biryani rice.",                    badge: "Spicy",      image: "./assets/65-Biryani.jpg", pricing: { Single: "1.690" } },
      { id: 7,  name: "Egg Biryani",                         desc: "Light and aromatic egg biryani with traditional spices.",                     badge: "Light",      image: "./assets/Egg Biryani.jpg",            pricing: { Single: "0.850" } },
      { id: 8,  name: "Fish Biryani",                        desc: "Tender fish cooked in fragrant spiced basmati rice.",                         badge: "Fresh",      image: "./assets/Fish Biryani.jpg",            pricing: { Single: "1.600" } },
      { id: 9,  name: "Paneer Biryani",                      desc: "Creamy paneer layered with aromatic saffron-infused rice.",                   badge: "Vegetarian", image: "./assets/paneer-biryani.png",            pricing: { Single: "1.490" } },
      { id: 10, name: "Veg Biryani",                         desc: "Garden-fresh vegetables slow-cooked with fragrant basmati.",                  badge: "Vegan",      image: "./assets/Veg-Biryani.jpg",            pricing: { Single: "0.790" } },
    ],
  },
  "HYD Special": {
    color: "#92400e",
    items: [
      { id: 11, name: "Mutton Haleem",          desc: "Slow-cooked mutton & lentil porridge — the ultimate Hyderabadi comfort dish.", badge: "Iconic",   note: "Friday Special",   image: "https://royalhyderabadioman.com/wp-content/uploads/2026/02/Haleem-2-1-1024x720.jpg",   pricing: { Quarter: "1.000", Single: "1.650", "0.5 Kg": "2.000", "1 Kg": "3.400" } },
      { id: 12, name: "Nihari Sheep Paya",      desc: "Slow-cooked trotters in a rich overnight broth with aromatic spices.",         badge: "Must Try", note: "Friday Special",   image: "./assets/Nihari Paya.jpg", pricing: { Single: "1.200" } },
      { id: 13, name: "Mutton Tahari",          desc: "One-pot mutton rice cooked with spices — a Hyderabadi home classic.",          badge: "Special",  note: "Saturday Special", image: "./assets/Mutton Tahari.jpg",        pricing: { Single: "1.290" } },
      { id: 14, name: "Khichdi Khatta Kheema", desc: "Lentil rice paired with tangy kheema — unique Hyderabadi street food.",        badge: "Heritage", note: "Sunday Special",   image: "./assets/Khichdi Khatta Kheema.jpg",         pricing: { Single: "0.900" } },
      { id: 15, name: "Bagara Khana Dalcha",   desc: "Spiced basmati rice served with lentil dalcha curry.",                         badge: "Classic",  note: "Monday Special",   image: "./assets/Bagara Khana Dalcha.jpg",         pricing: { Single: "1.290" } },
      { id: 16, name: "Mutton Marag",          desc: "A light yet flavorful soup made with tender mutton & aromatic spices.",        badge: "Warming",                            image: "https://royalhyderabadioman.com/wp-content/uploads/2026/02/Mutton-Marag-1024x720.jpg",   pricing: { Single: "1.700" } },
    ],
  },
  "Kebabs": {
    color: "#7f1d1d",
    items: [
      { id: 17, name: "Chicken Tandoori",     desc: "Whole chicken marinated in tandoori spices, roasted in a clay oven.",           badge: "Classic",  image: "./assets/Tandoori-Chicken.jpg", pricing: { Quarter: "0.900", Half: "1.750", Full: "2.300" } },
      { id: 18, name: "Chicken Reshmi Kebab", desc: "Silky smooth chicken kebabs marinated in cream & cashew paste.",                badge: "Creamy",   image: "./assets/chicken-reshmi-kabab.jpg", pricing: { Single: "2.000" } },
      { id: 19, name: "Chicken Tikka Kebab",  desc: "Juicy chicken tikka marinated in yogurt and spices, tandoor-grilled.",          badge: "Tandoor",  image: "./assets/Chicken-Tikka-Kebab.jpg", pricing: { Single: "2.000" } },
      { id: 20, name: "Paneer Tikka Kebab",   desc: "Soft paneer cubes marinated in spiced yogurt and grilled to perfection.",       badge: "Vegetarian", image: "./assets/paneer-tikka-2.jpg", pricing: { Single: "2.100" } },
      { id: 21, name: "Chicken Lollypop",     desc: "Crispy spiced chicken lollypops — perfect party starter.",                      badge: "Crispy",   image: "./assets/Chicken-Lollipop.jpg", pricing: { Single: "2.000" } },
      { id: 22, name: "Mutton Seekh Kebab",   desc: "Minced mutton blended with herbs and spices, grilled on skewers.",              badge: "Grilled",  image: "./assets/mutton-Sheekh-kabab.jpg", pricing: { Single: "2.100" } },
    ],
  },
  "Chicken": {
    color: "#854d0e",
    items: [
      { id: 23, name: "Chicken Curry",      desc: "Classic Hyderabadi chicken curry with 1 roti included.",                 badge: "Combo",     note: "Comes with 1 Roti", image: "./assets/Chicken Curry.jpg", pricing: { Half: "0.700", Full: "1.200" } },
      { id: 24, name: "Butter Chicken",     desc: "Rich, creamy tomato-based butter chicken — a crowd favourite.",           badge: "Favourite", image: "./assets/Butter Chicken.jpg", pricing: { Single: "1.200" } },
      { id: 25, name: "Chicken Manchurian", desc: "Indo-Chinese chicken in a spiced soy-ginger sauce.",                     badge: "Fusion",    image: "./assets/Chicken Manchurian.jpg", pricing: { Single: "1.700" } },
      { id: 26, name: "Dragon Chicken",     desc: "Crispy chicken tossed in a fiery dragon sauce.",                         badge: "Spicy",     image: "./assets/Dragon Chicken.jpg", pricing: { Single: "1.700" } },
      { id: 27, name: "Chilly Chicken Dry", desc: "Bold Indo-Chinese dry chilly chicken with peppers & onions.",             badge: "Hot",       image: "./assets/Chilly Chicken Dry.png", pricing: { Single: "1.700" } },
      { id: 28, name: "Chicken 65",         desc: "Deep-fried spiced chicken — a South Indian classic in dry or gravy.",    badge: "Star",      image: "./assets/Chicken65.png", pricing: { Dry: "1.500", Gravy: "1.500" } },
      { id: 29, name: "Crispy Fried Chicken",     desc: "Golden-fried crispy chicken with a light spiced coating.",               badge: "Crispy",    image: "./assets/Crispy Fried Chicken.jpg", pricing: { Single: "1.700" } },
    ],
  },
  "Mutton": {
    color: "#6b2737",
    items: [
      { id: 30, name: "Talawa Gosht", desc: "Slow-cooked mutton pieces pan-fried with spices. Comes with 1 roti.", badge: "Bold",      note: "Comes with 1 Roti", image: "./assets/Talawa-gosht.jpg", pricing: { Half: "1.100", Full: "2.100" } },
      { id: 31, name: "Mutton Curry", desc: "Rich, hearty mutton curry cooked with Hyderabadi spices.",            badge: "Royal",     note: "Comes with 1 Roti", image: "./assets/Mutton Masala.jpg",    pricing: { Half: "0.900", Full: "1.800" } },
      { id: 32, name: "Bheja Fry",   desc: "Tender brain slow-cooked with aromatic spices and herbs, lightly fried.", badge: "Signature", image: "https://royalhyderabadioman.com/wp-content/uploads/2026/02/Bheja-Fry-1024x720.jpg", pricing: { Single: "1.00" } },
    ],
  },
  "Veg": {
    color: "#365314",
    items: [
      { id: 33, name: "Paneer Butter Masala", desc: "Creamy, rich paneer in a silky tomato-butter gravy.",         badge: "Everyday", note: "Everyday Special",   image: "./assets/Butter Panieer Masala.jpg", pricing: { Half: "0.600", Full: "1.500" } },
      { id: 34, name: "Aloo Gobi",            desc: "Potato and cauliflower cooked with light spices.",             badge: "Light",    note: "Sunday Special",    image: "./assets/Aloo Gobi.jpg", pricing: { Single: "0.400" } },
      { id: 35, name: "Chana Dal Palak",      desc: "Split chickpea lentils cooked with spinach and spices.",       badge: "Healthy",  note: "Monday Special",    image: "./assets/Chana Daal.jpg", pricing: { Single: "0.400" } },
      { id: 36, name: "Mix Veg",              desc: "Fresh seasonal vegetables cooked with traditional spices.",    badge: "Fresh",    note: "Tuesday Special",   image: "./assets/Mix Veg.jpg", pricing: { Single: "0.400" } },
      { id: 37, name: "Aloo Chana",           desc: "Hearty chickpea and potato curry with aromatic spices.",       badge: "Classic",  note: "Wednesday Special", image: "./assets/Aloo Chana.jpg", pricing: { Single: "0.400" } },
      { id: 38, name: "Kaddu Dalcha",         desc: "Bottle gourd cooked with lentils in a tangy, spiced gravy.",  badge: "Special",  note: "Thursday Special",  image: "./assets/Kaddu Dalcha.jpg", pricing: { Single: "0.400" } },
      { id: 39, name: "Aloo Methi",           desc: "Fenugreek leaves cooked with potatoes — a classic comfort.",  badge: "Aromatic", note: "Friday Special",    image: "./assets/Aloo Methi.jpg", pricing: { Single: "0.400" } },
      { id: 40, name: "Baigan Salan",         desc: "Eggplant cooked in tangy peanut and sesame gravy.",           badge: "HYD Classic", note: "Saturday Special", image: "./assets/baingan-salan.png", pricing: { Single: "0.400" } },
      { id: 41, name: "Chilly Paneer",        desc: "Crispy paneer tossed in Indo-Chinese chilly sauce.",          badge: "Fusion",   image: "./assets/chilli-paneer-recipe.png", pricing: { Single: "1.400" } },
    ],
  },
  "Fish": {
    color: "#0c4a6e",
    items: [
      { id: 42, name: "Fish Fry",   desc: "Crispy golden-fried fish marinated in special Hyderabadi spices.", badge: "Fresh", image: "./assets/Fish Fry.jpg", pricing: { Single: "1.500" } }, 
      { id: 43, name: "Fish Curry", desc: "Tender fish cooked in a tangy, spiced tomato-based curry.",        badge: "Bold",  image: "./assets/Fish Curry.jpg", pricing: { Single: "1.700" } },
    ],
  },
  "Chinese": {
    color: "#450a0a",
    items: [
      { id: 44, name: "Chicken Fried Rice",           desc: "Wok-tossed chicken with basmati rice and vegetables.",                    badge: "Popular", image: "./assets/Chicken Fried Rice.jpg",    pricing: { Single: "1.500" } },
      { id: 45, name: "Chicken 65 Fried Rice",        desc: "Crispy chicken 65 mixed through flavoured fried rice.",                   badge: "Bold",    image: "https://i0.wp.com/www.fatimasfabulouskitchen.com/wp-content/uploads/2022/03/IMG_4172.jpg?resize=610%2C915&ssl=1", pricing: { Single: "2.000" } },
      { id: 46, name: "Egg Fried Rice",               desc: "Fluffy eggs tossed with rice and vegetables Chinese style.",              badge: "Classic", image: "./assets/Egg Fried Rice.jpg",    pricing: { Single: "1.200" } },
      { id: 47, name: "Veg Fried Rice",               desc: "Seasonal vegetables stir-fried with aromatic basmati rice.",             badge: "Veg",     image: "./assets/Veg Fried Rice.png",    pricing: { Single: "1.200" } },
      { id: 48, name: "Schezwan Fried Rice (Veg)",    desc: "Fiery Schezwan sauce tossed with vegetables and rice.",                  badge: "Fiery",   image: "./assets/Szechwan-Fried-Rice.png",    pricing: { Single: "1.500" } },
      { id: 49, name: "Schezwan Fried Rice (Non-Veg)",desc: "Schezwan-spiced rice with chicken — full of heat and flavour.",          badge: "Hot",     image: "./assets/Schezwan Fried Rice (Non-Veg).png",    pricing: { Single: "1.700" } },
      { id: 50, name: "Chicken Noodles",              desc: "Stir-fried noodles with chicken and vegetables.",                        badge: "Comfort", image: "./assets/Chicken Noodles.jpg",    pricing: { Single: "1.300" } },
      { id: 51, name: "Egg Noodles",                  desc: "Classic egg noodles stir-fried with vegetables.",                        badge: "Classic", image: "./assets/Egg Noodles.jpg",    pricing: { Single: "1.200" } },
      { id: 52, name: "Veg Noodles",                  desc: "Soft noodles tossed with fresh vegetables and soy.",                    badge: "Veg",     image: "./assets/Veg Noodles.jpg",    pricing: { Single: "1.300" } },
      { id: 53, name: "Chicken 65 Noodles",           desc: "Spiced chicken 65 mixed through stir-fried noodles.",                   badge: "Fusion",  image: "./assets/Chicken 65 Noodles.jpg", pricing: { Single: "1.300" } },
      { id: 54, name: "Schezwan Noodles (Veg)",       desc: "Fiery Schezwan sauce tossed through noodles with vegetables.",          badge: "Hot",     image: "./assets/Schezwan-Noodles-Veg.png",    pricing: { Single: "1.500" } },
      { id: 55, name: "Schezwan Noodles (Non-Veg)",   desc: "Schezwan chicken noodles — bold, fiery, unforgettable.",               badge: "Bold",    image: "./assets/chezwan-Noodles-Non-Veg.jpg",    pricing: { Single: "1.600" } },
    ],
  },
  "Breads & Rice": {
    color: "#78350f",
    items: [
      { id: 56, name: "Tandoori Roti",       desc: "Whole wheat roti baked in a traditional clay oven.",           badge: "Fresh",    image: "https://cdn.shopify.com/s/files/1/0551/8009/9722/files/4_b1ca596e-51a9-4fae-b067-071a80f26a14_480x480.png?v=1716792199", pricing: { Single: "0.050" } },
      { id: 57, name: "Chapati",             desc: "Soft hand-rolled whole wheat flatbread.",                      badge: "Soft",     image: "https://sandhyahariharan.co.uk/wp-content/uploads/2022/09/chapati_.jpg", pricing: { Single: "0.050" } },
      { id: 58, name: "Plain Naan",          desc: "Soft leavened bread baked to perfection in the tandoor.",      badge: "Classic",  image: "https://foodstreethalal.com/wp-content/uploads/2024/03/Plain-Naan-1.jpg", pricing: { Single: "0.100" } },
      { id: 59, name: "Butter Naan",         desc: "Leavened naan generously brushed with melted butter.",         badge: "Rich",     image: "https://t3.ftcdn.net/jpg/08/95/50/04/360_F_895500474_IDUMxbOGEBn29tyPyjG8oLEEWlK8ZlOg.jpg", pricing: { Single: "0.200" } },
      { id: 60, name: "Garlic Naan",         desc: "Fluffy naan topped with minced garlic and herbs.",             badge: "Aromatic", image: "https://zestfulkitchen.com/wp-content/uploads/2020/01/garlic-naan-cover_for-web.jpg", pricing: { Single: "0.200" } },
      { id: 61, name: "HYD Special Paratha", desc: "Flaky layered paratha — a Hyderabadi breakfast staple.",       badge: "HYD Style", image: "./assets/Hyderabadi Paratha.jpg", pricing: { Single: "0.100" } },
      { id: 62, name: "Biryani Rice",        desc: "Flavoured saffron basmati rice.",                              badge: "Fragrant", image: "https://images.deliveryhero.io/image/talabat/Menuitems/Biryani_Rice__A_centercro639092698249070911.jpg", pricing: { Single: "0.700" } },
      { id: 63, name: "Plain Rice",          desc: "Steamed white basmati rice.",                                  badge: "Simple",   image: "https://images.deliveryhero.io/image/talabat/Menuitems/Plain_Rice__A_centercropp639092698492672645.jpg", pricing: { Single: "0.400" } },
      { id: 64, name: "Zeera Rice",          desc: "Cumin-tempered basmati rice — light and aromatic.",            badge: "Aromatic", image: "./assets/Zeera_Rice.jpg", pricing: { Single: "0.500" } },
    ],
  },
  "Soups": {
    color: "#4a4a0a",
    items: [
      { id: 65, name: "Chicken Corn Soup", desc: "Warm, comforting sweet corn soup with chicken pieces.",          badge: "Comforting", image: "./assets/ChickenCornSoup.png", pricing: { Single: "0.800" } },
      { id: 66, name: "Manchow Soup",      desc: "Spicy, crispy-noodle-topped Indo-Chinese Manchow soup.",         badge: "Spicy",      image: "./assets/Manchow Soup.jpeg", pricing: { Single: "0.800" } },
    ],
  },
  "Desserts": {
    color: "#7c2d6b",
    items: [
      { id: 67, name: "Qubani Ka Meetha", desc: "Hyderabadi apricot dessert — sweet, rich and indulgent.",          badge: "Heritage", image: "./assets/Qubani Ka Meetha.jpg", pricing: { Single: "1.200" } },
      { id: 68, name: "Double Ka Meetha", desc: "Fried bread soaked in sugar syrup, topped with cream.",            badge: "Rich",     image: "./assets/Double Ka Meetha.jpg", pricing: { Single: "0.800" } },
      { id: 69, name: "Gulab Jamun",      desc: "Soft milk-solid dumplings soaked in rose-scented sugar syrup.",    badge: "Sweet",    image: "./assets/Gulab.jpg", pricing: { "2 pcs": "0.300" } },
      { id: 70, name: "Badam Kheer",      desc: "Creamy almond pudding — silky, fragrant and indulgent.",           badge: "Premium",  image: "./assets/Badam Ki Kheer.jpg", pricing: { Single: "0.400" } },
      { id: 71, name: "Kaddu Kheer",      desc: "Bottle gourd kheer with sago pearls, nuts & cardamom.",            badge: "Unique",   image: "./assets/Kaddu Kheer.jpg", pricing: { Single: "0.400" } },
      { id: 72, name: "Mango Kheer",      desc: "Creamy rice pudding infused with fresh mango.",                    badge: "Seasonal", image: "./assets/Mango Kheer.jpg", pricing: { Single: "0.500" } },
      { id: 73, name: "Rabdi",            desc: "Slow-cooked condensed milk dessert with pistachios.",              badge: "Luxury",   image: "./assets/Rabri.jpg", pricing: { Single: "0.500" } },
      { id: 74, name: "Sweets",           desc: "Assorted traditional Indian sweets.",                              badge: "Variety",  image: "./assets/Sweets.jpg", pricing: { Single: "0.400" } },
    ],
  },
  "Drinks & Tea": {
    color: "#1c3a2e",
    items: [
      { id: 75, name: "Royal Tea",          desc: "Hyderabadi signature chai — rich, creamy & aromatic.",   badge: "Signature",  image: "./assets/Karak Tea.jpg", pricing: { Single: "0.100" } },
      { id: 76, name: "Zaffrani Royal Tea", desc: "Royal chai infused with premium saffron strands.",       badge: "Premium",    image: "./assets/Zaffrani Royal Tea.png", pricing: { Single: "0.200" } },
      { id: 77, name: "Sulaimani Tea",      desc: "Spiced black tea with lemon — a South Indian classic.",  badge: "Soothing",   image: "./assets/Sulaimani Tea.png", pricing: { Single: "0.100" } },
      { id: 78, name: "Green Tea",          desc: "Light, refreshing green tea.",                           badge: "Healthy",    image: "./assets/Green Tea.png", pricing: { Single: "0.100" } },
      { id: 79, name: "Black Coffee",       desc: "Strong, aromatic black coffee.",                         badge: "Bold",       image: "./assets/Black Coffee.png", pricing: { Single: "0.100" } },
      { id: 80, name: "Fresh Milk Coffee",  desc: "Freshly brewed coffee with full-cream milk.",            badge: "Creamy",     image: "./assets/Fresh Milk Coffee.png", pricing: { Single: "0.300" } },
      { id: 81, name: "Water (Small)",      desc: "Chilled mineral water.",                                 badge: "Pure",       image: "https://images.deliveryhero.io/image/product-information-management/6836be3dfc3145bc6308202b.jpg", pricing: { Single: "0.100" } },
      { id: 82, name: "Water (Big)",        desc: "Large chilled mineral water.",                           badge: "Pure",       image: "./assets/Water Big.jpg", pricing: { Single: "0.200" } },
      { id: 83, name: "Pepsi",              desc: "Chilled Pepsi cola.",                                    badge: "Refreshing", image: "./assets/Pepsi.jpg", pricing: { Single: "0.300" } },
      { id: 84, name: "Mountain Dew",       desc: "Chilled Mountain Dew.",                                  badge: "Cool",       image: "./assets/Mountain Dew.jpg", pricing: { Single: "0.300" } },
      { id: 85, name: "Kinza",              desc: "Refreshing Kinza soft drink.",                           badge: "Fruity",     image: "./assets/Kinza.jpg", pricing: { Single: "0.300" } },
      { id: 86, name: "Fresh Juice",        desc: "Freshly pressed seasonal fruit juice.",                  badge: "Fresh",      image: "./assets/Fresh Juice.png", pricing: { Single: "0.900" } },
    ],
  },
};

const CATEGORIES = Object.keys(MENU);

// ─── Business Logic Helpers ────────────────────────────────────────────────────
/**
 * Returns true if this item has MULTIPLE pricing options.
 * Rule: more than 1 key in pricing object = show "View Options" button
 */
function hasMultipleOptions(pricing) {
  return Object.keys(pricing).length > 1;
}

/**
 * For single-price items, return the display price string.
 * Returns null if item has multiple options.
 */
function getSinglePrice(pricing) {
  const entries = Object.entries(pricing);
  if (entries.length !== 1) return null;
  const [, price] = entries[0];
  return price === "Market Price" ? "Market Price" : `${price} OMR`;
}

// ─── Skeleton Card ─────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div style={{
      background: "#fff", borderRadius: "20px",
      overflow: "hidden", border: `1px solid ${BORDER}`,
    }}>
      <div style={{
        height: "200px",
        background: "linear-gradient(90deg, #f0e8df 25%, #faf5f0 50%, #f0e8df 75%)",
        backgroundSize: "200% 100%",
        animation: "ms-shimmer 1.4s infinite",
      }} />
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ height: "18px", width: "70%", borderRadius: "6px", background: "#f0e8df" }} />
        <div style={{ height: "13px", width: "90%", borderRadius: "6px", background: "#f7f0eb" }} />
        <div style={{ height: "13px", width: "60%", borderRadius: "6px", background: "#f7f0eb" }} />
        <div style={{ height: "40px", borderRadius: "12px", background: "#f0e8df", marginTop: "8px" }} />
      </div>
    </div>
  );
}

// ─── Menu Card ─────────────────────────────────────────────────────────────────
function MenuCard({ item, index, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr,  setImgErr]  = useState(false);

  const multipleOptions = hasMultipleOptions(item.pricing);
  const singlePrice     = getSinglePrice(item.pricing);
  const isMarketPrice   = singlePrice === "Market Price";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => multipleOptions && onOpen(item)}
      style={{ cursor: multipleOptions ? "pointer" : "default", height: "100%" }}
    >
      <div style={{
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "#c4956a" : BORDER}`,
        boxShadow: hovered
          ? "0 20px 56px rgba(38,20,10,0.16)"
          : "0 2px 16px rgba(38,20,10,0.06)",
        transition: "box-shadow 0.35s ease, border-color 0.3s ease, transform 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        display: "flex", flexDirection: "column", height: "100%",
      }}>

        {/* ── Image ── */}
        <div style={{ position: "relative", height: "200px", overflow: "hidden", flexShrink: 0, background: "#f0e8df" }}>
          <motion.img
            src={imgErr ? "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80" : item.image}
            alt={item.name}
            onError={() => setImgErr(true)}
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* gradient */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(38,20,10,0.65) 0%, transparent 55%)",
            pointerEvents: "none",
          }} />

          {/* Badge — top left, text only, no emoji */}
          <div style={{
            position: "absolute", top: "12px", left: "12px",
            background: "rgba(255,255,255,0.93)",
            backdropFilter: "blur(6px)",
            borderRadius: "999px",
            padding: "3px 11px",
            fontSize: "10.5px",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            color: B2,
            letterSpacing: "0.04em",
          }}>
            {item.badge}
          </div>

          {/* Day note — top right */}
          {item.note && (
            <div style={{
              position: "absolute", top: "12px", right: "12px",
              background: "#26140a",
              borderRadius: "999px",
              padding: "3px 10px",
              fontSize: "9px",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              color: "#f5e8d8",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>
              {item.note}
            </div>
          )}

          {/* ── PRICE ON IMAGE — only for single-price items ── */}
          {!multipleOptions && (
            <div style={{
              position: "absolute", bottom: "12px", left: "14px",
              display: "flex", flexDirection: "column", gap: "1px",
            }}>
              <span style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "9.5px", fontWeight: 700,
                color: "rgba(255,255,255,0.65)",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                Price
              </span>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: isMarketPrice ? "12px" : "16px",
                fontWeight: 700,
                color: "#ffffff",
                textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                lineHeight: 1,
              }}>
                {singlePrice}
              </span>
            </div>
          )}
        </div>

        {/* ── Card Body ── */}
        <div style={{
          padding: "18px 20px 20px",
          display: "flex", flexDirection: "column",
          gap: "10px", flex: 1,
        }}>
          <h3 style={{
            margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: "16px", fontWeight: 700,
            color: B2, lineHeight: 1.3,
          }}>
            {item.name}
          </h3>

          <p style={{
            margin: 0,
            fontFamily: "'Lato', sans-serif",
            fontSize: "13px", color: MUTED,
            lineHeight: 1.72, flex: 1,
          }}>
            {item.desc}
          </p>

          {/*
            ── BOTTOM ACTION AREA ──
            RULE:
              multi-price  → "View Options" button
              single-price → thin divider + price confirmation line (no button)
          */}
          {multipleOptions ? (
            // ── Show "View Options" button ──
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                marginTop: "auto",
                background: hovered ? B : "transparent",
                border: `2px solid ${B}`,
                color: hovered ? "#f5e8d8" : B,
                borderRadius: "12px",
                padding: "11px 0",
                fontFamily: "'Lato', sans-serif",
                fontSize: "12px", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                transition: "background 0.3s ease, color 0.3s ease",
              }}
            >
              View Options
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.div>
          ) : (
            // ── No button — price already shown on image ──
            // Show a subtle "available now" strip so card height stays consistent
            <div style={{
              marginTop: "auto",
              borderTop: `1px solid ${BORDER}`,
              paddingTop: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <span style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "11px", color: "#b8956e",
                letterSpacing: "0.04em",
              }}>
                Available daily
              </span>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: isMarketPrice ? "12px" : "15px",
                fontWeight: 700, color: B2,
              }}>
                {singlePrice}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Pricing Modal ─────────────────────────────────────────────────────────────
function ItemModal({ item, onClose }) {
  const [imgErr, setImgErr] = useState(false);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(26,14,7,0.72)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 30 }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "28px",
          width: "100%", maxWidth: "500px",
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(26,14,7,0.35)",
          maxHeight: "90vh",
          display: "flex", flexDirection: "column",
        }}
      >
        {/* Image header */}
        <div style={{ position: "relative", height: "220px", flexShrink: 0 }}>
          <img
            src={imgErr ? "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80" : item.image}
            onError={() => setImgErr(true)}
            alt={item.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(38,20,10,0.82) 0%, rgba(38,20,10,0.08) 60%)",
          }} />

          {/* Close */}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "14px", right: "14px",
              width: "36px", height: "36px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.95)",
              border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
              fontSize: "18px", color: B2, fontWeight: 700,
              transition: "transform 0.2s",
            }}
          >
            ×
          </button>

          {/* Badge */}
          <div style={{
            position: "absolute", bottom: "14px", left: "16px",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "999px",
            padding: "4px 12px",
            fontSize: "11px",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600, color: B2,
            letterSpacing: "0.04em",
          }}>
            {item.badge}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "24px 28px 30px", overflowY: "auto", flex: 1 }}>
          {/* Name + note */}
          <div style={{ marginBottom: "10px" }}>
            <h2 style={{
              margin: "0 0 8px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "22px", fontWeight: 700, color: B2, lineHeight: 1.25,
            }}>
              {item.name}
            </h2>
            {item.note && (
              <span style={{
                display: "inline-block",
                background: "#fdf3e7",
                color: "#92400e",
                fontFamily: "'Lato', sans-serif",
                fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.09em", textTransform: "uppercase",
                padding: "3px 10px", borderRadius: "999px",
                border: "1px solid #fddfa4",
              }}>
                {item.note}
              </span>
            )}
          </div>

          {/* Description */}
          <p style={{
            margin: "0 0 22px",
            fontFamily: "'Lato', sans-serif",
            fontSize: "13.5px", color: MUTED, lineHeight: 1.75,
          }}>
            {item.desc}
          </p>

          {/* Divider */}
          <div style={{ height: "1px", background: BORDER, marginBottom: "20px" }} />

          {/* Pricing label */}
          <p style={{
            margin: "0 0 14px",
            fontFamily: "'Lato', sans-serif",
            fontSize: "10.5px", fontWeight: 700,
            color: MUTED, letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}>
            Pricing Options
          </p>

          {/* Pricing rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {Object.entries(item.pricing).map(([label, price], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  background: i === 0 ? "#faf5f0" : "#fff",
                  borderRadius: "14px",
                  border: `1px solid ${i === 0 ? "#e8d8c8" : BORDER}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "7px", height: "7px", borderRadius: "50%",
                    background: i === 0 ? B : "#d4b896",
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "14px", fontWeight: 700, color: B2,
                  }}>
                    {label}
                  </span>
                </div>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "17px", fontWeight: 700,
                  color: price === "Market Price" ? MUTED : B,
                }}>
                  {price === "Market Price" ? "Ask us" : `${price} OMR`}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function MenuSection() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const [search,    setSearch]    = useState("");
  const [modalItem, setModalItem] = useState(null);
  const [loading,   setLoading]   = useState(false);
  const tabsRef = useRef(null);

  const switchTab = useCallback((cat) => {
    if (cat === activeTab) return;
    setLoading(true);
    setSearch("");
    setTimeout(() => { setActiveTab(cat); setLoading(false); }, 260);
  }, [activeTab]);

  const displayedItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return MENU[activeTab].items;
    return CATEGORIES.flatMap(c => MENU[c].items).filter(it =>
      it.name.toLowerCase().includes(q) ||
      it.desc.toLowerCase().includes(q) ||
      it.badge.toLowerCase().includes(q)
    );
  }, [activeTab, search]);

  const isSearching = search.trim().length > 0;

  return (
    <section style={{
      background: CREAM,
      padding: "100px 0 120px",
      fontFamily: "'Lato', sans-serif",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap');

        @keyframes ms-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── Tabs ── */
        .ms-tabs {
          display: flex; gap: 6px;
          overflow-x: auto; scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding: 4px 2px;
        }
        .ms-tabs::-webkit-scrollbar { display: none; }

        .ms-tab {
          flex-shrink: 0;
          border: none; cursor: pointer;
          padding: 10px 20px;
          border-radius: 12px;
          font-family: 'Lato', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.04em;
          display: flex; align-items: center; gap: 6px;
          transition: transform 0.2s;
          position: relative; white-space: nowrap;
        }
        .ms-tab:hover { transform: translateY(-1px); }

        /* ── Search ── */
        .ms-search {
          width: 100%;
          padding: 14px 18px 14px 46px;
          border: 1.5px solid ${BORDER};
          border-radius: 16px;
          background: #fff;
          font-family: 'Lato', sans-serif;
          font-size: 14px; color: ${B2};
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          box-sizing: border-box;
        }
        .ms-search:focus {
          border-color: ${B};
          box-shadow: 0 0 0 3px rgba(38,20,10,0.08);
        }
        .ms-search::placeholder { color: #c4a88a; }

        /* ── Grid ── */
        .ms-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 1100px) { .ms-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 780px)  { .ms-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 480px)  { .ms-grid { grid-template-columns: 1fr; } }

        /* ── CTA button ── */
        .ms-view-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: ${B}; color: #f5e8d8;
          border: 2px solid ${B}; border-radius: 14px;
          padding: 15px 38px;
          font-family: 'Lato', sans-serif; font-weight: 700;
          font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none; cursor: pointer;
          transition: background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.22s;
        }
        .ms-view-btn:hover {
          background: transparent; color: ${B};
          box-shadow: 0 8px 28px rgba(38,20,10,0.13);
          transform: translateY(-3px);
        }
        .ms-view-btn:active { transform: scale(0.97); }
      `}</style>

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 32px" }}>

        {/* ══ HEADER ══ */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic", fontSize: "17px",
              color: "#8b5e3c", marginBottom: "10px",
            }}
          >
            Crafted with passion
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(34px,4vw,54px)",
              fontWeight: 700, color: B2,
              margin: "0 0 18px", lineHeight: 1.1,
            }}
          >
            Our Signature Menu
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            style={{
              width: "60px", height: "3px",
              background: B, borderRadius: "2px",
              margin: "0 auto 18px", transformOrigin: "center",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "15px", color: MUTED,
              maxWidth: "520px", margin: "0 auto", lineHeight: 1.75,
            }}
          >
            Discover our exquisite selection of traditional Hyderabadi dishes, crafted with the finest ingredients & timeless recipes.
          </motion.p>
        </div>

        {/* ══ SEARCH ══ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ position: "relative", maxWidth: "560px", margin: "0 auto 40px" }}
        >
          <svg
            width="17" height="17" viewBox="0 0 24 24" fill="none"
            stroke={MUTED} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
          >
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            className="ms-search"
            type="text"
            placeholder="Search biryani, haleem, kebab…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              style={{
                position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", cursor: "pointer",
                fontSize: "18px", color: MUTED, lineHeight: 1, padding: 0,
              }}
            >
              ×
            </button>
          )}
        </motion.div>

        {/* ══ TABS ══ */}
        {!isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "8px",
              marginBottom: "44px",
              boxShadow: "0 2px 20px rgba(38,20,10,0.07)",
              border: `1px solid ${BORDER}`,
            }}
          >
            <div className="ms-tabs" ref={tabsRef}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className="ms-tab"
                  onClick={() => switchTab(cat)}
                  style={{
                    background: activeTab === cat ? B : "transparent",
                    color: activeTab === cat ? "#f5e8d8" : MUTED,
                  }}
                >
                  {activeTab === cat && (
                    <motion.div
                      layoutId="ms-active-tab"
                      style={{
                        position: "absolute", inset: 0,
                        background: B, borderRadius: "12px", zIndex: -1,
                      }}
                      transition={{ type: "spring", stiffness: 440, damping: 34 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>{cat}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search result count */}
        {isSearching && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "13.5px", color: MUTED,
              marginBottom: "28px",
            }}
          >
            {displayedItems.length} result{displayedItems.length !== 1 ? "s" : ""} for{" "}
            <strong style={{ color: B2 }}>"{search}"</strong>
          </motion.p>
        )}

        {/* ══ GRID ══ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isSearching ? `search-${search}` : activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32 }}
          >
            {loading ? (
              <div className="ms-grid">
                {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
              </div>
            ) : displayedItems.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px", color: B2, marginBottom: "8px",
                }}>
                  No items found
                </p>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "14px", color: MUTED,
                }}>
                  Try a different search term
                </p>
              </div>
            ) : (
              <div className="ms-grid">
                {displayedItems.map((item, i) => (
                  <MenuCard key={item.id} item={item} index={i} onOpen={setModalItem} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ══ BOTTOM CTA ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{
            textAlign: "center", marginTop: "64px",
            paddingTop: "48px", borderTop: `1px solid ${BORDER}`,
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: "16px",
          }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic", color: "#8b5e3c",
            fontSize: "15px", margin: 0,
          }}>
            Want to explore our complete collection?
          </p>
          <a href="/menu" className="ms-view-btn">
            View Complete Menu
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.3"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* ══ MODAL ══ */}
      <AnimatePresence>
        {modalItem && <ItemModal item={modalItem} onClose={() => setModalItem(null)} />}
      </AnimatePresence>
    </section>
  );
}
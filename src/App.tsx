/**
 * Hallmark · genre: playful · macrostructure: Bento Grid
 * nav: N7 Brutal slab · footer: Ft8 Marquee scroll
 * theme: brand-palette (light/bold-display/warm-rust)
 * @license Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, type CSSProperties } from "react";
import {
  Pizza,
  ArrowRight,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Youtube,
  Utensils,
  Leaf,
  Wine,
  Menu,
  X,
  Mail,
  Send,
} from "lucide-react";

// ─── Type helper for CSS custom properties in inline styles ──────────────────
type TileStyle = CSSProperties & { "--tile-i"?: number };

// ─── Contact view ────────────────────────────────────────────────────────────
const ContactView = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    className="max-w-7xl mx-auto px-4 py-20 relative z-10"
  >
    <div className="text-center mb-20">
      <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter italic tilted inline-block">
        Kapcsolat
      </h2>
      <div className="h-2 bg-primary w-40 mx-auto rounded-full opacity-20"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 items-start">
      <div className="space-y-12">
        {[
          { Icon: MapPin, label: "Címünk", value: "6500 Baja,\nTóth Kálmán tér 5." },
          { Icon: Phone, label: "Telefonszám", value: "+36 30 755 6846" },
          { Icon: Mail, label: "E-mail", value: "info@pinocchiopizza.hu" },
        ].map(({ Icon, label, value }) => (
          <div key={label} className="flex gap-8 group">
            <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-[background-color,color] duration-[var(--dur-short)]">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-mono font-black uppercase tracking-widest text-sm mb-2 opacity-50">
                {label}
              </h4>
              <p className="text-2xl font-bold leading-tight whitespace-pre-line">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface p-10 md:p-16 rounded-[48px] solid-shadow-dark relative overflow-hidden border border-surface-dim">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Vezetéknév", "Keresztnév"].map((name) => (
              <div key={name} className="space-y-2">
                <label className="font-mono font-bold uppercase tracking-widest text-[10px] opacity-60 ml-2 block">
                  {name}
                </label>
                <input
                  type="text"
                  className="w-full bg-surface-container border-2 border-surface-dim rounded-2xl px-6 py-4 focus:border-primary focus-visible:outline-none transition-[border-color] duration-[var(--dur-micro)] font-medium"
                />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <label className="font-mono font-bold uppercase tracking-widest text-[10px] opacity-60 ml-2 block">
              Email *
            </label>
            <input
              type="email"
              required
              className="w-full bg-surface-container border-2 border-surface-dim rounded-2xl px-6 py-4 focus:border-primary focus-visible:outline-none transition-[border-color] duration-[var(--dur-micro)] font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono font-bold uppercase tracking-widest text-[10px] opacity-60 ml-2 block">
              Üzenet
            </label>
            <textarea
              rows={4}
              className="w-full bg-surface-container border-2 border-surface-dim rounded-3xl px-6 py-4 focus:border-primary focus-visible:outline-none transition-[border-color] duration-[var(--dur-micro)] font-medium resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-6 bg-on-surface text-surface font-mono font-bold uppercase tracking-[0.3em] rounded-2xl solid-shadow-dark hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-[var(--dur-short)] flex items-center justify-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Küldés <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>

    <div className="w-full h-[500px] rounded-[48px] overflow-hidden solid-shadow-dark border-4 border-surface-dim">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.2504265737527!2d18.951555176882203!3d46.18555557110185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742f1bcb1000001%3A0xc319223e745679ac!2sPinocchio%20Pizzeria!5e0!3m2!1shu!2shu!4v1716020000000!5m2!1shu!2shu"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Pinocchio Pizzeria helyszíne"
      />
    </div>
  </motion.div>
);

// ─── Menu data ────────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: "pizza",  name: "Pizza",  icon: Pizza },
  { id: "teszta", name: "Tészta", icon: Utensils },
  { id: "salata", name: "Saláta", icon: Leaf },
  { id: "italok", name: "Italok", icon: Wine },
];

const POPULAR_ITEMS = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Házi paradicsomszósz, bivalymozzarella, friss bazsalikom, extra szűz olívaolaj.",
    price: "2 890 Ft",
    image: `${import.meta.env.BASE_URL}images/sajat-pizza.jpg`,
  },
  {
    id: 2,
    name: "Bacon & Cheese",
    description: "Tejfölös alap, dupla bacon, mozzarella, cheddar, lilahagyma.",
    price: "3 490 Ft",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Pesto Tészta",
    description: "Penne tészta, házi bazsalikomos pesto, fenyőmag, parmezán forgács.",
    price: "3 190 Ft",
    image: `${import.meta.env.BASE_URL}images/sajat-teszta.jpg`,
  },
];

const PIZZA_MENU_DATA = [
  { id: 1,  name: "MARGHERITA",                   ingredients: "Paradicsomszósz, mozzarella",                                                                                      price: "2 690,- Ft" },
  { id: 2,  name: "SALAME",                        ingredients: "Paradicsomszósz, mozzarella, olasz (dolce) szalámi",                                                               price: "3 090,- Ft" },
  { id: 3,  name: "SALAME PICCANTE",               ingredients: "Paradicsomszósz, mozzarella, olasz csípős szalámi",                                                                price: "3 090,- Ft" },
  { id: 4,  name: "FUNGHI",                        ingredients: "Paradicsomszósz, mozzarella, gomba",                                                                               price: "2 790,- Ft" },
  { id: 5,  name: "PINOCCHIO",                     ingredients: "Paradicsomszósz, mozzarella, rukkola, pármai sonka, parmezán forgács",                                             price: "3 590,- Ft" },
  { id: 6,  name: "AMORE",                         ingredients: "Paradicsomszósz, mozzarella, rukkola, pármai sonka, koktélparadicsom",                                             price: "3 590,- Ft" },
  { id: 7,  name: "UNGHERESE",                     ingredients: "Paradicsomszósz, mozzarella, lilahagyma, olasz csípős szalámi, bacon, csípős pepperoni",                           price: "3 590,- Ft" },
  { id: 8,  name: "SALAME PICCANTE E GORGONZOLA",  ingredients: "Paradicsomszósz, mozzarella, olasz csípős szalámi, gorgonzola sajt",                                              price: "3 290,- Ft" },
  { id: 9,  name: "TONNO E CIPOLLA",               ingredients: "Paradicsomszósz, mozzarella, lilahagyma, tonhal, olívaolaj",                                                       price: "3 290,- Ft" },
  { id: 10, name: "4 FORMAGGI",                    ingredients: "Paradicsomszósz, mozzarella, parmezán sajt, pecorino sajt, gorgonzola sajt",                                       price: "3 290,- Ft" },
  { id: 11, name: "COTTO",                         ingredients: "Paradicsomszósz, mozzarella, olasz főtt sonka",                                                                    price: "3 190,- Ft" },
  { id: 12, name: "COTTO E FUNGHI",                ingredients: "Paradicsomszósz, mozzarella, olasz főtt sonka, gomba",                                                             price: "3 290,- Ft" },
  { id: 13, name: "PROSCIUTTO DI PARMA",           ingredients: "Paradicsomszósz, mozzarella, pármai sonka",                                                                        price: "3 290,- Ft" },
  { id: 14, name: "VALMAR",                        ingredients: "Paradicsomszósz, 4 sajtos alap, olasz csípős szalámi",                                                             price: "3 590,- Ft" },
  { id: 15, name: "BRUNO",                         ingredients: "Paradicsomszósz, 4 sajtos alap, olasz főtt sonka",                                                                 price: "3 590,- Ft" },
  { id: 16, name: "DOPPIO",                        ingredients: "Paradicsomszósz, mozzarella, olasz csípős szalámi, olasz főtt sonka, fokhagymás olívaolaj",                        price: "3 590,- Ft" },
  { id: 17, name: "DIAVOLA VERDE",                 ingredients: "Paradicsomszósz, mozzarella, olasz csípős szalámi, rukkola, koktélparadicsom",                                     price: "3 590,- Ft" },
  { id: 18, name: "VEGA",                          ingredients: "Paradicsomszósz, mozzarella, gomba, lilahagyma, rukkola, olívabogyó, koktélparadicsom",                            price: "3 490,- Ft" },
  { id: 19, name: "CAPRICCIOSA",                   ingredients: "Paradicsomszósz, mozzarella, articsóka, olasz főtt sonka, fekete olívabogyó",                                      price: "3 590,- Ft" },
  { id: 20, name: "TARTUFO E N'DUJA",              ingredients: "Tejszínes szarvasgomba krém, mozzarella, gomba, olasz csípős kolbászkrém (N'duja)",                               price: "3 890,- Ft" },
];

const PASTA_MENU_DATA = [
  { id: 1,  name: "ARABIATA",           ingredients: "Paradicsomszósz, fokhagymás olívaolaj, chili, koktélparadicsom, parmezán, spagetti",                                                                     price: "2 990,- Ft" },
  { id: 2,  name: "POMODORO",           ingredients: "Paradicsomszósz, fokhagymás olívaolaj, koktélparadicsom, parmezán, spagetti",                                                                              price: "2 890,- Ft" },
  { id: 3,  name: "CARBONARA",          ingredients: "Tojássárgája, parmezán, guancile (olasz tokaszalonna), feketebors, spagetti (kérésre tejszínes változatban is elkészítjük)",                               price: "3 390,- Ft" },
  { id: 4,  name: "BOLOGNAI",           ingredients: "Paradicsomszósz, tradicionális bolognai ragu, parmezán, taglietelle",                                                                                       price: "3 390,- Ft" },
  { id: 5,  name: "PASTA AL TARTUFO",   ingredients: "Szarvasgomba, tejszín, fokhagymás olívaolaj, shiitake gomba, parmezán, taglietelle",                                                                      price: "3 690,- Ft" },
  { id: 6,  name: "PASTA CON ZUCCHINE", ingredients: "Grillezett cukkini, fokhagymás olívaolaj, parmezán, taglietelle",                                                                                          price: "3 190,- Ft" },
  { id: 7,  name: "GNOCCHI AL FORMAGGI",ingredients: "Tejszínes gnocchi, parmezán, gorgonzola",                                                                                                                   price: "3 190,- Ft" },
  { id: 8,  name: "GNOCCHI E FUNGHI",   ingredients: "Tejszínes gnocchi, gomba, fokhagymás olívaolaj, feketebors",                                                                                               price: "3 190,- Ft" },
  { id: 9,  name: "PI'GNOCCHIO",        ingredients: "Paradicsomszósz, fehérbor, fokhagymás olívaolaj, parmezán, rukkola",                                                                                       price: "2 990,- Ft" },
  { id: 10, name: "PASTA AL PESTO",     ingredients: "Pesto, fokhagymás olívaolaj, koktélparadicsom, parmezán, spagetti",                                                                                        price: "3 190,- Ft" },
  { id: 11, name: "AGLIO E VEGETABLE",  ingredients: "Fokhagymás olívaolaj, grillezett cukkini, koktélparadicsom, fekete olívabogyó, rukkola, spagetti",                                                        price: "3 990,- Ft" },
];

const SALAD_MENU_DATA = [
  { id: 1, name: "VEGETARIANA",      ingredients: "Jégsaláta, rukkola, fekete olívabogyó, mozzarella, parmezán sajt, olívaolaj, balzsamkrém, koktélparadicsom, Focaccia (pizzakenyér)", price: "2 890,- Ft" },
  { id: 2, name: "TONNO E OLIVE",    ingredients: "Vegetáriánus saláta alap, tonhal, fokhagymás olívaolaj, Focaccia (pizzakenyér)",                                                      price: "2 990,- Ft" },
  { id: 3, name: "PARMA E POMODORI", ingredients: "Vegetáriánus saláta alap, pármai sonka, Focaccia (pizzakenyér)",                                                                      price: "2 990,- Ft" },
];

const DRINKS_MENU_DATA = {
  alcohol: [
    { id: 1, name: "BIRRA MORETTI CSAPOLT SÖR (pohár/korsó)", price: "800/1 200,- Ft" },
    { id: 2, name: "PERONI SÖR (0.33 l)",                     price: "700,- Ft" },
    { id: 3, name: "HEINEKEN (0.33 l)",                        price: "800,- Ft" },
    { id: 4, name: "HEINEKEN 0.0% (0.33 l)",                  price: "800,- Ft" },
    { id: 5, name: "GÖSSER CITROM 2% (dobozos)",              price: "700,- Ft" },
    { id: 6, name: "GÖSSER CITROM 0.0% (dobozos)",           price: "700,- Ft" },
    { id: 7, name: "JÄGER (2 cl/4 cl)",                       price: "660/1 100,- Ft" },
    { id: 8, name: "UNICUM (2 cl/4 cl)",                      price: "660/1 100,- Ft" },
    { id: 9, name: "PÁLINKA (2 cl/4 cl)",                     price: "750/1 500,- Ft" },
  ],
  soft_drinks: [
    { id: 1, name: "ÜDÍTŐK 0,33l",       ingredients: "Coca Cola, Coca Cola Zéró, Fanta, Sprite",        price: "700,- Ft" },
    { id: 2, name: "CAPPY JUICE-ok 0,25l",ingredients: "Alma, Eper, Körte, Őszibarack, Narancs",          price: "700,- Ft" },
    { id: 3, name: "FUZETEA 0,25l",       ingredients: "Citrom, Őszibarack",                              price: "700,- Ft" },
    { id: 4, name: "LEMONSODA 0,33l",     ingredients: "Lemon, Mijito, Oran, Zeró",                       price: "700,- Ft" },
    { id: 5, name: "NATURAQUA 0,33l üveges", ingredients: "Szénsavas, szénsavmentes",                    price: "400,- Ft" },
  ],
  coffee: [
    { id: 1, name: "ESPRESSO KÁVÉ", price: "600,- Ft" },
    { id: 2, name: "HOSSZÚ KÁVÉ",   price: "600,- Ft" },
    { id: 3, name: "CAPPUCCINO",    price: "700,- Ft" },
    { id: 4, name: "LATTE",         price: "900,- Ft" },
    { id: 5, name: "MELANGE",       price: "1 000,- Ft" },
  ],
};

// ─── Menu view ────────────────────────────────────────────────────────────────
interface MenuViewProps {
  menuMode: "full" | "category";
  activeCategory: string;
  setMenuMode: (m: "full" | "category") => void;
}

const MenuView = ({ menuMode, activeCategory, setMenuMode }: MenuViewProps) => {
  const isPasta  = activeCategory === "teszta";
  const isSalad  = activeCategory === "salata";
  const isDrinks = activeCategory === "italok";
  const isPizza  = activeCategory === "pizza";

  const MenuSection = ({ items, sectionTitle }: { items: { id: number; name: string; ingredients?: string; price: string }[]; sectionTitle?: string }) => (
    <div className="mb-12 last:mb-0">
      {sectionTitle && (
        <div className="flex items-center gap-6 mb-10">
          <div className="h-px bg-primary/20 flex-grow" />
          <h3 className="text-3xl font-black italic tracking-tighter whitespace-nowrap">{sectionTitle}</h3>
          <div className="h-px bg-primary/20 flex-grow" />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="group flex justify-between items-start border-b border-surface-dim pb-6 last:border-0 hover:border-primary transition-[border-color] duration-[var(--dur-micro)]"
          >
            <div className="space-y-1 pr-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-black text-primary opacity-40 tabular-nums">{item.id}.</span>
                <h4 className="text-xl font-black group-hover:text-primary transition-[color] duration-[var(--dur-micro)]">{item.name}</h4>
              </div>
              {item.ingredients && (
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed italic">{item.ingredients}</p>
              )}
            </div>
            <div className="font-mono font-bold text-lg text-primary whitespace-nowrap tabular-nums bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-7xl mx-auto px-4 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter italic tilted inline-block cursor-default">
          ÉTLAP
        </h2>
        <div className="h-2 bg-primary w-40 mx-auto rounded-full opacity-20" />
      </div>

      <div className="bg-surface border-2 border-surface-dim rounded-[48px] p-8 md:p-16 solid-shadow-dark relative overflow-hidden">
        {menuMode === "full" ? (
          <>
            <MenuSection items={PIZZA_MENU_DATA} sectionTitle="PIZZA" />
            <div className="mt-12 mb-20 pt-10 border-t border-dashed border-surface-dim grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Csomagolás",       price: "200,- Ft" },
                { label: "Pizzaszósz",        price: "300,- Ft" },
                { label: "Csípős pizzaszósz", price: "300,- Ft" },
              ].map((extra, i) => (
                <div key={i} className="flex justify-between items-center py-4 px-6 bg-surface-container rounded-2xl border border-surface-dim hover:border-secondary transition-[border-color] duration-[var(--dur-micro)]">
                  <span className="font-mono font-bold uppercase tracking-widest text-xs">{extra.label}</span>
                  <span className="font-mono font-bold text-secondary tabular-nums">{extra.price}</span>
                </div>
              ))}
            </div>
            <div className="my-20" />
            <MenuSection items={PASTA_MENU_DATA} sectionTitle="PASTA" />
            <div className="my-20" />
            <MenuSection items={SALAD_MENU_DATA} sectionTitle="IN SALATE" />
            <div className="my-20 h-px bg-surface-dim" />
            <MenuSection items={DRINKS_MENU_DATA.alcohol}    sectionTitle="ITALOK" />
            <div className="my-12" />
            <MenuSection items={DRINKS_MENU_DATA.soft_drinks} sectionTitle="ÜDÍTŐK" />
            <div className="my-12" />
            <MenuSection items={DRINKS_MENU_DATA.coffee}      sectionTitle="KÁVÉK" />
          </>
        ) : (
          <>
            {isPizza && (
              <>
                <MenuSection items={PIZZA_MENU_DATA} sectionTitle="PIZZA" />
                <div className="mt-12 pt-10 border-t border-dashed border-surface-dim grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { label: "Csomagolás",       price: "200,- Ft" },
                    { label: "Pizzaszósz",        price: "300,- Ft" },
                    { label: "Csípős pizzaszósz", price: "300,- Ft" },
                  ].map((extra, i) => (
                    <div key={i} className="flex justify-between items-center py-4 px-6 bg-surface-container rounded-2xl border border-surface-dim hover:border-secondary transition-[border-color] duration-[var(--dur-micro)]">
                      <span className="font-mono font-bold uppercase tracking-widest text-xs">{extra.label}</span>
                      <span className="font-mono font-bold text-secondary tabular-nums">{extra.price}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
            {isPasta  && <MenuSection items={PASTA_MENU_DATA}  sectionTitle="PASTA" />}
            {isSalad  && <MenuSection items={SALAD_MENU_DATA}  sectionTitle="IN SALATE" />}
            {isDrinks && (
              <>
                <MenuSection items={DRINKS_MENU_DATA.alcohol}     sectionTitle="ITALOK" />
                <div className="my-12" />
                <MenuSection items={DRINKS_MENU_DATA.soft_drinks}  sectionTitle="ÜDÍTŐK" />
                <div className="my-12" />
                <MenuSection items={DRINKS_MENU_DATA.coffee}       sectionTitle="KÁVÉK" />
              </>
            )}
            <div className="mt-20 flex justify-center">
              <button
                onClick={() => setMenuMode("full")}
                className="px-8 py-4 border-2 border-primary text-primary font-mono font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white active:scale-[0.98] transition-[background-color,color,transform] duration-[var(--dur-short)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Teljes étlap megtekintése
              </button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

// ─── About view ───────────────────────────────────────────────────────────────
const AboutView = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    className="max-w-7xl mx-auto px-4 py-20"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="rounded-[40px] overflow-hidden solid-shadow-dark">
          <img
            src={`${import.meta.env.BASE_URL}images/rolunk.jpeg`}
            alt="Konyhánk"
            className="w-full h-[600px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-[32px] solid-shadow max-w-[280px]">
          <p className="font-display font-black text-2xl leading-tight italic">
            „A Pinocchio nem csak egy étterem, hanem egy történet."
          </p>
        </div>
      </div>

      <div className="space-y-10">
        <div>
          <span className="font-mono font-bold uppercase tracking-[0.3em] text-primary text-sm mb-4 block">
            Rólunk szól
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter italic">
            Pinocchio
          </h2>
          <p className="text-2xl font-bold text-on-surface leading-snug">
            Vannak helyek, amelyek csupán éttermek. És vannak helyek, amelyek történetekből születnek.
          </p>
        </div>

        <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed font-medium">
          <p>
            A Pinocchio egy ilyen hely. Egy család vagyunk akiket az olasz konyha iránti szenvedély kötött össze, még mielőtt tudtuk volna, hogy egyszer közösen álmodunk majd éttermet.
          </p>
          <p>
            Az évek során megtanultuk, hogy az igazi olasz kézműves konyha titka nem csupán a recept — hanem a figyelem, a türelem és az a megmagyarázhatatlan többlet, amelyet csak akkor ad az ember, ha igazán szívügyének tekinti a munkáját.
          </p>
          <div className="p-8 bg-surface-container rounded-3xl border-2 border-dashed border-primary/20 relative">
            <div className="absolute -top-4 left-6 bg-primary text-white px-4 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest">
              Hitvallásunk
            </div>
            <p className="text-on-surface font-bold text-xl mb-4 italic">
              „Nálunk minden pizza és minden tészta kézzel, gondosan, szívvel és lélekkel készül."
            </p>
            <p className="text-sm">Nem kompromisszumokból, hanem meggyőződésből.</p>
          </div>
          <p>
            Hiszünk abban, hogy egy jól elkészített étel több mint táplálék — pillanat, amelyre vissza lehet emlékezni.
          </p>
          <div className="pt-10">
            <p className="text-primary font-black text-3xl italic mb-2">Köszönjük, hogy betértél hozzánk.</p>
            <p className="font-mono font-bold uppercase tracking-widest text-xs">Reméljük, hogy nemcsak egyszer.</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── Landing view — Bento Grid macrostructure ─────────────────────────────────
interface LandingViewProps {
  setActiveTab: (t: string) => void;
  setActiveCategory: (c: string) => void;
  setMenuMode: (m: "full" | "category") => void;
}

const LandingView = ({ setActiveTab, setActiveCategory, setMenuMode }: LandingViewProps) => {
  const goToCategory = (id: string) => {
    setActiveCategory(id);
    setMenuMode("category");
    setActiveTab("Étlap");
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 pb-28 lg:pb-6">
      <div className="bento-grid">

        {/* ── Headline tile ── */}
        <div
          className="bento-headline tile-reveal bg-surface border border-surface-dim rounded-[var(--radius-tile)] p-6 sm:p-8 flex flex-col justify-between"
          style={{ "--tile-i": 0 } as TileStyle}
        >
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-on-surface-variant">
            Valódi olasz ízek · Baja, 2024
          </span>
          <div>
            <h1
              className="font-display font-black text-5xl sm:text-6xl xl:text-7xl text-on-surface italic leading-[0.9] tracking-tight"
              style={{ overflowWrap: "anywhere", minWidth: 0 }}
            >
              Toszkána<br />
              íze <span className="text-primary">Baján.</span>
            </h1>
            <p className="text-on-surface-variant font-medium text-base sm:text-lg leading-snug mt-4">
              Kemencében sült pizzák<br />
              és friss pasták.
            </p>
          </div>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-on-surface-variant opacity-60 mt-4">
            6500 Baja, Tóth Kálmán tér 5.
          </p>
        </div>

        {/* ── Photo tile ── */}
        <div
          className="bento-photo tile-reveal overflow-hidden rounded-[var(--radius-tile)]"
          style={{ "--tile-i": 2 } as TileStyle}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/pizzakep.png`}
            alt="Kemencében sült pizza"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── Order CTA tile ── */}
        <div
          className="bento-cta tile-reveal bg-primary rounded-[var(--radius-tile)] p-6 sm:p-8 flex flex-col justify-between text-white"
          style={{ "--tile-i": 1 } as TileStyle}
        >
          <div>
            <Phone className="w-7 h-7 mb-5 opacity-60" aria-hidden />
            <h2 className="font-display font-black text-3xl sm:text-4xl italic leading-[0.95] mb-2">
              Rendelj<br />most
            </h2>
            <p className="text-white/60 text-sm font-medium">Azonnal felvesszük</p>
          </div>
          <div>
            <a
              href="tel:+36307556846"
              className="block font-mono font-black text-xl sm:text-2xl tabular-nums mb-5 text-white hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-opacity duration-[var(--dur-micro)]"
            >
              +36 30 755 6846
            </a>
            <a
              href="tel:+36307556846"
              className="flex items-center justify-center gap-2 w-full py-4 bg-white text-primary font-mono font-black uppercase tracking-[0.12em] text-sm rounded-lg hover:bg-surface active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-[background-color,transform] duration-[var(--dur-short)]"
            >
              <ArrowRight className="w-4 h-4" aria-hidden />
              Hívj minket
            </a>
          </div>
        </div>

        {/* ── Pizza category tile ── */}
        <button
          className="bento-pizza tile-reveal text-left bg-surface-container rounded-[var(--radius-tile)] p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-transform duration-[var(--dur-short)]"
          style={{ "--tile-i": 3 } as TileStyle}
          onClick={() => goToCategory("pizza")}
        >
          <Pizza className="w-8 h-8 text-primary" aria-hidden />
          <div>
            <span className="font-display font-black text-2xl text-on-surface group-hover:text-primary transition-[color] duration-[var(--dur-micro)]">
              Pizza
            </span>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-on-surface-variant mt-1">
              20 féle →
            </p>
          </div>
        </button>

        {/* ── Tészta category tile ── */}
        <button
          className="bento-teszta tile-reveal text-left bg-surface-container rounded-[var(--radius-tile)] p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-transform duration-[var(--dur-short)]"
          style={{ "--tile-i": 4 } as TileStyle}
          onClick={() => goToCategory("teszta")}
        >
          <Utensils className="w-8 h-8 text-secondary" aria-hidden />
          <div>
            <span className="font-display font-black text-2xl text-on-surface group-hover:text-primary transition-[color] duration-[var(--dur-micro)]">
              Tészta
            </span>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-on-surface-variant mt-1">
              11 féle →
            </p>
          </div>
        </button>

        {/* ── Saláta category tile ── */}
        <button
          className="bento-salata tile-reveal text-left bg-surface-container rounded-[var(--radius-tile)] p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-transform duration-[var(--dur-short)]"
          style={{ "--tile-i": 5 } as TileStyle}
          onClick={() => goToCategory("salata")}
        >
          <Leaf className="w-8 h-8 text-tertiary" aria-hidden />
          <div>
            <span className="font-display font-black text-2xl text-on-surface group-hover:text-primary transition-[color] duration-[var(--dur-micro)]">
              Saláta
            </span>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-on-surface-variant mt-1">
              3 féle →
            </p>
          </div>
        </button>

        {/* ── Italok category tile ── */}
        <button
          className="bento-italok tile-reveal text-left bg-surface-container rounded-[var(--radius-tile)] p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-transform duration-[var(--dur-short)]"
          style={{ "--tile-i": 6 } as TileStyle}
          onClick={() => goToCategory("italok")}
        >
          <Wine className="w-8 h-8 text-on-surface-variant" aria-hidden />
          <div>
            <span className="font-display font-black text-2xl text-on-surface group-hover:text-primary transition-[color] duration-[var(--dur-micro)]">
              Italok
            </span>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-on-surface-variant mt-1">
              Sör · Bor · Kávé →
            </p>
          </div>
        </button>

        {/* ── Popular item tiles ── */}
        {POPULAR_ITEMS.map((item, idx) => {
          const areaClass = idx === 0 ? "bento-pop1" : idx === 1 ? "bento-pop2" : "bento-pop3";
          const category  = idx === 2 ? "teszta" : "pizza";
          return (
            <button
              key={item.id}
              className={`${areaClass} tile-reveal text-left bg-surface overflow-hidden rounded-[var(--radius-tile)] flex flex-col group hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-transform duration-[var(--dur-short)] border border-surface-dim`}
              style={{ "--tile-i": 7 + idx } as TileStyle}
              onClick={() => goToCategory(category)}
            >
              <div className="h-36 overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[var(--dur-long)]"
                />
              </div>
              <div className="p-4 flex items-end justify-between gap-2 flex-1">
                <span className="font-display font-black text-base text-on-surface leading-tight" style={{ overflowWrap: "anywhere", minWidth: 0 }}>
                  {item.name}
                </span>
                <span className="font-mono font-bold text-sm text-primary tabular-nums whitespace-nowrap shrink-0">
                  {item.price}
                </span>
              </div>
            </button>
          );
        })}

        {/* ── Address tile ── */}
        <div
          className="bento-address tile-reveal bg-on-surface rounded-[var(--radius-tile)] p-5 sm:p-6 flex flex-col justify-between"
          style={{ "--tile-i": 10 } as TileStyle}
        >
          <MapPin className="w-7 h-7 text-surface opacity-50" aria-hidden />
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-surface/40 mb-2">
              Látogass meg
            </p>
            <p className="font-display font-black text-xl text-surface leading-tight">
              6500 Baja,<br />Tóth Kálmán<br />tér 5.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeCategory, setActiveCategory] = useState("pizza");
  const [activeTab, setActiveTab]           = useState("Kezdőlap");
  const [menuMode, setMenuMode]             = useState<"full" | "category">("full");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [activeTab, activeCategory]);

  const navItems = ["Kezdőlap", "Étlap", "Rólunk", "Kapcsolat"];

  const handleNavClick = (item: string) => {
    setActiveTab(item);
    if (item === "Étlap") setMenuMode("full");
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white overflow-x-hidden">

      {/* ── N7 Brutal Slab nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-surface border-b-2 border-on-surface">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-6">

          {/* Wordmark */}
          <button
            onClick={() => handleNavClick("Kezdőlap")}
            className="font-display font-black text-xl uppercase tracking-[-0.02em] text-on-surface leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            PINOCCHIO
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-[var(--dur-micro)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  activeTab === item
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="tel:+36307556846"
            className="hidden lg:flex items-center gap-2 px-5 py-2 bg-primary text-white font-mono font-black uppercase tracking-[0.12em] text-[0.6875rem] whitespace-nowrap hover:bg-primary-container active:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-[background-color] duration-[var(--dur-micro)]"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden />
            Rendelj most
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden text-on-surface p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            aria-label={isMobileMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-surface border-t border-surface-dim overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-1">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`text-left px-4 py-3 font-mono text-sm font-bold uppercase tracking-[0.12em] rounded-lg transition-[background-color,color] duration-[var(--dur-micro)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                      activeTab === item
                        ? "text-primary bg-primary/5"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="tel:+36307556846"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-3.5 bg-primary text-white font-mono font-black uppercase tracking-[0.12em] text-sm rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Phone className="w-4 h-4" aria-hidden />
                  Rendelés Most
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Main content ── */}
      <main className="flex-grow pt-14">
        {activeTab === "Kapcsolat" ? (
          <ContactView />
        ) : activeTab === "Rólunk" ? (
          <AboutView />
        ) : activeTab === "Étlap" ? (
          <MenuView menuMode={menuMode} activeCategory={activeCategory} setMenuMode={setMenuMode} />
        ) : (
          <LandingView
            setActiveTab={setActiveTab}
            setActiveCategory={setActiveCategory}
            setMenuMode={setMenuMode}
          />
        )}
      </main>


      {/* ── Ft8 Marquee scroll footer ── */}
      <footer>
        <div className="overflow-hidden border-t-2 border-on-surface bg-on-surface py-4">
          <div className="marquee-track flex whitespace-nowrap" aria-hidden>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="font-display font-black text-2xl italic text-surface px-8 tracking-tight">
                PINOCCHIO · PIZZA &amp; PASTA · BAJA ·&nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="bg-on-surface border-t border-white/10 py-4 px-4">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="font-mono text-[0.5625rem] font-bold uppercase tracking-[0.15em] text-surface/40">
              © 2024 Pinocchio Pizza &amp; Pasta · Minden jog fenntartva.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-surface/40 hover:text-surface transition-[color] duration-[var(--dur-micro)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
                  aria-label={["Instagram", "Twitter", "YouTube"][i]}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

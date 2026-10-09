import { useState, type ReactNode } from "react";
import aboutInterior from "./assets/images/about-interior.jpg";
import ceilingDetails from "./assets/images/ceiling-details.jpg";
import decorativeGypsum from "./assets/images/decorative-gypsum.jpg";
import exteriorFinishes from "./assets/images/exterior-finishes.jpg";
import exteriorPainting from "./assets/images/exterior-painting.jpg";
import fineFinishes from "./assets/images/fine-finishes.jpg";
import floorFinishing from "./assets/images/floor-finishing.jpg";
import gypsumCeiling from "./assets/images/gypsum-ceiling.jpg";
import heroInterior from "./assets/images/hero-interior.jpg";
import interiorPainting from "./assets/images/interior-painting.jpg";
import modernInteriors from "./assets/images/modern-interiors.jpg";
import tilingWork from "./assets/images/tiling-work.jpg";

type Language = "en" | "ar";

const photos = [
  {
    src: interiorPainting,
    en: "Interior painting",
    ar: "دهانات داخلية",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: gypsumCeiling,
    en: "Gypsum ceiling",
    ar: "أسقف جبس",
    className: "",
  },
  {
    src: exteriorPainting,
    en: "Exterior painting",
    ar: "دهانات خارجية",
    className: "",
  },
  {
    src: fineFinishes,
    en: "Fine finishes",
    ar: "تشطيبات راقية",
    className: "",
  },
  {
    src: decorativeGypsum,
    en: "Decorative gypsum",
    ar: "ديكورات جبسية",
    className: "",
  },
  {
    src: exteriorFinishes,
    en: "Exterior finishes",
    ar: "تشطيبات الواجهات",
    className: "md:col-span-2",
  },
  {
    src: tilingWork,
    en: "Tiling work",
    ar: "أعمال البلاط",
    className: "",
  },
  {
    src: ceilingDetails,
    en: "Ceiling details",
    ar: "تفاصيل الأسقف",
    className: "",
  },
  {
    src: modernInteriors,
    en: "Modern interiors",
    ar: "تصميمات داخلية",
    className: "",
  },
  {
    src: floorFinishing,
    en: "Floor finishing",
    ar: "تشطيب الأرضيات",
    className: "md:col-span-2",
  },
];

const copy = {
  en: {
    nav: ["Services", "Our work", "About", "Contact"],
    eyebrow: "Crafted interiors. Lasting quality.",
    title1: "We transform spaces",
    title2: "with skill and care.",
    intro:
      "Professional painting, gypsum and tiling services for homes and businesses across Doha.",
    quote: "Get a free quote",
    work: "Explore our work",
    stats: ["Specialist services", "Quality materials", "Doha & nearby"],
    servicesEyebrow: "What we do",
    servicesTitle: "Complete finishing services,",
    servicesTitleAccent: "one trusted team.",
    servicesIntro:
      "From the first coat to the final detail, we deliver clean, precise work made to last.",
    projectsEyebrow: "Selected work",
    projectsTitle: "Spaces finished with",
    projectsTitleAccent: "pride and precision.",
    aboutEyebrow: "Why Musahima Alkhair",
    aboutTitle: "Honest work. Refined results.",
    aboutBody:
      "We bring care, precision and professional craftsmanship to every project. Whether refreshing one room or finishing an entire property, our team respects your space and delivers to a high standard.",
    values: [
      ["Careful workmanship", "Attention to detail from preparation through handover."],
      ["Clean & reliable", "Organized execution and a tidy site throughout the job."],
      ["Local service", "Based in Muaither and serving clients across Doha."],
    ],
    contactEyebrow: "Start your project",
    contactTitle: "Your space deserves a better finish.",
    contactBody: "Tell us what you need. We’ll provide a clear, no-obligation quote.",
    call: "Call us",
    whatsapp: "WhatsApp",
    email: "Email",
    location: "Muaither, Doha, Qatar",
    viewMap: "View on Google Maps",
    footerText: "Painting · Gypsum · Tiling",
  },
  ar: {
    nav: ["خدماتنا", "أعمالنا", "من نحن", "تواصل معنا"],
    eyebrow: "ديكورات متقنة. جودة تدوم.",
    title1: "نحوّل المساحات",
    title2: "بمهارة وعناية.",
    intro:
      "خدمات احترافية في الدهانات والجبس والبلاط للمنازل والأعمال في جميع أنحاء الدوحة.",
    quote: "احصل على عرض مجاني",
    work: "استكشف أعمالنا",
    stats: ["خدمات متخصصة", "مواد عالية الجودة", "الدوحة وما حولها"],
    servicesEyebrow: "خدماتنا",
    servicesTitle: "خدمات تشطيب متكاملة،",
    servicesTitleAccent: "من فريق واحد موثوق.",
    servicesIntro:
      "من الطبقة الأولى إلى اللمسة الأخيرة، نقدم عملاً نظيفاً ودقيقاً مصمماً ليدوم.",
    projectsEyebrow: "مختارات من أعمالنا",
    projectsTitle: "مساحات ننفذها",
    projectsTitleAccent: "بفخر ودقة.",
    aboutEyebrow: "لماذا مساهمة الخير",
    aboutTitle: "عمل أمين. نتائج راقية.",
    aboutBody:
      "نقدم العناية والدقة والحرفية المهنية في كل مشروع. سواء لتجديد غرفة واحدة أو تشطيب عقار كامل، يحترم فريقنا مساحتك ويعمل وفق أعلى المعايير.",
    values: [
      ["حرفية دقيقة", "اهتمام بالتفاصيل من التجهيز وحتى تسليم العمل."],
      ["نظافة والتزام", "تنفيذ منظم وموقع عمل مرتب طوال فترة المشروع."],
      ["خدمة محلية", "مقرنا في معيذر ونخدم العملاء في جميع أنحاء الدوحة."],
    ],
    contactEyebrow: "ابدأ مشروعك",
    contactTitle: "مساحتك تستحق تشطيباً أفضل.",
    contactBody: "أخبرنا بما تحتاج إليه وسنقدم لك عرضاً واضحاً دون التزام.",
    call: "اتصل بنا",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    location: "معيذر، الدوحة، قطر",
    viewMap: "عرض على خرائط جوجل",
    footerText: "دهانات · جبس · بلاط",
  },
};

const services = [
  {
    number: "01",
    en: "Painting work",
    ar: "أعمال الدهانات",
    enBody: "Interior and exterior painting with smooth finishes, clean lines and lasting colour.",
    arBody: "دهانات داخلية وخارجية بتشطيبات ناعمة وخطوط نظيفة وألوان تدوم.",
    icon: "paint",
  },
  {
    number: "02",
    en: "Gypsum work",
    ar: "أعمال الجبس",
    enBody: "Modern ceilings, partitions and decorative details shaped with expert precision.",
    arBody: "أسقف وقواطع وتفاصيل ديكورية حديثة مصممة بدقة وخبرة.",
    icon: "layers",
  },
  {
    number: "03",
    en: "Tiling work",
    ar: "أعمال البلاط",
    enBody: "Accurate tile installation for floors and walls, beautifully aligned and finished.",
    arBody: "تركيب دقيق لبلاط الأرضيات والجدران بتناسق وتشطيب جميل.",
    icon: "grid",
  },
];

function Icon({ name, className = "size-5" }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z" />,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    paint: <><path d="M18 3a3 3 0 0 1 3 3v4a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z" /><path d="M12 12v3" /><path d="M9 15h6v6H9z" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Brand() {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Musahima Alkhair home">
      <span className="relative grid size-11 place-items-center overflow-hidden rounded-full bg-[#162d4f] text-white">
        <span className="absolute -right-3 -top-3 size-8 rounded-full bg-[#b94437]" />
        <Icon name="paint" className="relative size-5" />
      </span>
      <span className="leading-tight">
        <strong className="block text-[15px] font-extrabold tracking-[-0.02em] text-[#162d4f]">MUSAHIMA ALKHAIR</strong>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7b7f82]">Painting & Decoration</span>
      </span>
    </a>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const isArabic = language === "ar";
  const navLinks = ["services", "work", "about", "contact"];

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "font-arabic" : ""}>
      <header id="home" className="relative overflow-hidden bg-[#f4f1eb]">
        <div className="border-b border-[#162d4f]/10 bg-[#162d4f] px-5 py-2 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-[11px] font-semibold tracking-wide">
            <span>C.R. 238493 <span className="mx-2 text-white/30">|</span> DOHA, QATAR</span>
            <a href="tel:+97477167272" className="hidden items-center gap-2 transition-opacity hover:opacity-75 sm:flex">
              <Icon name="phone" className="size-3.5" /> +974 7716 7272
            </a>
          </div>
        </div>

        <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Brand />
          <div className="hidden items-center gap-8 lg:flex">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${navLinks[index]}`} className="text-sm font-semibold text-[#30383e] transition-colors hover:text-[#b94437]">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(isArabic ? "en" : "ar")}
              className="rounded-full border border-[#162d4f]/15 bg-white/70 px-4 py-2 text-xs font-bold text-[#162d4f] transition hover:bg-white"
              aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
            >
              {isArabic ? "EN" : "العربية"}
            </button>
            <a href="https://wa.me/97477167272" target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#b94437] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#a63b30] sm:inline-flex">
              {t.quote}
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 place-items-center rounded-full text-[#162d4f] lg:hidden" aria-label="Toggle menu">
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
          {menuOpen && (
            <div className="absolute inset-x-5 top-[76px] rounded-2xl border border-[#162d4f]/10 bg-white p-4 shadow-xl lg:hidden">
              {t.nav.map((item, index) => (
                <a key={item} onClick={() => setMenuOpen(false)} href={`#${navLinks[index]}`} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#162d4f] hover:bg-[#f4f1eb]">
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-8 lg:grid-cols-[0.93fr_1.07fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-16">
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#b94437]">
              <span className="h-px w-10 bg-[#b94437]" /> {t.eyebrow}
            </div>
            <h1 className="max-w-2xl text-[clamp(3.1rem,7vw,6.7rem)] font-extrabold leading-[0.9] tracking-[-0.065em] text-[#162d4f]">
              {t.title1}
              <span className="mt-2 block font-serif font-normal italic tracking-[-0.04em] text-[#b94437]">{t.title2}</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#62686b] md:text-lg">{t.intro}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="https://wa.me/97477167272" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-[#162d4f] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#162d4f]/10 transition hover:-translate-y-0.5 hover:bg-[#223e65]">
                {t.quote} <Icon name="arrow" className={`size-4 transition-transform group-hover:translate-x-1 ${isArabic ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 px-3 py-4 text-sm font-bold text-[#162d4f] underline decoration-[#b94437]/40 underline-offset-8 transition hover:decoration-[#b94437]">
                {t.work}
              </a>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-[#162d4f]/15 border-t border-[#162d4f]/15 pt-6 rtl:divide-x-reverse">
              {t.stats.map((stat, index) => (
                <div key={stat} className={index === 0 ? "" : "px-4"}>
                  <span className="mb-1 block text-xl font-extrabold text-[#162d4f]">{["03", "100%", "Qatar"][index]}</span>
                  <span className="text-[11px] font-semibold leading-4 text-[#797d7f]">{stat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[480px] lg:min-h-[650px]">
            <div className="absolute -right-24 top-0 size-[520px] rounded-full border border-[#b94437]/15 lg:size-[700px]" />
            <div className="absolute right-0 top-4 h-[85%] w-[86%] overflow-hidden rounded-[2rem_2rem_9rem_2rem] shadow-2xl shadow-[#162d4f]/15 rtl:left-0 rtl:right-auto rtl:rounded-[2rem_2rem_2rem_9rem]">
              <img src={heroInterior} alt="Beautifully painted modern living room" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#162d4f]/40 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-0 w-48 overflow-hidden rounded-2xl border-4 border-[#f4f1eb] bg-white shadow-xl md:w-56 rtl:left-auto rtl:right-0">
              <img src={gypsumCeiling} alt="Decorative gypsum ceiling with lighting" className="h-32 w-full object-cover md:h-40" />
              <div className="flex items-center gap-2 px-4 py-3 text-xs font-bold text-[#162d4f]">
                <span className="grid size-6 place-items-center rounded-full bg-[#b94437] text-white"><Icon name="check" className="size-3.5" /></span>
                {isArabic ? "تشطيب بمعايير عالية" : "Finished to a high standard"}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="services" className="bg-white px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="section-label">{t.servicesEyebrow}</p>
                <h2 className="section-title">{t.servicesTitle} <em>{t.servicesTitleAccent}</em></h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-[#717678] lg:justify-self-end">{t.servicesIntro}</p>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#162d4f]/10 bg-[#162d4f]/10 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.number} className="group relative bg-[#faf9f6] p-8 transition-colors hover:bg-[#162d4f] md:p-10">
                  <div className="flex items-start justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-[#e9e4da] text-[#b94437] transition-colors group-hover:bg-white/10 group-hover:text-white">
                      <Icon name={service.icon} className="size-6" />
                    </span>
                    <span className="font-serif text-sm italic text-[#a2a5a5] group-hover:text-white/50">{service.number}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-extrabold tracking-tight text-[#162d4f] group-hover:text-white">{isArabic ? service.ar : service.en}</h3>
                  <p className="mt-4 leading-7 text-[#707577] group-hover:text-white/65">{isArabic ? service.arBody : service.enBody}</p>
                  <div className="mt-8 h-0.5 w-8 bg-[#b94437] transition-all group-hover:w-16" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#162d4f] px-5 py-24 text-white lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="section-label text-[#df7669] before:bg-[#df7669]">{t.projectsEyebrow}</p>
            <h2 className="section-title max-w-3xl text-white">{t.projectsTitle} <em className="text-[#df7669]">{t.projectsTitleAccent}</em></h2>
            <div className="mt-14 grid auto-rows-[250px] gap-4 sm:grid-cols-2 md:grid-cols-4">
              {photos.map((photo, index) => (
                <figure key={photo.src} className={`group relative overflow-hidden rounded-2xl ${photo.className}`}>
                  <img src={photo.src} alt={isArabic ? photo.ar : photo.en} loading={index > 2 ? "lazy" : "eager"} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d35]/80 via-transparent to-transparent opacity-80" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                    <span className="text-sm font-bold">{isArabic ? photo.ar : photo.en}</span>
                    <span className="grid size-8 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                      <span className="text-xs font-semibold">{String(index + 1).padStart(2, "0")}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="overflow-hidden bg-[#f4f1eb] px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative mx-auto w-full max-w-xl pb-12 pe-10">
              <img src={aboutInterior} alt="Professionally finished home interior" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl" />
              <div className="absolute bottom-0 end-0 max-w-[240px] rounded-2xl bg-[#b94437] p-6 text-white shadow-xl">
                <span className="font-serif text-4xl italic">Doha</span>
                <p className="mt-2 text-xs font-semibold leading-5 text-white/75">{isArabic ? "خدمة محلية موثوقة في معيذر وجميع أنحاء الدوحة" : "Trusted local service in Muaither and across the city"}</p>
              </div>
            </div>
            <div>
              <p className="section-label">{t.aboutEyebrow}</p>
              <h2 className="section-title">{t.aboutTitle}</h2>
              <p className="mt-7 text-base leading-8 text-[#676d70] md:text-lg">{t.aboutBody}</p>
              <div className="mt-10 space-y-6">
                {t.values.map(([title, body], index) => (
                  <div key={title} className="flex gap-5 border-t border-[#162d4f]/12 pt-6">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#162d4f] text-xs font-bold text-white">{index + 1}</span>
                    <div>
                      <h3 className="font-extrabold text-[#162d4f]">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#777b7c]">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#b94437] text-white shadow-2xl shadow-[#b94437]/20">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative overflow-hidden p-8 md:p-14 lg:p-16">
                <div className="absolute -bottom-40 -right-32 size-96 rounded-full border-[50px] border-white/5" />
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/65">{t.contactEyebrow}</p>
                <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.04em] md:text-6xl">{t.contactTitle}</h2>
                <p className="mt-6 max-w-xl leading-7 text-white/75">{t.contactBody}</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href="tel:+97477167272" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#162d4f] transition hover:-translate-y-0.5">
                    <Icon name="phone" className="size-4" /> {t.call}
                  </a>
                  <a href="https://wa.me/97477167272" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                    {t.whatsapp} <Icon name="arrow" className={`size-4 ${isArabic ? "rotate-180" : ""}`} />
                  </a>
                </div>
              </div>
              <div className="m-3 rounded-[1.4rem] bg-[#162d4f] p-7 md:p-10">
                <div className="space-y-8">
                  <a href="tel:+97477167272" className="contact-row">
                    <span className="contact-icon"><Icon name="phone" /></span>
                    <span><small>{t.call}</small><strong>+974 7716 7272</strong></span>
                  </a>
                  <a href="mailto:musahimaalkhair@gmail.com" className="contact-row">
                    <span className="contact-icon"><Icon name="mail" /></span>
                    <span><small>{t.email}</small><strong className="break-all">musahimaalkhair@gmail.com</strong></span>
                  </a>
                  <a href="https://www.google.com/maps/search/?api=1&query=Muaither%2C%20Doha%2C%20Qatar" target="_blank" rel="noreferrer" className="contact-row">
                    <span className="contact-icon"><Icon name="pin" /></span>
                    <span><small>{t.viewMap}</small><strong>{t.location}</strong></span>
                  </a>
                </div>
                <div className="mt-10 border-t border-white/10 pt-6 text-xs font-semibold tracking-wide text-white/45">
                  C.R. 238493 · DOHA, QATAR
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f223d] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-extrabold">مساهمة الخير للدهانات والديكور</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">Musahima Alkhair Painting & Decoration</p>
            <p className="mt-5 text-xs text-white/45">{t.footerText}</p>
          </div>
          <div className="text-sm sm:text-end">
            <p className="text-white/50">Made by <a href="https://www.xenosysweb.com/" target="_blank" rel="noreferrer" className="font-bold text-white underline decoration-[#b94437] decoration-2 underline-offset-4">@Xenosys Qatar</a></p>
            <a href="tel:+97470643918" className="mt-2 inline-block text-xs text-white/45 transition hover:text-white">+974 7064 3918</a>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/97477167272" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:-translate-y-1 rtl:left-5 rtl:right-auto" aria-label="Contact us on WhatsApp">
        <Icon name="phone" className="size-6" />
      </a>
    </div>
  );
}

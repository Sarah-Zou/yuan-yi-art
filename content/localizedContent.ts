import { brand, story } from "@/content/brand";
import { categoryOrder, works, type CraftCategory, type Work } from "@/content/works";
import { crafts, type CraftTradition } from "@/content/crafts";
import type { Locale } from "@/lib/i18n";

export const localizedBrand = {
  en: {
    mission: brand.mission,
    location: brand.location,
    shortIntro: brand.shortIntro.en,
  },
  zh: {
    mission:
      "让中国民间手作在当代仍被看见、被理解、被温柔地延续，也让继续以双手守艺的女性创作者获得支持。",
    location: "往来于中国湖北与美国新泽西普林斯顿。",
    shortIntro: brand.shortIntro.cn,
  },
} satisfies Record<Locale, {
  mission: string;
  location: string;
  shortIntro: string;
}>;

const storyZh = {
  preface:
    "这是一个关于三代女性、一根线，以及手艺如何穿越距离的故事。",
  chapters: [
    {
      title: "外婆",
      subtitle: "第一代",
      body: [
        "我的外婆不识字，也不会写字，可她的手懂得布与线的语言。",
        "农闲漫长而安静的时候，她一针一线地做绣花鞋、虎头鞋、鞋垫，也做节令里的装饰性香包。那些小小的物件被慢慢做出来，也帮她支撑起五个孩子的生活。",
        "她从未把这称作艺术。那只是一个细心的女人，为所爱之人愿意去做的事。",
      ],
    },
    {
      title: "母亲",
      subtitle: "守艺人",
      body: [
        "我的母亲是家里第一个考上大学的人。后来，她成为艺术院系的教授，把一生投入到中国非遗手工艺的研究、保存与教学之中。",
        "外婆是出于生活而缝制，母亲则是出于敬意去研究。她收集纹样、技法与手艺人的声音，希望那些本可能消散的东西，仍能被记住。",
        "在她们之间，有一根线始终清晰：亲手做出的东西，承载着值得留下来的意义。",
      ],
    },
    {
      title: "创始人",
      subtitle: "延续的人",
      body: [
        "我来到新泽西求学，后来在这里生活，也建立起自己作为经济学者的职业道路。",
        "可是离家越远，我越想念家乡那些具体的质感：布料、丝线、手慢慢工作的节奏，还有那些一直让传统活着的女性。",
        "元艺手工坊开始于外婆离开的那一年。对我而言，它是一种把这份传承留在身边，也带向更广阔世界的方式。",
        "这里呈现的每一件作品，都是在这样的延续中被选择的。它们由手工完成，许多出自乡村女性之手；她们的技艺值得被看见，也值得被支持。",
        "这不是一家普通意义上的商店。它更像是一份献给手艺、家族与时间的心意，一种小而郑重的传递。",
      ],
    },
  ],
  pillars: [
    {
      title: "记忆",
      body: "珍重那些塑造家族故事的女性、物件与日常动作。",
    },
    {
      title: "手艺",
      body: "以清晰、克制而真诚的方式呈现中国民间手作传统。",
    },
    {
      title: "生计",
      body: "支持乡村女性创作者，让手艺成为有尊严、有意义的工作。",
    },
  ],
};

export function getStory(locale: Locale) {
  if (locale === "en") {
    return {
      preface: story.preface.en,
      prefaceCn: story.preface.cn,
      chapters: story.chapters.map((chapter) => ({
        title: chapter.title.en,
        subtitle: chapter.title.cn,
        body: chapter.body,
      })),
      pillars: story.pillars,
    };
  }

  return {
    preface: storyZh.preface,
    prefaceCn: story.preface.cn,
    chapters: storyZh.chapters,
    pillars: storyZh.pillars,
  };
}

const categoryZh: Record<CraftCategory, { title: string; description: string }> = {
  sachet: {
    title: "装饰性香包",
    description:
      "以丝布、绣线与干燥植物材料制作的传统节令手作，承载端午与民俗文化意象，也留住气味、记忆与节日的温度。",
  },
  chanhua: {
    title: "缠花",
    description:
      "以纸、细铁丝与丝线一瓣一瓣缠绕成花，成为可陈设、可佩戴的静美手作。",
  },
  "tiger-shoes": {
    title: "童趣绣鞋",
    description:
      "小小的鞋面上绣着鱼、鸡、花与虎，承载家人对孩子成长的温柔祝愿。",
  },
  insole: {
    title: "绣花鞋垫",
    description:
      "藏在鞋中的细密绣工，是贴近日常的手作心意，也是一份不张扬的关照。",
  },
};

export function getCategories(locale: Locale) {
  return categoryOrder.map((category) => ({
    ...category,
    displayTitle: locale === "zh" ? categoryZh[category.id].title : category.en,
    description:
      locale === "zh" ? categoryZh[category.id].description : category.description,
  }));
}

const workZh: Record<string, { description: string; materials?: string; alt: string }> = {
  "lotus-sachet": {
    description:
      "莲灯形装饰性香包，以纹样丝缎制成，配以盘结、珠饰与垂穗，带有传统节令手作的明亮意象。",
    materials: "丝锦、编结绳、珠饰、丝穗、干燥植物材料",
    alt: "莲灯香包 — 丝锦、珠饰与垂穗细节",
  },
  "crescent-sachet": {
    description:
      "抽绳式装饰性香包以丝锦缝制，配亮色绳结与流苏，有可随身佩戴的小件，也有适合悬挂的较大形式。",
    materials: "丝锦、抽绳、流苏、干燥植物材料",
    alt: "古法香包 — 抽绳式丝锦香包组合",
  },
  "peony-sachet": {
    description:
      "荷包形装饰性香包，边缘缀以细小花形，绣有莲、鸟与庭园纹样，是一件精致的花鸟针线小品。",
    materials: "绣花丝布、绣线、编结绳、流苏、干燥植物材料",
    alt: "绣花荷包香包 — 花鸟纹样与丝线细节",
  },
  "phoenix-sachet": {
    description:
      "三角粽形装饰性香包，以纹样锦缎、绣片、装饰结与流苏完成，取意端午节令中的民俗文化意象。",
    materials: "丝锦、绣片、挂绳、流苏、干燥植物材料",
    alt: "锦粽香包 — 端午意象的三角装饰性香包",
  },
  "chanhua-baijian": {
    description:
      "以丝线缠绕而成的叶片与花朵，被安置在画框与小型摆件中；每一片都由纸、细铁丝与丝线慢慢成形。",
    materials: "丝线、纸、细铁丝、木质框架与底座",
    alt: "缠花摆件 — 丝线缠绕的花叶与陈设框",
  },
  "chanhua-fashi": {
    description:
      "柔和色彩的缠花发饰，缀以珠饰，可用于婚礼、节日或一段安静的日常装点。",
    materials: "丝线、纸、细铁丝、珠饰、发簪",
    alt: "缠花发饰 — 柔色花形与珠饰细节",
  },
  "chanhua-pinghua": {
    description:
      "雏菊、玫瑰、银杏与小花，以缠花技法插入瓷瓶之中，像一幅由手工完成的静物。",
    materials: "丝线、纸、细铁丝、瓷瓶",
    alt: "缠花瓶花 — 瓷瓶中的丝线花枝",
  },
  "chanhua-xiongzhen": {
    description:
      "花瓣形缠花胸针，以玻璃珠、珍珠中心与细长别针完成，是一枚轻巧而含蓄的佩饰。",
    materials: "丝线、纸、细铁丝、玻璃珠、珍珠、铜质别针",
    alt: "缠花胸针 — 花瓣形丝线胸针组合",
  },
  "chick-shoes": {
    description:
      "小鸡造型童鞋，以红、蓝、黄等色彩绣制，保留民间童趣中关于喜悦与好消息的意象。",
    materials: "棉布、丝质绣线、层叠布底",
    alt: "报喜小鸡绣鞋 — 小鸡造型儿童绣鞋",
  },
  "fish-shoes": {
    description:
      "鞋面绣有鱼纹，取“年年有余”的谐音祝愿，将丰盈与欢喜藏在细密针脚里。",
    materials: "棉布、丝质绣线、层叠布底",
    alt: "年年有余绣鞋 — 鱼纹儿童绣鞋",
  },
  "floral-children-shoes": {
    description:
      "黑色与蓝色花卉童鞋，以花朵纹样表达“步步生花”的美好心意。",
    materials: "棉布、丝质绣线、层叠布底",
    alt: "步步生花绣鞋 — 花卉纹样儿童绣鞋",
  },
  "tiger-head-shoes": {
    description:
      "手缝虎头鞋以虎的形象寄托勇敢与守护的民俗意象，是许多乡土记忆中送给孩童的珍贵手作。",
    materials: "棉布、丝质绣线、层叠布底",
    alt: "虎头鞋 — 手工绣制的儿童虎头鞋",
  },
  "floral-insole": {
    description:
      "红色鞋垫上密密绣着百合、雏菊与叶片，并以金绿相间的十字绣边收束。",
    materials: "棉布底、丝质绣线",
    alt: "百花绣鞋垫 — 红色底上的花卉刺绣",
  },
  "phenix-insole": {
    description:
      "象牙色鞋垫上绣有彩色凤凰，边缘以蓝色绳边装饰，全由针线慢慢完成。",
    materials: "棉布底、丝质绣线",
    alt: "凤凰绣鞋垫 — 彩色凤凰刺绣细节",
  },
  "swallow-insole": {
    description:
      "粉色鞋垫上绣有燕子与柳枝，色彩明快，带着关于归来、春天与家的温柔意象。",
    materials: "棉布底、丝质绣线",
    alt: "燕子绣鞋垫 — 粉色底上的燕子与柳枝刺绣",
  },
};

export function getWorkText(work: Work, locale: Locale) {
  const zh = workZh[work.slug];
  if (locale === "zh" && zh) {
    return {
      title: work.titleCn,
      secondaryTitle: work.titleEn,
      category: work.categoryLabel.cn,
      description: zh.description,
      materials: zh.materials,
      alt: zh.alt,
      craftLabel: "材质",
      enlargeLabel: `放大查看 ${work.titleCn}`,
    };
  }

  return {
    title: work.titleEn,
    secondaryTitle: work.titleCn,
    category: work.categoryLabel.en,
    description: work.description,
    materials: work.materials?.toLowerCase(),
    alt: `${work.titleEn} — ${work.titleCn}`,
    craftLabel: "Craft",
    enlargeLabel: `Enlarge ${work.titleEn} — ${work.titleCn}`,
  };
}

export function getWorks() {
  return works;
}

const craftZh: Record<string, {
  title: string;
  romanized: string;
  subtitle: string;
  paragraphs: string[];
  imageAlt: string;
  caption: string;
}> = {
  xiangbao: {
    title: "装饰性香包",
    romanized: "Xiāngbāo",
    subtitle: "以布与香气承载节令、记忆与祝愿。",
    paragraphs: [
      "香包多以丝布或棉布缝制，内置干燥植物材料与香草气息，在端午等节令中作为装饰性手作出现，也常作为朋友之间的小礼物。",
      "每一只香包都在合拢之前完成刺绣，像是把祝愿与气味一起缝进布中。元艺手工坊呈现的香包皆由手工完成，延续许多来自乡土长辈记忆中的纹样。",
    ],
    imageAlt: "多只装饰性香包陈列在一起",
    caption: "绣线与香气相伴，留住节令中的一份心意。",
  },
  chanhua: {
    title: "缠花",
    romanized: "Chánhuā",
    subtitle: "纸、细铁丝与丝线之间，需要极慢的耐心。",
    paragraphs: [
      "缠花先以纸与细铁丝塑出花叶形态，再用丝线一圈一圈包裹，直到每一片花瓣都显出温润光泽。",
      "它曾出现在中国南方的婚礼与节庆中，也一度在近代渐渐沉寂。如今，这门手艺正由许多在家中工作的女性带回日常视野。",
    ],
    imageAlt: "缠花作品中丝线花瓣的近景细节",
    caption: "一瓣一瓣缠绕，直到纸、铁丝与丝线变得有生命。",
  },
  tongxie: {
    title: "童趣绣鞋",
    romanized: "Tóngqù Xiùxié",
    subtitle: "孩子最初的鞋，也缝进家人细密的关照。",
    paragraphs: [
      "许多中国乡村家庭曾由母亲或祖母为孩子缝制绣鞋，其中最为人熟知的是虎头鞋。虎的面孔出现在鞋头，带着民俗文化中关于勇敢与守护的意象。",
      "鱼、小鸡与花朵也常出现在童鞋上。鞋底要层层纳好，绣片要先完成再拼合，最后常以一抹红色收尾。它们首先是爱的物件，然后才是手艺。",
    ],
    imageAlt: "一双手工绣制的虎头儿童鞋",
    caption: "孩子最初的脚步里，也有一份来自家人的心意。",
  },
  xiuhuaxiedian: {
    title: "绣花鞋垫",
    romanized: "Xiùhuā Xiédiàn",
    subtitle: "藏在鞋中的关照，是最贴近日常的手作心意。",
    paragraphs: [
      "绣花鞋垫是中国民间手作中极为亲密的一类物件。母亲为远行的孩子缝，女子为新的家庭缝，祖母也会因为有人要走远路而默默缝制。",
      "云、水、鱼、莲、石榴等纹样，常承载关于平安、丰盈与归来的祝愿。刺绣不常被看见，却陪伴每一步路。",
    ],
    imageAlt: "绣有凤凰纹样的手工鞋垫",
    caption: "藏在足下的祝愿，随每一步被带往远方。",
  },
};

export function getCraftText(craft: CraftTradition, locale: Locale) {
  const zh = craftZh[craft.id];
  if (locale === "zh" && zh) return zh;

  const [romanized, title] = craft.titleEn.split(" · ");
  return {
    title,
    romanized,
    subtitle: craft.subtitle,
    paragraphs: craft.paragraphs,
    imageAlt: craft.imageAlt,
    caption: craft.caption,
  };
}

export function getCrafts() {
  return crafts;
}

export const motifs = [
  {
    src: "/images/collection_page/tongxie/tiger/tiger_detail2.png",
    cn: "虎",
    en: "Tiger",
    meaning: {
      en: "Strength and protection",
      zh: "勇气与守护的民俗意象",
    },
    imageAlt: {
      en: "Tiger motif embroidered in silk on a handmade children's shoe — symbol of strength",
      zh: "儿童绣鞋上的虎纹刺绣细节，象征勇气与守护",
    },
  },
  {
    src: "/images/collection_page/chanhua/baijian/pink.png",
    cn: "兰",
    en: "Orchid",
    meaning: {
      en: "Purity and grace",
      zh: "清雅与温润",
    },
    imageAlt: {
      en: "Orchid motif in pink silk-wrapped chanhua — symbol of purity and grace",
      zh: "粉色缠花中的兰花意象，象征清雅与温润",
    },
  },
  {
    src: "/images/collection_page/chanhua/fashi/red.png",
    cn: "梅",
    en: "Plum blossom",
    meaning: {
      en: "Resilience in cold",
      zh: "寒中自持",
    },
    imageAlt: {
      en: "Plum blossom motif in red silk-wrapped chanhua — symbol of resilience",
      zh: "红色缠花中的梅花意象，象征寒中自持",
    },
  },
  {
    src: "/images/collection_page/xiedian/phenix/phenix_detail1.png",
    cn: "凤",
    en: "Phoenix",
    meaning: {
      en: "Renewal and elegance",
      zh: "更新与华美",
    },
    imageAlt: {
      en: "Phoenix motif embroidered in colour on an ivory insole — symbol of renewal and elegance",
      zh: "象牙色鞋垫上的彩色凤凰刺绣，象征更新与华美",
    },
  },
  {
    src: "/images/collection_page/xiangbao/C/details.png",
    cn: "莲",
    en: "Lotus",
    meaning: {
      en: "Clarity rising from the everyday",
      zh: "清净与明朗",
    },
    imageAlt: {
      en: "Lotus embroidery detail on a silk sachet — symbol of clarity and purity",
      zh: "丝质香包上的莲花刺绣细节，象征清净与明朗",
    },
  },
  {
    src: "/images/collection_page/xiedian/swallow/swallow_pink_detail3.png",
    cn: "燕",
    en: "Swallow",
    meaning: {
      en: "Return and fidelity",
      zh: "归来与家的记忆",
    },
    imageAlt: {
      en: "Swallow motif embroidered in rich colour on a pink insole — symbol of return and home",
      zh: "粉色鞋垫上的燕子刺绣细节，象征归来与家的记忆",
    },
  },
];

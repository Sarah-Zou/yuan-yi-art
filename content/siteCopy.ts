import type { Locale } from "@/lib/i18n";

export const navCopy: Record<Locale, {
  ariaLabel: string;
  homeAria: string;
  links: { href: string; label: string }[];
}> = {
  en: {
    ariaLabel: "Primary",
    homeAria: "home",
    links: [
      { href: "/", label: "Home" },
      { href: "/about/", label: "Brand Story" },
      { href: "/collection/", label: "Collection" },
      { href: "/craft/", label: "Craft Heritage" },
      { href: "/contact/", label: "Contact" },
    ],
  },
  zh: {
    ariaLabel: "主导航",
    homeAria: "首页",
    links: [
      { href: "/", label: "首页" },
      { href: "/about/", label: "品牌故事" },
      { href: "/collection/", label: "精选手作" },
      { href: "/craft/", label: "手艺传承" },
      { href: "/contact/", label: "联系" },
    ],
  },
};

export const footerCopy = {
  en: {
    site: "Site",
    connect: "Connect",
    handmade: "All works made by hand.",
    location: "Based in Hubei, China and Princeton, NJ, USA",
  },
  zh: {
    site: "网站",
    connect: "联系",
    handmade: "所有作品皆由手工慢慢完成。",
    location: "往来于中国湖北与美国新泽西普林斯顿。",
  },
} satisfies Record<Locale, Record<string, string>>;

export const pageCopy = {
  en: {
    home: {
      eyebrow: "A contemporary cultural brand",
      heroText:
        "A cultural showcase for Chinese handmade traditions — embroidered sachets, silk-wrapped florals, folk children's shoes, and embroidered insoles — presented as a quiet exhibition, not a shop.",
      heroAlt: "Hands working with thread and cloth — Yuan-Yi Art",
      storyEyebrow: "Brand Story",
      storyCta: "Read the full story",
      primaryCta: "Read the story",
      secondaryCta: "View selected works",
      worksEyebrow: "Selected Works",
      worksCn: "精选手作",
      worksTitle: "A small exhibition of pieces made by hand.",
      viewAll: "View all pieces",
      craftEyebrow: "Craft Heritage",
      craftCn: "手艺与传承",
      craftTitle: "Four quiet traditions, carried forward by hand.",
      craftIntro:
        "Each piece at Yuan-Yi Art belongs to a lineage of makers. These are the four forms we honour most closely.",
      craftCta: "Explore the traditions",
      contactLabel: "Stay in touch",
      contactTitle: "For collaborations, studio visits, and quiet correspondence.",
      contactCn: "欢迎来信,诚挚相候。",
      contactCta: "Contact the studio",
    },
    about: {
      eyebrow: "Brand Story",
      intro:
        "From a grandmother's stitches in rural China to a life built in New Jersey, Yuan-Yi Art began as a way to keep memory close and carry handmade tradition forward.",
      heroAlt: "Thread, cloth, and handwork connected to Yuan-Yi Art's brand story",
      chapterLabel: "Chapter",
      chapterImages: [
        {
          alt: "Handmade textile work connected to the grandmother's story",
          caption: "The hand",
        },
        {
          alt: "Craft details connected to research and preservation",
          caption: "The keeper",
        },
        {
          alt: "A quiet studio moment connected to Yuan-Yi Art's founding story",
          caption: "The continuation",
        },
      ],
      carryLabel: "What We Carry Forward",
      carryTitle: "Not a biography, but a continuation.",
      outroCn: "承三代之手",
      outroTitle: "See the works the story has shaped.",
      outroCta: "View the collection",
    },
    collection: {
      eyebrow: "Selected Works",
      cn: "精选手作 · 当代呈现",
      title: "A quiet exhibition of pieces made entirely by hand.",
      intro:
        "Selected works across four handmade traditions — presented here as an exhibition rather than a shop. Each piece carries the patience of handwork, regional memory, and the care of women makers.",
      navAria: "Jump to a craft category",
      closingTitle: "Each work is made in small batches by hand.",
      closingCn: "每一件作品皆为小批量纯手工制作。线色、布料与形态的细微差异，是手作本身的印记。",
      closingText:
        "Variations in thread, cloth, and form are part of the piece — not imperfections, but the mark of the hand that made it.",
    },
    craft: {
      eyebrow: "Craft Heritage",
      cn: "手艺与传承",
      title: "Four Chinese handmade traditions, gently introduced.",
      intro:
        "These are the forms we return to most often — each one made in Chinese households for generations, and each continuing to carry quiet meaning today.",
      navAria: "Jump to a craft tradition",
      traditionLabel: "Tradition",
      motifsLabel: "Common Motifs",
      motifsTitle: "Each symbol carries an intention.",
      motifsIntro:
        "Tiger, orchid, plum, phoenix, lotus, swallow — the motifs in these works are not merely decorative. Each one is a small wish, a quiet protection, or a whispered blessing sewn into the cloth.",
      outroCn: "以手传情",
      outroTitle: "See how these traditions appear in our selected works.",
      outroCta: "Browse the collection",
    },
    contact: {
      eyebrow: "Contact",
      cn: "欢迎来信",
      title: "A short note is always welcome.",
      intro:
        "Whether you are writing about a piece, a collaboration, a studio visit, or a custom idea — we welcome a short and thoughtful note.",
      writeLabel: "Write to us",
      note:
        "We are a small studio. Replies may take a few days, but every message is read with care.",
      inquiryLabel: "We welcome notes about",
      inquiryTypes: [
        "Collection inquiries",
        "Collaborations, press, and cultural projects",
        "Custom interest or studio visits",
        "A kind word about the work",
      ],
      studioLabel: "Studio",
      studioCn: "以手作致敬手艺",
      formLabel: "Send a message",
      formIntro: "Prefer a form? Leave your details below and we will write back.",
      formAria: "Contact form",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "Tell us what brought you here...",
      submit: "Send message",
    },
  },
  zh: {
    home: {
      eyebrow: "当代东方手作文化品牌",
      heroText:
        "元艺手工坊是一处关于中国民间手作的安静展示空间，呈现装饰性香包、缠花、童趣绣鞋与绣花鞋垫。不以店铺的方式陈列，而以近乎展览的节奏讲述手与时间。",
      heroAlt: "手与丝线、布料之间的手作瞬间 — 元艺手工坊",
      storyEyebrow: "品牌故事",
      storyCta: "阅读完整故事",
      primaryCta: "阅读品牌故事",
      secondaryCta: "查看精选手作",
      worksEyebrow: "精选手作",
      worksCn: "精选手作",
      worksTitle: "安静陈列手工之物。",
      viewAll: "查看全部作品",
      craftEyebrow: "手艺传承",
      craftCn: "手艺与传承",
      craftTitle: "四种由手延续的传统。",
      craftIntro:
        "元艺手工坊中的每一件作品，都连着日常、女性与家庭记忆。以下四种形式，是我们最想安静呈现的手作脉络。",
      craftCta: "了解手艺传统",
      contactLabel: "保持联系",
      contactTitle: "欢迎关于合作、探访与手作的来信。",
      contactCn: "欢迎来信，诚挚相候。",
      contactCta: "联系工作室",
    },
    about: {
      eyebrow: "品牌故事",
      intro:
        "从中国乡村里外婆的一针一线，到我在新泽西的生活，元艺手工坊的开始，是为了把家族记忆留在身边，也让这些安静的手艺被更多人看见。",
      heroAlt: "丝线、布料与手作细节 — 元艺手工坊品牌故事",
      chapterLabel: "篇章",
      chapterImages: [
        {
          alt: "与外婆故事相连的手作织物细节",
          caption: "手",
        },
        {
          alt: "与民间手艺研究和保存相关的纹样与材料",
          caption: "守艺人",
        },
        {
          alt: "与元艺手工坊创立故事相连的安静工作室时刻",
          caption: "延续",
        },
      ],
      carryLabel: "我们想继续传下去的",
      carryTitle: "这不是一段个人传记，而是一种延续。",
      outroCn: "承三代之手",
      outroTitle: "看看这些故事如何落在一针一线里。",
      outroCta: "查看精选手作",
    },
    collection: {
      eyebrow: "精选手作",
      cn: "精选手作 · 当代呈现",
      title: "一场关于手工之物的安静陈列。",
      intro:
        "这里汇集四类传统手作：装饰性香包、缠花、童趣绣鞋与绣花鞋垫。它们不以商品目录的方式出现，而以展陈的节奏呈现针线里的时间、地域记忆与女性之手。",
      navAria: "跳转至手作类别",
      closingTitle: "每一件作品，皆为小批量手工完成。",
      closingCn: "线色、布料与形态的细微差异，是手作本身的印记。",
      closingText:
        "这些差异不是瑕疵，而是手、材料与时间共同留下的痕迹。",
    },
    craft: {
      eyebrow: "手艺传承",
      cn: "手艺与传承",
      title: "四种中国民间手作，安静地展开。",
      intro:
        "这些形式曾在中国家庭与乡土生活中反复出现，也在今天继续承载含蓄的情感、民俗文化意象与手工之美。",
      navAria: "跳转至手艺传统",
      traditionLabel: "传统",
      motifsLabel: "常见纹样",
      motifsTitle: "每一个纹样，都藏着一份心意。",
      motifsIntro:
        "虎、兰、梅、凤、莲、燕，这些纹样不仅是装饰，也常承载民俗文化意象、祝愿与家人之间含蓄的情感。",
      outroCn: "以手传情",
      outroTitle: "看看这些传统如何落在具体的手作之中。",
      outroCta: "浏览精选手作",
    },
    contact: {
      eyebrow: "联系",
      cn: "欢迎来信",
      title: "一封简短来信，也会被认真阅读。",
      intro:
        "无论是关于作品、合作、工作室探访，或只是想留下几句话，我们都欢迎真诚而安静的来信。",
      writeLabel: "写信给我们",
      note:
        "我们是一间小小的工作室，回复也许需要几天时间，但每一封来信都会被认真阅读。",
      inquiryLabel: "欢迎来信谈及",
      inquiryTypes: [
        "作品与收藏咨询",
        "合作、媒体与文化项目",
        "定制意向或工作室探访",
        "关于手作的一句温柔留言",
      ],
      studioLabel: "工作室",
      studioCn: "以手作致敬手艺",
      formLabel: "发送留言",
      formIntro: "也可以在下方留下信息，我们会再与您联系。",
      formAria: "联系表单",
      name: "姓名",
      namePlaceholder: "您的姓名",
      email: "邮箱",
      emailPlaceholder: "your@email.com",
      message: "留言",
      messagePlaceholder: "欢迎告诉我们，是什么让您来到这里...",
      submit: "发送留言",
    },
  },
} satisfies Record<Locale, Record<string, any>>;

export const metadataCopy = {
  en: {
    homeDescription:
      "Yuan-Yi Art is a cultural showcase for Chinese handmade traditions — created to honour family memory, sustain women makers, and present folk craft with contemporary care.",
    aboutTitle: "Brand Story",
    aboutDescription:
      "Yuan-Yi Art is a contemporary cultural brand rooted in three generations of women and the quiet traditions of Chinese handmade craft.",
    collectionTitle: "Collection",
    collectionDescription:
      "Selected works from Yuan-Yi Art — curated pieces across herbal sachets, silk-wrapped florals, embroidered children's shoes, and embroidered insoles.",
    craftTitle: "Craft Heritage",
    craftDescription:
      "An introduction to four Chinese handmade traditions: herbal sachets, silk-wrapped florals, embroidered children's shoes, and embroidered insoles.",
    contactTitle: "Contact",
    contactDescription:
      "Get in touch with Yuan-Yi Art — for collection inquiries, collaborations, and studio visits.",
  },
  zh: {
    homeDescription:
      "元艺手工坊是一处关于中国民间手作的文化展示空间，呈现装饰性香包、缠花、童趣绣鞋与绣花鞋垫等传统手作。",
    aboutTitle: "品牌故事",
    aboutDescription:
      "元艺手工坊源自三代女性与中国民间手作之间的绵长记忆，也将这些安静的手艺带向更远的地方。",
    collectionTitle: "精选手作",
    collectionDescription:
      "元艺手工坊精选装饰性香包、缠花、童趣绣鞋与绣花鞋垫，以安静展览的方式呈现手工之物。",
    craftTitle: "手艺传承",
    craftDescription:
      "了解装饰性香包、缠花、童趣绣鞋与绣花鞋垫四种中国民间手作传统。",
    contactTitle: "联系",
    contactDescription:
      "联系元艺手工坊，欢迎关于作品、合作、媒体项目与工作室探访的真诚来信。",
  },
} satisfies Record<Locale, Record<string, string>>;

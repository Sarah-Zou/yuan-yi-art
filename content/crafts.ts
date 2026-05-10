/**
 * Craft traditions introduced on the Heritage page.
 * Copy is written for an international audience — clear, warm, never textbook.
 */

export interface CraftTradition {
  id: string;
  titleCn: string;
  titleEn: string;
  subtitle: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  caption: string;
}

export const crafts: CraftTradition[] = [
  {
    id: "xiangbao",
    titleCn: "香包",
    titleEn: "Xiāngbāo · Herbal Sachets",
    subtitle: "Small fabric pouches carrying fragrance, memory, and blessing.",
    paragraphs: [
      "Sewn from silk or cotton and filled with mugwort, cedar, or dried flowers, xiangbao are carried as seasonal charms at Duanwu, as quiet gifts between friends, and as small protections tucked into a child's clothing.",
      "Each sachet is embroidered before it is closed, so the blessing is sewn inside with the scent. At Yuan-Yi Art, sachets are stitched entirely by hand, following patterns remembered from village elders.",
    ],
    image: "/images/collection_page/xiangbao/B/large_scene.png",
    imageAlt: "Embroidered herbal sachets arranged together",
    caption: "Embroidered and fragrant — given at Duanwu, kept for a lifetime.",
  },
  {
    id: "chanhua",
    titleCn: "缠花",
    titleEn: "Chánhuā · Silk-Wrapped Florals",
    subtitle: "A quiet craft of paper, wire, and patient thread.",
    paragraphs: [
      "Chanhua shapes flowers and leaves from paper and fine wire, then wraps each form — petal by petal — with silk thread until it becomes luminous and alive.",
      "Once made for weddings and festivals across southern China, chanhua nearly disappeared during the last century. It is now quietly returning, carried forward by a small community of women working from home.",
    ],
    image: "/images/collection_page/chanhua/xiongzhen/flowers_cover.png",
    imageAlt: "Silk-wrapped chanhua flowers in close detail",
    caption: "Thread wrapped petal by petal, until wire and silk become something alive.",
  },
  {
    id: "tongxie",
    titleCn: "童趣绣鞋",
    titleEn: "Tóngqù Xiùxié · Embroidered Children's Shoes",
    subtitle: "A child's first shoes, stitched with a guardian's care.",
    paragraphs: [
      "For generations, mothers and grandmothers across rural China have sewn embroidered shoes for young children — the most beloved being the tiger-head shoe, whose fierce-but-kind face watches over the wearer from the toe.",
      "Fish, chicks, and blooming flowers appear too, each motif carrying its own quiet wish. The shoes are made slowly in stages: the cotton sole layered and stitched, the embroidery completed before assembly, the whole finished with a touch of red for good fortune. They are objects of love before anything else.",
    ],
    image: "/images/collection_page/tongxie/tiger/tiger_plain_all_cover.png",
    imageAlt: "Embroidered tiger-head children's shoes, a pair",
    caption: "A guardian sewn into a child's first steps.",
  },
  {
    id: "xiuhuaxiedian",
    titleCn: "绣花鞋垫",
    titleEn: "Xiùhuā Xiédiàn · Embroidered Insoles",
    subtitle: "A private gesture of care, hidden inside a shoe.",
    paragraphs: [
      "Embroidered insoles are among the most intimate objects in Chinese handmade tradition. A mother stitched them for a son leaving home; a bride stitched them for her new family; a grandmother stitched them simply because someone she loved would walk far.",
      "Clouds, fish, lotus, pomegranate — every motif is a small wish for safety, abundance, or return. The embroidery is seldom seen, yet carried with every step.",
    ],
    image: "/images/collection_page/xiedian/phenix/phenix_cover.png",
    imageAlt: "Embroidered insole with phoenix motif",
    caption: "A wish for safety, abundance, or return — carried underfoot.",
  },
];

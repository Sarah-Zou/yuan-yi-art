/**
 * Selected Works — 12 curated pieces across four craft traditions.
 * Images live under /public/images/ and are served from /images/.
 * Example: "/images/collection_page/xiangbao/A/set.png"
 */

export type CraftCategory = "sachet" | "chanhua" | "tiger-shoes" | "insole";

export interface Work {
  slug: string;
  titleCn: string;
  titleEn: string;
  category: CraftCategory;
  categoryLabel: { cn: string; en: string };
  description: string;
  materials?: string;
  inspiration?: string;
  image?: string;
  images?: string[];
}

export const categoryOrder: {
  id: CraftCategory;
  cn: string;
  en: string;
  description: string;
}[] = [
  {
    id: "sachet",
    cn: "香包",
    en: "Herbal Sachets",
    description:
      "Fragrant textile charms sewn for festival season, memory, and cultural tradition — a craft carried for more than two thousand years.",
  },
  {
    id: "chanhua",
    cn: "缠花",
    en: "Silk-Wrapped Florals",
    description:
      "Paper, wire, and silk thread shaped petal by petal into lasting flowers, ornaments, and wearable pieces.",
  },
  {
    id: "tiger-shoes",
    cn: "童趣绣鞋",
    en: "Embroidered Children's Shoes",
    description:
      "Small shoes stitched with wishes — for courage, joy, abundance, and safe first steps into the world.",
  },
  {
    id: "insole",
    cn: "绣花鞋垫",
    en: "Embroidered Insoles",
    description:
      "Hidden embroidery slipped inside a shoe, made as a private gesture of warmth and quiet care.",
  },
];

export const works: Work[] = [
  {
    slug: "lotus-sachet",
    titleCn: "莲灯香包",
    titleEn: "Lotus Lantern Sachet",
    category: "sachet",
    categoryLabel: { cn: "香包", en: "Herbal Sachet" },
    description:
      "A lotus-lantern sachet in patterned silk, closed with a braided knot, pearl beads, and a long falling tassel.",
    materials: "Silk brocade, braided cord, pearl beads, silk tassels, dried herbs",
    inspiration: "Festival displays of fragrant charms gathered together",
    image: "/images/collection_page/xiangbao/A/details_cover.png",
    images: [
      "/images/collection_page/xiangbao/A/details_cover.png",
      "/images/collection_page/xiangbao/A/set.png",
      "/images/collection_page/xiangbao/A/scene.png",
    ],
  },
  {
    slug: "crescent-sachet",
    titleCn: "古法香包",
    titleEn: "Traditional Pouch Sachet",
    category: "sachet",
    categoryLabel: { cn: "香包", en: "Herbal Sachet" },
    description:
      "A soft drawstring sachet in patterned silk, finished with a bright cord and tassel — made in both a petite wearable and a larger hanging form.",
    materials: "Silk brocade, drawstring cord, tassel, dried herbs",
    inspiration: "Everyday sachets carried close for fragrance and memory",
    image: "/images/collection_page/xiangbao/B/large_set_cover.png",
    images: [
      "/images/collection_page/xiangbao/B/large_set_cover.png",
      "/images/collection_page/xiangbao/B/large_scene.png",
      "/images/collection_page/xiangbao/B/small_set.png",
      "/images/collection_page/xiangbao/B/small_scene.png",
      "/images/collection_page/xiangbao/B/details.png",
    ],
  },
  {
    slug: "peony-sachet",
    titleCn: "绣花荷包香包",
    titleEn: "Embroidered Pocket Sachet",
    category: "sachet",
    categoryLabel: { cn: "香包", en: "Herbal Sachet" },
    description:
      "A pocket-form sachet edged with tiny blossoms, embroidered with lotus, birds, and garden motifs — a refined keepsake of floral needlework.",
    materials: "Embroidered silk, embroidery thread, braided cord, tassel, dried herbs",
    inspiration: "Small keepsakes stitched with auspicious summer imagery",
    image: "/images/collection_page/xiangbao/C/scene_cover.png",
    images: [
      "/images/collection_page/xiangbao/C/scene_cover.png",
      "/images/collection_page/xiangbao/C/one.png",
      "/images/collection_page/xiangbao/C/details.png",
    ],
  },
  {
    slug: "chanhua-baijian",
    titleCn: "缠花摆件",
    titleEn: "Silk-Wrapped Display Ornaments",
    category: "chanhua",
    categoryLabel: { cn: "缠花", en: "Silk-Wrapped Floral" },
    description:
      "Silk-wrapped leaves and blossoms set into framed arrangements and small display pieces — each one shaped by hand from paper, wire, and thread.",
    materials: "Silk floss, paper, wire, hardwood frame and stand",
    inspiration: "Late-autumn courtyards and the colors of cooling leaves",
    image: "/images/collection_page/chanhua/baijian/scene_cover.png",
    images: [
      "/images/collection_page/chanhua/baijian/scene_cover.png",
      "/images/collection_page/chanhua/baijian/details.png",
      "/images/collection_page/chanhua/baijian/yinxing.png",
      "/images/collection_page/chanhua/baijian/rose.png",
      "/images/collection_page/chanhua/baijian/pink.png",
    ],
  },
  {
    slug: "chanhua-fashi",
    titleCn: "缠花发饰",
    titleEn: "Silk-Wrapped Hair Accessories",
    category: "chanhua",
    categoryLabel: { cn: "缠花", en: "Silk-Wrapped Floral" },
    description:
      "Silk-wrapped floral hairpieces in soft colors, finished with pearl accents — worn at weddings, festivals, and moments of quiet adornment.",
    materials: "Silk floss, paper, wire, pearl beads, hair pin",
    inspiration: "Hair ornaments worn for weddings, festivals, and tea gatherings",
    image: "/images/collection_page/chanhua/fashi/scene1_cover.png",
    images: [
      "/images/collection_page/chanhua/fashi/scene1_cover.png",
      "/images/collection_page/chanhua/fashi/scene3.png",
      "/images/collection_page/chanhua/fashi/scene2.png",
      "/images/collection_page/chanhua/fashi/flower.png",
      "/images/collection_page/chanhua/fashi/pink.png",
      "/images/collection_page/chanhua/fashi/red.png",
      "/images/collection_page/chanhua/fashi/blue.png",
    ],
  },
  {
    slug: "chanhua-pinghua",
    titleCn: "缠花瓶花",
    titleEn: "Silk-Wrapped Vase Florals",
    category: "chanhua",
    categoryLabel: { cn: "缠花", en: "Silk-Wrapped Floral" },
    description:
      "Silk-wrapped daisies, roses, ginkgo, and blossoms arranged in porcelain bottle vases — a still life made entirely by hand.",
    materials: "Silk floss, paper, wire, porcelain bottle vase",
    inspiration: "Quiet still-life arrangements by a sunlit window",
    image: "/images/collection_page/chanhua/pinghua/yinxing_cover.png",
    images: [
      "/images/collection_page/chanhua/pinghua/yinxing_cover.png",
      "/images/collection_page/chanhua/pinghua/daisy.png",
      "/images/collection_page/chanhua/pinghua/daisy_small.png",
      "/images/collection_page/chanhua/pinghua/rose.png",
      "/images/collection_page/chanhua/pinghua/blue.png",
      "/images/collection_page/chanhua/pinghua/gensen.png",
      "/images/collection_page/chanhua/pinghua/details.png",
    ],
  },
  {
    slug: "chanhua-xiongzhen",
    titleCn: "缠花胸针",
    titleEn: "Silk-Wrapped Brooches",
    category: "chanhua",
    categoryLabel: { cn: "缠花", en: "Silk-Wrapped Floral" },
    description:
      "Silk-wrapped brooches in petal form — each one finished with glass beads, a pearl center, and a slender pin.",
    materials: "Silk floss, paper, wire, glass beads, pearl, brass pin",
    inspiration: "Folk pin brooches given as small tokens of affection",
    image: "/images/collection_page/chanhua/xiongzhen/flowers_cover.png",
    images: [
      "/images/collection_page/chanhua/xiongzhen/flowers_cover.png",
      "/images/collection_page/chanhua/xiongzhen/scene1.png",
      "/images/collection_page/chanhua/xiongzhen/scene2.png",
      "/images/collection_page/chanhua/xiongzhen/scene3.png",
      "/images/collection_page/chanhua/xiongzhen/daisy.png",
      "/images/collection_page/chanhua/xiongzhen/leaves.png",
      "/images/collection_page/chanhua/xiongzhen/red.png",
      "/images/collection_page/chanhua/xiongzhen/pink.png",
      "/images/collection_page/chanhua/xiongzhen/blue.png",
      "/images/collection_page/chanhua/xiongzhen/yinxing.png",
    ],
  },
  {
    slug: "chick-shoes",
    titleCn: "报喜小鸡绣鞋",
    titleEn: "Joyful Chick Shoes",
    category: "tiger-shoes",
    categoryLabel: { cn: "童趣绣鞋", en: "Embroidered Children's Shoes" },
    description:
      "Children's shoes shaped as chicks and stitched in red, blue, and yellow — each pair a folk herald of joy and good news.",
    materials: "Cotton, silk embroidery thread, layered cloth sole",
    inspiration: "Folk belief that chicks bring tidings of joy and prosperity",
    image: "/images/collection_page/tongxie/chick/chick_all_cover.png",
    images: [
      "/images/collection_page/tongxie/chick/chick_all_cover.png",
      "/images/collection_page/tongxie/chick/chick_red.png",
      "/images/collection_page/tongxie/chick/chick_blue.png",
      "/images/collection_page/tongxie/chick/chick_yellow.png",
    ],
  },
  {
    slug: "fish-shoes",
    titleCn: "年年有余绣鞋",
    titleEn: "Abundance Fish Shoes",
    category: "tiger-shoes",
    categoryLabel: { cn: "童趣绣鞋", en: "Embroidered Children's Shoes" },
    description:
      "Children's shoes embroidered with fish — a wish for abundance year after year, sewn into every stitch.",
    materials: "Cotton, silk embroidery thread, layered cloth sole",
    inspiration: "The Chinese saying 年年有余 — may every year bring more than enough",
    image: "/images/collection_page/tongxie/fish/fish_cover.png",
    images: [
      "/images/collection_page/tongxie/fish/fish_cover.png",
      "/images/collection_page/tongxie/fish/fish_detail1.png",
      "/images/collection_page/tongxie/fish/fish_detail2.png",
    ],
  },
  {
    slug: "floral-children-shoes",
    titleCn: "步步生花绣鞋",
    titleEn: "Blooming Steps Shoes",
    category: "tiger-shoes",
    categoryLabel: { cn: "童趣绣鞋", en: "Embroidered Children's Shoes" },
    description:
      "Flower-embroidered children's shoes in black and blue — stitched with the wish that every step taken may bloom.",
    materials: "Cotton, silk embroidery thread, layered cloth sole",
    inspiration: "The poetic wish that every step a child takes will flower",
    image: "/images/collection_page/tongxie/floral/floral_black_cover.png",
    images: [
      "/images/collection_page/tongxie/floral/floral_black_cover.png",
      "/images/collection_page/tongxie/floral/floral_blue.png",
      "/images/collection_page/tongxie/floral/floral_detail1.png",
      "/images/collection_page/tongxie/floral/floral_detail2.png",
    ],
  },
  {
    slug: "tiger-head-shoes",
    titleCn: "虎头鞋",
    titleEn: "Tiger Head Shoes",
    category: "tiger-shoes",
    categoryLabel: { cn: "童趣绣鞋", en: "Embroidered Children's Shoes" },
    description:
      "Hand-sewn tiger-head shoes made to guard the wearer with the tiger's bravery — a beloved protection given at first birthdays across rural China.",
    materials: "Cotton, silk embroidery thread, layered cloth sole",
    inspiration: "Rural blessing shoes made for first birthdays and festivals",
    image: "/images/collection_page/tongxie/tiger/tiger_plain_all_cover.png",
    images: [
      "/images/collection_page/tongxie/tiger/tiger_plain_all_cover.png",
      "/images/collection_page/tongxie/tiger/tiger_all.png",
      "/images/collection_page/tongxie/tiger/tiger_detail1.png",
      "/images/collection_page/tongxie/tiger/tiger_detail2.png",
      "/images/collection_page/tongxie/tiger/tiger_detail3.png",
    ],
  },
  {
    slug: "floral-insole",
    titleCn: "百花绣鞋垫",
    titleEn: "Hundred Flowers Insole",
    category: "insole",
    categoryLabel: { cn: "绣花鞋垫", en: "Embroidered Insole" },
    description:
      "Red insoles densely embroidered with lilies, daisies, and leaves, edged with a fine cross-stitch border in gold and green.",
    materials: "Cotton base, silk embroidery thread",
    inspiration: "Folk insoles stitched as gifts of warmth and blessing",
    image: "/images/collection_page/xiedian/floral/floral_detail_cover.png",
    images: [
      "/images/collection_page/xiedian/floral/floral_detail_cover.png",
      "/images/collection_page/xiedian/floral/floral.png",
      "/images/collection_page/xiedian/floral/all.png",
    ],
  },
  {
    slug: "phenix-insole",
    titleCn: "凤凰绣鞋垫",
    titleEn: "Phoenix Insole",
    category: "insole",
    categoryLabel: { cn: "绣花鞋垫", en: "Embroidered Insole" },
    description:
      "Ivory insoles embroidered with a soaring phoenix in full color, edged with a laced blue border — made entirely by needle and thread.",
    materials: "Cotton base, silk embroidery thread",
    inspiration: "The phoenix as an emblem of beauty, renewal, and good fortune",
    image: "/images/collection_page/xiedian/phenix/phenix_cover.png",
    images: [
      "/images/collection_page/xiedian/phenix/phenix_cover.png",
      "/images/collection_page/xiedian/phenix/phenix_detail1.png",
      "/images/collection_page/xiedian/phenix/phenix_detail2.png",
    ],
  },
  {
    slug: "swallow-insole",
    titleCn: "燕子绣鞋垫",
    titleEn: "Swallow Insole",
    category: "insole",
    categoryLabel: { cn: "绣花鞋垫", en: "Embroidered Insole" },
    description:
      "Pink insoles with swallows and willow branches stitched in rich color, edged in black — a small cheerful charm made to be worn.",
    materials: "Cotton base, silk embroidery thread",
    inspiration: "Swallows as symbols of return, home, and the arrival of spring",
    image: "/images/collection_page/xiedian/swallow/swallow_pink_scene_cover.png",
    images: [
      "/images/collection_page/xiedian/swallow/swallow_pink_scene_cover.png",
      "/images/collection_page/xiedian/swallow/swallow_pink.png",
      "/images/collection_page/xiedian/swallow/swallow_pink_detail1.png",
      "/images/collection_page/xiedian/swallow/swallow_pink_detail2.png",
      "/images/collection_page/xiedian/swallow/swallow_pink_detail3.png",
    ],
  },
  {
    slug: "phoenix-sachet",
    titleCn: "锦粽香包",
    titleEn: "Auspicious Pyramid Sachet",
    category: "sachet",
    categoryLabel: { cn: "香包", en: "Herbal Sachet" },
    description:
      "A triangular sachet in richly patterned brocade, finished with embroidered accents, decorative knots, and a tassel — made in the spirit of Duanwu festival charms.",
    materials: "Silk brocade, embroidered accents, hanging cords, tassels, dried herbs",
    inspiration: "Duanwu sachets made in bright protective colors",
    image: "/images/collection_page/xiangbao/D/scene_cover.png",
    images: [
      "/images/collection_page/xiangbao/D/scene_cover.png",
      "/images/collection_page/xiangbao/D/red.png",
      "/images/collection_page/xiangbao/D/yellow.png",
      "/images/collection_page/xiangbao/D/pink.png",
      "/images/collection_page/xiangbao/D/pink_embroidered.png",
      "/images/collection_page/xiangbao/D/blue_embroidered.png",
    ],
  },
];

export const featuredSlugs = [
  "lotus-sachet",
  "chanhua-xiongzhen",
  "tiger-head-shoes",
  "floral-insole",
];

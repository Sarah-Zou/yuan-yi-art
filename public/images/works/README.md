# Works Images

Place one photo per work in this folder, matching the `slug` in `content/works.ts`.

Example filenames (match slugs exactly):

- `lotus-sachet.jpg`
- `crescent-sachet.jpg`
- `peony-sachet.jpg`
- `crimson-peony-brooch.jpg`
- `white-magnolia-hairpin.jpg`
- `osmanthus-ornament.jpg`
- `vermillion-tiger-shoes.jpg`
- `indigo-tiger-shoes.jpg`
- `cloud-insole.jpg`
- `twin-fish-insole.jpg`
- `phoenix-sachet.jpg`
- `pomegranate-hairpiece.jpg`

Then set the `image` field for the matching work in `content/works.ts`:

```ts
image: "/images/works/lotus-sachet.jpg"
```

Tip: the web-optimized WebP exports from the parent photo pipeline
(`../../photos_processed/web/`) are ideal here.

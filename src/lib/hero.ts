// Full-height hero photos in several sizes, so each device downloads the smallest one that
// is still at least as sharp as the single 2000px version used before (same quality setting).
// The photo is cropped to cover the hero, so on tall phone screens it's shown much wider than
// the screen: `sizes` accounts for that, which is why phones still get the 2000px file.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

const WIDTHS = [960, 1280, 1600, 2000];

// heightVh: the hero's height as a share of the screen (100 for the homepage, 65 elsewhere)
export async function heroImage(src: ImageMetadata, heightVh: number) {
  const widths = WIDTHS.filter(w => w <= src.width);
  const coverVh = Math.ceil((heightVh * src.width) / src.height);
  const sizes = `max(100vw, ${coverVh}vh)`;
  // width sets the plain src (for browsers without srcset) to the largest size, not the original
  const image = await getImage({ src, width: widths[widths.length - 1], widths, sizes, format: 'webp' });
  return { src: image.src, srcset: image.srcSet.attribute, sizes };
}

export type Hero = Awaited<ReturnType<typeof heroImage>>;

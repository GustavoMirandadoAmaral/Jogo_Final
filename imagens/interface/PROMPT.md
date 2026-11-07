# Geração das imagens da interface

As nove peças foram geradas individualmente pela ferramenta de imagens integrada ao Codex, com a opção de fundo transparente. Os PNGs foram exportados nas dimensões finais, com amostragem por vizinho mais próximo para preservar as bordas da pixel art.

## Base dos sete ícones

```text
Use case: ui-mockup. Asset type: one in-game upgrade item icon for Oficina em Pane, a 2D steam factory game. Output a single isolated sprite with real transparent alpha, square image. It will be normalized to a 128x128 px square and must read clearly even at 48 px, so render authentic detailed 2D pixel art on a coarse virtual 64x64 pixel grid with intentionally visible square step edges, clustered highlights and flat limited colors. Steampunk industrial workshop, worn dark iron, warm brass, copper, rust tones and bright orange accents; thick near-black outline; light from the top left. No blur, no bloom, no gradients, no floor shadow, no background, no card, no badge or icon container, no text, no letters, no watermark. Large clear centered composition with transparent air on all sides, safe to trim and size. Make dominant object obvious. Minor effects subordinate and near object.
```

O trecho abaixo foi acrescentado ao prompt de cada ícone.

### Canhão reforçado

```text
Subject: A short thick BRASS CANNON BARREL, diagonal with muzzle to upper right, two heavy clearly raised reinforcing bands and a small sharp ORANGE SPARK right at the dark circular muzzle. The barrel is the sole object. Strong highlights show the thickness and aged brass.
```

### Engrenagem rápida

```text
Subject: One chunky TOOTHED BRASS GEAR spinning, mostly frontal, with distinct dark central hole, two or three short stylized motion strokes trailing outside it and one small bright orange lightning bolt beside it. Dynamic mechanical rotation, strong readable gear silhouette.
```

### Placa de blindagem

```text
Subject: One riveted dark iron armored SHIELD PLATE, front facing, with wide beveled brass edges and a distinct engraved HEART-SHAPED GEAR emblem in the center. Make the heart visibly heart shaped with a few teeth along its edge and clear copper-orange engraved lines.
```

### Rodas lubrificadas

```text
Subject: One old robotic DRIVE WHEEL at a clear 3/4 angle, dark ribbed tire on a warm brass hub, two glossy black oil drops hugging its edge with light-colored specular pixels, and a few short amber speed lines trailing it. Unmistakable chunky wheel.
```

### Caldeira extra

```text
Subject: One miniature squat COPPER BOILER, with a domed top and riveted barrel, one clear front-facing round pressure gauge whose needle points to the far right orange high-pressure arc, and one compact pale steam puff venting upward. No numbers or lettering on the gauge.
```

### Ímã

```text
Subject: One chunky HORSESHOE MAGNET of worn RED enamel with two SILVER iron pole tips, open ends pointing upward at a slight diagonal, attracting two or three small separate dark-brass screws and hex nuts near the tips. Preserve negative space of the U and make the red enamel unmistakable.
```

### Reparo imediato

```text
Subject: One mechanic's open-ended WRENCH crossed in an X with a flathead SCREWDRIVER, in steel and brass with a worn copper handle. Small localized bright GREEN healing effect behind the crossover rendered only as hard stepped emerald pixel accents and tiny green glints. Both crossed tools must stay instantly recognizable.
```

## Moldura da carta

```text
Use case: ui-mockup. Asset type: one reusable upgrade card plate for Oficina em Pane, a steam factory game. Final image must be a SQUARE 1:1 full 300×300 layout. Generate a straight-on flat 2D game UI sprite with real transparent alpha beyond the silhouette, no floor shadow, no perspective. Authentic pixel art with intentional stair stepped hard edges and hand placed clusters of 1–3 pixel highlights at final size. Design a rectangular dark gunmetal plate that occupies almost the full square canvas, with subtly clipped metal corners, warm aged thin brass double rim, a copper rivet at each corner and very few other details. Light from upper left. Make the entire lower portion a single smooth solid near-black warm iron surface from about 56% to 94% of plate height, empty, ample quiet space for future centered legible game text, no decorative stripes or separators through it. At top center only, put one EMPTY circular recessed socket, outer diameter 43% of the full plate width, centered horizontally and vertically around 30% of plate height. Socket has thin dark brass rim and dark solid interior, no feature, no object, no hole through to background. The recess must visually support a 128×128 icon placed over it. Clean restrained antique industrial tooling, black outlines and subdued copper-orange rim highlights. Shape symmetrical and wide square footprint, no extensions, no crest, no chains, no embossed markings, no letters, no text, no icon, no watermark, no UI around it.
```

## Painel de telas

```text
Use case: ui-mockup. Asset type: one empty reusable pause / victory / defeat panel for Oficina em Pane, a steam factory game. Landscape aspect ratio very close to 14:9, final delivery 700×450 px. Generate a straight-on flat 2D game UI sprite with real transparent alpha beyond the silhouette, no floor shadow, no perspective. Authentic pixel art with visible pixel stair stepping and clustered metal highlights. One wide rectangular dark gunmetal plate occupying almost the full canvas, subtly clipped metal corners, warm aged thin brass double rim, small copper rivets in the four corners and optionally at top and bottom center integrated into the border. Black outlines, light from upper left, muted brass and copper highlights, dark iron. A large uninterrupted, low-contrast and nearly uniform dark interior, empty from top to bottom for a future centered title and buttons, only subtle shading at the edges. No internal separator, no circular icon socket, no pipes or extensions, no emblem, no text, no buttons, no watermark. Thin restrained border with a strong clear silhouette, engineered in a steampunk workshop.
```

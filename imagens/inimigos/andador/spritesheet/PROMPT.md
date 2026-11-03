# Prompt — spritesheet do Andador v1

- Data: 02/11/2026.
- Ferramenta: geração de imagens integrada ao Codex.
- Modo: geração com referência de identidade e fundo transparente.
- Referência: `imagens/inimigos/andador/andador-conceito-v1.png`.
- Resultado: `andador-spritesheet-v1.png`.
- Resolução pedida: 1536 × 768 px; resolução recebida e verificada: 1774 × 887 px.

## Texto enviado

```text
Use case: stylized-concept.
Asset type: game animation SPRITE SHEET for the Andador enemy of Oficina em Pane.
Input image 1: CHARACTER IDENTITY reference. Preserve this exact compact squat wheeled gray steam factory cart: graphite rounded riveted boiler, small worn ivory side panels, brass-rimmed orange circular furnace window on the FRONT, ivory curved front bumper, two visible near-side iron wheels with brass hubs plus far-side wheels, side piston and crank, rear bent copper exhaust, top round brass cap. No legs, no arms, no face, no new accessories.
Primary request: ONE clean, uniformly spaced transparent animation sprite sheet, EXACTLY THREE HORIZONTAL ROWS and SIX EQUAL COLUMNS, with exactly 14 robot images. Treat the sheet as an invisible 6-column by 3-row grid. Target canvas 1536 x 768 pixels, cells 256 x 256. All row/cell space not occupied by sprites must be truly transparent. No visible grid.
ROW 1: column 1 = stationary Andador FACING RIGHT (furnace window and bumper pointing right, exhaust at left). Column 2 = stationary Andador FACING LEFT (furnace window and bumper pointing left, exhaust at right). Columns 3, 4, 5, 6 COMPLETELY EMPTY TRANSPARENT.
ROW 2: exactly SIX consecutive distinct frames of the SAME Andador MOVING RIGHT, columns 1 through 6 in time order. EVERY image in this row faces RIGHT.
ROW 3: exactly SIX consecutive distinct frames MOVING LEFT, columns 1 through 6 in time order. EVERY image in this row faces LEFT, the mirrored equivalent of its column in row 2.
Locomotion: this enemy has wheels, so its walking/moving animation is ROLLING IN PLACE, not leg walking. Six evenly spaced wheel rotation phases 0,60,120,180,240,300 degrees; a consistent distinctive radial wheel scratch and brass hub details rotate with the same wheel, the side crank reciprocates coherently, chassis bob only 0 to 3 pixels, tiny contained steam puffs evolve above the rear exhaust. A seamless looping motion, next frame after column 6 is column 1. Keep body panel layout, furnace, bumper, wheel diameter, materials, light direction and all permanent details identical across cells. Do not generate six identical still images; visibly rotate wheel markings and move the crank in a coherent sequence. Stationary sprites use the neutral phase.
Alignment and composition: locked camera and same near-side view suited to side-scrolling, matching the reference orientation, same scale and proportions in every cell. Each full machine INCLUDING its exhaust and any steam must fit within its own cell with 20 px clear padding. Body is centered at the same local X and wheel-ground baseline at local Y=232 in every cell. Do not let machines progressively move horizontally within their cells. Never overlap or clip frames, no tails or steam extending into adjacent cells. No perspective or camera changes across frames. No detached animation pieces.
Style: original 1930s hand-inked cartoon game art, thick crisp warm black outlines, simple readable cel-painted shading, restrained worn iron texture, ivory chipped enamel and brass/copper fittings, warm orange furnace. Faithful to the reference with simplified microtexture for small game sprites.
Background: genuine alpha transparency, including all empty cells. Remove the reference's diffuse amber glow and ground shadow; no smoke haze outside tightly bounded small steam puffs. No black backdrop, no paper backdrop, no checkerboard drawn into the image.
Absolutely NO text, labels, numbers, headings, captions, arrows, borders, grid lines, floor, scenery, player hero, UI, watermark, logo or extra sprites. Priority: exact row directions, exact 2+6+6 sprite count, consistent identity and frame registration.
```

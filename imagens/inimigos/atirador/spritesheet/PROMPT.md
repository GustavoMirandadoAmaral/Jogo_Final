# Prompt — spritesheet do Atirador v1

- Data: 02/11/2026.
- Ferramenta: geração de imagens integrada ao Codex.
- Modo: criação com referências e fundo transparente.
- Referência 1: `imagens/inimigos/atirador/atirador-conceito-v1.png`, identidade do personagem.
- Referência 2: `imagens/inimigos/andador/spritesheet/andador-spritesheet-v1.png`, organização da folha e acabamento.
- Arquivo selecionado: `atirador-spritesheet-v1.png`.
- Dimensões pedidas: 1536 × 768 px; dimensões recebidas: 1774 × 887 px.

## Texto enviado

```text
Use case: stylized-concept.
Asset type: Atirador enemy animation sprite sheet for Oficina em Pane.
Input image 1: Atirador CHARACTER IDENTITY reference. Preserve this exact PURPLE/VIOLET pneumatic industrial turret with a large horizontal riveted barrel and brass muzzle rim, dark barrel opening, a single small orange aiming lens mounted ABOVE the barrel, chipped purple enamel, gray collar rings, brass and copper steam plumbing, one round side analog pressure gauge, rear copper exhaust, rotating brass pedestal collar, and a low sturdy chassis on FOUR short articulated industrial SUPPORT FEET with broad round steel/brass shoes. Two large near-side supports and smaller partially hidden rear supports, as in reference. It is a quadrupedal machine with mechanical stabilizer feet, NOT a humanoid or animal. Do not redesign its gun or add wheels, tracks, springs, arms, a face, biological feet or clothing.
Input image 2: approved Andador sprite sheet as GRID/LAYOUT AND ART FINISH reference only; do not copy its wheeled body.
Primary request: ONE animation SPRITE SHEET, EXACTLY THREE ROWS and SIX EQUAL COLUMNS, exactly 14 character drawings. Use the attached Andador sheet as a LAYOUT reference: 2 sprites in the first row, six in the second, six in the third. Invisible grid, no labels.
Target canvas 1536 x 768, each cell 256 x 256.
ROW 1 column 1: stationary pose FACING RIGHT. ROW 1 column 2: stationary pose FACING LEFT. ROW 1 columns 3,4,5,6: entirely empty and transparent.
ROW 2 columns 1 through 6: six consecutive locomotion frames FACING RIGHT in every cell.
ROW 3 columns 1 through 6: six consecutive locomotion frames FACING LEFT in every cell, corresponding to mirrored directions of row 2.
Sprite heads/fronts must point consistently right in row 2 and left in row 3. Animate IN PLACE: same size, camera, body shape, material colors, permanent panel details and local body-center across frames. Leave at least 16 px padding in each cell and fit all extremities and bounded tiny steam puffs. No overlap between cells, no clipping, no scale drift, no camera turn, no detached parts. Six frame phases must make one looping cycle; after frame 6 return naturally to frame 1.
Style: faithful original 1930s hand-inked vintage steam factory cartoon matching the identity reference, bold warm-black contours, cel-painted worn metal and enamel, copper/brass joints, orange furnace glow confined INSIDE the window, restrained microtexture. Simplify tiny scratches for small game sprites without changing design.
Background: actual alpha transparency, no diffuse glow, no shadow, no floor, no scenery, no text, no arrows, no numbering, no grid lines, no captions, no paper or checkerboard painted into the image, no UI, no watermarks.
Specific animation: row 1 shows a stable stationary stance aiming RIGHT and aiming LEFT respectively. Rows 2 and 3 show six consecutive frames of SLOW MECHANICAL REPOSITIONING using the existing four short hinged support feet. The actual game turret repositions on the ground. Each support stays attached to its original pivot and broad foot, and the number of feet never changes.
Create a restrained six-phase shuffling step in place: alternate diagonal foot pairs, small hinge rotations, modest horizontal forward/rear foot travel and only 2 to 4 px foot lift; other feet support the weight. Frame 1 neutral/rear contact, frame 2 first pair lifting, frame 3 first pair reaching, frame 4 first pair planting and second pair starting, frame 5 second pair reaching, frame 6 settling back to the starting phase. The barrel and aiming lens always point RIGHT in row 2 and LEFT in row 3. Keep body and gun orientation stable during the walking cycle, chassis bob maximum 2 px.
This sheet contains only STATIONARY and LOCOMOTION cycles. Do NOT show firing, muzzle flashes, projectiles, barrel recoil, explosive effects, barrel aim swings or deploy/retract transformations. All permanent parts stay rigidly consistent across all frames. Small bounded rear steam puffs can vary coherently.
Same side-scrolling near-side view as reference in every cell. Keep support contact baseline at local y=232 and chassis centered at local x=128. The full barrel, exhaust, lens and every foot must fit inside each cell with padding. Aim to preserve the original recognizable squat turret silhouette and the same armored proportions throughout.
```

## Segunda etapa — limpeza da transparência

A primeira saída foi usada como alvo de edição na ferramenta integrada. A imagem selecionada para o projeto é o resultado desta etapa.

```text
Use case: background-extraction.
Edit target: the attached purple turret SPRITE SHEET, already organized correctly with 14 sprites on an invisible 6-column x 3-row grid.
Change ONLY transparency cleanup. Preserve EXACTLY the same 14 character drawings, their poses, directions, movement sequence, coordinates, proportions, color, outlines, gears, feet, gun shapes and sheet layout. Do not repaint, redesign, retouch the character, add or remove any sprite, change frame positions or fill empty first-row cells.
Remove every background pixel, pale gray noise, diffuse red/yellow halo, color contamination, haze and low-opacity residual region outside the outlines of the fourteen machines and their intentional small ivory steam puffs. Make ALL negative space, gaps between the legs, gaps between sprites and the empty first-row cells exactly transparent (alpha 0). Keep the interior of the characters and intentional outlined steam puffs opaque (alpha 255), with clean antialiased edges at the outlines. No gray or black rectangular background, no glow, no checkerboard texture, no shadow.
Maintain the original whole-sheet aspect ratio and the exact THREE rows: row 1 only the two opposite idle poses at left; row 2 six poses facing RIGHT; row 3 six poses facing LEFT. Output only the clean transparent PNG sprite sheet, no labels or new graphics.
```

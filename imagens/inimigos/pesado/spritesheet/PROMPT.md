# Prompt — spritesheet do Pesado v1

- Data: 02/11/2026.
- Ferramenta: geração de imagens integrada ao Codex.
- Modo: criação com referências e fundo transparente.
- Referência 1: `imagens/inimigos/pesado/pesado-conceito-v1.png`, identidade do personagem.
- Referência 2: `imagens/inimigos/andador/spritesheet/andador-spritesheet-v1.png`, organização da folha e acabamento.
- Arquivo selecionado: `pesado-spritesheet-v1.png`.
- Dimensões pedidas: 1536 × 768 px; dimensões recebidas: 1774 × 887 px.

## Texto enviado

```text
Use case: stylized-concept.
Asset type: Pesado enemy animation sprite sheet for Oficina em Pane.
Input image 1: Pesado CHARACTER IDENTITY reference. Preserve this exact ORANGE heavy tracked industrial press machine: bulky low rectangular orange riveted boiler with dark gray armor, wide twin continuous IRON CATERPILLAR TRACKS, brass rollers and sprockets, orange guarded FRONT furnace with TWO dark horizontal protective bars, broad armored front bumper with worn yellow-and-black hazard stripes, side round pressure gauge and copper plumbing, rear bent exhaust and ONE top vertical telescopic press/ram ending in a broad steel rectangular plate with hazard stripes. No arms, legs, face, extra turret or cannon. The press is an industrial upward ram, not a weapon barrel.
Input image 2: approved Andador sprite sheet is GRID/LAYOUT AND ART FINISH reference only. Do not replace tracks with wheels.
Primary request: ONE animation SPRITE SHEET, EXACTLY THREE ROWS and SIX EQUAL COLUMNS, exactly 14 character drawings. Use the attached Andador sheet as a LAYOUT reference: 2 sprites in the first row, six in the second, six in the third. Invisible grid, no labels.
Target canvas 1536 x 768, each cell 256 x 256.
ROW 1 column 1: stationary pose FACING RIGHT. ROW 1 column 2: stationary pose FACING LEFT. ROW 1 columns 3,4,5,6: entirely empty and transparent.
ROW 2 columns 1 through 6: six consecutive locomotion frames FACING RIGHT in every cell.
ROW 3 columns 1 through 6: six consecutive locomotion frames FACING LEFT in every cell, corresponding to mirrored directions of row 2.
Sprite heads/fronts must point consistently right in row 2 and left in row 3. Animate IN PLACE: same size, camera, body shape, material colors, permanent panel details and local body-center across frames. Leave at least 16 px padding in each cell and fit all extremities and bounded tiny steam puffs. No overlap between cells, no clipping, no scale drift, no camera turn, no detached parts. Six frame phases must make one looping cycle; after frame 6 return naturally to frame 1.
Style: faithful original 1930s hand-inked vintage steam factory cartoon matching the identity reference, bold warm-black contours, cel-painted worn metal and enamel, copper/brass joints, orange furnace glow confined INSIDE the window, restrained microtexture. Simplify tiny scratches for small game sprites without changing design.
Background: actual alpha transparency, no diffuse glow, no shadow, no floor, no scenery, no text, no arrows, no numbering, no grid lines, no captions, no paper or checkerboard painted into the image, no UI, no watermarks.
Specific motion: idle row has neutral stationary right and left poses. Rows 2 and 3 show HEAVY TRACKED CRAWLING IN PLACE with six consecutive phases. Tread plates advance around an intact continuous closed caterpillar belt, rollers rotate coherently, one worn light plate provides a visible repeating track-phase marker. Keep the number and spacing of rollers and the design of armor IDENTICAL in every frame. Front furnace and hazard bumper point RIGHT in row 2 and LEFT in row 3; reverse belt direction naturally.
The enormous mass moves slowly, with maximum 2 px restrained vertical chassis vibration, subtle pressure gauge needle changes and small contained steam puffs. No bouncing, jumping or charging.
The top press remains in a compact RETRACTED travel position at the SAME HEIGHT throughout all 14 sprites. Do not animate a press attack, extend or detach its plate, or enlarge the machine in any frame. Keep all details and steam inside their 256x256 cell. Keep bottom contact of the caterpillar tracks on the same local baseline y=232, machine body centered at local x=128, consistent scale. The six-frame movement must loop smoothly into frame 1. The far track stays behind the body, never becomes a disconnected floating wheel.
```

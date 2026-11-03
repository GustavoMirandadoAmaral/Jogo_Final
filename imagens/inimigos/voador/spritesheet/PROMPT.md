# Prompt — spritesheet do Voador v1

- Data: 02/11/2026.
- Ferramenta: geração de imagens integrada ao Codex.
- Modo: criação com referências e fundo transparente.
- Referência 1: `imagens/inimigos/voador/voador-conceito-v1.png`, identidade do personagem.
- Referência 2: `imagens/inimigos/andador/spritesheet/andador-spritesheet-v1.png`, organização da folha e acabamento.
- Arquivo selecionado: `voador-spritesheet-v1.png`.
- Dimensões pedidas: 1536 × 768 px; dimensões recebidas: 1774 × 887 px.

## Texto enviado

```text
Use case: stylized-concept.
Asset type: Voador enemy animation sprite sheet for the original game Oficina em Pane.
Input image 1: Voador CHARACTER IDENTITY reference. Preserve the exact spherical chipped cobalt-blue riveted boiler, single round orange FRONT furnace window in a brass rim, copper steam fittings, side/rear exhaust, single two-blade IVORY METAL propeller on its top mast, two small dangling stabilizer hooks below. The hooks are not walking legs. It is a blue flying steam machine, no wheels, tracks, cannon, face or humanoid limbs.
Input image 2: approved Andador spritesheet as a GRID/LAYOUT AND DRAWING FINISH reference only. Never copy the cart or give the Voador wheels.
Primary request: ONE animation SPRITE SHEET, EXACTLY THREE ROWS and SIX EQUAL COLUMNS, exactly 14 character drawings. Use the attached Andador sheet as a LAYOUT reference: 2 sprites in the first row, six in the second, six in the third. Invisible grid, no labels.
Target canvas 1536 x 768, each cell 256 x 256.
ROW 1 column 1: stationary pose FACING RIGHT. ROW 1 column 2: stationary pose FACING LEFT. ROW 1 columns 3,4,5,6: entirely empty and transparent.
ROW 2 columns 1 through 6: six consecutive locomotion frames FACING RIGHT in every cell.
ROW 3 columns 1 through 6: six consecutive locomotion frames FACING LEFT in every cell, corresponding to mirrored directions of row 2.
Sprite heads/fronts must point consistently right in row 2 and left in row 3. Animate IN PLACE: same size, camera, body shape, material colors, permanent panel details and local body-center across frames. Leave at least 16 px padding in each cell and fit all extremities and bounded tiny steam puffs. No overlap between cells, no clipping, no scale drift, no camera turn, no detached parts. Six frame phases must make one looping cycle; after frame 6 return naturally to frame 1.
Style: faithful original 1930s hand-inked vintage steam factory cartoon matching the identity reference, bold warm-black contours, cel-painted worn metal and enamel, copper/brass joints, orange furnace glow confined INSIDE the window, restrained microtexture. Simplify tiny scratches for small game sprites without changing design.
Background: actual alpha transparency, no diffuse glow, no shadow, no floor, no scenery, no text, no arrows, no numbering, no grid lines, no captions, no paper or checkerboard painted into the image, no UI, no watermarks.
Specific animation: "stationary" row means a neutral upright HOVER pose, right and left. It does NOT stand on a floor. In rows 2 and 3 show a FLYING-IN-PLACE cycle: one intact two-blade propeller rotating coherently about the VERTICAL mast in its horizontal plane. Use consecutive rotor azimuth phases approximately 0,30,60,90,120,150 degrees, naturally looping because it has two opposite blades. Show changes of blade foreshortening and visible shape, not six identical rotors and not different camera angles. The spherical boiler stays intact at the same scale and position; subtle forward lean of about 5 degrees in the flight rows, with only 2 to 3 pixels of intentional hover bob. Copper hooks sway slightly and the small rear steam puff evolves within the cell. The front furnace points RIGHT in row 2 and LEFT in row 3. No running, feet, jumping, propeller detached from mast or rotor turned into a wheel. Preserve the fixed orientation of the boiler; animate rotor independently of its body. Rotor tips must always fit inside their own cell. Place boiler-body center at local x=128,y=159 throughout both flight rows.
```

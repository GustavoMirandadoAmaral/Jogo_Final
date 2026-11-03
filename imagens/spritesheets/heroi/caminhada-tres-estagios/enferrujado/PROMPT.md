# Prompt — herói enferrujado

- Data: 03/11/2026.
- Ferramenta: geração/edição de imagens integrada ao Codex.
- Saída inicial: `heroi-enferrujado-spritesheet-v1.png`.
- Fundo transparente.
- Referência 1: `imagens/evolucao-heroi/heroi-evolucao-tres-estagios-v1.png`, usar o robô da esquerda.
- Referência 2: `imagens/heroi/heroi-caldeira-conceito-v1.png`, identidade e materiais.
- Referência 3: `imagens/inimigos/andador/spritesheet/andador-spritesheet-v1.png`, organização da folha.

## Texto enviado

```text
Use case: stylized-concept.
Asset type: PLAYER HERO walking animation sprite sheet for Oficina em Pane, stage 1 RUSTY AND DIRTY.
Input image 1: character EVOLUTION reference containing THREE robots. Use ONLY THE LEFTMOST, MOST RUSTY robot as this sheet's identity and material condition. Do not draw the middle or right robot, and do not reproduce the triptych.
Input image 2: original hero character identity and construction detail reference. This hero is a small humanoid STEAM BOILER robot, not an enemy cart: large rounded ivory riveted head, large ROUND orange furnace porthole on the front of the head with brass rim (no face, eyes or TV screen), bent copper exhaust on top/rear of head, round ear cover, small ivory chest with analog pressure gauge and valve, dark flexible rubber hose arms and legs, ONE large mechanical C-shaped pincer hand and ONE large pneumatic cannon forearm, TWO large rounded ivory armored boots.
Input image 3: Andador sheet is an exact GRID/LAYOUT reference only: three rows, six columns, two idle poses in the first row, six rightward frames in the second, six leftward frames in the third. Never give the hero wheels or tracks.
Stage appearance: noticeably RUSTY AND DIRTY, matching the LEFTMOST evolution reference. Dense but readable orange-brown corrosion, widespread chipped and grimy ivory enamel, rusty brass/copper rims and exhaust, a small square riveted repair patch on the cheek, scuffed boots and pincer, some soot near the steam outlet. The same functional intact robot, not missing limbs. Keep furnace amber-orange and readable.
PRIMARY REQUEST: ONE actual transparent animation SPRITE SHEET. Exactly THREE ROWS and SIX EQUAL COLUMNS, 14 hero drawings total, invisible grid. Target canvas 1536 x 768 pixels (256x256 cells).
ROW 1 COL 1: hero standing STILL facing RIGHT, head furnace window and cannon muzzle point right, back exhaust and pincer on trailing side.
ROW 1 COL 2: hero standing STILL facing LEFT, same robot mirrored, front window and cannon muzzle point left.
ROW 1 COLS 3,4,5,6: entirely EMPTY transparent cells.
ROW 2 COLS 1 to 6: six consecutive distinct WALKING-IN-PLACE frames, ALWAYS facing RIGHT.
ROW 3 COLS 1 to 6: six consecutive distinct WALKING-IN-PLACE frames, ALWAYS facing LEFT, corresponding mirrored phase and geometry of row 2.
Animation: a real readable TWO-LEGGED WALK cycle in six phases. 1 front leg contacts ahead/back leg pushes; 2 weight drops slightly/front support bends; 3 rear leg passes underneath and lifts; 4 opposite leg contacts ahead; 5 weight drops onto opposite support; 6 other leg passes and lifts, returning smoothly to frame 1. Alternate the two large boots visibly between front/back positions in each half cycle. Boots must actually change position, knee and ankle angle; not six copies of the same pose. No running airborne phase, jumping, dashing, falling, hurt or firing. Head and chest remain rigid and proportionate with maximum 2–3 px walking bob. Pincer arm has a small counter-swing; the cannon arm stays consistently forward in a neutral carry/aim pose without recoil. No shots, muzzle flash, detached cannon or added weapons.
Registration: fixed camera, same scale and consistent body proportions in EVERY cell. Use the same slightly near-side side-scrolling view as the robot reference; never turn front-on or away. Pelvis stays at the same local X=128, supporting foot ground line at local Y=232; head size and body height do not grow or shrink between frames. All extremities including boots, pincer, cannon, chimney and any tiny outlined steam puff must fit within each cell with 16px clear padding. Do not translate the character across cells, clip or overlap. Keep rust patches and rivet placement stable across animation frames.
Style: original 1930s inked theatrical cartoon game sprite, bold clean warm-black contours, simple readable painted cel shading, worn ivory enamel, iron graphite joints, aged brass and copper, orange furnace. Match the approved reference faithfully, simplified texture to read at small size. No human face or clothing, no modern electronics or futuristic armor.
Background: genuine alpha transparency. Remove diffuse glow and ground shadow from references. No floor, scenery, checkerboard printed as background, text, numbers, labels, arrows, grid lines, captions, borders, UI, logos or watermarks. Exactly 2+6+6 complete, non-overlapping robots.
```

## Revisão v2 — montagem por partes

- Arquivo atual: `heroi-enferrujado-spritesheet-v2.png`.
- Data: 03/11/2026.
- Método: edição e composição com Python/Pillow autorizadas pelo usuário.
- Motivo: a geração repetia a mesma perna na segunda metade da caminhada.
- Base visual: os sprites originais deste estágio, com suas cores e materiais.
- A primeira metade mantém a arte original. A segunda usa pernas independentes com quadris fixos; as conexões mecânicas foram recompostas para acompanhar a nova pose.
- Controle da segunda metade: quadro 4 com a perna oposta em avanço, quadro 5 com essa perna em apoio e a primeira em recuperação, quadro 6 com passagem para reiniciar o ciclo.
- A esquerda foi obtida espelhando a direita. A folha foi normalizada em 1776 × 888 px, células de 296 × 296 px e origem comum em (148, 289).
- Os testes de geração de correção não foram selecionados como arquivos finais. Os PNGs atuais usam a montagem por código.

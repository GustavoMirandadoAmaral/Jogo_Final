# Prompt — herói intermediario

- Data: 03/11/2026.
- Ferramenta: geração/edição de imagens integrada ao Codex.
- Saída inicial: `heroi-intermediario-spritesheet-v1.png`.
- Fundo transparente.
- Alvo de edição: `../enferrujado/heroi-enferrujado-spritesheet-v1.png`, preservar as poses e a composição.
- Referência de acabamento: `imagens/evolucao-heroi/heroi-evolucao-tres-estagios-v1.png`, usar o robô do centro.

## Texto enviado

```text
Use case: identity-preserve.
Asset type: stage 2 PARTIALLY RESTORED HERO walking sprite sheet for Oficina em Pane.
Input image 1 is the EDIT TARGET: a complete correct 14-frame sprite sheet of the rusty hero. PRESERVE its composition, 6-column x 3-row grid, exact count of 14 characters, each pose, every leg/boot position, support baseline, arm and cannon angle, body scale and frame registration. This is a MATERIAL CONDITION VARIANT of that exact sheet. Do not create a new animation, rearrange the poses or replace different walking frames with duplicates.
Input image 2 is an EVOLUTION REFERENCE only. Match ONLY the CENTER robot's state of restoration, not its single pose. Do not draw the left or right reference robot and do not output the triptych.
Change EVERY one of the 14 rusty robots in image 1 into the INTERMEDIATE, PARTIALLY REPAIRED version:
- Mostly cleaned ivory enamel on head, torso, boots, pincer and cannon shell, with a few visible chipped and lightly stained areas.
- Remove the extensive orange-brown rust and heavy soot; retain limited worn patches on boots, head edges and arm armor, matching the CENTER reference.
- Copper and brass are noticeably cleaner, with subdued warm shine, still lightly aged.
- KEEP the small square riveted cheek repair plate as shown on the center reference; the robot is repaired but not fully polished.
- Cleaner but still modest ivory steam puffs, retain the exact puff silhouettes in each original frame.
- The same circular orange furnace porthole with no face, same analog chest gauge and valve, same dark hose limbs, same two armored boots, one C-pincer and one pneumatic cannon arm. Do not change the type, size, shape, attachment or geometry of any part.
- Permanent remaining stains and repair details must stay consistent across the 14 drawings.
Absolute animation invariants: row 1 only idle RIGHT at column 1 and idle LEFT at column 2, columns 3-6 empty; row 2 six walking poses all facing RIGHT; row 3 six walking poses all facing LEFT. Keep the existing six distinct walk phases and their leg angles, not six copies of a neutral standing pose.
Match the existing original 1930s hand-inked steam cartoon drawing style, bold warm-black contours, readable cel shading, ivory/graphite/copper/brass palette. Maintain original canvas aspect ratio and size, preferably exactly 1774 x 887 px.
Genuine clean transparent alpha background, fully transparent empty cells and all gaps between limbs and characters. No diffuse glow, ground shadow, scenery, labels, letters, numbers, grid lines, paper, checkerboard, watermark or added effects. This output contains ONLY the INTERMEDIATE version of the SAME hero.
```

## Revisão v2 — montagem por partes

- Arquivo atual: `heroi-intermediario-spritesheet-v2.png`.
- Data: 03/11/2026.
- Método: edição e composição com Python/Pillow autorizadas pelo usuário.
- Motivo: a geração repetia a mesma perna na segunda metade da caminhada.
- Base visual: os sprites originais deste estágio, com suas cores e materiais.
- A primeira metade mantém a arte original. A segunda usa pernas independentes com quadris fixos; as conexões mecânicas foram recompostas para acompanhar a nova pose.
- Controle da segunda metade: quadro 4 com a perna oposta em avanço, quadro 5 com essa perna em apoio e a primeira em recuperação, quadro 6 com passagem para reiniciar o ciclo.
- A esquerda foi obtida espelhando a direita. A folha foi normalizada em 1776 × 888 px, células de 296 × 296 px e origem comum em (148, 289).
- Os testes de geração de correção não foram selecionados como arquivos finais. Os PNGs atuais usam a montagem por código.

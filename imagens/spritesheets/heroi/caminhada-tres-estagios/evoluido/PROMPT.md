# Prompt — herói evoluido

- Data: 03/11/2026.
- Ferramenta: geração/edição de imagens integrada ao Codex.
- Saída inicial: `heroi-evoluido-spritesheet-v1.png`.
- Fundo transparente.
- Alvo de edição: `../enferrujado/heroi-enferrujado-spritesheet-v1.png`, preservar as poses e a composição.
- Referência de acabamento: `imagens/evolucao-heroi/heroi-evolucao-tres-estagios-v1.png`, usar o robô da direita.

## Texto enviado

```text
Use case: identity-preserve.
Asset type: stage 3 FULLY RESTORED AND POLISHED HERO walking sprite sheet for Oficina em Pane.
Input image 1 is the EDIT TARGET, the established 14-frame rusty hero sheet. Preserve the exact 6-column x 3-row composition, every character pose, camera direction, body proportion, leg and boot position, support baseline, arm angle, cannon angle, sprite placement and existing six walking phases. Change only the state of restoration and materials. Do not recreate the animation, add poses, fill empty cells or make all walking frames identical.
Input image 2 is the three-stage EVOLUTION reference. Match ONLY the RIGHTMOST completely restored robot's appearance. Its standalone pose is NOT the layout to copy; the source sheet's poses are mandatory. Do not output a comparison of stages.
Restore ALL FOURTEEN rusty characters from image 1 to the fully evolved version:
- Clean, intact warm IVORY enamel over the same head shell, chest, boot armor, pincer and cannon housing. No rust, soot, stains, scratches, chipped paint or broken areas.
- Bright polished gold-toned brass rims, rivets, valves and joints; clean orange copper exhaust and pressure pipes, controlled painted highlights consistent with the original cartoon.
- Remove the small square repair patches on head and cannon, replace them with continuous integral ivory enamel panels; do not change the head shape, cannon geometry or other parts.
- Same round amber/orange furnace head window, dark graphite hose joints, analog chest gauge, copper valve, one C-shaped pincer and one pneumatic cannon forearm, two armored boots. No facial features, TV screen, modern technology, glowing halo or extra armor.
- Small clean ivory steam puffs, using the same existing puff silhouette in each frame so sprite registration is unchanged.
The evolution is restoration of the SAME antique steam robot. No change of anatomy, body size, limb length, head size, armor thickness, weapon length or pose. No added cape, crown, wings, electric powers, lettering, muzzle flashes or decorative sparkle symbols.
Mandatory sheet layout: row 1 column 1 idle facing RIGHT; row 1 column 2 idle facing LEFT; row 1 columns 3-6 completely transparent and empty. Row 2 exactly SIX consecutive distinct WALK frames all facing RIGHT. Row 3 exactly SIX consecutive distinct WALK frames all facing LEFT. Each leg and boot must stay in its original phase/position from source; no pose drift, running or jumping.
Retain the original 1930s hand-inked cartoon rendering, bold black contours and readable cel-painted shading. Polished surfaces should be hand-painted, not chrome photorealism.
Keep original whole-sheet aspect ratio and dimensions, preferably exactly 1774 x 887 px. Genuine clean transparent alpha in all negative space, including gaps between boots and all empty cells. No floor, ground shadow, haze, grid lines, labels, numbers, text, background, checkerboard texture, UI or watermark. Output ONLY this fully restored hero sprite sheet.
```

## Revisão v2 — montagem por partes

- Arquivo atual: `heroi-evoluido-spritesheet-v2.png`.
- Data: 03/11/2026.
- Método: edição e composição com Python/Pillow autorizadas pelo usuário.
- Motivo: a geração repetia a mesma perna na segunda metade da caminhada.
- Base visual: os sprites originais deste estágio, com suas cores e materiais.
- A primeira metade mantém a arte original. A segunda usa pernas independentes com quadris fixos; as conexões mecânicas foram recompostas para acompanhar a nova pose.
- Controle da segunda metade: quadro 4 com a perna oposta em avanço, quadro 5 com essa perna em apoio e a primeira em recuperação, quadro 6 com passagem para reiniciar o ciclo.
- A esquerda foi obtida espelhando a direita. A folha foi normalizada em 1776 × 888 px, células de 296 × 296 px e origem comum em (148, 289).
- Os testes de geração de correção não foram selecionados como arquivos finais. Os PNGs atuais usam a montagem por código.

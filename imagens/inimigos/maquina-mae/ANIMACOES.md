# Animações da Máquina-mãe

Integradas em `prototipo/Robot.json` em 04/11/2026. PNGs em `prototipo/imagens/chefao/`, com caminhos relativos ao projeto para carregar em outro computador.

| Recurso | Uso |
| --- | --- |
| `funcionando-b.png` | Segundo quadro do ciclo de funcionamento, alternado com a imagem original; fumaça, fogo e manômetro variam. |
| `pressurizando.png` | Caldeira sob pressão durante os avisos. |
| `liberando-pressao.png` | Descarga após os ataques e imagem do desligamento. |
| `prensa.png` | Pistão vertical: desce nos últimos 0,35 s do aviso, atinge a plataforma e recolhe. |
| `clarao-a.png`, `clarao-b.png` | Dois quadros do clarão da rajada. |
| `vapor-a.png`, `vapor-b.png` | Coluna de vapor branco subindo, dois quadros em ciclo durante o ataque. |

Os três novos quadros do corpo mantêm canvas de 1536 × 1024, a escala de jogo 400 × 267 e a mesma máscara da fornalha. A prensa usa canvas 1024 × 1536 e tamanho de jogo 200 × 300. Os clarões usam canvas 1536 × 1024, tamanho de jogo 180 × 120 e pivô junto à saída do disparo.

O grupo **Máquina-mãe: animações e efeitos** escolhe uma única animação por quadro para não reiniciar os ciclos a cada evento. Também controla o clarão, a reação breve de dano, o desligamento visual de 0,7 s e os rastros dos projéteis. O vapor usa a coluna animada de dois PNGs. Os emissores de vapor dos ataques e da convocação foram removidos; as nuvens da máquina ficam representadas nos quadros da arte. Poeira acompanha o impacto da prensa. As partículas são finitas e se removem ao terminar.

Os efeitos decorativos não pertencem ao grupo de inimigos. Vida, recompensa, tempos de dano, recargas e o sinal `ChefaoDerrotado` mantêm suas regras. O atalho F8 continua disponível durante os testes.

## Origem

Imagens geradas com a ferramenta de imagens integrada ao Codex (modo nativo, sem CLI/API). Referência: `prototipo/imagens/maquina_mae.png`. PNGs individuais, sem recorte ou edição posterior, preservando a transparência gerada. Os movimentos da prensa e as partículas são eventos do GDevelop. A coluna de vapor usa canvas 1024 × 1536, tamanho de jogo 225 × 450 e origem (512, 1500), junto à base da coluna; alterna os dois quadros a cada 0,16 s e só aparece durante o jato ativo. A área de dano continua definida pelos eventos existentes.

## Prompts usados

### Funcionando B

Use case: precise-object-edit. Asset type: ONE standalone animation frame for a GDevelop 2D game boss. Input image is the EDIT TARGET, not a loose style reference. Output exactly the same 1536x1024 canvas and same machine in exactly the same pixel position, scale, silhouette, camera and alignment. Preserve the stationary metal body, furnace door, feet, rivets, pipes, press heads and their proportions, copper/red/dark iron colors. Change ONLY: steam puffs from all three chimneys to the NEXT phase of a subtle idle animation (small puffs rising and dispersing); pressure gauge needle rotates just a little clockwise; furnace fire gently brighter. Body must not translate or enlarge at all. This is frame B alternating with the provided frame A, so static components must register exactly. Fully transparent background, no black/gray backdrop or glow outside machine, no ground, no text, no grid, one machine only.

### Pressurizando

Use case: precise-object-edit. Asset type: ONE standalone attack preparation animation frame for a GDevelop 2D game boss. Input image is the EDIT TARGET. Output exactly same 1536x1024 canvas and same machine in exactly same pixel positions, scale, camera, feet baseline, body silhouette and alignment. Keep every metal component and all geometry in the original position. Change ONLY furnace fire inside its brass ring to a very bright white-yellow center and vivid orange rim, gauge needle toward red high pressure, small steam pressure wisps emerging at copper pipe joints, chimney smoke slightly denser and higher but within original canvas. This is a restrained CHARGING state, with no rays obscuring the weakspot, no detached projectiles. Fully transparent background, no background haze outside machine, no ground, no text, no grid, one machine only.

### Liberando pressão

Use case: precise-object-edit. ONE standalone animation frame C, pressure RELEASE, same transparent 1536x1024 canvas as input. EDIT TARGET is this exact machine. Preserve machine body, feet, camera, size, positions, core collision area, silhouette, brass ring, every metal component exactly. Change ONLY furnace fire to slightly dimmer amber after firing, pressure needle swings counterclockwise to a lower reading, and three chimney puffs become visibly expanded, more separated, venting large ivory steam clouds while staying inside original canvas. A little ivory steam emits from the left press piston joint. Do not translate, stretch, move or redesign metal body. Keep same 1930s illustrated cartoon style, bold outlines, source rust details. No text, grid, backdrop, floor, detached objects. True transparent background.

### Prensa

Use case: stylized-concept. Asset type: ONE isolated vertical hydraulic PRESS game sprite for the original steampunk platform game Oficina em Pane. Input image is a STYLE AND MATERIAL reference only, particularly its yellow-black striped industrial clamps. Draw only ONE front-facing overhead press: a long dark cast-iron vertical hydraulic ram entering from the TOP CENTER of canvas, brass piston sleeve and copper fittings, ending at bottom in a broad heavy rectangular metal crushing block with worn diagonal yellow-black hazard stripes. The block has a FLAT HORIZONTAL underside near bottom of canvas, no spikes, no claws. 1930s hand-drawn cartoon industrial style, bold ink outline, hand-painted metal, warm copper/brass and dark red steel, matching reference. Transparent background. Portrait 1024x1536 canvas. Symmetrical fixed front view, press centered, all outlines within canvas with 40px padding except top shaft can touch upper edge, crushing face near y=1450, no floor, no machine body, no text or labels, no smoke hiding the edges. Standalone game cutout.

### Clarão A

Use case: stylized-concept. Asset type: ONE standalone 2D game muzzle-flash / hot pressure burst sprite. Input machine is STYLE reference only. A compact warm white-yellow center with irregular orange flame lobes and a few short glowing sparks, erupting LEFTWARD from a small source at the RIGHT EDGE of the effect. Restrained 1930s hand-drawn cartoon effect with confident dark outlines and warm furnace palette, not realistic photo, no blue magic. Transparent background, landscape 1536x1024 canvas, effect fully contained centered with generous transparent margins. No machine, gun, character, ground, scene, text or grid. This image will briefly flash in front of the machine left press outlet when it fires.

### Clarão B

Use case: precise-object-edit. ONE standalone frame B of this same leftward muzzle-flash animation. Exact same transparent 1536x1024 canvas, same source at right x~1180 y~570. The burst is now dispersing: shrink the central white-yellow core substantially, move orange flame lobes a little farther left, separate the sparks into a few smaller fading flecks. Keep effect in same overall bounding region, preserve 1930s hand-inked cartoon style and orange palette. Clearly visibly different next animation phase, no new subject. Transparent background, no floor, machine, text, grid or labels.

## Conferência na prévia

Abrir o projeto, iniciar a prévia e pressionar F8. Observar o ciclo da caldeira sem atirar, o clarão da rajada, a prensa tocando a plataforma, o vapor e as nuvens da convocação. Um tiro na fornalha deve provocar breve mudança de cor; ao derrotar o chefe, a imagem escurece, solta vapor e desaparece. Conferir também a remoção das partículas e a leitura dos efeitos sobre o cenário.

## Complemento: arte do vapor

Gerada em 04/11/2026 com a ferramenta de imagens integrada ao Codex. O primeiro quadro usa a Máquina-mãe como referência de estilo; o segundo usa o primeiro como alvo de edição. Transparência preservada, sem recorte posterior.

### Vapor A

Use case: stylized-concept. Asset type: ONE standalone frame A of a vertical upward STEAM JET attack for a 2D GDevelop game. Input image is STYLE reference only: match its ivory chimney steam, bold hand-inked 1930s cartoon outlines, copper-workshop atmosphere. Draw only a powerful continuous narrow COLUMN OF WHITE STEAM shooting straight UP, emerging from bottom center (x=512,y=1500) and reaching near y=100 on an exact 1024x1536 portrait canvas. Cloudlike stacked ivory/white lobes curl upward along the column with pale cool-gray interior shading; a narrow dense pressurized stem at bottom, slightly broader billowing wisps near top, a few tiny separate vapor puffs. Overall opaque main column stays mostly within x=180..844; generous fully transparent side margins. Crisp readable game silhouette, varied flowing contours, restrained steam opacity at wispy edges, main white body visible on detailed dark background. No fire, NO orange or yellow glow, no flame shapes, no sparks, no ice or magic, no nozzle, machine, floor, character, text, frame or grid. True transparent background. Standalone steam sprite only.

### Vapor B

Use case: precise-object-edit. Asset type: ONE standalone frame B for this same upward STEAM JET animation. Input is EDIT TARGET. Output the exact same 1024x1536 portrait transparent canvas, same scale, overall narrow column placement, top near y=100 and base fixed at x=512,y=1500. Preserve the white/ivory and cool pale gray palette and bold hand-inked cartoon style. Advance the steam animation one phase: the larger upper cloud lobes curl upward and change rounded contours, a few small detached puffs rise, the middle column's curled vapor shifts gently in the other direction. The lower stem base must remain pinned in place, column must still look continuous upward and occupy same overall region. Distinct cloud contours from frame A to visibly animate in a loop. No color change, fire, sparks, orange/yellow glow, nozzle, machine, background, ground, text, grid or additional effects. True transparent background.

## Spritesheets completos

Foram criadas oito folhas com sequências próprias para funcionamento, quatro habilidades, prensa, vapor e clarão. Ver [catálogo e situação de integração](spritesheets/README.md) e [prompts](spritesheets/manifesto.json).

# Créditos

Origem de cada recurso usado no jogo. Cada integrante registra a parte que integrou: artes geradas por IA, sons (com fonte e licença) e recursos de exemplos reutilizados.

ChatGPT também foi utilizado como apoio ao brainstorming de ideias, discutidas e refinadas pela equipe. As decisões de design permaneceram sob responsabilidade do grupo; o auxílio específico na lógica do Saltador está descrito abaixo.

## Participação de Lucas Ciampi

Lucas atuou na implementação, integração, testes e balanceamento da frente de inimigos, ondas, recompensas e Máquina-mãe. Isso inclui os cinco tipos de inimigo, surgimentos acompanhando a câmera, dano e pontuação por abates, animações, efeitos e as quatro habilidades do chefe. Na navegação do Saltador, utilizou auxílio do ChatGPT para elaborar e refinar a lógica de escolha de plataformas e alcance dos saltos, com testes e ajustes no GDevelop.

Também realizou **refinamentos** de interface e apresentação: menu inicial ilustrado, introdução com história e controles, botão de continuar na pausa, apresentação das telas de derrota/vitória, barra de vida da Máquina-mãe e ícone da pontuação no HUD. Esse trabalho complementou os sistemas e recursos já integrados pelos colegas, incluindo o resultado e reinício da branch `telas-resultado`.

Outros ajustes incluíram legibilidade dos projéteis do chefe e do Atirador, integração do som de dano nos ataques dos inimigos, ordem visual dos inimigos atrás do herói, colisão lateral do Pesado, organização dos sons/imagens e limpeza de recursos ausentes.

Na parte visual, teve participação ampla na geração por IA, seleção, revisão, preparação e integração de imagens: personagens, inimigos, chefe, cenário e elementos de interface. Os conceitos e prompts ficam no catálogo `imagens/`, e as versões usadas no jogo ficam em `prototipo/`. A origem específica das artes está detalhada nas seções abaixo.

**Concepção do jogo:** a ideia inicial foi apresentada por Lucas e refinada em conjunto com Vitor e Gustavo. O planejamento e as decisões de design são trabalho coletivo da equipe; as contribuições acima descrevem a atuação de Lucas na implementação e no acabamento.

## Cenário, plataformas e efeitos da arena

### Imagens

| Recurso no jogo | Arquivo no projeto | Origem |
| --- | --- | --- |
| Fundo distante (janelas da fábrica) | `prototipo/imagens/cenario/fundo-distante.png` | Gerado por IA com a ferramenta de imagens integrada ao Codex (Lucas Ciampi). Original e prompt em [imagens/fundo-oficina/camadas/fundo-distante](imagens/fundo-oficina/camadas/fundo-distante/README.md) |
| Máquinas e tubulações (camada intermediária) | `prototipo/imagens/cenario/fundo-maquinas.png` | Mesma origem. [imagens/fundo-oficina/camadas/fundo-maquinas](imagens/fundo-oficina/camadas/fundo-maquinas/README.md) |
| Bordas esquerda e direita da oficina | `prototipo/imagens/cenario/borda-esquerda.png`, `borda-direita.png` | Mesma origem. [borda-esquerda](imagens/fundo-oficina/camadas/borda-esquerda/README.md) e [borda-direita](imagens/fundo-oficina/camadas/borda-direita/README.md) |
| Chão, prateleira, esteira, andaime, fio e óleo | `prototipo/imagens/chao.png`, `prateleira.png`, `esteira.png`, `andaime.png`, `fio.png`, `oleo.png` | Gerados por IA com a ferramenta de imagens integrada ao Codex (Lucas Ciampi). Originais e prompts em [imagens/plataformas](imagens/plataformas/README.md) |
| Esteira para a esquerda | `prototipo/imagens/esteira-esquerda.png` | Cópia espelhada de `esteira.png` |
| Borda vermelha do aviso do óleo | `prototipo/imagens/alerta-oleo.png` | Feita pelo grupo com um script (vinheta vermelha transparente no centro) |

Preparação: as texturas das plataformas foram recortadas da arte original num trecho que se repete, com a emenda fundida para não aparecer a junção, e reduzidas à espessura usada no jogo (32 px; 120 px no óleo).

### Recursos do GDevelop

Os efeitos da arena usam apenas recursos que vêm com o GDevelop, sem extensões externas:

- **Emissor de partículas** para o vapor das máquinas;
- **Tween** para a queda do andaime, a chegada do óleo e o tremor da câmera;
- **Comportamentos de plataforma** (plataforma e objeto que anda sobre plataformas) para chão, prateleiras, esteiras, andaimes e peças;
- objetos **Tiled Sprite** para as texturas repetidas.

## Jogador, controles e combate

_A preencher._

## Inimigos, ondas e chefão

### Artes dos inimigos comuns

Conceitos e spritesheets gerados por IA com a ferramenta de imagens integrada ao Codex, a partir das ideias e referências da equipe, com geração, seleção, revisão e preparação acompanhadas por Lucas Ciampi. Os quadros foram integrados às animações dos objetos no GDevelop, com ajustes de escala, orientação e colisão.

| Recurso | Quadros usados no projeto | Originais e registro de geração |
| --- | --- | --- |
| Andador | `prototipo/imagens/andador-animado/` | [Conceito](imagens/inimigos/andador/README.md) e [spritesheet](imagens/inimigos/andador/spritesheet/README.md) |
| Saltador | `prototipo/imagens/saltador-animado/` | [Conceito](imagens/inimigos/saltador/README.md), [spritesheet](imagens/inimigos/saltador/saltador-spritesheet-v1.png) e [prompt](imagens/inimigos/saltador/PROMPT.md) |
| Voador | `prototipo/imagens/voador-animado/` | [Conceito](imagens/inimigos/voador/README.md) e [spritesheet](imagens/inimigos/voador/spritesheet/README.md) |
| Pesado | `prototipo/imagens/pesado-animado/` | [Conceito](imagens/inimigos/pesado/README.md) e [spritesheet](imagens/inimigos/pesado/spritesheet/README.md) |
| Atirador | `prototipo/imagens/atirador-animado/` | [Conceito](imagens/inimigos/atirador/README.md) e [spritesheet](imagens/inimigos/atirador/spritesheet/README.md) |

### Máquina-mãe

- Animações e efeitos da Máquina-mãe: oito PNGs gerados por IA com a ferramenta de imagens integrada ao Codex, usando o conceito aprovado como referência. Quadros em `prototipo/imagens/chefao/`; origem, integração e prompts em [ANIMACOES.md](imagens/inimigos/maquina-mae/ANIMACOES.md). Movimentos da prensa integrados com eventos do GDevelop. O vapor dos ataques usa imagens animadas.
- Oito spritesheets adicionais da Máquina-mãe e de seus efeitos, totalizando 36 quadros, gerados pela mesma ferramenta. [Catálogo e prompts](imagens/inimigos/maquina-mae/spritesheets/README.md).

## Interface, menus e áudio

### Imagens

| Recurso no jogo | Arquivo no projeto | Origem |
| --- | --- | --- |
| Moldura e preenchimentos das barras de vida e XP | `prototipo/imagens/interface/hud/barra-moldura.png`, `barra-vida.png`, `barra-xp.png` | Feitas pelo grupo com um script, nas cores dos ícones do HUD |

# Créditos

Origem de cada recurso usado no jogo. Cada integrante registra a parte que integrou: artes geradas por IA, sons (com fonte e licença) e recursos de exemplos reutilizados.

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

- Animações e efeitos da Máquina-mãe: oito PNGs gerados por IA com a ferramenta de imagens integrada ao Codex, usando o conceito aprovado como referência. Quadros em `prototipo/imagens/chefao/`; origem, integração e prompts em [ANIMACOES.md](imagens/inimigos/maquina-mae/ANIMACOES.md). Movimentos da prensa integrados com eventos do GDevelop. O vapor dos ataques usa imagens animadas.
- Oito spritesheets adicionais da Máquina-mãe e de seus efeitos, totalizando 36 quadros, gerados pela mesma ferramenta. [Catálogo e prompts](imagens/inimigos/maquina-mae/spritesheets/README.md).

## Interface, menus e áudio

_A preencher._

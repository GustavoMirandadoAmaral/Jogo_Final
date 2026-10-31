# Oficina em Pane — Documento de Design (GDD)

> Documento vivo do grupo: reúne tudo o que já discutimos e decidimos sobre o jogo.
> O cronograma está em [FASEAMENTO.md](FASEAMENTO.md).
> Itens marcados como **[A DEFINIR]** ainda precisam de decisão do grupo.

## 1. Visão geral

| | |
| --- | --- |
| **Nome (provisório)** | Oficina em Pane |
| **Gênero** | Sobrevivência contra hordas (*survivors-like* / *wave defense*) em plataforma 2D |
| **Perspectiva** | Visão lateral, com gravidade e pulo |
| **Inspirações** | Survivor.io e Megabonk (hordas e upgrades), Cuphead (estética, movimento e chefões) |
| **Ferramenta** | GDevelop (versão desktop) |
| **Plataforma** | Navegador (export HTML5 publicado no GitHub Pages) |

**Pitch:** um pequeno robô enfrenta ondas de robôs defeituosos dentro de uma oficina em pane e usa as peças recuperadas deles para se aprimorar, até chegar à máquina-mãe que causou tudo.

## 2. Decisões tomadas

| Tema | Decisão |
| --- | --- |
| Ferramenta e colaboração | GDevelop **desktop** + Git/GitHub. Cada integrante é dono de uma parte (veja o FASEAMENTO). |
| Perspectiva | **De lado, com pulo.** Descartamos "de lado voando" por ficar parecido demais com o jogo da nave das aulas. |
| Tema | **Oficina em Pane**, proposto por um colega do grupo. |
| Protagonista | **Robô** com cabeça, braços e pernas, mas com cara de máquina, sem traços humanos. |
| Inimigos | **Robôs** de cores e formatos diferentes, **não humanoides**. Cada tipo tem uma silhueta e uma cor próprias. |
| Plataformas | Prateleiras atravessáveis, esteiras rolantes, andaimes que desabam e óleo subindo pelo chão. |
| Movimento | Estilo Cuphead: **pulo duplo** e **dash**. |
| Progressão | XP no chão (peças), upgrades escolhidos a cada nível. |
| **Descartado** | Upgrades que usam o pulo (dano ao cair, rastro ao pular etc.). |
| **Opcional** | **Parry rosa**, entra só se sobrar tempo. |
| Arte | Gerada por IA, PNG com fundo transparente, animada com Tween no GDevelop. |

## 3. Enredo [A DEFINIR]

A base já existe: **as máquinas da oficina entraram em pane, e um pequeno robô é o único que ainda funciona.** Falta o grupo responder:

1. **Por que as máquinas entraram em pane?** (um raio atingiu o gerador? o inventor sumiu? uma peça defeituosa contaminou as outras?)
2. **Por que o nosso robô é o único que não quebrou?** (modelo mais antigo? o menor? o aprendiz que ninguém levava a sério?)
3. **Qual é o objetivo final?** Sugestão: chegar à máquina-mãe e reiniciá-la. Isso já justifica o chefão.
4. **Nome do robô protagonista.**

## 4. Mecânica central

### O ciclo de jogo

A tensão principal é **segurança lá em cima × evolução lá embaixo**:

1. Os robôs inimigos chegam em ondas pelos lados da arena.
2. Ao serem destruídos, eles **soltam peças** (parafusos e engrenagens douradas) **no chão**.
3. Subir nas plataformas é mais seguro, mas **para evoluir é preciso descer** e coletar as peças no meio da horda.
4. Ao juntar peças suficientes, o robô sobe de nível: o jogo pausa e o jogador **escolhe 1 entre 3 upgrades**.
5. As ondas ficam mais difíceis e novos tipos de inimigo entram.
6. No final, a arena encolhe e aparece o **chefão**. Vencê-lo termina o jogo.

### Estrutura de uma partida (proposta)

| Momento | O que acontece |
| --- | --- |
| Minutos 0–1 | Só andadores. Aprender a mover, pular e coletar. |
| Minutos 1–2 | Entram os saltadores. O alto deixa de ser totalmente seguro. |
| Minutos 2–3 | Entram os voadores. É preciso se mover o tempo todo. |
| Minutos 3–4 | Entram os pesados (plataformas caem) e os atiradores. |
| Minuto 4–5 | O óleo sobe, a arena encolhe e o **chefão** aparece. |

Os tempos são um ponto de partida; o balanceamento acontece na fase 3 do FASEAMENTO.

### Ataque [A DEFINIR]

No gênero, o ataque costuma ser **automático**: o jogador se concentra em se mover. Opções:

- **(a) Automático no inimigo mais próximo.** Mais fiel ao survivor.io e mais simples de jogar. *(sugestão)*
- **(b) Automático para a direção em que o robô está virado.** O posicionamento passa a importar mais.
- **(c) Manual, com uma tecla de tiro, como no Cuphead.** Mais controle, mas foge do gênero.

## 5. Protagonista

- **Robô pequeno**, com cabeça, braços e pernas, mas claramente uma máquina: sem rosto ou traços humanos.
- O ataque sai de um dos braços (um canhão no braço, por exemplo) **[A DEFINIR]**.
- **Movimento:**
  - Andar para os lados
  - **Pulo** e **pulo duplo** (propulsor de mola)
  - **Dash** curto, com tempo de recarga (turbo a vapor), que atravessa inimigos

### Controles (proposta)

| Ação | Tecla |
| --- | --- |
| Andar | Setas ← → ou A / D |
| Pular / pulo duplo | Espaço, W ou ↑ |
| Dash | Shift |
| Pausa | Esc |
| Escolher upgrade | Setas + Enter, ou clique do mouse |

## 6. Inimigos

Todos são **robôs não humanoides**. Cada tipo tem **cor e silhueta próprias**, para que o jogador reconheça o comportamento de longe. Os comportamentos estão decididos; os visuais abaixo são **sugestões** para o grupo ajustar.

| Tipo | Comportamento | O que muda para o jogador | Visual (sugestão) |
| --- | --- | --- | --- |
| **Andador** | Anda no chão na direção do jogador e não sobe plataformas | O alto é seguro contra ele | Robô baixinho de rodas ou esteiras, cor **cinza** |
| **Saltador** | Pula atrás do jogador quando ele está acima | Ficar parado no alto deixa de ser seguro | Robô com uma mola no lugar das pernas, cor **verde** |
| **Voador** | Ignora as plataformas e vai direto até o jogador | Ameaça quem fica acampado no alto | Robô esférico com hélice, cor **azul** |
| **Pesado** | Lento e resistente; embaixo de uma plataforma, faz ela tremer e cair | Força o jogador a mudar de lugar | Robô grande e quadrado, cor **laranja** |
| **Atirador** | Fica à distância e dispara projéteis | Força o jogador a se mover e usar as plataformas como cobertura | Robô-torreta com um olho só, cor **roxa** |

### Chefão

A **máquina-mãe** da oficina: um robô gigante, ocupando boa parte da tela, no estilo dos chefões do Cuphead. Ele aparece no final da partida, com ataques próprios (detalhes **[A DEFINIR]**).

> **Limite técnico:** inimigos com física de plataforma pesam mais do que os que só andam reto. Vamos trabalhar com **20 a 40 inimigos na tela ao mesmo tempo**, mais fortes e variados, em vez das centenas do survivor.io.

## 7. Arena e plataformas

- **Uma arena fixa** (cerca de 1 a 2 telas de largura), com a câmera seguindo o robô.
- **Fundo em camadas com parallax**: paredes da oficina, máquinas paradas e janelas ao fundo, rolando em velocidades diferentes conforme a câmera se move.

| Elemento | Comportamento |
| --- | --- |
| **Prateleiras** | Plataformas atravessáveis por baixo: o robô pula através delas e para em cima |
| **Esteiras rolantes** | Empurram o robô (e os inimigos) para um lado |
| **Andaimes** | Desabam alguns segundos depois de o robô ficar em cima, ou quando um inimigo pesado chega embaixo |
| **Óleo subindo** | Em certas ondas, o óleo sobe pelo chão e encolhe a arena, empurrando todo mundo para cima |
| **Mudança entre ondas** | Entre uma onda e outra, plataformas novas aparecem e outras somem |

## 8. Upgrades (peças recuperadas)

Cada upgrade é uma **peça instalada no robô**. Escolhemos 1 entre 3 opções sorteadas a cada nível. Sugestões (sem nenhuma ligada ao pulo):

| Upgrade | Efeito |
| --- | --- |
| Canhão reforçado | + dano do ataque |
| Engrenagem rápida | + velocidade de ataque |
| Cano duplo | Dispara um projétil a mais |
| Ímã | Puxa as peças de mais longe |
| Placa de blindagem | + vida máxima |
| Kit de reparo | Regenera vida aos poucos |
| Rodas lubrificadas | + velocidade de movimento |
| Caldeira extra | Dash recarrega mais rápido |
| Escudo de faíscas | Bloqueia um golpe a cada X segundos |

**Escopo mínimo:** 6 upgrades. O restante entra se sobrar tempo.

## 9. Estética e som

- **Estilo:** desenho animado dos anos 30, como no Cuphead, com cores levemente dessaturadas e textura de filme antigo.
- **Efeitos do GDevelop** nas camadas para reforçar o visual (granulação, ruído, tom envelhecido).
- **Cores de destaque**, para manter a leitura em meio a tanto metal:
  - **Dourado:** peças coletáveis (XP)
  - **Vermelho:** perigos (projéteis inimigos, óleo)
  - **Rosa:** reservado para o parry, se ele entrar
  - Cada tipo de inimigo com **sua cor** (tabela da seção 6)
- **Som:** trilha em estilo jazz ou ragtime antigo, que combina com os anos 30, mais efeitos de metal, molas, vapor e explosões. Use fontes com licença livre e registre tudo em `CREDITOS.md`.

### Arte gerada por IA

- Gerar os personagens **parados**, em PNG com **fundo transparente** (remover o fundo se necessário).
- **Animar no GDevelop em vez de desenhar quadro a quadro:** engrenagens girando com a ação de rotação; balançar, esticar e encolher com o comportamento **Tween**.
- Manter **tamanho e estilo consistentes** entre os personagens (usar o mesmo prompt-base para todos).
- **Declarar no README e no `CREDITOS.md`** quais imagens foram geradas por IA e com qual ferramenta.
- [ ] **Confirmar com o professor** que imagens geradas por IA são aceitas.

## 10. Escopo

### Mínimo (precisa estar pronto)

- [ ] Robô com andar, pulo, pulo duplo e dash
- [ ] Ataque automático
- [ ] 1 arena com prateleiras, esteiras e andaimes que desabam
- [ ] Fundo em parallax
- [ ] Os 5 tipos de inimigo
- [ ] Peças caindo no chão + barra de XP + escolha de upgrade
- [ ] 6 upgrades
- [ ] Ondas com dificuldade crescente
- [ ] Óleo subindo + chefão no final
- [ ] Menu inicial, HUD (vida, XP, tempo), pausa, game over e tela de vitória
- [ ] Trilha e efeitos sonoros

### Extras (só se sobrar tempo)

- [ ] Parry rosa
- [ ] Mais upgrades
- [ ] Mais de uma arena (setores da oficina: depósito, linha de montagem, caldeira)
- [ ] Recorde salvo entre partidas
- [ ] Peças instaladas aparecendo visualmente no robô

## 11. Recursos do GDevelop que vamos usar

Isso vale para a nota de "uso da ferramenta" e para a apresentação:

| Recurso | Uso no jogo |
| --- | --- |
| Comportamento **Platformer** | Robô e inimigos terrestres (gravidade, pulo, pulo duplo) |
| Comportamento **Platform** (incluindo *jumpthru*) | Chão, prateleiras atravessáveis, andaimes |
| Comportamento **Tween** | Animações dos robôs, plataformas que tremem, óleo subindo |
| **Camadas** com velocidades diferentes | Fundo em parallax |
| **Efeitos** de camada | Visual de filme antigo |
| **Timers** e **variáveis** | Ondas, tempo de partida, vida, XP, recarga do dash |
| **Eventos externos** | Dividir a lógica por integrante (jogador, inimigos, upgrades, UI) e evitar conflitos no Git |
| **Partículas** | Faíscas, vapor do dash, explosões |
| **Cenas** | Menu, jogo, game over, vitória |

### Relação com o que vimos em aula

| Aula (JS + Canvas) | No GDevelop |
| --- | --- |
| `Animacao.proximoFrame()` | Loop de eventos da cena |
| `Colisor` / `retangulosColisao()` | Máscaras de colisão + condição de colisão |
| `Spritesheet` | Animações do objeto Sprite |
| `Fundo` (emenda / parallax) | Camadas e Tiled Sprite |
| `Teclado.pressionada` / `disparou` | Condições "tecla pressionada" / "tecla acabou de ser pressionada" |
| `excluirSprite` | Ação "excluir objeto" |

## 12. Próximos passos

- [ ] Fechar o enredo (seção 3) e o nome do robô
- [ ] Decidir o tipo de ataque (seção 4)
- [ ] Definir quem cuida de cada frente (tabela no FASEAMENTO)
- [ ] Confirmar com o professor o uso de imagens geradas por IA
- [ ] Todos instalarem o GDevelop desktop e clonarem o repositório
- [ ] **Protótipo com quadrados coloridos:** arena com 3–4 plataformas, andadores e saltadores, peças no chão. Validar se o ciclo "subir para se proteger, descer para coletar" é divertido antes de produzir a arte.

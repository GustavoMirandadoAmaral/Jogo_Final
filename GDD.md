# Oficina em Pane — Documento de Design (GDD)

> Documento vivo do grupo: reúne tudo o que já discutimos e decidimos sobre o jogo.
> O cronograma está em [FASEAMENTO.md](FASEAMENTO.md).
> Os conceitos visuais, imagens e explicações estão no [catálogo de imagens](imagens/README.md).
> **Revisão de implementação: 20/11/2026.** Itens concluídos abaixo foram conferidos no projeto local e nos testes relatados pelo grupo nesta sessão. Isso não substitui o teste da exportação final.
> Itens marcados como **[A DEFINIR]** ou **a confirmar** ainda precisam de decisão ou validação da equipe.

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
| Arena e câmera | Arena maior que a área visível, com **acompanhamento horizontal suave** do robô e **parallax** no fundo. |
| Tema | **Oficina em Pane**, proposto por um colega do grupo. |
| Protagonista | **Robô-caldeira movido a vapor**, com metal rebitado, janela circular de fornalha, manômetro, pinça e braço-canhão, sem rosto humano. [Referência aprovada](imagens/heroi/README.md). |
| Inimigos | **Robôs** de cores e formatos diferentes, **não humanoides**. Cada tipo tem uma silhueta e uma cor próprias. |
| Plataformas | Prateleiras atravessáveis, esteiras rolantes, andaimes que desabam e óleo subindo pelo chão. |
| Movimento | Andar, pulo e dash implementados. Pulo duplo descartado para esta versão. |
| Ataque | **Manual**, com mira pelo mouse e disparo ao segurar o botão esquerdo. |
| Progressão | XP no chão (peças), upgrades escolhidos a cada nível. |
| **Descartado** | Upgrades que usam o pulo (dano ao cair, rastro ao pular etc.). |
| **Opcional** | **Parry rosa**, entra só se sobrar tempo. |
| Arte | Imagens e spritesheets gerados por IA; animações por quadros nos Sprites e Tween para efeitos complementares. |
| Vida extra | Proposta de reviver após a morte descartada. Permanecem melhorias de vida e curas entre ondas e antes do chefe. |

## 3. Enredo

A introdução implementada apresenta a oficina em pane: as máquinas enlouqueceram, e um pequeno robô é a última esperança de salvá-la. O objetivo é enfrentar as ondas e derrotar a Máquina-mãe; a vitória comunica que a oficina voltou a funcionar.

Esse enredo é suficiente para a versão de entrega. Nome próprio do protagonista, origem e causa detalhada da pane não serão desenvolvidos neste momento, para manter o foco na conclusão do jogo. Podem ser explorados em uma evolução futura.

## 4. Mecânica central

### O ciclo de jogo

A tensão principal é **segurança lá em cima × evolução lá embaixo**:

1. Os robôs inimigos chegam em ondas pelos lados da arena.
2. Ao serem destruídos, eles **soltam peças** (parafusos e engrenagens douradas) **no chão**.
3. Subir nas plataformas é mais seguro, mas **para evoluir é preciso descer** e coletar as peças no meio da horda.
4. Ao juntar peças suficientes, o robô sobe de nível: o jogo pausa e o jogador **escolhe 1 entre 3 upgrades**.
5. As ondas ficam mais difíceis e novos tipos de inimigo entram.
6. Depois da quinta onda, aparece a **Máquina-mãe** e o óleo cobre o chão, reduzindo a área segura às plataformas. Vencê-la faz o óleo escoar e leva à vitória.

Durante o óleo, as peças podem permanecer nas plataformas; as que caem no óleo ainda no ar são encaminhadas para uma prateleira. O risco de descer para coletar é adaptado nessa etapa final.

### Estrutura de uma partida implementada

A progressão depende das cotas criadas e dos inimigos eliminados, não de minutos fixos. Cada tipo tem intervalo de surgimento; o limite de vivos controla a ocupação simultânea.

| Onda | Composição total | Limite de vivos |
| --- | --- | --- |
| 1 | 10 Andadores | 8 |
| 2 | 12 Andadores e 8 Saltadores | 10 |
| 3 | 10 Andadores, 8 Saltadores e 4 Voadores | 10 |
| 4 | 10 Andadores, 8 Saltadores, 6 Voadores e 4 Pesados | 11 |
| 5 | 12 Saltadores, 8 Voadores e 8 Atiradores | 16 |
| Final | Máquina-mãe, óleo e Voadores convocados pelo chefe | Controle próprio da luta |

Os surgimentos alternam as bordas da câmera, inclusive além dos limites da arena. Atiradores também podem entrar por plataformas fora da tela. Ao concluir as ondas 3 e 4, o robô recupera 1 de vida até o máximo; na entrada do chefe, recupera toda a vida máxima atual. A antiga proposta de chefe aos quatro minutos foi substituída por essa progressão.

### Ataque

**Manual, com mira pelo mouse.** O jogador decide quando atacar e para onde disparar.

- O cursor do mouse define a direção dos tiros, independentemente da direção do deslocamento do robô.
- Enquanto o **botão esquerdo do mouse estiver pressionado**, o robô dispara respeitando a cadência da arma. Soltar o botão interrompe os disparos.
- O ataque fica suspenso durante a pausa e a escolha de upgrades.

## 5. Protagonista

- **Robô-caldeira pequeno e movido a vapor**, com cabeça e carcaça de metal esmaltado/rebitado, janela circular de fornalha laranja, escape, manômetro, válvula e tubulações de cobre. Sem rosto ou traços humanos.
- Uma mão é uma pinça; o outro braço tem um **canhão pneumático**, com mira manual pelo mouse. [Conceito aprovado do herói](imagens/heroi/README.md).
- **Aparência única:** a evolução visual por nível foi descontinuada. O robô mantém a mesma versão durante toda a partida; XP e melhorias alteram a progressão e os atributos, sem trocar sua aparência. Os [conceitos dos três estágios](imagens/evolucao-heroi/README.md) ficam preservados como material de criação, sem integração prevista nesta versão.
- **Movimento:**
  - Andar para os lados
  - **Pulo** implementado; **pulo duplo descartado** para esta versão
  - **Dash** curto, com tempo de recarga (turbo a vapor), que atravessa inimigos

### Controles implementados

| Ação | Controle |
| --- | --- |
| Andar | Setas ← → ou A / D |
| Pular | Espaço, W ou ↑; sem segundo salto no ar |
| Dash | Shift |
| Mirar | Cursor do mouse |
| Atirar | Segurar o botão esquerdo do mouse |
| Pausa | Esc |
| Escolher upgrade | Teclas 1, 2 ou 3, ou clique do mouse |

## 6. Inimigos

As propostas individuais estão na [galeria de inimigos e chefão](imagens/inimigos/README.md), com uma imagem e uma ficha por tipo para discussão do grupo.

Todos são **robôs não humanoides**. Cada tipo tem **cor e silhueta próprias**, para que o jogador reconheça o comportamento de longe. Os cinco tipos possuem imagens e animações integradas. O resumo abaixo descreve a implementação atual; as cores são referências da direção visual.

| Tipo | Comportamento | O que muda para o jogador | Visual (sugestão) |
| --- | --- | --- | --- |
| **Andador** | Anda no chão na direção do jogador e não sobe plataformas | O alto é seguro contra ele | Robô baixinho de rodas ou esteiras, cor **cinza** |
| **Saltador** | Pula atrás do jogador quando ele está acima | Ficar parado no alto deixa de ser seguro | Robô com uma mola no lugar das pernas, cor **verde** |
| **Voador** | Ignora plataformas, aproxima-se, pisca por 0,75 s e se autodestrói numa explosão | Exige afastamento durante o aviso | Robô esférico com hélice, cor **azul** |
| **Pesado** | Resistente; causa 2 de dano por contato e pode derrubar a plataforma ocupada acima dele, com preparação e recarga | Força o jogador a mudar de lugar | Robô grande e quadrado, cor **laranja** |
| **Atirador** | Busca distância, respeita bordas e dispara voltado ao robô; os tiros atravessam plataformas | Exige desviar dos projéteis mesmo no alto | Robô-torreta com um olho só, cor **roxa** |

### Chefão

A **Máquina-mãe** aparece após concluir a quinta onda, com 300 de vida, barra acima do corpo e indicador de direção quando está fora da câmera. Quatro habilidades foram implementadas:

- **Rajada:** cinco projéteis com intervalo de 0,2 s, velocidade de 260 px/s e dano 2.
- **Prensa:** marca uma plataforma ocupada e remove temporariamente sua sustentação, com aviso e retorno.
- **Vapor:** marca uma posição e libera uma coluna de dano após a preparação.
- **Convocação:** cria Voadores durante a luta.

Animações, avisos, sons e recargas sinalizam as habilidades. Ao derrotá-la, o óleo escoa e a vitória mostra o resultado e permite reiniciar ou voltar ao menu. A proposta inicial de dois ataques foi ampliada.

**Limite adotado:** entre 8 e 16 inimigos vivos nas ondas atuais, em vez da estimativa inicial de 20 a 40. Aumentar essa quantidade depende de balanceamento e teste de desempenho. Regras e variáveis estão detalhadas na [seção de inimigos do README](README.md#inimigos-ondas-e-máquina-mãe).

## 7. Arena e plataformas

- **Uma arena delimitada maior que a área visível**, com largura inicial de aproximadamente **1,5 a 2 telas**, a ajustar no protótipo. Ao caminhar para os lados, o jogador revela outras partes da mesma oficina.
- **Câmera com acompanhamento horizontal suave:** o robô pode se deslocar dentro de uma faixa central da tela; ao se aproximar das laterais dessa faixa, a câmera acompanha seu movimento. O enquadramento respeita os limites da arena para manter o cenário preenchendo a tela.
- **Fundo em camadas com parallax:** janelas e estruturas distantes se deslocam mais devagar; máquinas e tubulações intermediárias se deslocam em velocidade intermediária; chão, plataformas, inimigos e peças pertencem ao mesmo espaço de jogo e acompanham a câmera juntos. Essa diferença de movimento cria profundidade e a sensação de uma oficina maior.
- **Interface fixa na tela:** vida, XP, nível, tempo e indicadores de melhorias permanecem nas mesmas posições enquanto a câmera se move.

| Elemento | Comportamento |
| --- | --- |
| **Prateleiras** | Plataformas atravessáveis por baixo: o robô pula através delas e para em cima |
| **Esteiras rolantes** | Empurram o robô (e os inimigos) para um lado |
| **Andaimes** | Avisam antes de cair, por ocupação ou sinal do Pesado; retornam quando seu layout é ativado novamente |
| **Óleo subindo** | Começa com a Máquina-mãe, cobre o chão e causa dano somente ao robô; inimigos ignoram o óleo. Escoa após a derrota do chefe |
| **Mudança entre ondas** | Layouts 1 e 2 alternam entre ondas com aviso visual; a luta do chefe usa o layout 3 |

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

**Implementado:** Canhão reforçado, Engrenagem rápida, Ímã, Placa de blindagem, Rodas lubrificadas e Caldeira extra, mais Reparo imediato como reserva. O reparo recupera 1 ponto imediatamente, sem regeneração contínua. Cano duplo, regeneração gradual e Escudo de faíscas permanecem sugestões não implementadas, fora do mínimo de seis melhorias. Valores atuais estão no [README](README.md#melhorias).

## 9. Estética e som

- **Estilo:** desenho animado dos anos 30, como no Cuphead, com cores levemente dessaturadas e textura de filme antigo.
- **Identidade industrial:** grandes fábricas e oficinas com metal, vapor, caldeiras, rebites, válvulas e instrumentos analógicos. O [catálogo de imagens](imagens/README.md) reúne as referências do herói, da evolução, do fundo e da composição da partida.
- **Decisão de legibilidade:** o filtro de filme antigo foi testado e retirado por deixar o jogo acinzentado. A identidade visual permanece nas artes; vapor decorativo usa partículas.
- **Cores de destaque**, para manter a leitura em meio a tanto metal:
  - **Dourado:** peças coletáveis (XP)
  - **Vermelho:** perigos (projéteis inimigos, óleo)
  - **Rosa:** reservado para o parry, se ele entrar
  - Cada tipo de inimigo com **sua cor** (tabela da seção 6)
- **Som:** trilha em estilo jazz ou ragtime antigo, que combina com os anos 30, mais efeitos de metal, molas, vapor e explosões. Use fontes com licença livre e registre tudo em `CREDITOS.md`.

### Arte gerada por IA

- Gerar os personagens **parados**, em PNG com **fundo transparente** (remover o fundo se necessário).
- **Animação adotada:** sequências de quadros nos Sprites para personagens e ataques. Tween complementa efeitos e movimentos de plataformas e óleo; não substitui a animação por spritesheet.
- Manter **tamanho e estilo consistentes** entre os personagens (usar o mesmo prompt-base para todos).
- **Declarar no README e no `CREDITOS.md`** quais imagens foram geradas por IA e com qual ferramenta.
- [x] **Uso de imagens geradas por IA confirmado com o professor.** As imagens são aceitas, com o devido crédito à IA em `CREDITOS.md`.

## 10. Escopo

### Mínimo — situação da implementação

As marcações indicam implementação presente, sem substituir os testes finais no navegador e em cópia limpa.

- [x] Robô com andar, pulo e dash
- **Descartado nesta versão:** pulo duplo. Mantidos o salto comum e o dash; não é uma pendência de implementação.
- [x] Ataque manual com mira pelo mouse e disparo ao segurar o botão esquerdo
- [x] 1 arena com prateleiras, esteiras e andaimes que desabam
- [x] Arena maior que a área visível e câmera com acompanhamento horizontal suave, limitada às bordas do cenário
- [x] Fundo em parallax
- [x] Os 5 tipos de inimigo
- [x] Peças caindo no chão + barra de XP + escolha de upgrade
- [x] 6 upgrades
- [x] Ondas com dificuldade crescente
- [x] Óleo subindo + chefão no final
- [x] Menu inicial, HUD (vida, XP, tempo), pausa, game over e tela de vitória
- [x] Trilha e efeitos sonoros

### Possíveis evoluções futuras — não realizadas nesta versão

As ideias abaixo ficam como possibilidades para uma versão futura, sem compromisso ou pendência para esta entrega. A vida extra de recuperação foi **descartada** na versão atual, mantendo derrota ao zerar a vida e as curas já existentes.

- Parry rosa
- Mais upgrades
- Mais de uma arena (setores da oficina: depósito, linha de montagem, caldeira)
- Recorde salvo entre partidas
- Peças instaladas aparecendo visualmente no robô

## 11. Recursos do GDevelop que vamos usar

Isso vale para a nota de "uso da ferramenta" e para a apresentação:

| Recurso | Uso no jogo |
| --- | --- |
| Comportamento **Platformer** | Robô e inimigos terrestres: gravidade e salto comum; pulo duplo fora do escopo desta versão |
| Comportamento **Platform** (incluindo *jumpthru*) | Chão, prateleiras atravessáveis, andaimes |
| Sprite e comportamento **Tween** | Sprite para animações por quadros; Tween para efeitos e movimentos complementares |
| **Câmeras** | Acompanhar o robô horizontalmente com suavidade, respeitando os limites da arena |
| **Camadas** com velocidades diferentes | Fundo em parallax, com profundidades distintas, e interface fixa na tela |
| **Efeitos** de camada | Filme antigo testado e retirado por legibilidade |
| **Timers** e **variáveis** | Ondas, tempo de partida, vida, XP, recarga do dash |
| **Grupos de eventos** | Sistemas organizados dentro da Arena no Robot.json; separação em eventos externos não adotada |
| **Partículas** | Faíscas, vapor do dash, explosões |
| **Cenas e estados** | MenuInicial, Introducao e Arena; pausa, upgrades e resultados como estados da Arena |

### Relação com o que vimos em aula

| Aula (JS + Canvas) | No GDevelop |
| --- | --- |
| `Animacao.proximoFrame()` | Loop de eventos da cena |
| `Colisor` / `retangulosColisao()` | Máscaras de colisão + condição de colisão |
| `Spritesheet` | Animações do objeto Sprite |
| `Fundo` (emenda / parallax) | Camadas e Tiled Sprite |
| `Teclado.pressionada` / `disparou` | Condições "tecla pressionada" / "tecla acabou de ser pressionada" |
| `excluirSprite` | Ação "excluir objeto" |

## 12. Fechamento da versão de entrega

### Decisões e registros concluídos

- [x] Ataque manual, arena ampliada, cinco inimigos, ondas e Máquina-mãe integrados.
- [x] Menu, introdução, pausa, resultados e reinício com apresentação visual integrada.
- [x] Recursos ausentes removidos e sons organizados.
- [x] Responsáveis pelas quatro frentes identificados no FASEAMENTO.
- [x] Enredo da introdução aceito para esta entrega; nome e origem detalhada do robô ficam como possibilidades futuras.
- [x] Uso de imagens geradas por IA autorizado pelo professor, com crédito à IA.
- **Descartados/descontinuados:** pulo duplo, vida extra de recuperação e evolução visual do robô por nível; não são pendências.

### O que ainda precisa ser concluído ou validado

- [ ] Cada integrante completar sua seção de créditos e a origem dos recursos que integrou. As imagens por IA devem manter a atribuição já adotada; sons ou materiais de outras fontes devem ter sua origem e eventuais licenças registradas.
- [ ] Repetir os percursos do Saltador nos layouts finais e os testes de partida, pausa, derrota, vitória e reinício.
- [ ] Finalizar a documentação para quem vai receber o jogo:
  - **Como executar:** explicar no README como baixar o repositório, abrir `prototipo/Robot.json` no GDevelop e iniciar a prévia.
  - **Versão do editor:** informar a versão do GDevelop usada para desenvolver/testar, para facilitar a abertura em outro computador.
  - **Capturas reais:** incluir imagens ou GIFs da implementação em execução, como combate, escolha de melhoria e luta final; artes conceituais não substituem essas capturas.
  - **Endereço jogável:** incluir o link da versão publicada no navegador, depois de confirmar que ele abre a exportação atualizada.
- [ ] Gravar uma partida completa até a vitória. Clipes dos inimigos e das quatro habilidades do chefe podem complementar a demonstração.
- [ ] Validar exportação final, cópia limpa e desempenho; revisar atalhos de teste antes da publicação.
- [ ] Ensaiar e confirmar envio e apresentação. Controle detalhado em [FASEAMENTO.md](FASEAMENTO.md#13-controle-de-andamento-e-checklist-final).

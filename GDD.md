# Oficina em Pane — Documento de Design (GDD)

**Revisão:** 20/11/2026. **Situação:** escopo funcional implementado; documentação, publicação final e apresentação em fechamento.

Este documento descreve o jogo adotado para a entrega. O [FASEAMENTO](FASEAMENTO.md) reúne responsabilidades, cronograma e testes; o [README](README.md) explica a execução e os sistemas implementados; os [créditos](CREDITOS.md) registram contribuições e origem dos recursos.

**Leitura:** [visão e enredo](#1-visão-geral) → [fluxo da partida](#3-fluxo-e-experiência-de-jogo) → [jogador](#4-protagonista-controles-e-combate) e [arena](#5-arena-plataformas-e-câmera) → [inimigos](#6-inimigos), [ondas](#7-ondas-e-surgimentos) e [chefe](#8-máquina-mãe) → [progressão](#9-xp-melhorias-e-pontuação) → [apresentação](#10-direção-visual-interface-e-áudio) → [implementação](#11-implementação-no-gdevelop) e [andamento](#12-escopo-concluído-e-fechamento).

## 1. Visão geral

| Item | Definição |
| --- | --- |
| Nome | Oficina em Pane |
| Gênero | Sobrevivência contra hordas (*survivors-like* / *wave defense*) em plataforma 2D |
| Perspectiva | Visão lateral, com gravidade e salto |
| Ambientação | Oficina industrial com máquinas de ferro, caldeiras, engrenagens e vapor |
| Ferramenta | GDevelop desktop, com Git/GitHub para versionamento |
| Plataforma | Navegador, por exportação HTML5; projeto editável em `prototipo/Robot.json` |
| Inspirações | Survivor.io e Megabonk para hordas e melhorias; Cuphead para estética, movimento e chefões |

**Pitch:** um pequeno robô enfrenta ondas de máquinas defeituosas e usa peças recuperadas para melhorar seus atributos, até derrotar a Máquina-mãe e salvar a oficina.

O foco é uma partida completa em uma única arena: aprender os controles, enfrentar inimigos com comportamentos distintos, escolher melhorias e vencer uma luta final com ataques anunciados.

## 2. Enredo e objetivo

As máquinas enlouqueceram e a oficina entrou em pane. Um pequeno robô é a última esperança de salvá-la. A introdução apresenta a missão: enfrentar as ondas e derrotar a Máquina-mãe. A vitória comunica que a oficina voltou a funcionar.

Esse enredo foi considerado suficiente para a entrega. Nome próprio do protagonista, sua origem e a causa detalhada da pane não serão desenvolvidos nesta versão; podem ser explorados futuramente.

**Objetivo do jogador:** sobreviver às cinco ondas, coletar peças, escolher melhorias e eliminar a Máquina-mãe. A vida zerada encerra a partida em derrota.

## 3. Fluxo e experiência de jogo

### Fluxo das telas

**Menu inicial → Introdução e controles → Partida → Vitória ou derrota → Reinício ou menu.**

A pausa e a escolha de melhorias acontecem durante a partida. Na implementação, menu e introdução são cenas próprias; pausa, melhorias e resultados são estados da cena `Arena`.

| Momento | Experiência oferecida |
| --- | --- |
| Menu inicial | Apresenta o título, a oficina, o protagonista e as opções de navegação |
| Introdução | Explica a missão e os controles antes de jogar |
| Partida | Combate, movimentação entre plataformas, coleta e progressão pelas ondas |
| Escolha de melhoria | Congela o mundo e oferece três cartas; uma escolha permite continuar |
| Pausa | Interrompe a partida com Esc e permite retomar pelo botão Continuar ou Esc |
| Vitória/derrota | Mostra pontuação, abates, onda, tempo e nível; permite reiniciar ou voltar ao menu |

O botão de créditos está presente no menu, mas seu redirecionamento ainda precisa ser implementado. O conteúdo da equipe e dos recursos já está reunido em `CREDITOS.md`.

### Ciclo principal

A tensão central é **segurança nas plataformas × risco de descer para coletar**:

1. Os inimigos entram pelas laterais e pressionam o robô com comportamentos diferentes.
2. O jogador mira, dispara e se desloca para evitar contato e ataques.
3. Os abates geram pontuação e peças de XP, que normalmente caem até o chão.
4. Ao coletar XP suficiente, o jogador sobe de nível e escolhe uma melhoria.
5. A eliminação dos inimigos permite avançar para a próxima onda.
6. Depois da quinta onda, entram a Máquina-mãe e o óleo, exigindo combate sobre as plataformas restantes.

Estar no alto reduz o risco de contato com Andadores, mas não impede a aproximação de Saltadores e Voadores, os tiros dos Atiradores ou os ataques às plataformas. Durante o óleo, a coleta se adapta às superfícies seguras, conforme a seção 9.

## 4. Protagonista, controles e combate

O protagonista é um **robô-caldeira movido a vapor**, com carcaça rebitada, janela circular de fornalha, manômetro, pinça e braço-canhão pneumático. A [referência visual](imagens/heroi/README.md) orienta sua identidade industrial.

O robô mantém **uma única aparência durante a partida**. XP, níveis e melhorias alteram a progressão e os atributos, sem trocar o estágio visual. Os [conceitos de evolução](imagens/evolucao-heroi/README.md) são preservados como material de criação.

### Controles

| Ação | Controle |
| --- | --- |
| Andar | A/D ou ←/→ |
| Pular | Espaço, W ou ↑ |
| Dash | Shift esquerdo, com recarga |
| Mirar | Cursor do mouse |
| Atirar | Segurar o botão esquerdo do mouse |
| Pausar/continuar | Esc durante a partida; botão Continuar na pausa |
| Escolher melhoria | Clique ou teclas 1, 2 e 3 |
| Reiniciar após o resultado | Botão Jogar de novo ou Enter |
| Voltar ao menu após o resultado | Botão Menu inicial ou Esc |

### Combate e vida

A mira é independente da direção do deslocamento. Segurar o botão esquerdo produz tiros com cadência controlada; soltar interrompe o disparo. Comandos de combate ficam bloqueados nas telas de pausa, melhoria e resultado. O clique usado na interface não deve virar um tiro ao retornar ao jogo.

O dano reduz a vida atual e inicia proteção temporária, com feedback visual e sonoro. O robô começa com 5 de vida; a Placa de blindagem aumenta a vida máxima e recupera 1 ponto. Reparo imediato recupera 1 ponto sem alterar o máximo. Ao concluir as ondas 3 e 4, recupera 1 ponto até o limite; na entrada da Máquina-mãe, recupera toda a vida máxima atual.

## 5. Arena, plataformas e câmera

A arena tem **2560 × 720 px**, maior que a área de referência de 1280 × 720. A largura visível acompanha a janela. Os limites laterais mantêm o robô dentro da oficina.

A câmera acompanha horizontalmente com suavidade e faixa central, respeitando as bordas. O fundo usa parallax: janelas distantes percorrem 20% do deslocamento da câmera e máquinas intermediárias, 40%. Plataformas, robô, inimigos e peças compartilham o mundo; o HUD permanece fixo na tela.

| Elemento | Regra adotada |
| --- | --- |
| Chão | Sólido e contínuo na arena |
| Prateleiras | Atravessáveis por baixo; sustentam o robô por cima. O Pesado pode derrubar uma prateleira ocupada, que retorna na troca de layout |
| Esteiras | Empurram objetos apoiados no sentido de sua velocidade; saltar interrompe o empurrão |
| Andaimes | Avisam antes de cair por ocupação ou sinal do Pesado; retornam quando seu layout é ativado novamente |
| Fios | Decorativos, sem colisão; acompanham a visibilidade das plataformas que sustentam |
| Layouts | Ondas ímpares usam o layout 1 e pares, o 2. A troca tem aviso visual; o chefe usa o layout 3 |
| Óleo | Começa com a Máquina-mãe, cobre o chão e causa dano somente ao robô. Inimigos ignoram o óleo; ele escoa após a derrota do chefe |

O layout final mantém plataformas acima do óleo e espaço para enfrentar a máquina. Tremores, avisos e animações de queda comunicam a perda de sustentação. Detalhes da arena estão no [README](README.md#cenário-câmera-e-arena).

## 6. Inimigos

Os cinco tipos têm imagens e animações integradas. Silhuetas e mecanismos diferentes ajudam a reconhecer sua função; a [galeria de conceitos](imagens/inimigos/README.md) registra a direção visual que originou os recursos.

| Tipo | Vida inicial | Comportamento e efeito no combate |
| --- | --- | --- |
| Andador | 8 | Persegue pelo chão, sem subir plataformas; patrulha quando o robô permanece no alto. Causa 1 de dano por contato |
| Saltador | 12 | Busca plataformas ativas, salta para perseguir o robô e pode atravessar vãos ou descer por superfícies atravessáveis. Causa 1 de dano por contato |
| Voador | 6 | Ignora plataformas e se aproxima pelo ar. Para, pisca por 0,75 s e se autodestrói em uma explosão: dano 2 nas ondas comuns e 1 durante o chefe |
| Pesado | 20 | Resistente, causa 2 de dano por contato e ameaça a plataforma ocupada acima dele, com preparação e recarga de impacto |
| Atirador | 8 | Procura manter distância, respeita bordas de plataformas e dispara voltado ao robô. Tiros atravessam plataformas e causam 1 de dano |

Cada instância tem vida e controles próprios de ataque. A velocidade recebe um multiplicador sorteado entre 0,5 e 1,25 da base, variando a aproximação das unidades. Avisos de proximidade, preparação e explosão permitem identificar ameaças antes do dano.

A navegação do Saltador avalia posições e dimensões das plataformas, incluindo esteiras, em vez de seguir uma sequência fixa de coordenadas. Sua espera entre saltos é contada no chão. Esse comportamento pode receber refinamentos sem alterar sua função no jogo.

## 7. Ondas e surgimentos

A progressão usa **cotas totais por tipo**, intervalos de surgimento e **limite de vivos simultâneos**. Abater uma unidade libera espaço para o restante da cota; não provoca reposição infinita. A onda só termina quando suas cotas foram criadas e os inimigos eliminados, seguida da espera de transição.

| Onda | Andadores | Saltadores | Voadores | Pesados | Atiradores | Limite de vivos |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 10 | 0 | 0 | 0 | 0 | 8 |
| 2 | 12 | 8 | 0 | 0 | 0 | 10 |
| 3 | 10 | 8 | 4 | 0 | 0 | 10 |
| 4 | 10 | 8 | 6 | 4 | 0 | 11 |
| 5 | 0 | 12 | 8 | 0 | 8 | 16 |

Os surgimentos alternam as bordas da câmera com margem fora da tela, inclusive além dos limites da arena. A entrada dos inimigos terrestres permite chegar ao interior antes de reativar a física de plataforma. Atiradores também podem nascer em plataformas elegíveis fora da tela.

A Máquina-mãe aparece depois de concluir a onda 5. A duração depende do ritmo de combate, substituindo a proposta inicial de avançar apenas pelo tempo. Os números da tabela representam o balanceamento atual.

## 8. Máquina-mãe

O chefe final tem **300 de vida**, barra acima do corpo e indicador de direção quando está fora da câmera. Sua entrada restaura a vida do robô e inicia o aviso de subida do óleo.

| Habilidade | Funcionamento | Leitura para o jogador |
| --- | --- | --- |
| Rajada | Cinco projéteis em sequência, separados por 0,2 s, a 260 px/s; dano 2 | Aviso, animação de disparo e projéteis destacados |
| Prensa | Marca uma plataforma ocupada e remove temporariamente sua sustentação; a plataforma retorna após o intervalo do ataque | Área marcada, preparação e movimento da prensa |
| Vapor | Marca uma posição da arena e libera uma coluna de dano após a preparação | Aviso do local e imagem animada do vapor |
| Convocação | Cria Voadores durante a luta | Animação de convocação e novas ameaças no ar |

As habilidades usam recargas e estados de aviso/execução para oferecer oportunidade de reação. Ao zerar a vida da máquina, o jogo interrompe sua atuação, escoa o óleo e apresenta a vitória com as estatísticas finais. Sobreviver ao relógio sozinho não encerra a partida.

## 9. XP, melhorias e pontuação

### Peças e nível

Peças de XP são engrenagens geradas pelos abates. Normalmente caem até o chão, atravessando plataformas para incentivar a descida. Durante o óleo, podem parar nas plataformas; peças que caem no óleo ainda no ar são encaminhadas a uma prateleira, e as que ficaram no chão são engolidas. Peças esquecidas piscam antes de desaparecer após 20 segundos apoiadas, evitando acúmulo ilimitado.

Ao atingir o XP necessário, o nível aumenta, o excedente é preservado e o mundo pausa para a escolha de uma entre três melhorias. Opções no limite deixam de ser elegíveis; Reparo imediato serve como reserva.

### Melhorias implementadas

| Melhoria | Efeito |
| --- | --- |
| Canhão reforçado | Aumenta o dano do tiro |
| Engrenagem rápida | Reduz o intervalo entre tiros |
| Placa de blindagem | Aumenta a vida máxima e recupera 1 ponto |
| Rodas lubrificadas | Aumenta a velocidade de movimento |
| Caldeira extra | Reduz a recarga do dash |
| Ímã | Atrai peças dentro do raio da melhoria |
| Reparo imediato — reserva | Recupera 1 ponto de vida, sem regeneração contínua |

São seis melhorias principais e uma reserva, sem melhorias ligadas a dano de pulo. Os valores e limites atuais estão na [tabela de melhorias do README](README.md#melhorias).

### Pontuação e resultado

XP e pontuação são contadores separados. O XP permite escolher melhorias; a pontuação registra o desempenho por abates. Cada inimigo possui sua recompensa e valor de abate, contabilizados ao processar sua eliminação pelo combate. O resultado mostra pontuação, abates, onda alcançada, tempo e nível.

## 10. Direção visual, interface e áudio

### Artes e animações

A identidade parte de desenhos animados dos anos 1930 e da estética industrial: ferro, cobre, rebites, caldeiras, válvulas e vapor. O herói e os inimigos são mecânicos, com silhuetas próprias e sem rosto humano. Dourado destaca peças; cores e avisos evidenciam perigos.

Personagens e ataques usam animações por quadros nos Sprites. Tween complementa efeitos e movimentos de plataformas e óleo; partículas produzem o vapor decorativo. O filtro de filme antigo foi testado e retirado por reduzir a legibilidade.

As artes e spritesheets foram gerados por IA e preparados para o jogo, mantendo escala, orientação e colisão consistentes. O uso de imagens por IA foi confirmado com o professor, com atribuição da origem nos [créditos](CREDITOS.md). O [catálogo visual](imagens/README.md) preserva conceitos, originais e prompts, incluindo propostas não integradas.

### Interface e som

Menu e introdução apresentam a ambientação e os comandos; o HUD mantém vida, XP, nível, tempo, onda e pontuação legíveis durante o combate. Pausa e resultados oferecem botões próprios. A barra do chefe e os avisos de habilidade ajudam a acompanhar a luta final.

O menu e a partida têm trilhas próprias. Ao retornar ao menu, a música da partida é encerrada e a trilha do menu reinicia; ela continua durante a introdução e é substituída ao entrar na arena. Efeitos sonoros acompanham disparos, dano, abates, coleta, dash e habilidades do chefe. Os canais de áudio são separados para reduzir interrupções entre efeitos simultâneos.

Origem, ferramentas de geração e contribuições relativas a imagens e sons ficam em `CREDITOS.md`; os canais e detalhes de integração ficam no README.

## 11. Implementação no GDevelop

O projeto editável é `prototipo/Robot.json`, em arquivo único. A lógica usa grupos de eventos por sistema. A divisão em eventos externos não foi adotada; alterações simultâneas no JSON exigem coordenação entre os integrantes.

| Recurso | Uso no projeto |
| --- | --- |
| Platformer Character | Gravidade e salto do robô e dos inimigos terrestres |
| Platform / Jumpthru | Chão e superfícies sólidas ou atravessáveis por baixo |
| Sprite | Animações de personagens, ataques e explosões por quadros |
| Tween | Movimentos e efeitos complementares, como queda e escoamento |
| Câmeras e camadas | Acompanhamento suave, parallax e HUD fixo |
| Variáveis e tempo | Vida, XP, cotas, recargas, estados e duração da partida |
| Grupos de eventos | Organização de jogador, combate, inimigos, ondas, arena e interface |
| Partículas | Vapor decorativo e efeitos |
| Cenas e estados | `MenuInicial`, `Introducao` e `Arena`; pausa, melhorias e resultados dentro da Arena |

### Relação com os conteúdos das aulas

| Conceito de JS/Canvas | Aplicação no GDevelop |
| --- | --- |
| Loop de animação | Avaliação contínua dos eventos da cena |
| Colisores e interseção de retângulos | Máscaras e condições de colisão |
| Spritesheet e sequência de quadros | Animações do objeto Sprite |
| Fundo e parallax | Camadas, câmeras e Tiled Sprite |
| Entrada mantida ou acionada uma vez | Condições de teclado e mouse |
| Exclusão de entidades | Remoção de inimigos, projéteis, peças e efeitos |

## 12. Escopo concluído e fechamento

### Implementação concluída

- [x] Robô com andar, salto comum, dash e combate manual com mouse.
- [x] Arena ampliada com câmera suave, parallax, chão, prateleiras, esteiras e andaimes.
- [x] Cinco tipos de inimigo com comportamentos e animações próprios.
- [x] Ondas por cotas, limite de vivos e surgimentos acompanhando a câmera.
- [x] XP, nível, seis melhorias principais, reparo e pontuação separada.
- [x] Máquina-mãe com quatro habilidades, barra de vida e integração com o óleo.
- [x] Menu, introdução, HUD, pausa, vitória, derrota e reinício.
- [x] Trilhas, efeitos sonoros e organização dos canais de áudio.
- [x] Recursos locais organizados e referências ausentes removidas.

Os testes de aceite de E00 a E09 foram confirmados pela equipe no [FASEAMENTO](FASEAMENTO.md#13-controle-de-andamento-e-checklist-final). As verificações finais da entrega permanecem separadas das funcionalidades implementadas.

### Documentação e demonstrações concluídas

- [x] Nome, descrição, enredo, objetivo e ferramenta apresentados no README.
- [x] Instruções para baixar, abrir `prototipo/Robot.json` e iniciar a prévia.
- [x] Versão de referência GDevelop 5.6.287 e endereço público do jogo incluídos no README.
- [x] Oito capturas reais do menu, combate, melhorias, chefe e resultados inseridas no README.
- [x] Gravações das partidas até vitória e derrota organizadas e vinculadas no README.
- [x] Quatro frentes identificadas e contribuições dos integrantes reunidas em `CREDITOS.md`.
- [x] Origem das artes e dos sons registrada, incluindo o uso de IA.

### Decisões descartadas ou descontinuadas

| Proposta | Decisão para esta versão |
| --- | --- |
| Pulo duplo | Descartado; mantidos salto comum e dash |
| Vida extra de recuperação | Descartada; vida zerada leva à derrota, mantendo as curas já existentes |
| Evolução visual por nível | Descontinuada; o robô usa uma aparência única |
| Melhorias de dano ao pular | Descartadas do conjunto de melhorias |
| Filtro de filme antigo | Testado e retirado por legibilidade |

### Possíveis evoluções futuras

Sem compromisso para esta entrega: parry rosa, cano duplo, regeneração gradual, escudo, melhorias adicionais, novas arenas, recorde persistente, peças instaladas visíveis e aprofundamento do enredo.

### Pontos restantes de fechamento

- [ ] Conectar o botão Créditos do menu à apresentação da equipe e dos recursos.
- [ ] Conferir que o endereço público oferece a exportação final após as últimas alterações.
- [ ] Gerar a exportação em `docs/` após as últimas correções e revisar os atalhos de teste.
- [ ] Fazer a conferência da versão de entrega, revalidando os fluxos afetados pelas últimas alterações.
- [ ] Confirmar o ensaio com os quatro integrantes, o envio ao professor e a cópia local para apresentação.

A cópia limpa e o acesso público já foram informados como testados nos critérios da E10; isso não confirma automaticamente uma nova exportação após alterações posteriores. O ensaio continua sem confirmação no planejamento. O controle de prazo e entrega oficial permanece no FASEAMENTO.

# Oficina em Pane — Planejamento, entregas e fechamento

**Planejamento inicial:** 31/10/2026. **Revisão de andamento:** 20/11/2026. **Equipe:** quatro integrantes. **Ferramenta:** GDevelop desktop.

**Entrega oficial:** repositório público no GitHub até **23/11/2026, às 23h59**. **Apresentações:** 24 e 25/11/2026, em sala. Horários de Brasília.

O [GDD](GDD.md) descreve o jogo adotado; o [README](README.md) explica execução e funcionamento; [CREDITOS.md](CREDITOS.md) reúne contribuições e origem dos recursos. Este arquivo organiza responsabilidades, entregas, critérios de aceite e fechamento.

**Leitura rápida:** [situação e fechamento](#1-situação-atual-e-fechamento) → [requisitos](#2-requisitos-da-entrega-acadêmica) → [equipe](#3-equipe-e-responsabilidades) → [projeto adotado](#4-projeto-arquivos-e-regras-compartilhadas) e [escopo](#5-decisões-de-escopo) → [calendário](#7-calendário-e-andamento-das-entregas) e [registro das etapas](#8-registro-de-cada-entrega) → [testes](#10-testes-manuais) → [checklist final](#13-controle-de-andamento-e-checklist-final).

## 1. Situação atual e fechamento

O desenvolvimento, a documentação e a publicação estão concluídos no escopo adotado. E00 a E11 registram as etapas de implementação, testes, documentação e publicação final, sem pendências de desenvolvimento neste planejamento.

As marcações deste documento preservam os testes e conclusões informados pela equipe. Não representam uma nova execução automática de toda a bateria. Itens descartados ou não aplicáveis não devem ser contados como funcionalidades implementadas nem como testes aprovados.

### Já concluído

- Jogo com menu, introdução, partida, pausa, escolha de melhorias, derrota, vitória e reinício.
- Robô com controles e combate; cinco inimigos, ondas por cotas, Máquina-mãe com quatro habilidades e óleo.
- Arena ampliada, plataformas dinâmicas, câmera suave, parallax e tratamento de peças de XP.
- HUD, animações, trilhas e efeitos sonoros integrados.
- Recursos ausentes removidos, sons organizados e comentários revisados.
- README com enredo, objetivo, instruções de execução, oito capturas e dois vídeos de partidas.
- Quatro frentes identificadas e créditos reorganizados por integrante, com origem das artes e dos sons.

### Fechamento concluído

1. Navegação menu → créditos → menu validada, com retorno por clique e Esc.
2. Exportação final em `docs/` atualizada e acesso pelo navegador confirmado, iniciando no menu.
3. Versão do GDevelop, link jogável, instruções, créditos e evidências registrados no README e nos documentos relacionados.
4. Atalhos F3/F4/F5/F8 mantidos por decisão da equipe para agilizar a demonstração das ondas e da Máquina-mãe.

O fonte editável, os recursos, a exportação web e o histórico da versão final estão reunidos no repositório do GitHub.

## 2. Requisitos da entrega acadêmica

A tabela abaixo preserva as exigências identificadas nos PDFs da disciplina. As funcionalidades específicas do jogo são escolhas do grupo, descritas no GDD. As datas e a forma de entrega não se confundem com as metas internas do calendário.

| ID | Exigência | Onde vamos atendê-la | Como conferir |
| --- | --- | --- | --- |
| R01 | Grupo de 4 alunos | Divisão de responsabilidades e README | Quatro integrantes identificados e capazes de explicar suas contribuições |
| R02 | Usar a ferramenta atribuída pelo professor | Projeto editável no GDevelop | Outra pessoa abre o projeto e executa a prévia |
| R03 | Grupos 03 e 04: jogo de plataforma em GDevelop | Movimento lateral, gravidade, chão e plataformas | Jogador anda e pula sobre superfícies com colisão |
| R04 | Desenvolver um jogo completo, aplicando design, programação, jogabilidade e experiência do usuário | Fluxo menu → partida → derrota/vitória → reinício | É possível jogar uma partida completa sem intervenção no editor |
| R05 | Publicar em repositório público no GitHub até 23/11/2026, às 23h59 | E10 e E11 | Abrir o repositório em janela anônima, sem login |
| R06 | Entregar o código-fonte completo | Projeto GDevelop e todos os recursos usados | Baixar uma cópia limpa e abrir sem arquivos faltando |
| R07 | README com nome, descrição geral, enredo, objetivos e ferramenta | E10 | Todos esses tópicos aparecem no README da raiz |
| R08 | README com instruções de instalação e execução | E10 | Um colega segue o texto sem ajuda de quem o escreveu |
| R09 | README com capturas de tela ou GIFs demonstrativos | E10 | Imagens reais da implementação aparecem corretamente no GitHub |
| R10 | Versão executável ou link jogável, quando aplicável | Exportação HTML5 e GitHub Pages | Link abre e permite começar uma partida em outro computador |
| R11 | Compartilhar o link do repositório com o professor | Canal de entrega da disciplina | Compartilhamento pelo canal combinado com o professor |
| R12 | Apresentação em sala em 24 e 25/11/2026 | Demonstração do jogo na data atribuída ao grupo | Demonstração e explicação distribuídas entre os quatro |

O trabalho vale **50 pontos**. Os PDFs consultados não distribuem esses pontos por mecânica específica. Dash, chefe, parallax e quantidade de inimigos vêm das decisões do jogo e dos conteúdos estudados. O perfil indicado para compartilhar o repositório é [github.com/christienrachid](https://github.com/christienrachid); o envio deve seguir o canal combinado com o professor.

## 3. Equipe e responsabilidades

| Pessoa | Nome | Responsabilidade principal | Entregas que deve saber demonstrar | Revisor |
| --- | --- | --- | --- | --- |
| A | Gustavo Miranda do Amaral | Jogador, controles, arma, tiros, dano e recuperação | Andar/pular/dash, mirar, disparar e receber dano corretamente | B |
| B | Lucas Ciampi | Inimigos, ondas, chefão, pontuação por abates e explosões | Cinco comportamentos diferentes e Máquina-mãe com início e fim | A |
| C | Vitor Rosa | Arena, plataformas, câmera, parallax, óleo e organização visual | Cenário navegável, perigos e profundidade sem falhas nas bordas | D |
| D | Everton | HUD, menu, pausa, XP, melhorias e fluxo das telas | Partida completa, progressão e interface funcionando | C |

A tabela registra a divisão de referência. As tarefas de interface e progressão da frente D foram compartilhadas pela equipe; a atribuição do trabalho efetivamente realizado está em `CREDITOS.md`. Documentação, preparação dos recursos, integração e testes são responsabilidades dos quatro.

## 4. Projeto, arquivos e regras compartilhadas

### Estrutura adotada

| Item | Organização atual |
| --- | --- |
| Projeto editável | `prototipo/Robot.json`, em arquivo único |
| Cenas | `MenuInicial`, `Creditos`, `Introducao` e `Arena` |
| Pausa, melhorias e resultados | Estados e interface da própria `Arena`, sem cenas finais separadas |
| Eventos | Grupos por sistema dentro das cenas; não foram adotadas folhas externas |
| Camadas principais | `FundoDistante`, `FundoMedio`, mundo na camada base e `HUD` |
| Imagens usadas pelo jogo | `prototipo/imagens/` e `prototipo/assets/` |
| Sons e trilhas | `prototipo/sons/` |
| Originais e conceitos | `imagens/`, incluindo spritesheets e prompts |
| Exportação web | `docs/`; não substitui o fonte editável |
| Evidências | `midia/capturas/` e `midia/videos/`, referenciadas pelo README |
| Recuperação do editor | Arquivos `.autosave`; não são a versão oficial do projeto |

Não criar outro projeto oficial nem renomear o JSON para seguir o plano inicial. `OficinaEmPane.json`, `assets/jogo/` e o modo de múltiplos arquivos foram propostas de organização não adotadas. Preservar artes originais mesmo quando o jogo usa quadros separados.

### Nomes usados na integração

| Sistema | Referências atuais |
| --- | --- |
| Jogador e tiros | `Robo`, `Arma`, `Tiro`, `TiroInimigo` |
| Inimigos | `Andador`, `Saltador`, `Voador`, `Pesado`, `Atirador`, `MaquinaMae` |
| Arena e coleta | `Chao`, `Prateleira`, `Esteira`, `Andaime`, `Fio`, `Oleo`, `Peca` |
| Estado e progressão | `EstadoJogo`, `TempoPartida`, `XP`, `Nivel`, `XPProximoNivel`, `Pontuacao`, `Abates` |
| Ondas | `Onda`, `LimiteVivos`, cotas e contadores por tipo, `EsperaProximaOnda` |
| Chefe e óleo | `ChefaoAtivo`, `ChefaoDerrotado`, `OleoAtivo`, `EtapaOleo` |
| Dados por instância | Vida e recargas dos inimigos; `XPDrop`, `PontosAbate` e `Peca.ValorXP` |

O estado `Jogando` permite a atualização do combate; pausa e melhorias congelam o mundo e bloqueiam comandos, sem impedir a interface. O retorno espera o botão do mouse ser solto (`AguardandoSoltarMouse`). XP, pontuação e vida são informações distintas; os resultados permanecem na Arena.

## 5. Decisões de escopo

### Adaptações implementadas

| Proposta inicial | Decisão adotada |
| --- | --- |
| Progressão pelo tempo e chefe por volta de quatro minutos | Cinco ondas por cotas e abates; chefe após concluir a quinta |
| Surgimentos em pontos fixos internos | Entradas alternadas fora da câmera; Atiradores também em plataformas elegíveis |
| Plataformas como cobertura contra Atiradores | Projéteis atravessam plataformas; desviar continua necessário |
| Chefe com dois ataques | Rajada, prensa, vapor e convocação, com avisos e animações |
| Telas finais em cenas separadas | Estados de resultado na Arena, com reinício e retorno ao menu |
| Estimativa de 20 a 40 inimigos simultâneos | Limites atuais entre 8 e 16 nas ondas, conforme balanceamento |
| Óleo em certas ondas | Aviso e subida com a entrada da Máquina-mãe; escoamento após sua derrota |

### Propostas descartadas ou descontinuadas

| Item | Situação e consequência |
| --- | --- |
| Pulo duplo | Descartado. Mantidos salto comum e dash; T02 não aplicável |
| Vida extra de recuperação | Descartada. Vida zero leva à derrota; T13 deve conferir essa regra, sem retorno após morte |
| Evolução visual por nível | Descontinuada. Aparência única; T14 não aplicável. XP e melhorias permanecem |
| Filtro de filme antigo | Testado e retirado por legibilidade |
| Nome e origem detalhada do protagonista | Não serão acrescentados nesta entrega; a introdução atual é suficiente |

Imagens geradas por IA foram aceitas pelo professor com crédito à IA, registrado em `CREDITOS.md`. Parry, novas arenas, melhorias adicionais e recorde persistente ficam como possíveis evoluções futuras, sem compromisso para esta entrega.

## 6. Colaboração e integração

1. Salvar e fechar o projeto antes de receber alterações de outro integrante.
2. Atualizar o repositório e combinar quem altera `Robot.json`; o arquivo único exige edição coordenada.
3. Implementar uma tarefa pequena, preservando nomes e contratos de outras frentes.
4. Executar a prévia e repetir os testes relacionados à mudança.
5. Conferir os arquivos alterados antes do commit; imagens e sons devem usar caminhos presentes no repositório.
6. Integrar preservando o trabalho dos dois lados. Não resolver conflitos escolhendo uma versão inteira sem entender o que seria perdido.
7. Fazer o commit e o envio combinados; os demais atualizam antes da próxima edição.

A pasta está no OneDrive; manter atenção a alterações sincronizadas durante a edição. O Git registra o histórico da equipe. Mudança de nome de objeto, variável, recurso ou ordem de eventos deve considerar todos os sistemas que dependem dela.

## 7. Calendário e andamento das entregas

Os intervalos foram metas internas do planejamento inicial, não comprovação da data real de conclusão. O prazo oficial permanece 23/11/2026, às 23h59.

| Entrega | Meta inicial | Situação atual | Resultado |
| --- | --- | --- | --- |
| E00 | 31/10 a 01/11 | Concluída com adaptações | Equipe, projeto oficial e colaboração definidos |
| E01 | 02 a 03/11 | Concluída conforme teste informado | Base de plataforma, arena, menu e exportação básica |
| E02 | 04 a 05/11 | Concluída conforme teste informado | Mira, tiro, dano, abate e recompensa |
| E03 | 06 a 07/11 | Concluída conforme teste informado | XP, cartas, HUD, pausa, derrota e reinício |
| E04 | 08 a 09/11 | Concluída com redução de escopo | Dash, câmera e parallax; pulo duplo descartado |
| E05 | 10 a 11/11 | Concluída com adaptações | Cinco inimigos, cotas, limites e surgimentos |
| E06 | 12 a 13/11 | Concluída com redução de escopo | Plataformas dinâmicas e seis melhorias; vida extra e evolução visual retiradas |
| E07 | 14 a 15/11 | Concluída conforme teste informado | Óleo, chefe com quatro habilidades e vitória |
| E08 | 16 a 17/11 | Aceite confirmado; créditos documentados | Artes, animações, áudio, interface e recursos organizados |
| E09 | 18 a 19/11 | Concluída conforme critérios informados | Balanceamento, controle de objetos e versão publicada para teste |
| E10 | 20 a 22/11 | Concluída | Documentação, versão/link no README, créditos e evidências atualizados |
| E11 | 23/11 | Concluída | Fonte integrado, exportação final atualizada e acesso público confirmado |

## 8. Registro de cada entrega

Os registros abaixo substituem as instruções iniciais de criação pelo resultado adotado. As marcações refletem os testes informados pela equipe e as decisões de escopo. A conclusão de uma etapa não dispensa conferir uma correção posterior que afete seu funcionamento.


### E00 — Ambiente, equipe e projeto oficial

**Resultado adotado:** Equipe identificada, projeto oficial em Robot.json e edição coordenada do arquivo único. A proposta de projeto em pasta e eventos externos não foi adotada.

**Critérios de aceite registrados:**

- [x] Os quatro abriram e executaram a prévia em seus computadores.
- [x] Há um único projeto oficial identificado, salvo e reaberto com sucesso.
- [x] O teste de colaboração funcionou ou a edição por turnos está combinada.
- [x] Nomes, versão do editor, horários e decisões iniciais estão registrados.


### E01 — Base de plataforma

**Resultado adotado:** Robô com gravidade, salto, chão, plataformas atravessáveis e limites. Fluxo inicial implementado com MenuInicial e Introducao antes da Arena.

**Critérios de aceite registrados:**

- [x] O jogador anda para os dois lados, pula e volta ao chão sem atravessá-lo.
- [x] As prateleiras deixam passar por baixo e sustentam o jogador por cima.
- [x] Não há paredes invisíveis inesperadas nem saída acidental da arena.
- [x] Menu inicia a partida e a exportação básica abre no navegador.


### E02 — Combate e recompensas

**Resultado adotado:** Mira com câmera deslocada, tiros com cadência, vida por inimigo, contato com invulnerabilidade e recompensa por abate.

**Critérios de aceite registrados:**

- [x] Segurar o clique produz tiros com intervalo; soltar interrompe os disparos.
- [x] O tiro nasce na arma, mira corretamente com a câmera deslocada e atinge somente o alvo acertado.
- [x] Dois andadores mantêm vidas independentes; matar um não elimina o outro.
- [x] Cada morte gera exatamente uma recompensa, e contato não esgota a vida instantaneamente.
- [x] Tiros antigos são removidos; não há crescimento ilimitado de objetos.


### E03 — Partida, XP e estados

**Resultado adotado:** Estados de jogo, coleta, nível com excedente de XP, três cartas, pausa, derrota e reinício integrados. Resultados receberam apresentação visual posterior.

**Critérios de aceite registrados:**

- [x] Jogar → matar → descer/coletar → subir de nível → escolher → continuar funciona.
- [x] Durante pausa e escolha, não há dano, tiros, movimento, surgimento nem aumento do tempo.
- [x] Após 10 segundos pausado, o retorno não cria uma rajada de inimigos nem avança o relógio.
- [x] Só uma opção é aplicada; XP excedente não desaparece.
- [x] Derrota e reinício funcionam seguidas sem herdar melhorias.


### E04 — Dash, câmera e parallax

**Resultado adotado:** Dash com recarga, câmera horizontal suave e fundos em camadas integrados. Segundo salto retirado do escopo.

**Critérios de aceite registrados:**

- **Não aplicável:** teste de pulo duplo, descartado nesta versão. Testar o salto comum e o pouso nas plataformas.
- [x] Dash tem início, fim e recarga; não atravessa superfícies sólidas.
- [x] Pausar durante dash não deixa o robô permanentemente invulnerável.
- [x] Câmera acompanha sem mostrar vazio; HUD fica parado; fundos têm deslocamentos distintos.


### E05 — Inimigos e ondas

**Resultado adotado:** Andador, Saltador, Voador, Pesado e Atirador integrados. Ondas por cotas, limite simultâneo e surgimentos acompanhando a câmera. Projéteis de Atiradores atravessam plataformas.

**Critérios de aceite registrados:**

- [x] Cada um dos cinco tipos muda a decisão do jogador, mesmo com arte provisória.
- [x] Dois atiradores não compartilham indevidamente a mesma recarga.
- [x] Critério revisado: tiros do Atirador atravessam plataformas e podem atingir o robô; colisão com chão/robô e expiração devem seguir a regra atual dos disparos.
- [x] O limite de inimigos é respeitado e as ondas só avançam com o jogo ativo.
- [x] Todos podem ser atingidos, morrer e dar recompensa sem duplicação.


### E06 — Plataformas e melhorias

**Resultado adotado:** Esteiras, andaimes, mudança de layouts e seis melhorias principais mais reparo implementados. Vida extra e evolução visual não fazem parte desta versão.

**Critérios de aceite registrados:**

- [x] Esteira só empurra objetos apoiados; andaime avisa antes de cair.
- [x] Pesado consegue provocar a queda prevista e a arena continua navegável.
- [x] As seis melhorias mudam atributos verificáveis e respeitam seus limites.
- **Descartado:** teste de recuperação por vida extra; a vida zerada leva diretamente à derrota.
- **Não aplicável:** teste de troca de estágio visual, pois a evolução visual foi descontinuada. Permanecem os testes normais das animações, do alinhamento e da colisão.
- **Não aplicável:** reposicionamento após morte, pois a vida extra foi descartada.


### E07 — Óleo, Máquina-mãe e vitória

**Resultado adotado:** Chefe após a quinta onda, barra de vida, quatro habilidades, óleo, escoamento e resultado final. A entrada por tempo e a proposta de dois ataques foram substituídas.

**Critérios de aceite registrados:**

- [x] Óleo sobe apenas durante jogo ativo e não elimina todas as rotas.
- [x] Chefe surge uma vez, executa as quatro habilidades adotadas com avisos legíveis e pode ser derrotado.
- [x] Existe vitória real, com reinício/menu; sobreviver ao relógio sozinho não vence.
- [x] Vitória e derrota não aparecem simultaneamente.


### E08 — Artes, animações, som e interface

**Resultado adotado:** Animações por quadros, efeitos, trilhas, sons e telas integrados. Recursos ausentes removidos; sons em prototipo/sons/. Créditos dos quatro integrantes e das artes/áudios documentados.

**Critérios de aceite registrados:**

- [x] Todos os recursos carregam sem caminho absoluto do computador de alguém.
- [x] Explosão avança por quadros e se encerra sem deixar instâncias acumuladas.
- [x] Câmera não expõe buracos no fundo e a interface é legível durante combate.
- [x] Trilha não reinicia continuamente; efeitos não se multiplicam sem controle.
- [x] Áudio, pausa, reinício e vitória funcionam também na exportação web.


### E09 — Balanceamento e versão de teste

**Resultado adotado:** Ondas e atributos ajustados em rodadas de teste, com remoção de projéteis, peças e efeitos antigos. Versão publicada testada pela equipe, com exportação atualizada após as últimas correções.

**Critérios de aceite registrados:**

- [x] Uma partida completa até derrota e outra até vitória funcionam na versão publicada.
- [x] O ciclo de subir para se proteger e descer para coletar é perceptível.
- [x] Não há crescimento contínuo de objetos sem limite nem falhas que impeçam terminar.
- [x] Rodadas de balanceamento e correções concluídas conforme as validações da equipe.


### E10 — Documentação e evidências

**Resultado adotado:** README com funcionamento, instruções, capturas e vídeos; créditos por frente e GDD revisados. Versão de referência GDevelop 5.6.287 e endereço público registrados no README.

**Critérios de aceite registrados:**

- [x] README cobre R07, R08 e R09; fonte e jogo cobrem R06 e R10.
- [x] Outra cópia abre sem recursos faltando; URL funciona publicamente.
- [x] Não existe problema conhecido que impeça iniciar, jogar, vencer/perder e reiniciar.


### E11 — Versão final e publicação

**Resultado adotado:** Fonte e recursos integrados no GitHub, exportação final atualizada em `docs/` e acesso público confirmado. O jogo publicado inicia em `MenuInicial` e inclui `Creditos`, `Introducao` e `Arena`. Os atalhos de demonstração permanecem disponíveis.

**Situação:** concluída.


## 9. Relação com os conteúdos das aulas

As equivalências abaixo ligam os conceitos estudados à implementação no GDevelop. Não implicam reescrever o jogo em JS/Canvas nem apresentar uma funcionalidade descartada como concluída.

| Material/aula | Conceito estudado | Aplicação no jogo | Entrega/evidência |
| --- | --- | --- | --- |
| Aula01–02 e Aula03–04 | Lógica, coordenadas e desenho 2D | Posicionar objetos, interpretar X/Y e organizar regras | E01: cena de plataforma |
| Aula05–06 | Carregar e desenhar imagens | Recursos, Sprites e escala coerente | E08: recursos próprios carregados |
| Aula07–08 | Loop de animação | Eventos atualizados continuamente; velocidades relacionadas ao tempo | E02/E03: tiros, recargas e relógio |
| Aula09–10 e Aula11–12 | Tecla mantida e disparo de uma ação | Andar contínuo; salto/dash/pausa acionados uma vez por entrada | E01/E04: controles |
| Aula13–14 e Aula15–16 | Spritesheet e sequência de quadros | Animação do Sprite com quadros, duração e término | E08: explosão ou outra sequência real |
| Aula17–18 | Design, regras, objetivos e experiência | Enredo, objetivo legível, risco de descer para coletar | GDD e E03/E09 |
| Aula19–20 e Aula23–24 | Parallax | Camadas distantes se deslocam menos que o mundo | E04/E08: câmera percorrendo a arena |
| Aula21–22 e Aula23–24 | Entidades, controles e tiros | Jogador, inimigos e projéteis com responsabilidade própria | E02/E05: comportamento e instâncias |
| Aula25–26 | Colisões e resposta ao contato | Plataformas, acerto de tiros, dano e coleta | E01/E02: máscaras e eventos |
| Aula27–28 | Ator principal e arquitetura de pausa | Suspender entrada, tempo, sistemas e manter UI de retorno | E03: teste de pausa completa |
| Aula29–30 | Animação de entidades e explosões | Quadros de explosão, exclusão após fim e efeitos de dano | E08: sequência e limpeza |
| Aula31–32 | Vidas extras e fim de jogo | Fim de jogo implementado; reserva de tentativas e reposicionamento descartados | Proposta descartada; fim de jogo preservado (seção 5) |
| Aula33–34 | Música, efeitos e controle de reprodução | Trilha, sons pontuais, volume, pausa e reinício | E08: áudio em navegador |

As animações por quadros estão integradas; Tween é complementar. Vida e curas não equivalem a uma reserva de tentativas: a vida extra foi descartada.

## 10. Testes manuais

Usar os IDs abaixo ao registrar problemas ou conferir alterações. Os aceites das etapas estão na seção 8; esta tabela define os procedimentos, sem inventar uma execução individual de cada teste. Repetir os cenários afetados no editor e na exportação final.

| ID | Procedimento | Resultado esperado |
| --- | --- | --- |
| T01 | Iniciar pelo menu e percorrer a arena | Movimento, pulo, colisão e limites corretos |
| T02 | Proposta original: testar segundo e terceiro saltos no ar | Não aplicável: pulo duplo descartado. Confirmar salto comum e pouso |
| T03 | Usar dash, tentar de novo imediatamente e encostar numa parede | Recarga respeitada; parede continua sólida |
| T04 | Mirar e atirar nos extremos esquerdo e direito da arena | Direção acompanha o mouse no mundo; origem na arma |
| T05 | Acertar só um entre dois inimigos iguais | Somente a instância atingida perde vida |
| T06 | Permanecer encostado em inimigo | Invulnerabilidade impede perda de vida a cada quadro |
| T07 | Matar inimigo e coletar a recompensa | Um abate, uma pontuação e a quantidade correta de XP |
| T08 | Subir de nível segurando clique e escolher melhoria | Mundo congela; uma escolha; retorno sem disparo involuntário |
| T09 | Pausar durante tiro, dash, projétil, onda e óleo por 10 s | Mundo e trilha pausam; interface responde; trilha retoma do mesmo ponto e jogo não acumula ações |
| T10 | Coletar XP suficiente para mais de um nível | Excedente preservado; escolhas apresentadas sequencialmente |
| T11 | Atingir limite de uma melhoria | Limite respeitado; sorteio mantém opções válidas |
| T12 | Subir em esteira/andaime e trazer um Pesado | Efeitos aplicados às instâncias corretas; aviso antes da queda |
| T13 | Proposta original: morrer com e sem vida extra, inclusive após subida do óleo | Não aplicável: vida extra descartada. Conferir derrota com vida zero, inclusive no óleo, sem reviver |
| T14 | Proposta original: trocar estágio visual perto de borda/plataforma | Não aplicável: evolução visual descontinuada; robô com aparência única |
| T15 | Enfrentar cinco tipos e chegar ao chefão | Comportamentos distintos, chefe único e limite respeitado |
| T16 | Derrotar o chefe enquanto há projéteis/perigos ativos | Vitória única; dano e surgimentos interrompidos |
| T17 | Reiniciar três partidas, alternando vitória e derrota | Valores iniciais restaurados; áudio e eventos não duplicados |
| T18 | Jogar até o fim no computador mais fraco do grupo | Fluidez aceitável e sem acúmulo ilimitado de objetos |
| T19 | Abrir a URL pública em Chrome e outro navegador disponível | Menu, recursos, áudio após interação e controles funcionando |
| T20 | Baixar fonte em pasta nova e seguir o README | Projeto oficial abre e executa sem dependências locais ocultas |

Para registrar uma falha, informar: ID, versão, responsável, passos, resultado esperado, resultado observado, impacto e teste após a correção. T02 e T14 não se aplicam; T13 confere derrota sem reviver. Refinamentos adicionais do Saltador não invalidam automaticamente os critérios já aprovados.

## 11. Configuração da versão final

1. O projeto editável permanece em `prototipo/Robot.json`, com os recursos locais organizados no repositório.
2. A exportação HTML5 fica em `docs/` e inicia pelo menu, com créditos, introdução e partida disponíveis.
3. Os fluxos de jogabilidade, pausa, progressão, vitória, derrota e reinício têm aceite registrado nas etapas; a versão publicada foi confirmada pela equipe.
4. Os atalhos F3, F4 e F5 iniciam as ondas 3, 4 e 5; F8 inicia a luta contra a Máquina-mãe. Eles foram mantidos para facilitar a apresentação.
5. README, GDD, FASEAMENTO e CREDITOS reúnem instruções, regras, decisões de escopo, contribuições e evidências da versão final.

O escopo está encerrado nesta versão. As propostas descartadas e as possíveis evoluções futuras permanecem documentadas, sem constituir pendências de implementação.

## 12. Documentação e evidências disponíveis

| Material | Situação registrada | Onde consultar |
| --- | --- | --- |
| Design do jogo | Atualizado com regras adotadas, descartes e evoluções futuras | [GDD.md](GDD.md) |
| Descrição e enredo | Nome, ferramenta, missão e objetivo documentados | [README.md](README.md) |
| Abertura e execução | Instruções para baixar, abrir Robot.json e iniciar a prévia | README |
| Funcionamento | Controles, combate, inimigos, ondas, chefe, cenário, progressão e HUD descritos | README |
| Créditos | Quatro integrantes, contribuições e origem dos recursos reunidos | [CREDITOS.md](CREDITOS.md) |
| Capturas | Oito imagens reais organizadas e inseridas | `midia/capturas/` e README |
| Vídeos | Duas gravações completas, até vitória e derrota, com links no README | `midia/videos/` e README |
| Conceitos e originais | Artes, spritesheets e prompts preservados | [Catálogo visual](imagens/README.md) |
| Versão do editor e URL | GDevelop 5.6.287 e link público incluídos; página pública respondeu à conferência | README |

Os créditos individuais ficam no documento de créditos. Este planejamento acompanha tarefas e resultados, sem repetir uma lista detalhada de autoria ou lembretes de conversa.

## 13. Controle de andamento e checklist final

**Implementação, documentação e publicação:** concluídas no escopo adotado. **Testes das etapas:** aceites preservados na seção 8.

### Itens concluídos ou confirmados

- [x] Quatro integrantes identificados e contribuições documentadas.
- [x] Botão Créditos ligado à cena própria, com resumo da equipe e uso de IA; retorno por botão e Esc validado na prévia de teste.
- [x] Jogo de plataforma em GDevelop com começo, desenvolvimento e fim.
- [x] Fonte editável e recursos locais disponíveis no repositório.
- [x] README com nome, descrição, enredo, objetivo, ferramenta e instruções de execução.
- [x] Versão do GDevelop e endereço jogável incluídos no README.
- [x] Capturas reais e vídeos demonstrativos inseridos no README.
- [x] Créditos e uso de IA registrados; aceitação das imagens confirmada com o professor.
- [x] Testes de jogabilidade, pausa, progressão, vitória, derrota e reinício informados como aprovados nas etapas.
- [x] Cópia limpa e acesso público informados como testados nos critérios da E10.
- [x] Fonte integrado e exportação final atualizada, com acesso pelo navegador confirmado.
- [x] Atalhos F3/F4/F5/F8 revisados e mantidos para demonstração durante a apresentação.

O planejamento está concluído no escopo definido pela equipe, com fonte, exportação e documentação disponíveis no GitHub.

## 14. Fontes e decisões de referência

### Materiais locais consultados

- `Trabalho Final/Trabalho requisitos.pdf`, página 1: objetivo, prazo e forma de entrega.
- `Trabalho Final/Definição dos Grupos (Sou grupo 3 - gdevelop).pdf`, páginas 2 e 4: equipe de quatro, ferramenta, pontuação e jogo de plataforma para os grupos 03/04.
- [GDD](GDD.md), [catálogo visual](imagens/README.md) e fichas de herói, fundo, evolução e inimigos: decisões do jogo e situação dos recursos.
- Pastas de aulas indicadas na seção 9; em especial pausa (Aula27–28), animação (Aula13–16 e Aula29–30), vidas extras (Aula31–32) e áudio (Aula33–34).

Os PDFs da disciplina ficam fora da raiz deste repositório. Os caminhos acima servem para localizá-los na pasta da disciplina; não fazem parte automaticamente do fonte público do jogo.

### Documentação oficial consultada em 31/10/2026

- [Interface do GDevelop](https://wiki.gdevelop.io/gdevelop5/interface/).
- [Eventos](https://wiki.gdevelop.io/gdevelop5/events/) e [vínculos de eventos externos](https://wiki.gdevelop.io/gdevelop5/events/link/).
- [Trabalho em equipe e modo de múltiplos arquivos](https://wiki.gdevelop.io/gdevelop5/tutorials/how-to-use-gdevelop-as-a-team/).
- [GitHub Desktop com projetos GDevelop](https://wiki.gdevelop.io/gdevelop5/tutorials/using-github-desktop/).
- [Plataforma e personagem de plataforma](https://wiki.gdevelop.io/gdevelop5/behaviors/platformer/).
- [Smooth Camera](https://wiki.gdevelop.io/gdevelop5/extensions/smooth-camera/reference/) e [camadas/câmeras](https://wiki.gdevelop.io/gdevelop5/interface/scene-editor/layers-and-cameras/).
- [Timers e escala de tempo](https://wiki.gdevelop.io/gdevelop5/all-features/timers/).
- [Sprite](https://wiki.gdevelop.io/gdevelop5/objects/sprite/) e [áudio](https://wiki.gdevelop.io/gdevelop5/all-features/audio/).
- [Exportação HTML5](https://wiki.gdevelop.io/gdevelop5/publishing/html5_game_in_a_local_folder/).

Datas de exigências vêm dos PDFs; divisão de tarefas, metas intermediárias, nomes técnicos e números de balanceamento são propostas deste planejamento. Atualizar essas propostas conforme os testes e as orientações do professor.

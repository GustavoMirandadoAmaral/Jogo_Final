# Oficina em Pane - Planejamento de desenvolvimento e entregas

**Base do planejamento:** 31/10/2026. **Equipe:** 4 integrantes. **Ferramenta:** GDevelop desktop.

**Entrega oficial:** repositório público no GitHub até **23/11/2026, às 23h59**. **Apresentações:** 24 e 25/11/2026, em sala. Horários considerados: Brasília.

Este documento transforma o [GDD](GDD.md) em tarefas para uma equipe que está começando no GDevelop. Cada entrega informa o que aprender, o que implementar, quem participa e como verificar se terminou. O GDD continua sendo a referência de design; este arquivo organiza a execução.

> Comecem pela **E00**. Não é necessário dominar todo o GDevelop para começar. Aprendam os recursos de cada entrega, implementem uma parte pequena e testem antes de seguir.

Para consultar durante o trabalho: [divisão da equipe](#3-como-vamos-nos-dividir), [calendário](#7-calendário-de-entregas), [passo a passo](#8-passo-a-passo-de-cada-entrega), [testes](#10-testes-manuais-que-devem-acompanhar-as-entregas) e [controle de andamento](#13-controle-de-andamento-e-checklist-final).

## 1. O que o professor exige e o que o grupo escolheu

### 1.1. Exigências confirmadas nos PDFs do trabalho

| ID | Exigência | Onde vamos atendê-la | Como conferir |
| --- | --- | --- | --- |
| R01 | Grupo de 4 alunos | Divisão de responsabilidades e README | Quatro integrantes identificados e capazes de explicar suas contribuições |
| R02 | Usar a ferramenta atribuída pelo professor | Projeto editável no GDevelop | Outra pessoa abre o projeto e executa a prévia |
| R03 | Grupos 03 e 04: jogo de plataforma em GDevelop | Movimento lateral, gravidade, chão e plataformas | Jogador anda e pula sobre superfícies com colisão |
| R04 | Desenvolver um jogo completo, aplicando design, programação, jogabilidade e experiência do usuário | Fluxo menu → partida → derrota/vitória → reinício | É possível jogar uma partida completa sem intervenção no editor |
| R05 | Publicar em repositório público no GitHub até 23/11/2026, às 23h59 | E10 e E11 | Abrir o repositório em janela anônima, sem login |
| R06 | Entregar o código-fonte completo | Projeto GDevelop, arquivos gerados pelo modo de múltiplos arquivos e recursos usados | Baixar uma cópia limpa e abrir sem arquivos faltando |
| R07 | README com nome, descrição geral, enredo, objetivos e ferramenta | E10 | Todos esses tópicos aparecem no README da raiz |
| R08 | README com instruções de instalação e execução | E10 | Um colega segue o texto sem ajuda de quem o escreveu |
| R09 | README com capturas de tela ou GIFs demonstrativos | E10 | Imagens reais da implementação aparecem corretamente no GitHub |
| R10 | Versão executável ou link jogável, quando aplicável | Exportação HTML5 e GitHub Pages | Link abre e permite começar uma partida em outro computador |
| R11 | Compartilhar o link do repositório com o professor | E11 | Grupo registra a entrega pelo canal combinado na disciplina |
| R12 | Apresentação em sala em 24 e 25/11/2026 | Ensaio na E10 e apresentação na data atribuída ao grupo | Demonstração e explicação distribuídas entre os quatro |

O trabalho vale **50 pontos**. Os PDFs consultados não apresentam uma distribuição desses pontos por mecânica, nem uma lista dizendo que dash, chefão, parallax ou determinada quantidade de inimigos sejam obrigatórios. Esses recursos vêm do GDD e dos conteúdos estudados. O perfil indicado para compartilhar o repositório é [github.com/christienrachid](https://github.com/christienrachid); o grupo deve usar o canal de entrega orientado pelo professor, pois um perfil do GitHub não define sozinho esse procedimento.

### 1.2. Compromissos do nosso jogo

O objetivo é implementar o escopo mínimo já definido no GDD:

- Robô com andar, pulo, pulo duplo e dash; mira pelo mouse e tiro ao segurar o botão esquerdo.
- Arena lateral maior que a tela, câmera horizontal suave e fundo com parallax.
- Prateleiras atravessáveis, esteiras e andaimes que desabam.
- Andador, Saltador, Voador, Pesado e Atirador; ondas crescentes e limite de inimigos.
- Peças de XP, níveis, escolha de 1 entre 3 melhorias e pelo menos 6 melhorias implementadas.
- Óleo subindo, Máquina-mãe ao final e vitória ao derrotá-la.
- Menu, instruções, HUD, pausa, derrota, vitória, reinício, trilha e efeitos sonoros.

Para demonstrar conteúdos das aulas, este plano também propõe **uma animação real por quadros/spritesheet**, **pontuação separada do XP** e **uma vida extra de recuperação**. São decisões propostas para a implementação, não exigências adicionais encontradas nos PDFs. Confirmar essas três decisões na E00 e registrar qualquer ajuste no GDD.

Parry, várias arenas, recorde persistente, mais de seis melhorias e efeitos elaborados ficam para depois da versão completa. Não entram no caminho principal das entregas.

## 2. Situação atual e ponto de partida

Na conferência dos arquivos em 31/10/2026:

| Material existente | Situação | Como usar |
| --- | --- | --- |
| [GDD](GDD.md) | Ideia e mecânicas documentadas; há decisões de enredo e chefão pendentes | Referência de design |
| [Catálogo visual](imagens/README.md) | Conceitos de herói, evolução, fundo, inimigos e chefão | Referência para preparar os recursos de jogo |
| `prototipo/Robot.json` | Uma cena vazia, em 1280 × 720, sem objetos/eventos/recursos | Base simples para iniciar nosso projeto |
| `Temporary Driving.json` | Exemplo de plataforma com movimento, câmera, chão e moedas; recursos presentes | Laboratório para estudar um recurso de cada vez |
| `referencias/Famous Attack (Wave defense shooter).json` | Exemplo de combate visto de cima, com recursos presentes | Estudar ideias de ondas, vida e melhorias |
| `Famous Attack (Wave defense shooter).json` da raiz | Experimento com recursos não encontrados nos caminhos atuais e mistura de movimentos | Preservar como experimento; não escolher como projeto oficial |
| Arquivos `.autosave` | Recuperação do editor | Não tratar como versão oficial da entrega |

**Projeto oficial proposto:** abrir `prototipo/Robot.json` e usar **Salvar como** para criar `OficinaEmPane.json` na raiz deste repositório. Fazer isso na E00, pelo editor. Este planejamento não altera os projetos existentes.

Os projetos atuais estão salvos em arquivo único. Criar folhas de eventos externos, sozinho, não separa os arquivos do projeto. A preparação para trabalho paralelo está na seção 5.

### 2.1. As imagens já existem; a preparação técnica ainda precisa entrar no prazo

Não precisamos recomeçar a direção visual. Precisamos transformar os conceitos selecionados em arquivos que funcionem no jogo:

| Recurso | Preparação necessária | Responsável principal |
| --- | --- | --- |
| Herói | Corpo lateral e braço-canhão separados; origem nos pés; ponto de encaixe e saída do tiro; colisão consistente | A, com apoio de C |
| Três estágios do herói | Arquivos individuais com a mesma escala, apoio dos pés e colisão | A |
| Inimigos | Escala, origem, máscara de colisão e animações; separar hélice/arma apenas se necessário | B |
| Fundo | Camada distante e intermediária independentes; cobrir todo o percurso da câmera | C |
| Chão, prateleira, esteira e andaime | Imagens/objetos próprios; as plataformas pintadas no panorama são decoração | C |
| Tiros, peças de XP, ícones e interface | Preparar versões simples e legíveis; não aparecem documentados como recursos finais prontos | A e D |
| Animação por quadros | Pequena sequência, por exemplo explosão, com quadros distintos e tempo definido | B, com apoio de C |
| Som | Selecionar ou produzir efeitos/trilha e registrar origem/licença | Cada frente prepara seus sons; D integra a trilha |

Preservar os PNGs originais. Salvar cópias preparadas em `assets/jogo/`, com subpastas `jogador/`, `inimigos/`, `cenario/`, `interface/`, `efeitos/` e `audio/`. Essas pastas serão criadas durante a implementação.

## 3. Como vamos nos dividir

Preencher os nomes na primeira reunião. As letras servem para começar o planejamento sem inventar os integrantes.

| Pessoa | Nome | Responsabilidade principal | Entregas que deve saber demonstrar | Revisor |
| --- | --- | --- | --- | --- |
| A | A preencher | Jogador, controles, arma, tiros, dano e recuperação | Andar/pular/dash, mirar, disparar e receber dano corretamente | B |
| B | A preencher | Inimigos, ondas, chefão, pontuação por abates e explosões | Cinco comportamentos diferentes e Máquina-mãe com início e fim | A |
| C | A preencher | Arena, plataformas, câmera, parallax, óleo e organização visual | Cenário navegável, perigos e profundidade sem falhas nas bordas | D |
| D | A preencher | HUD, menu, pausa, XP, melhorias e fluxo das telas | Partida completa, progressão e interface funcionando | C |

**Documentação, preparação de arte e testes pertencem aos quatro.** Cada pessoa escreve a explicação e os créditos da própria parte. D reúne as seções do README; isso não transfere toda a documentação para D. A integração técnica terá um responsável nomeado na E00 e um substituto.

### 3.1. Carga de trabalho e rotina

- Reservar, como hipótese inicial, **1h30 a 2h por integrante em cada dia de trabalho**, com uma revisão conjunta de 20 a 30 minutos por entrega. Ajustar na E00 à disponibilidade real. É uma previsão, não garantia de duração para iniciantes.
- Cada tarefa deve caber, de preferência, em um bloco de 30 a 90 minutos. Se passar disso, dividir: criar objeto → criar evento → testar → registrar.
- Cada pessoa mantém **uma tarefa em execução**. Antes de começar outra, entrega algo testável ou registra exatamente o impedimento.
- Ao final de cada dia, informar: o que funciona, o que falta e de qual objeto/variável/decisão depende.
- Se alguém ficar mais de 30 minutos sem entender um problema, pedir ajuda mostrando a cena, os eventos relevantes e o resultado esperado.
- Reavaliar o prazo em 07/11 e 15/11. Se houver atraso, aplicar a ordem de simplificação da seção 11.

## 4. O mínimo de GDevelop que todos precisam entender

| Termo | Significado prático no nosso jogo |
| --- | --- |
| Projeto | Conjunto do jogo: cenas, recursos, objetos, eventos e configurações |
| Cena | Uma tela ou fase, como `Menu` ou `Jogo` |
| Objeto | Definição de algo, como `Andador` |
| Instância | Uma cópia colocada/criada na cena; dez andadores são dez instâncias |
| Sprite | Objeto com imagem e, se preparado, animações por quadros |
| Comportamento | Função pronta adicionada ao objeto, como gravidade e pulo do Platformer |
| Evento | Regra visual composta por condições e ações |
| Condição | Pergunta: “a tecla está pressionada?”, “houve colisão?”, “a vida chegou a zero?” |
| Ação | O que acontece: mover, criar tiro, descontar vida, trocar de cena |
| Subevento | Regra dentro de outra; aproveita as condições e a seleção de objetos do evento pai |
| Variável da cena | Informação daquela partida: XP, nível, tempo, estado do jogo |
| Variável de objeto | Informação de cada instância: vida de um inimigo, dano de um tiro |
| Variável global | Informação entre cenas: configurações e resultado que a tela final precisa mostrar |
| Timer | Relógio para recarga, intervalo entre disparos ou nascimento de inimigos |
| Camada | Organização de desenho e câmera: fundo, mundo, interface |
| Máscara de colisão | Área usada para detectar contato; não precisa incluir fumaça ou adornos da imagem |
| Prévia / Preview | Execução para testar o jogo enquanto está sendo desenvolvido |
| Depurador / Debugger | Inspeção das variáveis e objetos enquanto a prévia roda |

Eventos são avaliados repetidamente enquanto a cena roda. Uma condição que permanece verdadeira pode criar centenas de objetos. Para ações únicas, planejar um gatilho de uma vez ou uma condição de transição; para tiro contínuo, usar intervalo de disparo. Os eventos também selecionam as instâncias às quais as ações se aplicam: acertar um andador deve ferir aquele andador. [Referência oficial sobre eventos](https://wiki.gdevelop.io/gdevelop5/events/).

Antes de implementar uma regra, escrever em português: **“Quando [condições], fazer [ações], alterando [instâncias/variáveis]”.** Depois montar essa mesma regra no editor.

## 5. Preparação para colaborar sem perder trabalho

### 5.1. Uma versão oficial e arquivos separados

1. Todos instalam a mesma versão estável do GDevelop desktop e anotam a versão no README.
2. Abrir o repositório já existente `Jogo_Final` no GitHub Desktop. Não criar outro repositório dentro dele.
3. O responsável cria o `OficinaEmPane.json` oficial a partir da base vazia e faz uma versão salva antes da mudança de formato.
4. Nas propriedades do projeto, procurar a opção de **salvar em múltiplos arquivos / projeto em pasta**, ativar e salvar.
5. Fechar e reabrir o projeto, verificar os arquivos gerados e executar a prévia.
6. Confirmar no GitHub Desktop que cenas e eventos externos passam a aparecer como arquivos distintos. Os nomes e diretórios efetivos devem ser os criados pelo editor; não montar essa estrutura à mão.
7. Fazer um teste em dupla: cada integrante altera apenas uma folha externa diferente, junta as alterações e verifica se ambas continuam funcionando.
8. Só depois liberar trabalho paralelo nesses arquivos. Recursos, definições de objetos, cenas e configurações compartilhadas continuam exigindo coordenação.

Esse fluxo segue a [orientação oficial para equipes](https://wiki.gdevelop.io/gdevelop5/tutorials/how-to-use-gdevelop-as-a-team/). Como a pasta atual está no OneDrive, evitar sincronização ativa durante a edição; o GDevelop documenta conflitos de sincronização nessa situação. Combinem pausar a sincronização durante as sessões ou trabalhar em uma cópia local não sincronizada, mantendo o Git como histórico do grupo.

**Alternativa se o modo de pasta não funcionar na versão usada:** um integrante por vez edita o projeto oficial, em horários combinados. Os demais preparam recursos, testes, documentação e pequenos experimentos em projetos de laboratório. O integrador transporta e testa cada contribuição. Não tratar quatro cópias divergentes do mesmo JSON como se fossem automaticamente mescláveis.

### 5.2. Regra diária de Git/GitHub Desktop

1. Salvar e fechar o projeto no GDevelop antes de receber alterações.
2. No GitHub Desktop, usar **Fetch origin** e **Pull origin** na versão principal para baixar o trabalho integrado.
3. Criar uma branch da tarefa, por exemplo `e02-tiro-manual`, e combinar quais arquivos serão alterados. Branch é uma linha de trabalho separada.
4. Abrir o projeto, implementar e testar. Evitar renomear objetos/variáveis de outra frente sem combinar.
5. Salvar; conferir a lista de arquivos alterados. Arquivo inesperado merece inspeção antes de continuar.
6. Fazer um commit com descrição concreta, como `Adiciona recarga do tiro manual`, e enviar com **Push/Publish branch**. Commit registra uma versão; push envia essa versão ao GitHub.
7. Abrir uma solicitação de integração, ou pull request, indicando o que mudou e como testar. O revisor testa e o integrador junta à versão principal.
8. Os demais fecham o editor e atualizam a versão principal antes da próxima tarefa. Fechar evita salvar por cima de uma versão recém-baixada.

Se aparecer conflito, preservar o trabalho dos dois lados e pedir ajuda. Não resolver escolhendo “aceitar tudo meu” sem saber o que será descartado. [Guia oficial de GDevelop com GitHub Desktop](https://wiki.gdevelop.io/gdevelop5/tutorials/using-github-desktop/).

### 5.3. Combinados sobre arquivos compartilhados

- O integrador coordena mudanças nas propriedades gerais, catálogo de recursos, definições compartilhadas de objetos e cena `Jogo`.
- A edita a folha do jogador; B, inimigos e ondas; C, arena e câmera; D, interface e progressão.
- Adicionar uma imagem pelo editor pode alterar o catálogo compartilhado de recursos. Preparar o arquivo na própria subpasta e combinar a importação com o integrador.
- Ninguém troca simultaneamente nomes de objetos, comportamentos ou variáveis. Registrar a mudança e avisar as frentes afetadas.
- `imagens/` guarda os conceitos; `assets/jogo/`, os recursos preparados. `docs/` será a exportação web, não a pasta do projeto editável.
- Definir exclusões de arquivos temporários e cópias de recuperação com cuidado. Não excluir do Git recursos necessários, arquivos do modo de pasta ou a exportação usada no GitHub Pages.
- Ao concluir uma entrega, registrar uma versão identificada, como `E03-ciclo-jogavel`, e manter a versão principal executável.

## 6. Contratos do projeto: nomes e regras comuns

Esta é uma proposta inicial para evitar quatro soluções incompatíveis. Criar os nomes necessários progressivamente; a tabela não pede que todos os sistemas sejam feitos na E00.

### 6.1. Cenas, camadas e folhas de eventos

| Tipo | Nomes propostos | Responsável |
| --- | --- | --- |
| Cenas | `Menu`, `Jogo`, `Derrota`, `Vitoria` | D; mudanças estruturais com integrador |
| Camadas da cena Jogo, de trás para frente | `FundoDistante`, `FundoMedio`, `Mundo`, `HUD`, `Sobreposicao` | C e D |
| Folhas externas | `EV_Inicializacao`, `EV_Jogador`, `EV_Combate`, `EV_Inimigos`, `EV_Ondas`, `EV_Arena`, `EV_Camera`, `EV_Progressao`, `EV_EntradaInterface`, `EV_AtualizacaoHUD`, `EV_Audio` | Dono de cada sistema |
| Objetos principais | `Jogador`, `ArmaJogador`, `TiroJogador`, `TiroInimigo`, `Chao`, `Prateleira`, `Esteira`, `Andaime`, `PecaXP`, `Oleo` | Conforme frente |
| Inimigos | `Andador`, `Saltador`, `Voador`, `Pesado`, `Atirador`, `MaquinaMae` | B |
| Grupos de objetos | `InimigosComuns`, `AlvosDano`, `SuperficiesSolidas` | B e C, com integrador |

Objetos físicos ficam no `Mundo`. O HUD tem câmera própria e permanece fixo; ele não recebe o deslocamento da câmera do mundo. As folhas externas precisam ser **vinculadas** aos eventos da cena: apenas criá-las não executa suas regras. [Como vincular eventos externos](https://wiki.gdevelop.io/gdevelop5/events/link/).

Ordem inicial sugerida dos links: inicialização → entrada da interface/transições de estado → jogador → inimigos/ondas → combate → arena → progressão → câmera → atualização visual do HUD → áudio. Vincular cada folha uma única vez. D separa comandos em `EV_EntradaInterface` e atualização dos textos/barras em `EV_AtualizacaoHUD`. Cada sistema de jogabilidade também verifica o estado da partida; a ordem sozinha não garante a pausa.

Em `EV_Inicializacao`, colocar a condição “no início da cena” nas regras que restauram valores iniciais. Sem essa condição, a vida e o XP poderiam ser redefinidos a cada quadro.

### 6.2. Variáveis e quem pode alterá-las

| Escopo | Nome | Valor inicial proposto | Uso e responsável |
| --- | --- | --- | --- |
| Cena | `EstadoJogo` | `"Jogando"` | D coordena transições para `Pausado`, `EscolhendoUpgrade`, `Derrota` e `Vitoria` |
| Cena | `TempoPartida` | 0 | B acumula segundos apenas durante jogo ativo |
| Cena | `Onda` | 1 | B determina tipos e intensidade de surgimento |
| Cena | `XP`, `Nivel`, `XPProximoNivel` | 0, 1, 10 | D controla progressão; valores de balanceamento provisórios |
| Cena | `Pontuacao`, `Abates` | 0, 0 | B registra abates; D exibe resultado |
| Cena | `ChefaoAtivo`, `ChefaoDerrotado` | falso, falso | B sinaliza início e fim do chefe; D realiza a transição final |
| Cena | `LimiteInimigos` | 20 | B limita surgimento; testar até 40, conforme desempenho |
| Cena | `VidasExtras` | 1 | A consome a recuperação; D mostra no HUD |
| Jogador | `Vida`, `VidaMaxima` | 100, 100 | A aplica dano; upgrades de D modificam a vida respeitando o limite |
| Jogador | `DanoTiro`, `IntervaloTiro` | 10, 0,30 s | A utiliza; D altera por melhorias |
| Jogador | `VelocidadeBase`, `RecargaDash` | 300 px/s, 2 s | A utiliza; D altera por melhorias |
| Jogador | `EstagioVisual` | 1 | A troca a arte a partir do nível, preservando colisão e posição |
| Inimigo, por instância | `Vida`, `DanoContato`, `XPDrop`, `PontosAbate` | Conforme tipo | B inicializa ao criar cada inimigo |
| Peça de XP, por instância | `ValorXP` | Definido ao criar a peça | B copia/distribui a recompensa do inimigo; D soma esse valor na coleta |
| Tiro, por instância | `Dano`, `TempoDeVida` | Copiados na criação | A/B preservam o dano de cada projétil e limitam sua duração |
| Global | `ResultadoFinal` | Estrutura ou valores combinados | D copia pontuação, nível, tempo e abates antes de trocar de cena |
| Global | `AudioAtivo` | verdadeiro | D preserva a preferência entre cenas |

**Vida, vidas extras, XP, nível, pontuação e estágio visual são informações diferentes.** Subir de nível não significa recuperar toda a vida automaticamente; trocar de aparência não pode aumentar a área de colisão sem uma decisão de design.

### 6.3. Estado da partida e pausa

| Estado | Mundo, dano, ondas e XP | Interface permitida |
| --- | --- | --- |
| `Jogando` | Ativos | HUD e comando de pausa |
| `Pausado` | Congelados | Continuar, áudio e voltar ao menu |
| `EscolhendoUpgrade` | Congelados | Escolher exatamente uma das três opções |
| `Derrota` | Encerrados | Exibir resultado e reiniciar/menu |
| `Vitoria` | Encerrados | Exibir resultado e reiniciar/menu |

Ao pausar, usar escala de tempo da cena igual a 0 para mecânicas dependentes do tempo **e** bloquear eventos de tiro, dano, criação de inimigos e coleta com `EstadoJogo = "Jogando"`. A escala de tempo não impede toda ação de evento. A interface de pausa deve responder a entrada sem depender de um timer/tween congelado. Retomar com escala 1 e sem somar o tempo em que ficou parado. [Timers e escala de tempo no GDevelop](https://wiki.gdevelop.io/gdevelop5/all-features/timers/).

Prioridade proposta para situações simultâneas: resolver morte/vida extra; se houve derrota, encerrar a atualização; depois resolver vitória; somente durante jogo ainda ativo abrir upgrades. Se ganhar XP para vários níveis de uma vez, guardar o excedente e apresentar uma escolha por vez. Esc não fecha a escolha de upgrade nem a transforma em pausa comum.

## 7. Calendário de entregas

Os intervalos abaixo são metas internas. A última data oficial continua sendo 23/11. Cada entrega pressupõe a anterior integrada; as tarefas de preparação visual, áudio e documentação podem avançar em paralelo.

| Entrega | Meta | Resultado verificável | Dependência |
| --- | --- | --- | --- |
| E00 | 31/10 a 01/11 | Equipe, ambiente, projeto oficial e modo de colaboração definidos | Materiais atuais |
| E01 | 02 a 03/11 | Robô anda/pula em arena simples; primeira exportação web testada | E00 |
| E02 | 04 a 05/11 | Mira, tiro, um inimigo, dano, morte e peças | E01 |
| E03 | 06 a 07/11 | Ciclo jogável: XP, escolha de melhoria, HUD, pausa, derrota e reinício | E02 |
| E04 | 08 a 09/11 | Pulo duplo, dash, câmera suave e parallax inicial | E03 |
| E05 | 10 a 11/11 | Cinco tipos de inimigo e ondas crescentes | E04 |
| E06 | 12 a 13/11 | Plataformas dinâmicas, seis melhorias, vida extra e evolução visual | E05 |
| E07 | 14 a 15/11 | Óleo, chefão e vitória; escopo funcional completo | E06 |
| E08 | 16 a 17/11 | Arte integrada, animação por quadros, áudio e telas acabadas | E07; recursos preparados em paralelo |
| E09 | 18 a 19/11 | Balanceamento, desempenho e versão jogável publicada para testes | E08 |
| E10 | 20 a 22/11 | Versão candidata final, README completo, créditos, teste de cópia limpa e ensaio | E09 |
| E11 | 23/11 | Conferência pública e entrega registrada; meta interna até 20h | E10 |
| Apresentação | 24 ou 25/11 | Demonstração do jogo e explicação pelos quatro | Data específica do grupo a confirmar |

**Caminho principal:** plataforma → combate → coleta/progressão → variedade → arena final/chefão → acabamento → entrega. Uma funcionalidade bonita isolada ainda não equivale a uma partida completa.

## 8. Passo a passo de cada entrega

### E00 - Preparar o grupo e aprender o editor

**Objetivo:** todos conseguem abrir, alterar, salvar e testar um projeto. **Participação:** os quatro. **Coordenação:** integrador escolhido pelo grupo.

1. Preencher a tabela de nomes, escolher integrador/substituto e combinar um horário diário de integração.
2. Ler juntos o pitch, controles e escopo mínimo do GDD. Fechar um enredo curto e o objetivo final. O nome do protagonista pode continuar provisório.
3. Confirmar com o professor a aceitação de arte gerada por IA, como já previsto no GDD, e registrar a orientação. Isso pode ser resolvido enquanto o protótipo funcional avança.
4. Instalar a mesma versão do GDevelop e configurar acesso ao repositório. Registrar a versão do editor.
5. Cada pessoa, em um laboratório próprio, abrir `Temporary Driving.json`, localizar editor da cena, objetos, comportamentos e eventos, mover uma plataforma e executar a prévia. Preservar o exemplo original.
6. Em outra pequena experiência, criar um Sprite, colocar duas instâncias, adicionar um texto e criar um evento que muda esse texto ao apertar uma tecla.
7. Criar o projeto oficial e testar a colaboração da seção 5. Documentar no README qual arquivo abrir.
8. C listar recursos visuais preparados e pendentes; A e B conferir suas artes; D iniciar a lista de sons e créditos. Definir como serão produzidos os quadros da animação.
9. Confirmar as propostas de pontuação, uma vida extra e animação por quadros. Criar a lista de tarefas da próxima entrega.

**Concluída quando:**

- [ ] Os quatro abriram e executaram a prévia em seus computadores.
- [ ] Há um único projeto oficial identificado, salvo e reaberto com sucesso.
- [ ] O teste de colaboração funcionou ou a edição por turnos está combinada.
- [ ] Nomes, versão do editor, horários e decisões iniciais estão registrados.

### E01 - Construir a base de plataforma

**Aprender:** cenas, Sprite, instância, Platformer Character e Platform. **Dono:** A; C prepara a arena, D as cenas, B revisa o movimento.

1. D criar `Menu`, `Jogo`, `Derrota` e `Vitoria`; deixar `Menu` como cena inicial. Criar um botão/texto simples para começar.
2. C configurar a cena de jogo em 1280 × 720 e propor uma arena inicial de 2560 px de largura. Esses números são ajustes de protótipo.
3. Criar `Jogador` com imagem simples e máscara de colisão estável. Adicionar **Platformer Character**. Criar `Chao` com **Platform**.
4. C colocar chão contínuo, limites laterais e três prateleiras acessíveis. Configurar as prateleiras como **Jumpthru**, para atravessar por baixo e pousar por cima.
5. A configurar A/D ou setas para andar e Espaço/W/↑ para pular. Se simular controles por eventos, desativar os controles padrão para evitar comandos duplicados.
6. Validar um salto comum antes de adicionar pulo duplo ou dash. Não adicionar movimento TopDown ao jogador de plataforma.
7. C usar uma câmera horizontal simples que acompanhe o robô e não mostre fora da arena; suavização entra na E04.
8. D colocar instruções provisórias na tela. O integrador fazer a primeira exportação HTML5 em pasta separada e testar pelo fluxo de prévia/servidor local, evitando depender de abrir `index.html` diretamente.
9. A e C começar a preparar corpo, arma e cenário enquanto a lógica usa recursos simples.

**Teste de aceite:**

- [ ] O jogador anda para os dois lados, pula e volta ao chão sem atravessá-lo.
- [ ] As prateleiras deixam passar por baixo e sustentam o jogador por cima.
- [ ] Não há paredes invisíveis inesperadas nem saída acidental da arena.
- [ ] Menu inicia a partida e a exportação básica abre no navegador.

Referência para este aprendizado: [Platform e Platformer Character](https://wiki.gdevelop.io/gdevelop5/behaviors/platformer/).

### E02 - Fechar o primeiro combate

**Aprender:** criação/exclusão de instâncias, ponto de objeto, colisão, timers e variáveis de objeto. **Donos:** A para combate; B para Andador; C e D apoiam os testes.

1. A adicionar `ArmaJogador`, acompanhar o ponto de encaixe no corpo e definir o ponto `BocaCano` para criar tiros.
2. Fazer a arma apontar para a posição do mouse **nas coordenadas do Mundo**, levando em conta câmera e camada. Testar perto das duas extremidades da arena.
3. Enquanto o botão esquerdo estiver pressionado e o jogo estiver ativo, criar um tiro somente quando o intervalo permitir. A direção fica definida no nascimento; o projétil não deve seguir o cursor depois de disparado.
4. Copiar o dano atual da arma para a variável do tiro. Definir velocidade e exclusão por tempo de vida ou por sair dos limites da arena.
5. B criar um Andador com vida própria. Fazer avançar em direção ao jogador, respeitando chão/colisão, sem subir prateleiras.
6. Tiro colide com um inimigo selecionado → descontar vida daquele alvo e excluir aquele tiro. Começar sem perfuração.
7. Vida do inimigo chega a zero → gerar peças, somar pontuação/abate uma única vez e removê-lo. Começar com uma peça cujo `ValorXP` recebe o `XPDrop` do inimigo. Se criar várias, distribuir o total entre elas: um inimigo de 5 XP não deve soltar três peças de 5 XP por acidente. Inicializar todas as variáveis no momento de criar cada instância.
8. Contato com inimigo → descontar vida do jogador e iniciar invulnerabilidade curta. O contato não pode tirar vida em todos os quadros.
9. C colocar provisoriamente as peças no chão seguro, abaixo do inimigo; se implementarem queda animada, tratar colisão com piso e impedir que sumam abaixo da arena.
10. D mostrar vida, abates e XP em textos provisórios. A vida extra entra depois; por enquanto vida zero leva à derrota.

Depois de validar o Andador, B pode preparar os outros tipos em laboratório entre E02 e E04, usando os mesmos contratos. A integração e os testes conjuntos continuam na E05; assim os quatro tipos novos não precisam começar do zero em dois dias.

**Teste de aceite:**

- [ ] Segurar o clique produz tiros com intervalo; soltar interrompe os disparos.
- [ ] O tiro nasce na arma, mira corretamente com a câmera deslocada e atinge somente o alvo acertado.
- [ ] Dois andadores mantêm vidas independentes; matar um não elimina o outro.
- [ ] Cada morte gera exatamente uma recompensa, e contato não esgota a vida instantaneamente.
- [ ] Tiros antigos são removidos; não há crescimento ilimitado de objetos.

### E03 - Tornar o protótipo uma partida jogável

**Aprender:** variáveis de cena, estados, HUD, pausa e escolhas. **Dono:** D; A/B adaptam seus sistemas e C testa a câmera/interface.

1. Implementar `EstadoJogo` e aplicar a condição de jogo ativo a controles, tiros, dano, ondas, XP e tempo.
2. Coletar `PecaXP` ao tocar nela: somar seu `ValorXP` ao XP da cena e excluir a peça coletada uma única vez.
3. Quando alcançar o limite de XP, guardar excedente, avançar o nível e entrar em `EscolhendoUpgrade`.
4. Criar três cartões provisórios e implementar inicialmente dano, cadência e vida máxima. Escolher um aplica uma melhoria e fecha as outras opções.
5. Congelar a partida durante a escolha. Manter o clique de escolher uma melhoria sem produzir um tiro ao voltar: aguardar soltar o botão antes de reativar o disparo.
6. Montar HUD com vida atual/máxima, XP, nível, tempo e pontuação na camada fixa.
7. Implementar Esc para entrar/sair de pausa somente nos estados permitidos. Colocar “Pausado” e botão de continuar.
8. Implementar derrota, resultado e reinício. Ao reiniciar, zerar tempo, XP, nível, abates, upgrades e timers; restaurar os atributos iniciais.
9. Integrar surgimento simples e limitado de andadores para sustentar 60 a 90 segundos de jogo.

**Teste de aceite:**

- [ ] Jogar → matar → descer/coletar → subir de nível → escolher → continuar funciona.
- [ ] Durante pausa e escolha, não há dano, tiros, movimento, surgimento nem aumento do tempo.
- [ ] Após 10 segundos pausado, o retorno não cria uma rajada de inimigos nem avança o relógio.
- [ ] Só uma opção é aplicada; XP excedente não desaparece.
- [ ] Derrota e reinício funcionam três vezes seguidas sem herdar melhorias.

**Marco de 07/11:** já existe o núcleo jogável. Se não existir, reduzir acabamento e resolver esse ciclo antes de multiplicar conteúdo.

### E04 - Completar o controle e a sensação de espaço

**Aprender:** estados de movimento, recarga, câmera e camadas. **Donos:** A para pulo/dash; C para câmera/parallax.

1. A implementar pulo duplo: pousar repõe a disponibilidade; apertar novamente durante o salto permite apenas um segundo impulso. Segurar a tecla não pode gastar os dois pulos.
2. Implementar dash curto na direção horizontal combinada, com duração e recarga. Proposta: 0,15 s de duração, 2 s de recarga.
3. Durante o dash, permitir atravessar inimigos e suspender dano de contato, sem atravessar chão/paredes. Definir com o grupo se projéteis também serão ignorados; a proposta inicial é ignorá-los durante o dash.
4. Usar a extensão de movimentos avançados ou eventos próprios, conforme a versão instalada, escolhendo uma única abordagem. Fazer um experimento isolado antes de integrar.
5. C substituir a câmera simples por acompanhamento horizontal suave com faixa central e limite nas bordas; manter Y estável inicialmente.
6. Criar dois fundos temporários em camadas diferentes. Fazer a câmera distante percorrer uma fração do deslocamento do Mundo e a intermediária uma fração maior. Proposta inicial: 0,2 e 0,5.
7. Preservar o alinhamento inicial dos fundos e cobrir as bordas durante todo o movimento; não deslocar chão/plataformas como decoração.
8. Verificar novamente mira e HUD depois da mudança de câmera. Nenhum outro sistema deve disputar o controle da mesma câmera.

**Teste de aceite:**

- [ ] Há dois pulos por sequência aérea e um terceiro é recusado.
- [ ] Dash tem início, fim e recarga; não atravessa superfícies sólidas.
- [ ] Pausar durante dash não deixa o robô permanentemente invulnerável.
- [ ] Câmera acompanha sem mostrar vazio; HUD fica parado; fundos têm deslocamentos distintos.

Referências: [movimentos de plataforma](https://wiki.gdevelop.io/gdevelop5/behaviors/platformer/), [Smooth Camera](https://wiki.gdevelop.io/gdevelop5/extensions/smooth-camera/reference/) e [camadas e câmeras](https://wiki.gdevelop.io/gdevelop5/interface/scene-editor/layers-and-cameras/).

### E05 - Adicionar variedade de inimigos e ondas

**Aprender:** comportamento por tipo, timers por instância e criação controlada. **Dono:** B; A revisa combate, C valida navegação e D informa a onda.

1. Manter o Andador validado como base de dano, recompensa e exclusão. Implementar um tipo novo por vez.
2. Saltador: perseguir horizontalmente e pular com intervalo quando precisar alcançar o jogador acima. Cada instância precisa de seu próprio controle de salto.
3. Voador: mover-se pelo ar em direção ao jogador, sem Platformer/gravidade e sem ficar preso nas prateleiras.
4. Pesado: lento e resistente; quando estiver abaixo de um andaime, sinalizar seu desabamento. C implementa a resposta da plataforma na E06.
5. Atirador: manter distância aproximada e disparar com intervalo. Seu projétil atinge jogador ou cobertura sólida e é removido após impacto/tempo limite.
6. Criar pontos de surgimento dentro da arena, longe do jogador. Evitar nascer dentro de paredes, no óleo ou diretamente sobre o robô.
7. B controlar a progressão pelo tempo ativo: começar com andadores e acrescentar saltadores, voadores, pesados e atiradores gradualmente.
8. Limitar inimigos vivos e controlar intervalo de surgimento. O limite é por quantidade presente, não por quantidade total já criada.
9. D mostrar onda/alerta; cada tipo deve conservar sua identidade visual e comportamento.

**Teste de aceite:**

- [ ] Cada um dos cinco tipos muda a decisão do jogador, mesmo com arte provisória.
- [ ] Dois atiradores não compartilham indevidamente a mesma recarga.
- [ ] Plataformas sólidas realmente oferecem a cobertura prevista para tiros inimigos.
- [ ] O limite de inimigos é respeitado e as ondas só avançam com o jogo ativo.
- [ ] Todos podem ser atingidos, morrer e dar recompensa sem duplicação.

### E06 - Completar plataformas, melhorias e recuperação

**Donos:** C para cenário; D para melhorias; A para recuperação/evolução; B testa Pesado. Dividir em tarefas independentes.

1. C implementar esteira: deslocar quem está apoiado sobre ela com velocidade moderada. Saltar deve interromper esse empurrão.
2. Andaime recebe o robô ou o sinal do Pesado → começa aviso visual → aguarda o tempo definido → perde sustentação/desaba → é removido ou reaparece após regra combinada.
3. Fazer ao menos uma mudança controlada de plataformas entre ondas. Marcar locais seguros; não remover a única rota de saída nem colocar uma superfície dentro do jogador.
4. D completar as seis melhorias da tabela abaixo. Ao mudar uma variável, atualizar também a propriedade efetiva usada pelo comportamento ou evento: velocidade máxima do Platformer, limite do timer do dash, intervalo de tiro etc. Conferir o efeito no jogo, não apenas o número no depurador. Sortear três opções distintas e excluir opções que atingiram o limite.
5. Se houver menos de três melhorias elegíveis, usar opções de reserva, como reparo imediato, garantindo três cartões selecionáveis. Registrar esse comportamento.
6. A implementar uma vida extra: ao chegar a vida zero, se houver reserva, consumi-la, reposicionar em local seguro, restaurar vida e dar breve proteção; sem reserva, encerrar a partida.
7. Se o óleo já cobriu o ponto inicial, usar um ponto de retorno seguro acima dele. Não reiniciar XP, onda ou melhorias ao consumir vida extra.
8. A trocar os três estágios visuais do herói em níveis propostos 1, 3 e 5, caso os arquivos preparados já existam. Se não existirem, deixar o gatilho pronto e integrar a arte na E08.

| Melhoria inicial | Efeito proposto por escolha | Limite inicial para teste |
| --- | --- | --- |
| Canhão reforçado | +20% no dano atual | 5 escolhas |
| Engrenagem rápida | Reduzir intervalo entre tiros em 10% | Intervalo mínimo de 0,10 s |
| Placa de blindagem | +20 de vida máxima e +20 de vida atual, sem passar do máximo | 5 escolhas |
| Rodas lubrificadas | +10% na velocidade de movimento | Até 1,5 vez a velocidade inicial |
| Caldeira extra | Reduzir recarga do dash em 15% | Recarga mínima de 0,6 s |
| Ímã | +40 px no raio de atração, inicialmente 80 px | Raio máximo de 240 px |

Esses números são hipóteses de balanceamento. No Ímã, aproximar peças dentro do raio e conceder XP somente quando a peça for realmente coletada. A opção de reserva “reparo imediato” recupera vida sem alterar atributos permanentes; não conta entre as seis melhorias principais.

**Teste de aceite:**

- [ ] Esteira só empurra objetos apoiados; andaime avisa antes de cair.
- [ ] Pesado consegue provocar a queda prevista e a arena continua navegável.
- [ ] As seis melhorias mudam atributos verificáveis e respeitam seus limites.
- [ ] Uma vida extra produz exatamente uma recuperação; a morte seguinte leva à derrota.
- [ ] Recuperação não reposiciona dentro do óleo; evolução visual não desloca o robô nem altera colisão.

### E07 - Encerrar a partida com óleo, chefão e vitória

**Aprender:** pequenos estados de um chefe e transição de fim. **Donos:** B para chefe; C para óleo; D para vitória; A valida combate.

1. Fechar uma ficha curta da Máquina-mãe antes dos eventos: vida, posição, parte vulnerável, ataques, aviso de ataque, intervalo e condição de morte.
2. Implementar a versão mais simples funcional: chefe grande numa área final, sem navegação complexa, com **dois ataques alternados**.
3. Proposta de ataque 1: projéteis em leque, precedidos por brilho/aviso. Proposta de ataque 2: golpe/onda no piso, anunciado visualmente e evitável com pulo/plataforma.
4. Garantir uma janela de reação e um caminho para evitar cada ataque. Começar com tempos generosos e ajustar depois.
5. C iniciar o óleo no trecho final. Subir gradualmente, causar dano de modo controlado e parar numa altura que deixe superfícies utilizáveis para vencer o chefe.
6. B fazer o chefe aparecer uma única vez, inicialmente aos 4 minutos. Limitar ou suspender novos inimigos comuns durante a luta, conforme teste de dificuldade.
7. D mostrar barra do chefe e alerta. B sinalizar a derrota da Máquina-mãe; D congelar a jogabilidade, copiar o resultado e abrir `Vitoria`.
8. Criar um modo de teste temporário para chegar rapidamente ao chefe. Desativá-lo na versão final e testar também uma partida desde o menu.

**Teste de aceite:**

- [ ] Óleo sobe apenas durante jogo ativo e não elimina todas as rotas.
- [ ] Chefe surge uma vez, alterna dois ataques legíveis e pode ser derrotado.
- [ ] Existe vitória real, com reinício/menu; sobreviver ao relógio sozinho não vence.
- [ ] Vitória e derrota não aparecem simultaneamente.

**Marco de 15/11:** todas as mecânicas previstas têm uma versão funcional integrada. Depois disso, priorizar correções e acabamento sobre novos sistemas.

### E08 - Integrar arte, animações e som

**Aprender:** animações do Sprite, pontos/origem, máscaras, Tween e canais de áudio. **Donos:** cada pessoa integra sua frente; C coordena consistência visual, D o fluxo de áudio.

1. Substituir imagens provisórias por recursos preparados, um objeto por vez, repetindo seu teste de colisão e escala.
2. No herói, conferir alinhamento corpo/arma, origem nos pés, espelhamento e mira para os dois lados. Ao trocar estágio, preservar os mesmos pontos e dimensões de jogo.
3. Integrar as camadas do cenário e conferir o percurso inteiro da câmera. O panorama composto não cria parallax sozinho.
4. Implementar uma animação por quadros distintos, por exemplo uma explosão com 4 a 6 quadros. Importar/cortar a sequência, definir velocidade, desativar repetição e excluir o efeito ao terminar.
5. Usar Tween para balanço do voador, tremor de andaime ou pulso visual. Ele complementa a animação por quadros, sem substituir sua demonstração.
6. Evitar deformar a máscara física do jogador a cada efeito: quando necessário, manter a colisão estável e animar uma parte visual separada.
7. Integrar sons curtos de tiro, dano, morte, coleta, upgrade e dash, além da trilha. Disparar sons em transições/ocorrências, sem reiniciá-los a cada quadro.
8. Reservar um canal para a trilha, iniciar após a interação do botão Jogar e permitir ativar/desativar áudio. Como padrão alinhado à aula, pausar a trilha junto com a partida e retomá-la do mesmo ponto ao continuar; tratar áudio explicitamente. Reduzir volume pode ser uma alternativa posterior de design.
9. D concluir menu, instruções, cartões, pausa e telas finais; manter contraste e textos legíveis na resolução de jogo.
10. Cada integrante registrar fontes/licenças de áudio, artes geradas por IA e recursos de exemplos efetivamente reutilizados em `CREDITOS.md`.

**Teste de aceite:**

- [ ] Todos os recursos carregam sem caminho absoluto do computador de alguém.
- [ ] Explosão avança por quadros e se encerra sem deixar instâncias acumuladas.
- [ ] Câmera não expõe buracos no fundo e a interface é legível durante combate.
- [ ] Trilha não reinicia continuamente; efeitos não se multiplicam sem controle.
- [ ] Áudio, pausa, reinício e vitória funcionam também na exportação web.

Referências: [Sprite e animações](https://wiki.gdevelop.io/gdevelop5/objects/sprite/) e [áudio e canais](https://wiki.gdevelop.io/gdevelop5/all-features/audio/).

### E09 - Balancear, testar e publicar uma versão para revisão

**Donos:** os quatro. Cada pessoa testa também uma frente que não desenvolveu.

1. Jogar partidas completas e registrar o momento em que a dificuldade muda, frequência de níveis, causas de morte e tempo da luta final.
2. Ajustar um conjunto pequeno de números por rodada. Não alterar simultaneamente vida de todos os inimigos, dano da arma e frequência de surgimento sem registrar.
3. Confirmar a proposta de duração: chefe começa por volta dos 4 minutos, e a duração total depende da luta. Ajustar para a demonstração da disciplina.
4. Testar 20 inimigos e aumentar gradualmente até 40 apenas se os computadores da equipe suportarem bem. Registrar desempenho observado no computador mais fraco.
5. Limitar projéteis, peças e efeitos; remover o que venceu seu tempo ou saiu da arena. Não remover automaticamente todo inimigo que saiu da câmera, pois a arena é maior que a tela.
6. Reduzir partículas, filtros e tamanho dos recursos se o combate perder fluidez. Usar os números de objetos/variáveis do depurador para localizar acúmulos.
7. Exportar HTML5 para `docs/`. Configurar GitHub Pages para servir essa pasta da branch escolhida e testar a URL publicada. Não substituir o projeto editável pela exportação.
8. Pedir a alguém que não implementou a interface para começar sem instrução verbal. Registrar onde se perde e corrigir o jogo ou as instruções.
9. Fazer a bateria da seção 10 e corrigir primeiro travamentos, perda de progresso, impossibilidade de vencer e caminhos quebrados.

**Concluída quando:**

- [ ] Uma partida completa até derrota e outra até vitória funcionam na versão publicada.
- [ ] O ciclo de subir para se proteger e descer para coletar é perceptível.
- [ ] Não há crescimento contínuo de objetos sem limite nem falhas que impeçam terminar.
- [ ] O grupo tem uma lista curta de correções, com responsável e prazo.

Referência de exportação: [HTML5 em pasta local](https://wiki.gdevelop.io/gdevelop5/publishing/html5_game_in_a_local_folder/). Usar a opção de exportação web disponível na versão instalada; os nomes de botões podem variar.

### E10 - Fechar a versão de entrega e ensaiar

**Objetivo:** uma pessoa de fora consegue jogar ou abrir o fonte seguindo o README. **Donos:** todos; D reúne a documentação.

1. Congelar funcionalidades novas. Finalizar somente correções e pequenos ajustes necessários à entrega.
2. Cada integrante escrever sua parte do README: A controles/combate; B inimigos/progressão das ondas; C cenário/câmera; D execução/fluxo. Revisar o texto juntos.
3. Incluir nome, enredo, objetivo, ferramenta/versão, quatro integrantes, controles, URL jogável, como baixar/abrir o fonte e quais arquivos não são o projeto oficial.
4. Inserir capturas reais ou GIFs do jogo: combate, escolha de melhoria e chefe/vitória. Identificar conceitos visuais como conceitos, sem apresentá-los como screenshots da implementação.
5. Finalizar `CREDITOS.md`, declarar uso de IA e atribuir exemplos/recursos usados. Separar autoria da arte, da lógica própria e de material reaproveitado.
6. Um colega baixar/clonar o repositório em outra pasta, abrir o projeto oficial e iniciar a prévia. Não usar os arquivos já existentes na máquina para mascarar recursos ausentes.
7. Abrir repositório e jogo publicado sem login, conferir imagens, links e carregamento. Manter uma cópia local da exportação para apresentar se a rede da sala falhar.
8. Identificar a versão final, por exemplo `v1.0-entrega`, e guardar uma cópia do fonte e da exportação correspondente.
9. Ensaiar a demonstração. Proposta interna: 2 minutos de contexto/controles, 3 a 4 de jogo e 1 a 2 por pessoa para explicar seu sistema. Ajustar ao tempo que o professor autorizar.
10. Preparar explicações que liguem o GDevelop às aulas: eventos/loop, entrada, colisões, câmera/parallax, animação, pausa, vidas e áudio. Todos devem entender o ciclo central.

**Concluída quando:**

- [ ] README cobre R07, R08 e R09; fonte e jogo cobrem R06 e R10.
- [ ] Outra cópia abre sem recursos faltando; URL funciona publicamente.
- [ ] Os quatro participaram do ensaio e sabem explicar suas contribuições.
- [ ] Não existe problema conhecido que impeça iniciar, jogar, vencer/perder e reiniciar.

### E11 - Conferência e entrega oficial

**Meta interna:** concluir até **20h de 23/11**. O prazo do professor é **23h59**.

1. Conferir que a versão final está enviada ao repositório público e que o GitHub Pages terminou de publicar a exportação correspondente.
2. Testar uma última vez o início do jogo pela URL e os links/imagens do README em janela anônima.
3. Verificar a lista R01–R12 e o checklist final da seção 13.
4. Compartilhar o link do repositório pelo canal combinado com o professor. Registrar confirmação/protocolo ou evidência de envio, conforme o canal permitir.
5. Anotar a data de apresentação específica do grupo, computador que será usado e onde está a cópia local de contingência.

Depois da entrega, evitar mudanças de funcionalidade na versão apresentada sem repetir os testes afetados.

## 9. Como cada parte demonstra o conteúdo das aulas

Esta tabela orienta a implementação e a apresentação. As equivalências são adaptações dos conceitos de JS/Canvas para GDevelop, não uma afirmação de que o professor exigiu reescrever as classes das aulas.

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
| Aula31–32 | Vidas extras e fim de jogo | Reserva de recuperação, reposicionamento e derrota após esgotar | E06: vida extra separada da barra |
| Aula33–34 | Música, efeitos e controle de reprodução | Trilha, sons pontuais, volume, pausa e reinício | E08: áudio em navegador |

**Atenção à animação:** mover, girar ou deformar uma única imagem com Tween não demonstra, por si só, uma animação por spritesheet. Manter pelo menos uma sequência de quadros distintos para explicar esse conteúdo.

**Atenção às vidas:** a barra de energia não é o mesmo que a quantidade de tentativas. A recuperação proposta usa o conceito da aula de vidas extras com uma quantidade inicial simplificada; o exemplo do professor usa outra quantidade.

## 10. Testes manuais que devem acompanhar as entregas

Usar esta lista no editor e repetir os cenários relevantes na versão web. Registrar falha com passos, resultado esperado, resultado observado e responsável.

| ID | Procedimento | Resultado esperado |
| --- | --- | --- |
| T01 | Iniciar pelo menu e percorrer a arena | Movimento, pulo, colisão e limites corretos |
| T02 | Apertar pulo três vezes no ar e depois pousar | Segundo pulo funciona; terceiro não; pousar repõe disponibilidade |
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
| T13 | Morrer com e sem vida extra, inclusive após subida do óleo | Recuperação segura uma vez; depois derrota |
| T14 | Trocar estágio visual perto de borda/plataforma | Posição, encaixe da arma e colisão preservados |
| T15 | Enfrentar cinco tipos e chegar ao chefão | Comportamentos distintos, chefe único e limite respeitado |
| T16 | Derrotar o chefe enquanto há projéteis/perigos ativos | Vitória única; dano e surgimentos interrompidos |
| T17 | Reiniciar três partidas, alternando vitória e derrota | Valores iniciais restaurados; áudio e eventos não duplicados |
| T18 | Jogar até o fim no computador mais fraco do grupo | Fluidez aceitável e sem acúmulo ilimitado de objetos |
| T19 | Abrir a URL pública em Chrome e outro navegador disponível | Menu, recursos, áudio após interação e controles funcionando |
| T20 | Baixar fonte em pasta nova e seguir o README | Projeto oficial abre e executa sem dependências locais ocultas |

Modelo de registro de problema:

```text
ID: BUG-___
Entrega / versão:
Responsável:
Como reproduzir:
Resultado esperado:
O que aconteceu:
Impacto: impede jogar / prejudica mecânica / apenas visual
Correção e teste realizado:
```

## 11. O que fazer se o cronograma atrasar

O escopo do GDD é ambicioso para uma equipe iniciante. Primeiro simplificar a forma de implementar; qualquer retirada de uma mecânica do mínimo deve ser uma decisão explícita do grupo e aparecer no GDD.

1. **Cortar extras:** parry, novas arenas, recorde persistente, melhorias adicionais e decoração animada.
2. **Simplificar acabamento:** imagens estáticas com efeitos leves, menos partículas/filtros e interface simples, preservando leitura e uma animação por quadros.
3. **Simplificar chefão e arena:** dois ataques claros, poucos pontos de plataforma, uma esteira e um andaime bem testados; óleo com um único trecho de subida.
4. **Reduzir quantidade simultânea:** menos inimigos mais legíveis, preservando os cinco comportamentos e a dificuldade crescente.
5. **Reavaliar volume de conteúdo:** se ainda não couber, registrar quais compromissos do GDD serão adiados. Proteger partida completa, ferramenta/plataforma exigidas, fonte, documentação, publicação e apresentação.

Não empurrar testes e publicação para depois das 20h de 23/11 para salvar uma funcionalidade secundária. Se uma mudança desestabilizar a versão principal, voltar à última versão funcional e corrigir em uma branch própria.

## 12. Como pedir ajuda durante a implementação

Os códigos de entrega e os nomes combinados facilitam continuar este plano na conversa. Exemplo: “Estamos na E02, passo 3. O tiro sai, mas não respeita o intervalo”.

Ao pedir ajuda, informar:

1. Entrega e passo em que estão.
2. Versão do GDevelop e nome da cena/objeto.
3. O que deveria acontecer e o que está acontecendo.
4. Quais eventos/variáveis já criaram e, quando útil, uma captura do editor de eventos.

Para uma tarefa nova, podem pedir: **“Me guie pela E01, passo 3, explicando onde clicar e o que cada configuração faz.”** Este documento é o mapa das entregas; a orientação de cliques pode ser feita por tarefa, conforme vocês avançarem.

## 13. Controle de andamento e checklist final

Marcar somente depois que a implementação estiver integrada e outro integrante tiver feito o teste de aceite. A criação deste planejamento não significa que as entregas já foram implementadas.

| Entrega | Responsável pela integração | Situação inicial | Evidência/versão |
| --- | --- | --- | --- |
| E00 | A definir | A iniciar | A preencher |
| E01 | A definir | A iniciar | A preencher |
| E02 | A definir | A iniciar | A preencher |
| E03 | A definir | A iniciar | A preencher |
| E04 | A definir | A iniciar | A preencher |
| E05 | A definir | A iniciar | A preencher |
| E06 | A definir | A iniciar | A preencher |
| E07 | A definir | A iniciar | A preencher |
| E08 | A definir | A iniciar | A preencher |
| E09 | A definir | A iniciar | A preencher |
| E10 | A definir | A iniciar | A preencher |
| E11 | A definir | A iniciar | A preencher |

Checklist da entrega acadêmica:

- [ ] Quatro integrantes identificados e contribuições explicáveis.
- [ ] Jogo de plataforma feito em GDevelop, com começo, desenvolvimento e fim.
- [ ] Repositório público com fonte completo e todos os recursos necessários.
- [ ] README com nome, enredo, objetivo, ferramenta e versão.
- [ ] Instruções verificadas para jogar e para abrir o projeto editável.
- [ ] Capturas de tela ou GIFs reais da implementação no README.
- [ ] Link jogável funcionando ou versão executável apropriada.
- [ ] Créditos, licenças e uso de IA registrados.
- [ ] Testes de pausa, progressão, vitória, derrota e reinício aprovados.
- [ ] Cópia limpa do fonte e URL pública testadas por outro integrante.
- [ ] Link do repositório compartilhado com o professor até 23/11/2026, às 23h59.
- [ ] Apresentação ensaiada; data do grupo e cópia local confirmadas.

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

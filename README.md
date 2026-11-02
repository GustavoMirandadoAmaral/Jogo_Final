# Oficina em Pane

Projeto de jogo de plataforma 2D com hordas e evolução do protagonista, desenvolvido em GDevelop para a disciplina de Desenvolvimento de Jogos Digitais.

## Documentação

- [Documento de design do jogo (GDD)](GDD.md)
- [Catálogo de imagens e conceitos visuais](imagens/README.md)

O catálogo contém as referências do robô-caldeira, sua evolução em três estágios, o fundo da oficina e a visão de uma partida. Cada pasta traz a imagem, sua explicação e o registro dos prompts.

As artes conceituais do catálogo foram geradas por IA com a ferramenta de imagens integrada ao Codex, com base nas ideias e referências do grupo. A documentação de cada imagem registra seu uso e sua origem.

A origem de cada recurso usado no jogo está em [CREDITOS.md](CREDITOS.md).

## Cenário, câmera e arena

Tudo fica na cena `Arena` do projeto `prototipo/Robot.json`, nos grupos de eventos **Arena e câmera**, **Óleo** e **Peças de XP**. Os números ajustáveis são variáveis de cena.

### Arena e camadas

A arena tem 2560 × 720 px (`LarguraArena`), mais que a tela de 1280 px, então a câmera acompanha o robô. Duas paredes invisíveis (`LimiteArena`) fecham as bordas. O dash muda a posição direto e ignoraria as paredes, então o robô também é mantido dentro da arena a cada quadro.

| Camada (de trás para a frente) | Conteúdo | Quanto anda em relação à câmera |
| --- | --- | --- |
| `FundoDistante` | Janelas da fábrica | 20% (`FatorParallaxDistante`) |
| `FundoMedio` | Máquinas, tubulações e o vapor das chaminés | 40% (`FatorParallaxMedio`) |
| Mundo (camada base) | Bordas da oficina, plataformas, robô, inimigos, peças e óleo | 100% |
| `HUD` | Interface e aviso do óleo | Fixa na tela |

**Parallax:** cada camada de fundo anda só uma fração do que a câmera do Mundo andou. Quanto menor a fração, mais longe o fundo parece.

### Câmera

- **Câmera suave:** o robô pode se afastar até 100 px do centro sem a câmera se mexer. Passando disso, ela desliza até alcançá-lo. A câmera fica presa aos limites da arena, então nunca mostra o que está fora dela.
- **Tremor:** quando um andaime ou uma prateleira cai, ou quando o óleo começa a subir, a câmera treme. A força do tremor fica em `TremorCamera` e um Tween a leva de volta a zero. Para usar em outro evento, basta dar um valor a `TremorCamera` e criar o Tween dela até 0.

### Plataformas

O andar de baixo das plataformas fica em y 560 e cada plataforma empilhada fica 120 px acima, para o robô caber entre elas. Todas são atravessáveis por baixo. Os fios que as suspendem são só decoração.

| Plataforma | Comportamento |
| --- | --- |
| Chão | Sólido, cobre a arena inteira |
| Prateleira | Fixa. Quando o Pesado bate embaixo de uma prateleira ocupada, ela treme e cai; só volta na próxima troca de layout |
| Esteira | Empurra quem estiver em cima na velocidade da variável `Velocidade` da instância (negativa = para a esquerda). Pular interrompe o empurrão |
| Andaime | Sempre a plataforma mais alta do seu setor. Treme por 1 s quando o robô pisa nele ou quando o Pesado bate embaixo, depois cai e não volta até a troca de layout |

**Layouts:** cada plataforma tem a variável `Layout`. `0` = sempre presente; `1`, `2`... = só existe naquele layout. As ondas ímpares usam o layout 1 e as pares o 2 (`NumeroLayouts`). Durante a pausa entre ondas, as plataformas que vão sair piscam. As que vão entrar só aparecem quando não estão encostando no robô.

### Óleo

Na onda 5 começa o aviso do óleo. Por `DuracaoAvisoOleo` segundos, a borda da tela pisca em vermelho, a câmera treme e o óleo aparece embaixo. Depois ele sobe `VelocidadeOleo` px/s até `AlturaFinalOleo`. Nessa altura o chão vira perigo, mas todas as plataformas continuam usáveis. Encostar no óleo tira 1 de vida do robô, com a mesma invulnerabilidade do tiro inimigo.

### Peças de XP

A peça nasce no centro do inimigo abatido e cai até o chão, atravessando as plataformas: subir protege, mas para evoluir é preciso descer. Do aviso do óleo em diante:

- a peça para na primeira plataforma embaixo dela;
- as peças que ficaram no chão são engolidas pelo óleo;
- uma peça que cai no óleo ainda no ar vai para a prateleira mais próxima.

### Visual de filme antigo

- As camadas de cenário e do Mundo têm o efeito **Old Film** do GDevelop: leve sépia e cantos escuros.
- Granulação e riscos de filme ficam só no fundo distante.
- O HUD fica sem efeito, para os textos continuarem nítidos.
- O vapor das máquinas é um emissor de partículas (objeto `Vapor`).

# Herói — caminhada nos três estágios — v2

Folhas corrigidas do robô-caldeira de **Oficina em Pane**, com alternância entre as duas pernas. A v2 revisa o segundo passo que, na primeira geração, repetia a perna do primeiro.

| Estágio | Aparência | Arquivo atual |
| --- | --- | --- |
| [Enferrujado e sujo](enferrujado/README.md) | Ferrugem intensa, fuligem, esmalte gasto e remendos. Mantém todos os componentes funcionais do herói. | [PNG v2](enferrujado/heroi-enferrujado-spritesheet-v2.png) |
| [Parcialmente restaurado](intermediario/README.md) | Menos ferrugem e sujeira, cobre recuperado e esmalte em melhor estado; ainda há desgaste e o remendo da cabeça. | [PNG v2](intermediario/heroi-intermediario-spritesheet-v2.png) |
| [Totalmente restaurado](evoluido/README.md) | Esmalte marfim íntegro, metal e cobre polidos, sem ferrugem, sujeira ou remendos aparentes. A tecnologia continua sendo a vapor. | [PNG v2](evoluido/heroi-evoluido-spritesheet-v2.png) |

## Organização e passada

Cada folha tem três linhas: duas poses paradas na primeira, seis quadros andando para a direita na segunda e seis andando para a esquerda na terceira. As quatro células restantes da primeira linha ficam transparentes. São **14 quadros por estágio**.

| Quadro | Passada |
| --- | --- |
| 1 | Direita avança; esquerda apoia |
| 2 | Direita apoia; esquerda recupera |
| 3 | Direita apoia; esquerda passa |
| 4 | Esquerda avança; direita apoia |
| 5 | Esquerda apoia; direita recupera |
| 6 | Esquerda apoia; direita passa para o próximo passo |

Os nomes das pernas acompanham a revisão solicitada: a direita inicia o passo e a esquerda executa a passada oposta a partir do quadro 4.

## Grade e apoio

- PNGs de **1776 × 888 px**.
- Grade exata de **6 × 3 células de 296 × 296 px**.
- Mesma origem de apoio dos pés: **(148, 289)**, relativa à célula.
- Transparência limpa e alinhamento já aplicado.
- A direção esquerda espelha exatamente a direita.
- Cada pasta contém PNG, README, PROMPT e `quadros.json`.

O mapa JSON descreve recortes, origens e fases. É material auxiliar de preparação; o jogo não depende dele para executar.

Na integração, manter a mesma escala, origem e área de colisão ao mudar de estágio. O braço-canhão ainda aparece junto do corpo e precisa da preparação própria para a mira livre. As animações ainda não foram instaladas no protótipo GDevelop.

## Prévia de avaliação

A prévia fica **fora do repositório**, compara as três aparências e permite pausar, avançar e voltar um quadro por vez. Ela exibe diretamente a grade normalizada dos PNGs v2, com a fase da passada identificada.

## Método e referências

Arte inicial gerada pela ferramenta de imagens integrada ao Codex. A correção de **03/11/2026** foi feita por montagem com Python/Pillow, autorizada pelo usuário, após a geração não manter a alternância correta.

Foram usadas partes dos próprios desenhos: as duas pernas passaram a ter controle e ligação fixos ao quadril. As conexões mecânicas foram recompostas, a primeira metade do ciclo foi mantida e a segunda foi montada com apoio e avanço opostos. Os estudos anteriores ficaram fora do conjunto atual, no material local de avaliação.

- [Identidade do herói](../../../heroi/README.md).
- [Referência dos três estágios](../../../evolucao-heroi/README.md).
- [Organização usada nos inimigos](../../../inimigos/andador/spritesheet/README.md).

[Voltar ao catálogo](../../../README.md)

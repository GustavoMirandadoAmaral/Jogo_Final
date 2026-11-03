# Atirador — spritesheet v1

![Spritesheet do Atirador](atirador-spritesheet-v1.png)

## Organização

O canhão roxo permanece apontado na direção de deslocamento enquanto os apoios mecânicos fazem pequenos passos. A folha não inclui o ciclo de disparo: preparo, recuo e projétil são uma etapa própria de animação.

| Linha | Colunas | Conteúdo |
| --- | --- | --- |
| 1 | 1 e 2 | Parado para a direita e parado para a esquerda |
| 1 | 3 a 6 | Sem sprites |
| 2 | 1 a 6 | Seis quadros de reposicionamento com apoios articulados para a direita |
| 3 | 1 a 6 | Seis quadros de reposicionamento com apoios articulados para a esquerda |

A folha contém **14 quadros utilizados**. Cada ciclo de movimento percorre as seis colunas e volta ao primeiro quadro. Velocidade inicial sugerida para avaliar o ciclo: **8 quadros por segundo**, a ajustar no jogo.

## Arquivo e medidas

- PNG RGBA com transparência, conferido.
- Dimensões efetivamente geradas: **1774 × 887 px**.
- Organização visual conferida: duas poses paradas e dois ciclos de seis quadros.
- As quatro células sem sprites não contêm figuras opacas. O alfa residual máximo medido nessas células é 1/255.
- [quadros.json](quadros.json) registra as coordenadas, os tamanhos e os limites visíveis de cada quadro.
- A resolução não é divisível exatamente pela grade 6 × 3. Os retângulos arredondados têm pequenas diferenças de tamanho; a exportação para uso definitivo precisa de um canvas uniforme de 296 × 296 px.

O JSON é um mapa auxiliar de preparação. Ele não é carregado pelo jogo e não recorta, normaliza ou altera o PNG automaticamente.

## Alinhamento e integração

Alinhar a origem na base dos apoios e manter a posição do corpo consistente. O ponto de saída do tiro deve ser definido junto à boca do canhão na integração, independentemente do recorte da imagem.

Os quadros ainda precisam de preparação para a escala final e conferência dos pontos de origem antes da importação definitiva no GDevelop. Os desenhos dos ciclos não foram transformados em arquivos individuais nem adicionados às animações do protótipo.

## Avaliação

O spritesheet é uma proposta de animação para avaliação do grupo. Conferir a continuidade do ciclo, a consistência do corpo entre os quadros e a leitura em tamanho de jogo.

As prévias HTML ficam em uma pasta local **fora do repositório**. A prévia alinha a parte inferior visível dos recortes a uma linha de apoio; as pequenas variações do desenho ainda precisam ser avaliadas. A visualização não modifica os pixels da folha original.

## Arquivos e origem

- [PNG](atirador-spritesheet-v1.png)
- [Mapa de quadros](quadros.json)
- [Prompt completo](PROMPT.md)
- [Conceito utilizado como referência](../atirador-conceito-v1.png)

Gerado em 02/11/2026 pela ferramenta de imagens integrada ao Codex. A identidade visual do inimigo usa o conceito já registrado; a organização segue o spritesheet aprovado do Andador.

[Voltar à ficha do inimigo](../README.md) · [Galeria de inimigos](../../README.md)

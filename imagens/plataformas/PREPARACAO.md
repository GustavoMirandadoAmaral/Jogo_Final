# Preparação dos PNGs para o protótipo

## Medidas atuais

Leitura de `prototipo/Robot.json` em 02/11/2026:

| Objeto | Larguras de instâncias presentes | Altura atual |
| --- | --- | --- |
| Prateleira | 160, 200, 256 e 320 px | 16 px |
| Esteira | 256 px | 16 px |
| Andaime | 180 px | 16 px |
| Fio | 4 px | variável |
| Chao | 2560 px | 32 px |
| Oleo | 2560 px | 120 px |

Todos esses objetos usam Tiled Sprite no protótipo lido. Prateleira, Esteira e Andaime são plataformas atravessáveis por baixo; Chao é plataforma normal. Fio é decorativo e Oleo tem a função de perigo.

## Recorte e redução

Os arquivos desta pasta preservam as saídas originais da geração. **Nenhum recorte ou redimensionamento foi aplicado.** A transparência acima de uma plataforma não deve ser interpretada como parte da superfície de apoio.

Coordenadas iniciais em pixels do PNG original, na ordem **x, y, largura, altura**. A redução sugerida é para um módulo repetido, e não para a plataforma inteira:

| Elemento | Recorte inicial sugerido | Módulo reduzido inicial (px) |
| --- | --- | --- |
| Prateleira de ferro | 0, 209, 2079, 400 | 83 × 16 |
| Esteira transportadora | 0, 151, 2172, 385 | 90 × 16 |
| Andaime de madeira | 0, 278, 2172, 269 | 129 × 16 |
| Cabo de sustentação | 330, 0, 134, 1983 | 4 × 59 |
| Chão da fábrica | 0, 400, 1774, 448 | 127 × 32 |
| Óleo perigoso | 0, 373, 1774, 514 | 414 × 120 |

As medidas foram obtidas lendo o canal alfa. Para as superfícies sólidas, o início sugerido é a primeira linha com pelo menos 95% da largura opaca. Há pequenas diferenças no contorno gerado; depois da redução, conferir e alinhar a linha de apoio em um editor de imagens. O óleo mantém a pequena ondulação natural do líquido.

1. Trabalhar numa cópia de exportação do PNG original.
2. Recortar as margens indicadas e reduzir a imagem mantendo a proporção, conforme os valores acima.
3. Conferir lado a lado pelo menos três cópias do módulo. Corrigir qualquer salto de contorno, de cor ou de padrão nas emendas. Para o cabo, conferir três cópias uma sobre a outra.
4. Importar o módulo preparado como textura do Tiled Sprite. Ajustar a largura da instância para 160, 180, 200, 256 ou 320 px conforme a plataforma.
5. Conferir a leitura no jogo em tamanho normal. Rebites e tábuas devem continuar com a mesma escala quando a largura mudar.

Mudar somente a largura ou a altura de um Tiled Sprite altera a área que mostra/repite a textura; isso não faz a preparação de escala de uma arte-fonte grande. Ver a [documentação do objeto](https://wiki.gdevelop.io/gdevelop5/objects/tiled_sprite/).

## Apoio e decoração

A linha de colisão deve coincidir com a superfície visível. Pontas de corda e abas sob a plataforma podem ser decoração abaixo dela. Se a decoração ultrapassar a caixa necessária para a jogabilidade, usar uma imagem decorativa alinhada a um colisor retangular separado.

Não alinhar o jogador ao topo da tela original transparente. Os recortes acima removem essa área vazia.

## Esteira

A versão gerada tem setas para a direita. O protótipo contém instâncias com `Velocidade = -180`; elas precisam de uma cópia de exportação espelhada para a esquerda. A indicação visual deve acompanhar o sentido real dos eventos.

A textura é estática. A movimentação da correia pode ser representada pelo deslocamento da textura; o transporte do jogador continua sendo controlado pela lógica da esteira. Mudanças nesses eventos não foram feitas nesta entrega.

## Óleo

Repetir horizontalmente a textura com a superfície no topo. Se o volume precisar crescer além da altura do módulo, preencher a região inferior com o corpo do óleo e manter a faixa de superfície apenas uma vez. A repetição vertical do módulo inteiro criaria várias linhas de superfície.

Conferir também o limite usado pelos eventos de dano: a silhueta ondulada é visual, enquanto a região de perigo pode continuar retangular.

## Conferência de integração

As imagens foram inspecionadas e os arquivos PNG e canais alfa foram verificados. O encaixe das emendas, a legibilidade em 16 px e as colisões precisam ser conferidos no editor após a preparação. O projeto GDevelop ainda usa suas texturas anteriores.

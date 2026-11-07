# Interface — Oficina em Pane

Os ícones e as molduras são PNGs independentes com transparência. A carta usa uma moldura compartilhada, com o ícone no nicho superior e os objetos de texto na área escura inferior.

| Peça | Tamanho |
| --- | --- |
| [Moldura da carta](moldura-carta-v1.png) | 300 × 300 px |
| [Painel para pausa, vitória e derrota](painel-telas-v1.png) | 700 × 450 px |

## Ícones

Todos têm 128 × 128 px. A primeira coluna segue a ordem de `UltimaMelhoria` no protótipo.

| ID | Ícone | Elemento visual |
| --- | --- | --- |
| 0 | [Canhão reforçado](icones/canhao-reforcado-v1.png) | Cano de latão com anéis e faísca laranja |
| 1 | [Engrenagem rápida](icones/engrenagem-rapida-v1.png) | Engrenagem com traços de movimento e raio |
| 2 | [Placa de blindagem](icones/placa-blindagem-v1.png) | Escudo rebitado com um coração dentado |
| 3 | [Rodas lubrificadas](icones/rodas-lubrificadas-v1.png) | Roda com gotas de óleo e traços de velocidade |
| 4 | [Caldeira extra](icones/caldeira-extra-v1.png) | Caldeira de cobre com vapor e manômetro no máximo |
| 5 | [Ímã](icones/ima-v1.png) | Ímã vermelho e prata atraindo peças metálicas |
| 6 | [Reparo imediato](icones/reparo-imediato-v1.png) | Chave inglesa e chave de fenda com brilho verde |

## Encaixe no GDevelop

Com a carta no tamanho original e as origens no canto superior esquerdo, coloque o ícone em **X + 86, Y + 23**, em relação à posição da moldura. O centro do nicho fica em **(150, 87)**. A área de texto vai aproximadamente de **Y + 175** a **Y + 275**, com centro horizontal em **X + 150**. Use a mesma moldura em todas as opções e troque o ícone pelo ID da melhoria.

Os arquivos estão prontos para importação. O [registro de geração](PROMPT.md) guarda os prompts das peças.

# Spritesheets da Máquina-mãe

Gerados com a ferramenta de imagens integrada ao Codex. As folhas e os prompts estão versionáveis no projeto.

| Folha | Grade | Quadros | Tamanho de cada quadro |
| --- | --- | --- | --- |
| `maquina-funcionando-v1.png` | 2 × 2 | 4 | 768 × 512 px |
| `maquina-rajada-v1.png` | 2 × 2 | 4 | 768 × 512 px |
| `maquina-prensa-v1.png` | 2 × 2 | 4 | 768 × 512 px |
| `maquina-vapor-v1.png` | 2 × 2 | 4 | 768 × 512 px |
| `maquina-convocacao-v2.png` | 2 × 2 | 4 | 768 × 512 px |
| `prensa-sequencia-v1.png` | 3 × 2 | 6 | 418 × 627 px |
| `vapor-sequencia-v1.png` | 3 × 2 | 6 | 418 × 627 px |
| `clarao-sequencia-v1.png` | 2 × 2 | 4 | 768 × 512 px |

Os PNGs estão em `prototipo/imagens/chefao/spritesheets/`. A leitura dos quadros é da esquerda para a direita, linha superior e depois inferior. Os prompts completos e dimensões estão em `manifesto.json`.

As quatro folhas de ataques da máquina contêm preparo, pico de pressão, execução e recuperação. A folha de funcionamento contém quatro fases de fumaça/manômetro. A prensa contém retração, descida, extensão máxima, impacto e retorno. O vapor contém seis fases de fluxo e o clarão quatro fases do disparo.

**Integração pendente:** estas folhas ainda precisam ser divididas/importadas nas animações do GDevelop. O projeto continua usando os quadros individuais anteriores. O vapor de partículas dos ataques foi retirado; a coluna animada de PNGs continua funcionando.

Ao importar as folhas da máquina, conferir o registro da fornalha e dos pés: os sprites gerados têm margens diferentes entre folhas. A máscara de dano deve continuar estável e independente do deslocamento dos mecanismos laterais. A prensa e o jato devem respeitar os tempos dos eventos existentes.

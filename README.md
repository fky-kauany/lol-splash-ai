# SkLoL Splash

Transforma uma skin de League of Legends (um mod `.fantome`, ou uma foto) numa **splash no estilo do
jogo**, usando IA na sua placa de vídeo. É de graça: nada vai pra internet, tudo roda no seu PC.

O caminho é este: um visualizador 3D tira uma foto da skin numa pose, e o ComfyUI repinta a foto como
splash (com um modelo treinado em splashes do League). Leva de 1 a 2 minutos por imagem.

## Do que você precisa

- **Windows 10 ou 11.**
- **Uma placa de vídeo NVIDIA com 8 GB ou mais** (foi feito numa RTX 4060).
- **Uns 35 GB livres** no disco (os modelos da IA são grandes).
- **O Microsoft Edge** (já vem no Windows: o visualizador usa ele pra tirar a foto).
- **O League of Legends instalado**, só se você for usar um mod (`--mod`). Com uma foto pronta
  (`--image`, `--photo`), não precisa.

## Instalar (uma vez só)

1. Copie esta pasta (`sklol-splash`) pra onde quiser.
2. Coloque **dentro dela** a pasta `ComfyUI_windows_portable` (o ComfyUI com os modelos). Ela já vem
   pronta de quem te passou o splash: é só copiar inteira, sem mudar nada dentro. Fica assim:

   ```
   sklol-splash\
     bin\                       o visualizador 3D
     splash\                    os scripts
     ComfyUI_windows_portable\  o ComfyUI (com os modelos)
     splash.bat                 o que você roda
     LEIA-ME.md
   ```

   Se o ComfyUI estiver em outro lugar, diga onde antes de rodar:
   `set COMFY_DIR=D:\caminho\ComfyUI_windows_portable`

3. Pronto. Não precisa instalar Python, Go nem nada: o `splash.bat` usa o Python que vem no ComfyUI.

## Usar

Abra o **Prompt de Comando** (`cmd`) nesta pasta (no Explorer, clique na barra de endereço, digite
`cmd` e aperte Enter) e rode um dos comandos abaixo. O `--start` abre o ComfyUI sozinho se ele ainda
não estiver aberto (a primeira vez demora uns minutos). As imagens saem em `splash\out\`.

**De um mod, escolhendo a pose você mesmo** (o mais fácil): abre o visualizador no navegador; escolha a
animação no painel, pause no quadro que gostar, gire a câmera e clique em **Salvar PNG**. O resto é
sozinho.

```
splash.bat --start --mod "C:\caminho\minha-skin.fantome"
```

**De um mod, com a pose pela linha de comando** (sem abrir nada):

```
splash.bat --start --mod "C:\caminho\minha-skin.fantome" --no-pick --anim spell4 --advance 0.8 --yaw 20
```

- `--no-pick`: não abre o visualizador; a foto sai com a pose das opções abaixo.
- `--anim`: a animação (por exemplo `idle1` ou `spell4`, o R; os nomes mudam de campeão pra campeão:
  veja a lista no painel do visualizador).
- `--advance`: em que segundo da animação a foto é tirada.
- `--yaw`: o giro em volta do campeão (0 é de frente). `--pitch`: de cima ou de baixo (negativo é de
  baixo, mais heroico). `--zoom`: menor que 1 é mais perto.

**De um print do jogo** (recorte o campeão com `Win + Shift + S`; o fundo sai sozinho):

```
splash.bat --start --clipboard
splash.bat --start --photo "C:\caminho\print.png"
```

**Com um cenário pintado atrás** (dá pra pedir mais de um, e sai uma imagem de cada):

| Opção   | Cenário                                                   |
|---------|-----------------------------------------------------------|
| `--bg1` | escuro, cidade à noite                                    |
| `--bg2` | neutro, luz de estúdio                                    |
| `--bg3` | rosa, com cachoeira e cerejeiras                          |
| `--bg4` | submundo: montanhas escuras e céu de tempestade           |
| `--bg5` | Spirit Blossom: cerejeiras, pétalas e lanternas           |
| `--bg6` | inferno: vulcões, lava e brasas                           |
| `--bg7` | Summoner's Rift: selva, ruínas e uma torre ao longe       |
| `--bg8` | hextec: raios azuis, cristais e engrenagens de Piltover   |

```
splash.bat --start --mod "C:\caminho\minha-skin.fantome" --bg5 --count 2
```

**Outras opções úteis:**

- `--count 3`: três tentativas (cada uma com uma semente diferente). Boa ideia: a IA varia bastante.
- `--prompt "glowing sword, fire"`: acrescenta coisas ao que a IA pinta (em inglês, no estilo de tags
  separadas por vírgula).
- `--negative "pink, hat"`: o que a IA não deve pintar.
- `--model v1`: o modelo de antes (o padrão é o v2, mais novo e de cores mais fortes).
- `--no-blur`: sem o desfoque nas bordas (cada imagem também sai numa versão `-sharp`, sem ele).

Pra ver todas: `splash.bat --help`.

## Se der problema

- **"Não achei o ComfyUI"**: a pasta `ComfyUI_windows_portable` não está ao lado do `splash.bat`
  (veja o passo 2 da instalação), ou o `COMFY_DIR` aponta pro lugar errado.
- **O ComfyUI não abre ou dá erro de memória**: feche jogos e outros programas que usam a placa de
  vídeo. Com menos de 8 GB, ele pode não conseguir.
- **"Microsoft Edge não encontrado"**: instale o Edge (o visualizador precisa dele pra foto).
- **A foto sai toda branca ou preta**: feche os `msedge.exe` presos no Gerenciador de Tarefas e tente de
  novo.
- **Com um mod, o visualizador não acha o campeão**: o League precisa estar instalado. Se ele estiver
  num lugar diferente, diga onde: `--lol "D:\Riot Games\League of Legends"`.

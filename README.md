# INVB Editor

Editor de vídeo da equipe de mídia da Igreja Nova Vida Botafogo. Faz parte do [INVB Studio](https://github.com/allanbfr77/invb-studio) e serve para editar livremente qualquer vídeo: importar mídias, cortar, montar na timeline, colocar textos, legendas, sons e efeitos, e exportar.

Roda no navegador, no computador de cada pessoa. Os projetos e as mídias ficam salvos no próprio navegador; não há conta, login nem banco de dados.

Baseado no [OpenCut](https://github.com/opencut-app/opencut-classic) (versão classic), traduzido para pt-BR e simplificado.

## Como rodar

Pré-requisito: [Bun](https://bun.sh) (`npm install -g bun` também funciona).

```powershell
bun install
Copy-Item apps/web/.env.example apps/web/.env.local
bun dev:web
```

Abra **http://localhost:3000**.

### Aba Sons (Freesound)

A aba **Sons** busca efeitos sonoros no [Freesound](https://freesound.org). Para ela funcionar:

1. Crie uma conta no Freesound e gere uma credencial em https://freesound.org/apiv2/apply.
2. No `apps/web/.env.local`, preencha `FREESOUND_CLIENT_ID` e `FREESOUND_API_KEY`.

O `.env.local` fica fora do Git; cada computador precisa do seu.

## Estrutura

- `apps/web/`: o editor (Next.js).
- `rust/`: núcleo de renderização, efeitos e máscaras, compilado para WASM (publicado como o pacote `opencut-wasm`; só é preciso mexer aqui para alterar o núcleo).
- `apps/desktop/`: app desktop experimental herdado do OpenCut, não usado.
- `docs/`: documentação da arquitetura herdada do OpenCut.

## Licença

[MIT](LICENSE), mantida do OpenCut original (Copyright 2025-2026 OpenCut).

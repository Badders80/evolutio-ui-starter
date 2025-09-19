UI-first Next.js starter focused on speed.

## Quick start
```bash
npm i
cp .env.example .env.local
npm run dev
```

## Dev Bar
- Visible in dev by default. Force on: `?devbar=1` or `NEXT_PUBLIC_DEVBAR=true`.
- Shortcuts: `.` toggle bar, `r` reload, `d` debug, `h` heavy flag, `m` API mode, `g` grid overlay, `t` theme.

### Toggle mock vs real
- Default is mock. Turn on real API: open Dev Bar (visible in dev) and click **API: real**, or add `?apiMode=real` to the URL.
- Endpoint provided by Next Route Handler at `/api/users`.
nexhood/
├── apps/
│   ├── web/                          # Next.js frontend
│   │   ├── public/
│   │   │   ├── assets/
│   │   │   └── icons/
│   │   ├── src/
│   │   │   ├── app/                  # Next.js App Router
│   │   │   │   ├── (auth)/
│   │   │   │   │   ├── login/
│   │   │   │   │   └── register/
│   │   │   │   ├── dashboard/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── neighborhood/
│   │   │   │   │   ├── parking/
│   │   │   │   │   └── admin/
│   │   │   │   └── layout.tsx
│   │   │   ├── components/
│   │   │   │   ├── ui/               # Reusable primitives
│   │   │   │   ├── maps/             # Mapbox components
│   │   │   │   ├── charts/           # Recharts wrappers
│   │   │   │   ├── parking/          # QR + slot components
│   │   │   │   └── neighborhood/     # Score + analytics cards
│   │   │   ├── store/                # Zustand stores
│   │   │   ├── hooks/                # Custom React hooks
│   │   │   ├── lib/                  # Axios, utils, constants
│   │   │   ├── types/                # TypeScript interfaces
│   │   │   └── styles/
│   │   ├── .env.local.example
│   │   ├── next.config.js
│   │   ├── tailwind.config.js
│   │   └── package.json
│   │
│   └── guard-app/                    # Lightweight PWA for security guards
│       ├── src/
│       │   ├── scanner/
│       │   └── components/
│       └── package.json
│
├── services/
│   ├── api/                          # Express.js backend
│   │   ├── src/
│   │   │   ├── config/
│   │   │   │   ├── db.ts             # MongoDB + Prisma connections
│   │   │   │   └── redis.ts
│   │   │   ├── middleware/
│   │   │   │   ├── auth.ts           # JWT verification
│   │   │   │   ├── rbac.ts           # Role-based access
│   │   │   │   ├── rateLimiter.ts
│   │   │   │   └── errorHandler.ts
│   │   │   ├── modules/
│   │   │   │   ├── auth/
│   │   │   │   │   ├── auth.routes.ts
│   │   │   │   │   ├── auth.controller.ts
│   │   │   │   │   └── auth.service.ts
│   │   │   │   ├── neighborhood/
│   │   │   │   │   ├── neighborhood.routes.ts
│   │   │   │   │   ├── neighborhood.controller.ts
│   │   │   │   │   ├── neighborhood.service.ts
│   │   │   │   │   └── neighborhood.model.ts
│   │   │   │   ├── parking/
│   │   │   │   │   ├── parking.routes.ts
│   │   │   │   │   ├── parking.controller.ts
│   │   │   │   │   ├── parking.service.ts
│   │   │   │   │   └── qr.service.ts
│   │   │   │   └── visitor/
│   │   │   │       ├── visitor.routes.ts
│   │   │   │       ├── visitor.controller.ts
│   │   │   │       └── visitor.service.ts
│   │   │   ├── sockets/
│   │   │   │   └── parking.socket.ts
│   │   │   ├── jobs/                 # node-cron scheduled tasks
│   │   │   │   ├── expireQRPasses.ts
│   │   │   │   └── syncAQIData.ts
│   │   │   ├── utils/
│   │   │   │   ├── logger.ts
│   │   │   │   ├── mailer.ts
│   │   │   │   └── validators.ts
│   │   │   └── app.ts
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   ├── .env.example
│   │   └── package.json
│   │
│   └── ai-engine/                    # Python FastAPI microservice
│       ├── app/
│       │   ├── main.py
│       │   ├── routers/
│       │   │   ├── score.py
│       │   │   └── predict.py
│       │   ├── models/
│       │   │   ├── nexscore.py
│       │   │   └── gap_filler.py
│       │   └── data/
│       │       └── weights_config.json
│       ├── requirements.txt
│       └── Dockerfile
│
├── packages/
│   └── shared-types/                 # Shared TypeScript interfaces (monorepo)
│
├── infrastructure/
│   ├── docker-compose.yml
│   ├── docker-compose.prod.yml
│   └── nginx/
│       └── nginx.conf
│
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Lint + test on PRs
│       └── deploy.yml                # Deploy on main push
│
├── .eslintrc.js
├── .prettierrc
├── turbo.json                        # Turborepo config (monorepo)
└── package.json
# Coverage Report — Phase 5 Validation

**Date:** 2026-02-26T12:16Z  
**Test Files:** 48 passed (48 total)  
**Tests:** 688 passed (688 total)  
**Duration:** ~18s

## Summary

| Category | % Stmts | % Branch | % Funcs | % Lines |
|----------|---------|----------|---------|---------|
| **All files** | **76.05** | **60.27** | **79.59** | **77.86** |

## By Directory

| Directory | % Stmts | % Branch | % Funcs | % Lines |
|-----------|---------|----------|---------|---------|
| server/lib | 64.85 | 55.10 | 68.85 | 65.82 |
| server/middleware | 79.27 | 64.81 | 75.00 | 81.18 |
| server/routes | 79.06 | 65.63 | 88.29 | 80.93 |
| server/services | 92.50 | 72.22 | 100.00 | 97.14 |
| src/components | 95.45 | 76.47 | 83.33 | 95.45 |
| src/features/auth | 96.77 | 87.50 | 100.00 | 96.15 |
| src/features/charts | 84.80 | 77.31 | 75.00 | 94.00 |
| src/features/chat | 95.08 | 79.06 | 90.00 | 94.91 |
| src/features/chat/operations | 90.53 | 75.70 | 91.30 | 91.00 |
| src/features/markdown | 61.11 | 48.14 | 73.33 | 60.60 |
| src/features/sessions | 98.46 | 84.00 | 100.00 | 98.21 |
| src/features/tts | 20.23 | 28.57 | 23.52 | 18.57 |
| src/features/voice | 74.67 | 47.64 | 73.58 | 75.28 |
| src/hooks | 88.67 | 76.42 | 95.65 | 89.69 |
| src/lib | 84.93 | 62.16 | 83.33 | 88.54 |
| src/utils | 30.66 | 11.29 | 46.66 | 35.00 |

## Notable High Coverage Files (>95% lines)

- server/lib/constants.ts — 100%
- server/lib/device-identity.ts — 100%
- server/lib/gateway-client.ts — 100%
- server/lib/mutex.ts — 100%
- server/middleware/auth.ts — 100%
- server/middleware/error-handler.ts — 100%
- server/routes/auth.ts — 96.55%
- server/routes/health.ts — 100%
- server/services/tts-cache.ts — 97.14%
- src/features/chat/edit-blocks.ts — 100%
- src/features/chat/extractImages.ts — 100%
- src/features/chat/operations/sendMessage.ts — 100%
- src/features/chat/operations/streamEventHandler.ts — 97.26%
- src/features/sessions/sessionTree.ts — 98.21%
- src/hooks/useServerEvents.ts — 100%
- src/lib/formatting.ts — 100%

## Low Coverage Areas (potential future improvement)

- src/features/tts/useTTS.ts — 18.57% lines (heavily mocked in tests, actual hook logic untested)
- src/utils/helpers.ts — 35% lines
- server/lib/session.ts — 12.12% lines
- server/lib/files.ts — 33.33% lines
- src/components/ui/AnimatedNumber.tsx — 39.28% lines

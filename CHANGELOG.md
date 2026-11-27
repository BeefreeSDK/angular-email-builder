# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.4](https://github.com/BeefreeSDK/angular-email-builder/compare/v1.1.4-beta.0...v1.1.4) (2026-11-27)


### Security

* **BEE-12977:** harden npm package publishing: releases are now published from GitHub Actions via npm trusted publishing (OIDC) with signed provenance attestations, replacing the long-lived npm token ([936f2d8](https://github.com/BeefreeSDK/angular-email-builder/commit/936f2d889a3d8f31f3640d331dfc292a718f564c))

### [1.1.4-beta.0](https://github.com/BeefreeSDK/angular-email-builder/compare/v1.1.3...v1.1.4-beta.0) (2026-11-27)

### [1.1.3](https://github.com/BeefreeSDK/angular-email-builder/compare/v1.1.1...v1.1.3) (2026-03-16)

### [1.1.2](https://github.com/BeefreeSDK/angular-email-builder/compare/v1.1.1...v1.1.2) (2026-03-16)

### [1.1.1](https://github.com/BeefreeSDK/angular-email-builder/compare/v1.1.0...v1.1.1) (2026-02-26)


### Bug Fixes

* update README.md and local build files ([6a8c346](https://github.com/BeefreeSDK/angular-email-builder/commit/6a8c346e93d4ce6191e9be25f9bbdab1e3406899))

## 1.1.0 (2026-02-26)


### Features

* initial commit ([7b54313](https://github.com/BeefreeSDK/angular-email-builder/commit/7b543138569f0bbce644004db284ad98cb7f6df6))

## 1.1.0 (2026-02-26)


### Features

* initial commit ([95664b8](https://github.com/BeefreeSDK/angular-email-builder/commit/95664b828a711e487861304ee690e67e56485248))

## 1.1.0 (2026-02-26)


### Features

* initial commit ([cb4c48b](https://github.com/BeefreeSDK/angular-email-builder/commit/cb4c48b6fa5ecda0219a7169eb70e2cc1a875747))

### 0.1.2 (2026-02-26)


### Features

* initial commit ([2d0be5c](https://github.com/BeefreeSDK/angular-email-builder/commit/2d0be5ca0d353728241fba8be2c6d2bbf004ca58))

### 0.1.1 (2026-02-26)


### Features

* initial commit ([067da93](https://github.com/BeefreeSDK/angular-email-builder/commit/067da93c4f3cdff909fcdcfb1ecdd48a68f5bf64))

## [0.1.0] - 2025-02-25

### Added

- `BeefreeBuilder` component with full SDK lifecycle management
- `BeefreeService` for programmatic builder control and multi-instance management
- Collaborative editing support via `shared` and `sessionId` inputs
- Dynamic configuration updates via reactive `effect()`
- SDK type re-exports for consumer convenience
- `ChangeDetectionStrategy.OnPush` on all library components
- SSR compatibility guards (`isPlatformBrowser`) for `document` access
- Demo application with co-editing, multi-language, and multi-builder support

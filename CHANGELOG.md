# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.1.0] - 2025-02-25

### Added

- `BeefreeBuilder` base component with full SDK lifecycle management
- `EmailBuilder`, `PageBuilder`, `PopupBuilder`, `FileManager` alias components
- `BeefreeService` for programmatic builder control and multi-instance management
- Collaborative editing support via `shared` and `sessionId` inputs
- Dynamic configuration updates via reactive `effect()`
- SDK type re-exports for consumer convenience
- `ChangeDetectionStrategy.OnPush` on all library components
- SSR compatibility guards (`isPlatformBrowser`) for `document` access
- Demo application with co-editing, multi-language, and multi-builder support

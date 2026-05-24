# Change Log

All notable changes to the "a-themes-midnight-ultra" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.1.0] - 2026-05-24

### Added

- `LICENSE` file (MIT).
- Extension metadata: `repository`, `bugs`, `homepage`, `keywords`, `galleryBanner`.
- Missing workbench colors for IntelliSense and hover widgets (`suggestWidget.*`, `editorHoverWidget.*`).
- Semantic token enhancements: `class` (bold), `interface` (italic), `property.readonly`.

### Changed

- Dimmed editor line numbers (`#D0D0D0` → `#6F8497`) so they recede visually.
- Numbers now use a distinct color (`#FFAA3E`) instead of blending with foreground text.
- Operators and punctuation now use a muted color (`#8FA7B8`) for better visual separation.
- Invalid / illegal tokens now render in error red (`#F92672`) with underline.
- Cleaned up generic boilerplate in `README.md`.

### Fixed

- `package.json` `publisher` field corrected to `kmarxican`.

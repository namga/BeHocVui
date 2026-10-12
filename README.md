# Bé Học Vui Android v5 — launcher icon fix

This package addresses the default blue Android icon seen in the installed APK.

## What changed
- Added the dedicated square launcher artwork as both `assets/icon.png` and the conventional `assets/icon-only.png`.
- Added `scripts/generate-android-icons.py` to write explicit `ic_launcher.png` and `ic_launcher_round.png` resources into all Android density folders.
- Workflow runs icon generation **after** the Capacitor Android project exists and after sync, then runs `clean assembleDebug`.
- Verifies launcher resources exist before building the APK.
- Larger typography and touch targets from the previous package are retained.

## Upload to GitHub
Upload the contents of this ZIP to the repository root (not the containing folder). Confirm these paths are at the root:
- `package.json`
- `capacitor.config.json`
- `assets/icon-only.png`
- `scripts/generate-android-icons.py`
- `.github/workflows/android-build.yml`
- `www/index.html`

Replace the old workflow file and commit the changes. Then run **Actions → Build Be Hoc Vui Android APK → Run workflow**.

## Install the correct artifact
Download the artifact `Be-Hoc-Vui-Android-debug-APK`, extract `app-debug.apk`, uninstall the previously installed test app, then install the new APK. Android can cache launcher icons, and an old installed APK cannot gain a new icon by itself.

## Limitations
The workflow configuration has been prepared but has not been executed on your GitHub repository from this environment. If it fails, share the first red error step. This debug APK is for testing, not a signed Google Play release.

## v5.1 bug fixes
- Rebuilt question rendering so answer buttons are explicitly generated and visible in quiz mode.
- Lesson mode now populates title, illustration and readable lesson text from the current question.
- Added explicit Vietnamese speech synthesis feedback and a stop action when the read-aloud button is tapped while speaking.
- Fixed CSS selectors for answer grid/hidden panels and bumped asset cache versions.

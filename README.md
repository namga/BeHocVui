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


## v5.2 — Lesson reading fix
- The previous version relied on browser `speechSynthesis`, which is not consistently available in Android WebView and caused the “not supported in app” message.
- This version integrates Capacitor-7-compatible `@capacitor-community/text-to-speech` v6 for native Android/iOS reading and keeps browser speech as a fallback.
- GitHub Actions bundles `www/app.js` to `www/app.bundle.js` before syncing/building the native app.
- The phone still needs a working text-to-speech engine and Vietnamese voice data installed. On Android, check Settings → Accessibility or General management → Text-to-speech output (wording varies by device) and install Vietnamese voice data if available.


## Important: build the JavaScript bundle before packaging

The app imports the native Capacitor text-to-speech plugin. Run `npm install` and `npm run build` before `npx cap sync android` and before deploying the PWA. The HTML loads `www/app.bundle.js`; opening `www/app.js` directly in a WebView causes a JavaScript module syntax error and prevents navigation handlers from running. The Android GitHub Actions workflow runs this build step automatically.


## Version 5.4.0

This release includes defensive page-navigation handling, visible version label v5.4.0, service-worker cache invalidation, and Android versionName 5.4.0 / versionCode 540. The workflow sets the native Android version after `npx cap add android`.


## v5.5.0 runtime fix and verification
- The app HTML loads `www/app.bundle.js`, not the unbundled `www/app.js` source.
- GitHub Actions now builds the bundle and fails immediately if it is missing or the HTML entry point does not reference it.
- The HTML shows a clear diagnostic if the bundle fails to load.
- Android version: `5.5.0` / versionCode `550`.
- The quiz answer choices and learning-mode controls are rendered by the bundle. A build that omits this bundle displays the static placeholder question without choices or native text-to-speech.


## v5.5.1: workflow fix based on uploaded android.yml.txt
The uploaded workflow omitted `npm run build`, even though `www/index.html` loads `app.bundle.js`. This release makes bundle generation mandatory, checks the bundle before Capacitor sync, checks that Capacitor copied the bundle and HTML entry point into Android assets, and labels the artifact with version 5.5.1. If any check fails, Actions stops before producing an APK instead of silently packaging an incomplete app.


## v5.5.2: fixes based on the actual uploaded workflow
- The uploaded `android.yml.txt` did not run `npm run build`; the HTML expects `app.bundle.js`, so app interactions can be absent when that file is not generated.
- This workflow builds the bundle and verifies it exists and is copied into `android/app/src/main/assets/public/` before assembling the APK.
- Removed setup-node npm cache configuration because this ZIP does not include a lockfile; otherwise setup-node may stop with "Dependency lock file not found".
- The Android version setter supports both Gradle forms (`versionName "1.0"` and `versionName = "1.0"`).
- Version is 5.5.2, versionCode 552. The workflow checks these values before building.
- If Actions fails at a verification step, do not install an older artifact; fix the indicated workflow/source issue first.


## v5.5.3: actual JavaScript compile fix
The v5.5.2 build log identified duplicate top-level `prepareQuestions()` and `renderQuestion()` declarations in `www/app.js`. This release removes the obsolete first implementations and keeps the enhanced implementations that render selectable answer buttons and apply age/difficulty filters. The workflow builds and verifies the bundle before packaging, and sets Android versionName 5.5.3 / versionCode 553.

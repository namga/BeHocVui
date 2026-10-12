# Bé Học Vui v3 — Android + PWA

## Updates
- Refreshed app icon and added Capacitor asset inputs (`assets/icon.png`, `assets/splash.png`).
- Larger text, illustrations, buttons and touch targets for children aged 5–10.
- Uses the latest available v2 question bank and learning screens.
- Android GitHub Actions builds a debug APK and uploads it as an artifact.
- Workflow creates the Android platform if missing, generates native icons/splash, syncs web assets, then builds.

## GitHub upload
Upload the **contents of this folder** to the repository root. Ensure `package.json`, `capacitor.config.json`, `www/`, `assets/`, and `.github/workflows/android-build.yml` are at the root. Do not upload this folder nested inside another directory.

## Build
GitHub → Actions → Build Be Hoc Vui Android APK → Run workflow.
Download artifact `Be-Hoc-Vui-Android-debug-APK`; extract `app-debug.apk`.

## Important
This produces an unsigned/debug testing APK, not a Google Play release. The workflow has not been run against your GitHub repository from this environment. If your repo has an existing native `android/` project, keep it and check Capacitor/Gradle compatibility.

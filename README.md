# Bé Học Vui — Capacitor Android + iOS + GitHub Actions

This starter wraps the Vietnamese kids learning web app in Capacitor. It includes GitHub Actions workflows for building an Android debug APK and an unsigned iOS simulator app.

## Build Android APK first (no paid account required)

1. Create a GitHub repository, for example `be-hoc-vui`.
2. Upload all files from this folder to the repository root, including `.github/workflows/` and hidden files.
3. Open **Actions** and enable workflows if GitHub asks.
4. Select **Build Be Hoc Vui Android APK** and click **Run workflow**, or push to `main`/`master`.
5. When the run completes, open the run's **Artifacts** section and download `Be-Hoc-Vui-Android-debug-APK`.
6. Extract the artifact ZIP. It contains `app-debug.apk`. Transfer it to an Android phone and install it. Android may ask you to allow installation from that source.

The workflow uses a GitHub-hosted Ubuntu runner, Node.js 22, Java 21, generates the Capacitor Android project when it is not committed, syncs `www/`, and runs `assembleDebug`.

## Important notes about this APK

- This is a **debug APK** for testing, not a Play Store release build.
- It does not need an Apple or Google paid developer account to build.
- The workflow has not been run on GitHub from this package yet; run it to verify dependencies and build output.
- If your repository already contains an Android project, the workflow reuses it and runs `npx cap sync android`.
- For a Play Store release later, configure a signed Android App Bundle (`.aab`) using protected GitHub Actions secrets. Never commit signing keystores or passwords.

## Build iOS

The separate workflow is `.github/workflows/ios-build.yml`. It runs on a macOS GitHub runner. An unsigned simulator app is useful for build checks but is not an installable iPhone IPA. Installing on a physical iPhone or publishing to TestFlight/App Store requires the appropriate signing setup; distribution generally requires Apple Developer Program membership.

## Project structure

```text
Be_Hoc_Vui/
├── .github/workflows/
│   ├── android-build.yml
│   └── ios-build.yml
├── www/                       # HTML/CSS/JS/PWA app
├── package.json
├── capacitor.config.json
└── README.md
```

## Local development

```bash
npm install
npx cap add android      # only once, if no android/ folder exists
npx cap sync android
npx cap open android
```

## Security

Never commit signing keystores, `.jks`/`.keystore` files, certificates, API keys, or passwords. Use GitHub Actions secrets for release signing.

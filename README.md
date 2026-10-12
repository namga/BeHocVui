# Bé Học Vui — Android GitHub Actions (fixed)

## Why the previous workflow failed
The screenshot shows `actions/setup-java` failed before Gradle ran because it searched the checked-out repository for Gradle files and found none. This commonly happens when `setup-java` has `cache: gradle` enabled even though Capacitor generates the `android/` Gradle project later in the job, or when the project files are uploaded one directory too deep.

This workflow intentionally does **not** enable Gradle caching before the Android project exists. It uses Java 21, installs the Capacitor dependencies, generates `android/` when absent, syncs the web assets, and builds a debug APK.

## Upload to GitHub correctly
Upload the **contents of this folder** to the repository root. The repository root should contain:
- `package.json`
- `capacitor.config.json`
- `www/index.html`
- `.github/workflows/android-build.yml`

Do not upload the parent folder as a nested directory. For example, avoid `Be_Hoc_Vui_Android_Fixed/package.json` inside the GitHub repository; `package.json` must be at the repository root.

## Run the build
1. Push to `main` or `master`, or open **Actions → Build Be Hoc Vui Android APK → Run workflow**.
2. When it succeeds, open the workflow run and download the artifact **Be-Hoc-Vui-Android-debug-APK**.
3. Extract `app-debug.apk` and transfer it to the Android phone for testing.

## Notes
- This produces a debug APK for testing, not a signed Play Store release.
- The workflow is a corrected configuration but has not been executed on your GitHub repository from this environment.
- If your repository already contains a native Android project, keep its `android/` directory and ensure the project uses a Gradle wrapper compatible with the configured Android/Capacitor versions.

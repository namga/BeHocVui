from pathlib import Path
import re
p = Path("android/app/build.gradle")
if not p.exists():
    raise SystemExit("android/app/build.gradle not found")
s = p.read_text()
s, c1 = re.subn(r"versionCode\s+\d+", "versionCode 540", s, count=1)
s, c2 = re.subn(r"versionName\s+(['\"])[^'\"]*\1", 'versionName "5.4.0"', s, count=1)
if c1 != 1 or c2 != 1:
    raise SystemExit("Could not update versionCode/versionName in build.gradle")
p.write_text(s)
print("Android app version set to 5.4.0 (versionCode 540)")

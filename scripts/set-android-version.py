from pathlib import Path
import re

p = Path("android/app/build.gradle")
if not p.exists():
    raise SystemExit("android/app/build.gradle not found")

s = p.read_text()
s, c1 = re.subn(r"(?m)^(\s*versionCode\s*=?\s*)\d+", r"\g<1>552", s, count=1)
s, c2 = re.subn(r"""(?m)^(\s*versionName\s*=?\s*)(['"])[^'"]*\2""", r'\g<1>"5.5.2"', s, count=1)
if c1 != 1 or c2 != 1:
    raise SystemExit("Could not update versionCode/versionName in android/app/build.gradle")
p.write_text(s)
print("Android app version set to 5.5.2 (versionCode 552)")

#!/usr/bin/env python3
"""Generate explicit Android launcher icon resources from assets/icon-only.png."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
source = root / "assets" / "icon-only.png"
res = root / "android" / "app" / "src" / "main" / "res"
if not source.exists():
    raise SystemExit(f"Missing launcher icon source: {source}")
im = Image.open(source).convert("RGBA")
# Square, high-resolution source; resize with high-quality filtering for each density.
sizes = {"mipmap-mdpi": 48, "mipmap-hdpi": 72, "mipmap-xhdpi": 96,
         "mipmap-xxhdpi": 144, "mipmap-xxxhdpi": 192}
for folder, size in sizes.items():
    target_dir = res / folder
    target_dir.mkdir(parents=True, exist_ok=True)
    icon = im.resize((size, size), Image.Resampling.LANCZOS)
    icon.save(target_dir / "ic_launcher.png", optimize=True)
    icon.save(target_dir / "ic_launcher_round.png", optimize=True)
# Capacitor's generated template may contain adaptive-icon XML referencing its default
# foreground/background. Remove those overrides so the explicit PNG launcher icons apply.
adaptive = res / "mipmap-anydpi-v26"
for filename in ("ic_launcher.xml", "ic_launcher_round.xml"):
    target = adaptive / filename
    if target.exists():
        target.unlink()
print("Generated Bé Học Vui launcher icons for all Android densities.")

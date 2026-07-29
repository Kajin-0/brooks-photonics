from pathlib import Path

path = Path("posts/how-to-read-photodetector-noise-spectrum.html")
text = path.read_text(encoding="utf-8")
rule = ".article-hero .eyebrow{color:#fff!important}"
if rule not in text:
    text = text.replace("<style>\n", f"<style>\n{rule}\n", 1)
path.write_text(text, encoding="utf-8")

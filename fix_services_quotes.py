import re

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix title: "...", -> title: "...",
content = re.sub(r'title: "(.*?)`,', r'title: "\1",', content)

# Fix checklist array items like "Passport`, "PAN Card`,
content = re.sub(r'",\s*"(.*?)`,', r'", "\1",', content)
content = re.sub(r'\["(.*?)`,', r'["\1",', content)
content = re.sub(r'"\]', r'"]', content)
# It's safer to just fix all `"something`, ` with `"something", `
content = re.sub(r'"([^"\n]*?)`,', r'"\1",', content)

# Fix faqs
content = re.sub(r'question: "(.*?)`,', r'question: "\1",', content)

with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed quotes")

import re

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all answer strings and convert to backticks
# Using a regex that captures answer: "..." where ... can span multiple lines
content = re.sub(r'answer:\s*"([^"]*?)"', r'answer: `\1`', content, flags=re.DOTALL)

with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed faqs quotes")

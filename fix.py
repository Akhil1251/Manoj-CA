import re

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the specific error where there is an unescaped newline in the double-quoted string
old_str = '''{ question: "What are the minimum requirements for incorporating an Indian Subsidiary?", answer: "• Minimum 2 Shareholders
• Minimum 2 Directors
• At least 1 Resident Director in India
• Registered Office Address in India
There is no minimum paid-up capital requirement." }'''

new_str = '''{ question: "What are the minimum requirements for incorporating an Indian Subsidiary?", answer: "• Minimum 2 Shareholders\\n• Minimum 2 Directors\\n• At least 1 Resident Director in India\\n• Registered Office Address in India\\nThere is no minimum paid-up capital requirement." }'''

if old_str in content:
    content = content.replace(old_str, new_str)
    with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed syntax error.")
else:
    print("Syntax error snippet not found.")

import re
import json

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Instead of complex python parsing, I can just use string replacement
# Let's locate the 'corporate-compliance' object in servicesData.ts and rewrite it correctly.
# The `corporate-compliance` block starts around line 1460 and ends around 2020.

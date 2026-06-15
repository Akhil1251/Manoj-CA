import json

# We will just write the missing fields directly into servicesData.ts for the 8 subServices using python string replacement.

missing_fields = """
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        timelineSteps: [
          { num: "01", title: "CONSULTATION", detailTitle: "Initial Briefing & Check", desc: "We discuss details and review all checklists." },
          { num: "02", title: "VERIFICATION", detailTitle: "Document Compilation", desc: "Our specialists check all details to ensure compliance and completeness." },
          { num: "03", title: "SUBMISSION", detailTitle: "Filing and Liaisoning", desc: "We prepare the forms and submit the applications to the regulatory department." },
          { num: "04", title: "COMPLETION", detailTitle: "Final Approval & Support", desc: "We deliver the certificates, resolve queries, and outline next-step requirements." }
        ],
        comparison: [
          { aspect: "Operational Efficiency", manual: "Manual tracking takes weeks.", consultAvenuee: "Structured digital handling." },
          { aspect: "Compliance Accuracy", manual: "High risk of statutory notices or fines.", consultAvenuee: "Zero-error draft verification." },
          { aspect: "Government Liaisoning", manual: "Requires multiple physical visits.", consultAvenuee: "Complete departmental representation." }
        ],
"""

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to inject `missing_fields` right before `checklist: [` for each of the 8 items.
content = content.replace('checklist: ["Valid Indian Passport', missing_fields.lstrip('\n') + '        checklist: ["Valid Indian Passport')
content = content.replace('checklist: ["Aadhaar Card & PAN Card copy', missing_fields.lstrip('\n') + '        checklist: ["Aadhaar Card & PAN Card copy')

with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done patching missing fields")

const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

function fixEncoding(str) {
    // If it contains these mangled sequences, fix it
    if (str.includes('â') || str.includes('à')) {
        try {
            // Revert the double-encoding
            const fixed = Buffer.from(str, 'latin1').toString('utf8');
            // Basic sanity check: if the fixed version still has lots of invalid replacement characters, maybe it wasn't latin1
            if (fixed.includes('\uFFFD')) {
               return str;
            }
            return fixed;
        } catch (e) {
            return str;
        }
    }
    return str;
}

const files = walk('d:/HelpVerse Projects/Manoj CA/src');
files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const newContent = fixEncoding(content);
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Fixed encoding in ' + path.basename(file));
    }
});

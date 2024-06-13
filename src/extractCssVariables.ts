import postcss from 'postcss';

export function extractCssVariables(css: string): Set<string> {
    const root = postcss.parse(css);
    const variables: Set<string> = new Set();

    root.walkDecls(decl => {
        if (decl.prop.startsWith('--')) {
            variables.add(decl.prop);
        }
        const varFunctionPattern = /var\((--[\w-]+)(?:\s*,\s*var\((--[\w-]+)\))*(?:\s*,\s*([^)]*))?\)/g;
        let varMatch;
        while ((varMatch = varFunctionPattern.exec(decl.value)) !== null) {
            variables.add(varMatch[1].trim());
            if (varMatch[2]) {
                variables.add(varMatch[2].trim());
            }
        }
    });

    return variables;
}

import { extractCssVariables } from './extractCssVariables';

export function variableCompare(sourceCss: string, targetCss: string): string[] {
    try {
        const sourceVariables = extractCssVariables(sourceCss);
        const targetVariables = extractCssVariables(targetCss);

        const missingVariables = [...targetVariables].filter(variable => !sourceVariables.has(variable));

        return missingVariables;
    } catch (error) {
        console.error('Error comparing variables:', error);
        return [];
    }
}

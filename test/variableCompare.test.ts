import { variableCompare } from '../src';

const sourceCss = `
  :root {
    --color-primary: #000;
    --color-secondary: #fff;
  }
`;

const targetCss = `
  :root {
    --color-primary: #000;
    --color-secondary: #fff;
    --color-tertiary: #f00;
    
    color: var(--color-external);
  }
`;

describe('variableCompare', () => {
    it('should identify variables in target CSS that do not exist in source CSS', () => {
        const missingVariables = variableCompare(sourceCss, targetCss);
        expect(missingVariables).toEqual(['--color-tertiary', '--color-external']);
    });

    it('should return an empty array if all variables in target CSS exist in source CSS', () => {
        const missingVariables = variableCompare(sourceCss, sourceCss);
        expect(missingVariables).toEqual([]);
    });
});

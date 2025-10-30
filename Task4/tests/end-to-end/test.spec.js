import test from "@playwright/test";
import { HomePage } from "../page/homepage";
import { SpectraAnalyze } from "../page/spectra-analyze";
import { SpectraDetect } from "../page/spectra-detect";

test.describe('Scenario for Task 4', () => {
    
    test('Validate Task 4 Test Case', async ({page}) => {
        const homepage = new HomePage(page);
        const spectraAnalyze = new SpectraAnalyze(page);
        const spectraDetect = new SpectraDetect(page);

        await homepage.visitPage();
        await homepage.clickSubmenu();
        await homepage.clickAnalyze();

        await spectraAnalyze.validateLine('Efficacy. Speed. Privacy. Malware Analysis that Delivers.');
        await spectraAnalyze.validateTitle('Advanced Malware Analysis & Threat Hunting | ReversingLabs');

        await homepage.clickSubmenu();
        await homepage.clickDetect();

        await spectraDetect.validateTitle('Advanced Malware Analysis & Threat Hunting | ReversingLabs');

        await spectraAnalyze.visitPage();
        await spectraAnalyze.downloadDataSheet();

    });

})

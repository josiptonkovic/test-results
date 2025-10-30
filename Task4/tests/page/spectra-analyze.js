import {expect} from '@playwright/test';
import fs from 'fs';

export class SpectraAnalyze {
    
    constructor(page) {
        this.page = page;
        this.pageUrl = 'https://www.reversinglabs.com/products/spectra-analyze', { waitUntill: 'load' };
        this.downloadBtn = page.getByRole('link', { name: 'DOWNLOAD DATASHEET' });
        this.pageLine = page.getByRole('heading', { name: 'Efficacy. Speed. Privacy.' });
    }

    async visitPage() {
        await this.page.goto(this.pageUrl);
    }

    async validateLine(line) {
        await expect(this.pageLine).toHaveText(line);
    }

    async validateTitle(title) {
        const pageTitle = await this.page.title();
        expect(pageTitle).toBe(title);
    }

    async downloadDataSheet() {
        const [ download ] = await Promise.all([
            this.page.waitForEvent('download'),
            await this.downloadBtn.click(),
        ]);
        const filePath = await download.path();
        const stats = await fs.promises.stat(filePath);
        expect(stats.size).toBeGreaterThan(1);
    }

}

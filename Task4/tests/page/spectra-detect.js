import {expect} from '@playwright/test';

export class SpectraDetect {
    
    constructor(page) {
        this.page = page;
        this.pageUrl = 'https://www.reversinglabs.com/products/spectra-detect';
    }

    async validateTitle(wrongTitle) {
        await expect(this.page).not.toHaveTitle(wrongTitle);
    }

}

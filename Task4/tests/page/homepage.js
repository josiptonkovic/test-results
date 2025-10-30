export class HomePage {
    
    constructor(page) {
        this.page = page;
        this.pageUrl = 'https://www.reversinglabs.com/';
        this.subMenu = page.getByText('Product & Technology');
        this.spectraAnalyze = page.getByRole('link', { name: 'Spectra Analyze In-Depth' });
        this.spectraDetect = page.getByRole('link', { name: 'Spectra Detect High-Speed,' });
    }

    async visitPage() {
        await this.page.goto(this.pageUrl);
    }

    async clickSubmenu() {
        // await this.subMenu.waitFor({ state: 'visible' });
        await this.subMenu.click();
        
    }

    async clickAnalyze() {
        await this.spectraAnalyze.click();
    }

    async clickDetect() {
        // await this.spectraDetect.waitFor({ state: 'visible' }); { force: true }
        await this.spectraDetect.click();
    }

}

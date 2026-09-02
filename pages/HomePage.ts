import { Page } from "@playwright/test"
export class HomePage{
    constructor(private page: Page){}

        
         
        private navCategory = this.page.getByTestId('nav-categories')
        private handTools = this.page.getByText('Hand Tools').first()
       private firstProduct = this.page.locator('a[href*="/product/"]')
       private sortProduct = this.page.getByTestId('sort')
       private evaluateProduct = this.page.locator('[data-test="sorting_completed"] img.card-img-top')
       private productPrice = this.page.locator('[data-test="sorting_completed"] [data-test="product-price"]')
       
         
         async clickCategory(){
            await this.navCategory.click();
        }

        async clickHandtools(){
            await this.handTools.waitFor({state: 'visible'})
            await this.handTools.click()
        }

        async navigate(){
            await this.page.goto('/');
        }

       getfirstproduct(){
            return this.firstProduct.first();
        }

        async selectOptionDesc(){
            await this.sortProduct.selectOption('name,desc');
        }

         async selectOptionAsc(){
            await this.sortProduct.selectOption('name,asc');
        }
         async selectOptionpriceDesc(){
            await this.sortProduct.selectOption('price,desc');
        }

         async selectOptionpriceAsc(){
            await this.sortProduct.selectOption('price,asc');
        }

        async waitForProductsToLoad(){
            await this.page.waitForLoadState('networkidle')
            await this.page.locator('[data-test="sorting_completed"] img.card-img-top')
            .first()
            .waitFor({ state: 'visible' });
        }

        
        async waitForProductsToLoadByPrice(){
            await this.page.waitForLoadState('networkidle')
            await this.page.locator('[data-test="sorting_completed"] [data-test="product-price"]')
            .first()
            .waitFor({ state: 'visible' });
        }

        getEvaluatedArray(){
            return this.evaluateProduct.evaluateAll(imgs => imgs.map(img => img.getAttribute('alt')))
        }

        getsortedPrice(){
            return this.productPrice.allTextContents();
        }

} 
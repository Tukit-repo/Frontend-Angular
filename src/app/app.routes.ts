import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UploadList } from './features/upload-list/upload-list';
import { Kits } from './features/kits/kits';
import { Product } from './features/product/product';
import { Checkout } from './features/checkout/checkout';
import { Account } from './features/account/account';

export const routes: Routes = [
        { path: '', component: Home },
        { path: 'upload-list', component: UploadList },
        { path: 'kits', component: Kits },
        { path: 'products/:id', component: Product },
        { path: 'checkout', component: Checkout },
        { path: 'account', component: Account },
];

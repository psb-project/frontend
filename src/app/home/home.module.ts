
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './homepage-components/balance/balance.component';
import { InsightComponent } from './homepage-components/insight/insight.component';
import { FavoriteTransfersComponent } from './homepage-components/favorite-transfers/favorite-transfers.component';
import { TransactionsComponent } from './homepage-components/transactions/transactions.component';

@NgModule({
    declarations: [
      BalanceComponent,
      InsightComponent,
      FavoriteTransfersComponent,
      TransactionsComponent,
    ],
    exports: [
      BalanceComponent,
      InsightComponent,
      FavoriteTransfersComponent,
      TransactionsComponent,
    ],
    imports: [CommonModule],
  })
  export class HomeModule {}
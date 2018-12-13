import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { map, tap } from 'rxjs/operators';
import { Product } from '../../occ/occ-models';
import * as fromStore from '../store/index';

@Injectable()
export class ProductService {
  constructor(private store: Store<fromStore.StateWithProduct>) {}

  /**
   * Returns the product observable. The product will be loaded
   * whenever there's no value observed.
   *
   * The underlying product loader ensures that the product is
   * only loaded once, even in case of parallel observers.
   */
  get(productCode: string): Observable<Product> {
    return this.store.pipe(
      select(fromStore.getSelectedProductStateFactory(productCode)),
      tap(productState => {
        if (
          !productState.loading &&
          !productState.value &&
          !productState.error
        ) {
          this.store.dispatch(new fromStore.LoadProduct(productCode));
        }
      }),
      map(productState => productState.value)
    );
  }

  isLoading(productCode: string): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.getSelectedProductLoadingFactory(productCode))
    );
  }

  hasError(productCode: string): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.getSelectedProductErrorFactory(productCode))
    );
  }

  /**
   * Reloads the product. The product is loaded implicetly
   * whenever selected by the `get`, but in some cases an
   * explicit reload might be needed.
   */
  reload(productCode: string) {
    this.store.dispatch(new fromStore.LoadProduct(productCode));
  }
}

import { Component } from '@angular/core';
import { FooterItem, Region, Store } from 'src/app/models/dashboard.models';
import {
  FOOTER_ITEMS,
  REGIONS,
  STORES,
} from 'src/app/static/dashboard.properties';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  stores: Store[] = STORES;
  regions: Region[] = REGIONS;
  footerItems: FooterItem[] = FOOTER_ITEMS;

  filteredStores: Store[] = [...this.stores];
  searchText = '';
  includeSupermarkets = true;
  selectedRegion = 'all';

  onSearch() {
    this._applyFilters();
  }

  onCheckboxChange() {
    this._applyFilters();
  }

  onFilterByRegion(event: Event) {
    const selectedElement = event.target as HTMLSelectElement;
    this.selectedRegion = selectedElement.value;

    this._applyFilters();
  }

  private _applyFilters() {
    this.filteredStores = this.stores.filter((store) => {
      const matchesSearch = store.storeName
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
      const matchesSupermarket = this.includeSupermarkets || !store.supermarket;
      const matchesRegion =
        this.selectedRegion === 'all' || store.region === this.selectedRegion;

      return matchesSearch && matchesSupermarket && matchesRegion;
    });
  }
}

import { Injectable } from '@angular/core';
import {LanguageFetchingService} from '../backend/languages/language-fetching.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageFecthingService: LanguageFetchingService;

  constructor(fetchingService:LanguageFetchingService) {
    this.languageFecthingService = fetchingService;
  }

  storeLanguage(): void {
    this.languageFecthingService.getAllAvailableLanguages().subscribe(res => sessionStorage.setItem('languageOptions',JSON.stringify(res)));
  }
}

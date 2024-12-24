import {ChangeDetectorRef, Component, OnInit, OnChanges, inject} from '@angular/core';
import {ChampionFetchingService} from '../../../../services/backend/champions/champion-fetching.service';
import {ChampionResponse} from '../../../../models/backend/champions/ChampionResponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-champions-page',
  standalone: true,
  imports: [],
  templateUrl: './champions-page.component.html',
  styleUrl: './champions-page.component.css'
})
export class ChampionsPageComponent implements OnInit {

  private championFetchingService: ChampionFetchingService;
  private cdr: ChangeDetectorRef | null = null;
  champions: ChampionResponse[] = [];
  #router = inject(Router);


  constructor(championFetchingService: ChampionFetchingService, cdr: ChangeDetectorRef) {
    this.championFetchingService = championFetchingService;
    this.cdr = cdr;
  }

  ngOnInit() {
    this.championFetchingService.getAllChampions().subscribe({
      next: (res) => {
        if (res !== null) {
          console.log(res);
          this.champions = Object.values(res?.data);
        }
      },
      error: (e) => console.log(e)
    });
  }

  goToChampion(name: string): void {
    this.#router.navigate(['champions', name]);
  }
}

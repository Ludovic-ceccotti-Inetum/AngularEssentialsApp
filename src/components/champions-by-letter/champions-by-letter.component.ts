import {Component, Input, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {ChampionResponse} from '../../../models/backend/champions/ChampionResponse';
import {ChampionService} from '../../../services/champions/champion.service';

@Component({
    selector: 'app-champions-by-letter',
    imports: [],
    templateUrl: './champions-by-letter.component.html',
    styleUrl: './champions-by-letter.component.css'
})
export class ChampionsByLetterComponent implements OnInit, AfterViewInit {

    @Input() champions: ChampionResponse[]  = [];

    private cdr: ChangeDetectorRef;

    championService: ChampionService;

    groupedChampionsByLetter: Map<string, ChampionResponse[]> = new Map<string, ChampionResponse[]>()

    constructor(championService: ChampionService, cdr: ChangeDetectorRef) {
        this.championService = championService;
        this.cdr = cdr;
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        console.log(this.champions);
       this.championService.groupedChampionsByFirstLetter(this.champions, this.groupedChampionsByLetter);
       console.log(this.groupedChampionsByLetter);
    }



}

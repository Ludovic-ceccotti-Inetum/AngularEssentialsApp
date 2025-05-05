import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionInfoComponent } from './champion-info.component';
import {provideRouter} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ChampionFetchingService} from '../../../../../services/backend/champions/champion-fetching.service';
import {of} from 'rxjs';
import {ChampionResponse} from '../../../../../models/backend/champions/ChampionResponse';
import SpyObj = jasmine.SpyObj;

describe('ChampionInfoComponent', () => {
  let component: ChampionInfoComponent;
  let fixture: ComponentFixture<ChampionInfoComponent>;
  let championFetchingSpy: jasmine.SpyObj<ChampionFetchingService>;
  const champion: ChampionResponse = {
    version: '16.4',
    id: "Lulu",
    key: "117",
    name: "Lulu",
    title: "la sacerdotessa delle fate",
    blurb: "La maga yordle Lulu è nota per le sue illusioni oniriche e per le creature da fiaba che si manifestano nei suoi viaggi per Runeterra insieme a Pix. Lulu plasma la realtà a suo piacimento, piegando il tessuto del mondo ed evadendo dai limiti del reame...",
    lore: "La maga yordle Lulu è nota per le sue illusioni oniriche e per le creature da fiaba che si manifestano nei suoi viaggi per Runeterra insieme a Pix. Lulu plasma la realtà a suo piacimento, piegando il tessuto del mondo ed evadendo dai limiti del reame fisico. C'è chi considera la sua magia innaturale, chi la trova pericolosa, ma lei è convinta che a tutti serva un tocco di incanto.",
    info: {
      attack: 4,
      defense: 5,
      magic: 7,
      difficulty: 5
    },
    stats: {
      hp: 0,
      hpperlevel: 0,
      mp: 0,
      mpperlevel: 0,
      movespeed: 0,
      armor: 0,
      armorperlevel: 0,
      spellblock: 0,
      spellblockperlevel: 0,
      attackrange: 0,
      hpregen: 0,
      hpregenperlevel: 0,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 0,
      attackdamageperlevel: 0,
      attackspeedperlevel: 0,
      attackspeed: 0
    },
    tags: ['mage','support'],
    allytips: [],
    enemytips: [],
    skins: [
      {
        id: "117000",
        num: 0,
        name: "default",
        chromas: false,
        skinURI: new URL("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg"),
        owned: false
      }
    ],
    possessed: true,
    partype: 'Mana'
  };

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ChampionFetchingService',['getChampionByName']);
    await TestBed.configureTestingModule({
      imports: [ChampionInfoComponent,HttpClientTestingModule],
      providers: [provideRouter([]), {provide: ChampionFetchingService, useValue: spy}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionInfoComponent);
    component = fixture.componentInstance;
    championFetchingSpy = TestBed.inject(ChampionFetchingService) as SpyObj<ChampionFetchingService>;
    fixture.detectChanges();
  });

  it('should create', async () => {
    championFetchingSpy.getChampionByName.withArgs(champion.name).and.returnValue(of(champion));
    component.name = champion.name;
    let container : HTMLElement = fixture.nativeElement.querySelector('.champion-info-container');
    await fixture.whenStable();
    expect(championFetchingSpy.getChampionByName).toHaveBeenCalledWith('Lulu');
    expect(container).toBeDefined();
    expect(component.champion).toBeDefined();
    expect(component.champion?.name).toEqual('Lulu');
    expect(component).toBeTruthy();
  });

  it('should create a component with no champion if response from server is null', async () => {
    championFetchingSpy.getChampionByName.withArgs('').and.returnValue(of(null));
    component.name = champion.name;
    await fixture.whenStable();

    expect(component.champion).toBeUndefined();
  });
});

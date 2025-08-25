import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPageComponent } from './object-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ObjectDto} from '../../../../models/backend/objects/ObjectDto';
import {ObjectListResponse} from '../../../../models/backend/objects/ObjectListResponse';
import {ObjectFetchingService} from '../../../../services/backend/objects/object-fetching.service';
import {of} from 'rxjs';
import {ObjectEntry} from '../../../../models/backend/objects/ObjectEntry';

describe('ObjectPageComponent', () => {
  let component: ObjectPageComponent;
  let fixture: ComponentFixture<ObjectPageComponent>;
  let fetchingSpy: jasmine.SpyObj<ObjectFetchingService>;

  const mockItemId: string = '1001';

  const mockObjectDto: ObjectDto = {
    name: "Bottes",
    description: "<mainText><stats><attention>+25</attention> vitesse de déplacement</stats><br><br></mainText>",
    plaintext: "Augmente légèrement la vitesse de déplacement.",
    "into": [
      "3005",
      "3047",
      "3006",
      "3009",
      "3010",
      "3020",
      "3111",
      "3117",
      "3158"
    ],
    gold: {
      base: 300,
      purchasable: true,
      total: 300,
      sell: 210
    },
    tags: [
      "Boots"
    ],
    maps: {
      "11": true,
      "12": true,
      "21": true,
      "22": false,
      "30": false,
      "33": false
    },
    stats: {
      "FlatMovementSpeedMod": 25
    },
    pictureUrl: "myUrl.jpg"
  }

  const mockData = new Map<string, ObjectDto>([[mockItemId,mockObjectDto]]);


  const mockResponse: ObjectListResponse = {
    version: '1.16.0',
    type: 'items',
    data: mockData
  }

  const expectedEntry: ObjectEntry = {
    id: mockItemId,
    value: mockObjectDto
  }

  beforeEach(async () => {
    const spyFetchinfService = jasmine.createSpyObj('ObjectFetchingService',['getAllObjects'])
    await TestBed.configureTestingModule({
      imports: [ObjectPageComponent,  HttpClientTestingModule],
      providers: [{provide: ObjectFetchingService, useValue: spyFetchinfService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectPageComponent);
    component = fixture.componentInstance;
    fetchingSpy = TestBed.inject(ObjectFetchingService) as jasmine.SpyObj<ObjectFetchingService>;
    fixture.detectChanges();
  });


  it('should create', async () => {
    expect(component).toBeTruthy();
   expect(fetchingSpy.getAllObjects).toHaveBeenCalled();
  });


});

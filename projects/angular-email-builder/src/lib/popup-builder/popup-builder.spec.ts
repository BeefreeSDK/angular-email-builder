import { PLATFORM_ID } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PopupBuilder } from './popup-builder'
import { BEEFREE_SDK_FACTORY } from '../constants'

describe('PopupBuilder', () => {
  let component: PopupBuilder
  let fixture: ComponentFixture<PopupBuilder>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupBuilder],
      providers: [
        { provide: PLATFORM_ID, useValue: 'server' },
        { provide: BEEFREE_SDK_FACTORY, useValue: vi.fn() },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PopupBuilder)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

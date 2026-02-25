import { PLATFORM_ID } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PageBuilder } from './page-builder'
import { BEEFREE_SDK_FACTORY } from '../constants'

describe('PageBuilder', () => {
  let component: PageBuilder
  let fixture: ComponentFixture<PageBuilder>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBuilder],
      providers: [
        { provide: PLATFORM_ID, useValue: 'server' },
        { provide: BEEFREE_SDK_FACTORY, useValue: vi.fn() },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PageBuilder)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

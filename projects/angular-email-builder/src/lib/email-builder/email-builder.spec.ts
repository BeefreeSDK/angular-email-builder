import { PLATFORM_ID } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { EmailBuilder } from './email-builder'
import { BEEFREE_SDK_FACTORY } from '../constants'

describe('EmailBuilder', () => {
  let component: EmailBuilder
  let fixture: ComponentFixture<EmailBuilder>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailBuilder],
      providers: [
        { provide: PLATFORM_ID, useValue: 'server' },
        { provide: BEEFREE_SDK_FACTORY, useValue: vi.fn() },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(EmailBuilder)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

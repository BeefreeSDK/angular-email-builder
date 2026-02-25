import { PLATFORM_ID } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FileManager } from './filemanager'
import { BEEFREE_SDK_FACTORY } from '../constants'

describe('FileManager', () => {
  let component: FileManager
  let fixture: ComponentFixture<FileManager>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileManager],
      providers: [
        { provide: PLATFORM_ID, useValue: 'server' },
        { provide: BEEFREE_SDK_FACTORY, useValue: vi.fn() },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(FileManager)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

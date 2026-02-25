import { ChangeDetectionStrategy, Component } from '@angular/core'
import { BeefreeBuilder, SDK_BUILDER_TEMPLATE } from '../builder/builder'

/**
 * Convenience alias for {@link BeefreeBuilder}.
 *
 * Use this selector (`lib-email-builder`) for email builder instances.
 * All inputs, outputs, and behavior are inherited from BeefreeBuilder.
 * The builder type is determined by the SDK configuration, not the selector.
 */
@Component({
  selector: 'lib-email-builder',
  imports: [],
  template: SDK_BUILDER_TEMPLATE,
  styleUrls: ['../builder/builder.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailBuilder extends BeefreeBuilder {}

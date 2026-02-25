/*
 * Public API Surface of @beefree.io/angular-email-builder
 */

// Components
export { BeefreeBuilder, SDK_BUILDER_TEMPLATE } from './lib/builder/builder'
export { EmailBuilder } from './lib/email-builder/email-builder'
export { PopupBuilder } from './lib/popup-builder/popup-builder'
export { PageBuilder } from './lib/page-builder/page-builder'
export { FileManager } from './lib/filemanager/filemanager'

// Service
export { BeefreeService } from './lib/beefree.service'

// Constants & Tokens
export { BEEFREE_SDK_FACTORY, DEFAULT_CONTAINER, SDK_LOADER_URL } from './lib/constants'
export type { BeefreeSDKFactory } from './lib/constants'

// SDK type re-exports
export type * from '@beefree.io/sdk/dist/types/bee'

// SDK runtime value re-exports (enums and consts)
export {
  StageModeOptions,
  StageDisplayOptions,
  SidebarTabs,
  ExecCommands,
  LoadWorkspaceOptions,
  BeePluginErrorCodes,
  OnInfoDetailHandle,
  ModuleTypes,
  ModuleDescriptorNames,
  ModuleDescriptorOrderNames,
  RowLayoutType,
  EngageHandle,
  OnCommentChangeEnum,
  WorkspaceStage,
  ContentCodes,
  ActionCodes,
  EventCodes,
  BeePluginRoles,
  TokenStatus,
  PREVIEW_CONTROL,
} from '@beefree.io/sdk/dist/types/bee'

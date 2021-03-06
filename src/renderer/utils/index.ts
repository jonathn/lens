// Common usage utils & helpers

export const noop: any = Function();
export const isElectron = !!navigator.userAgent.match(/Electron/);

export * from '../../common/utils/camelCase'
export * from '../../common/utils/base64'

export * from './autobind'
export * from './cssVar'
export * from './cssNames'
export * from './eventEmitter'
export * from './downloadFile'
export * from './prevDefault'
export * from './createStorage'
export * from './interval'
export * from './debouncePromise'
export * from './copyToClipboard'
export * from './formatDuration'
export * from './isReactNode'
export * from './convertMemory'
export * from './convertCpu'

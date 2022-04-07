import type { AppContext, Plugin } from 'vue';
export declare type SFCWithInstall<T> = T & Plugin;
export declare type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null;
};
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E | undefined) => SFCWithInstall<T> & E;
export declare const FhHelloWorld: SFCWithInstall<import("vue").DefineComponent<{}, {
    msg: import("vue").Ref<number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>> & Record<string, any>;
export default FhHelloWorld;
export * from './src/index';

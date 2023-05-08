export enum EmitterEnv {
  Runtime = 'runtime',
  Code = 'code',
}

export type CodeEmitter<C, P> = (config: C, props: P) => string;

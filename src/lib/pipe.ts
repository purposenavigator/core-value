type Function<A, B> = (a: A) => B;

export function pipe<A, B>(ab: Function<A, B>): Function<A, B>;
export function pipe<A, B, C>(
  ab: Function<A, B>,
  bc: Function<B, C>,
): Function<A, C>;
export function pipe<A, B, C, D>(
  ab: Function<A, B>,
  bc: Function<B, C>,
  cd: Function<C, D>,
): Function<A, D>;
export function pipe<A, B, C, D, E>(
  ab: Function<A, B>,
  bc: Function<B, C>,
  cd: Function<C, D>,
  de: Function<D, E>,
): Function<A, E>;
export function pipe<A, B, C, D, E, F>(
  ab: Function<A, B>,
  bc: Function<B, C>,
  cd: Function<C, D>,
  de: Function<D, E>,
  ef: Function<E, F>,
): Function<A, F>;
// You can keep adding more overloads as needed

export function pipe<T>(...fns: Array<Function<T, T>>) {
  return (input: T): T => fns.reduce((acc, fn) => fn(acc), input);
}

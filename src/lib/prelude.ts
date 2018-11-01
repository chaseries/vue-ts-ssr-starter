
interface Just_<a> {
  value: a;
}

export function Just<a>(value: a): Just_<a> {
  return { value: value };
}

export type Maybe<a> = Just_<a>;


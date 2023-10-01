class Container {
  private providers: {
    [k: string]: any;
  } = {};

  register(token: string, value: any) {
    this.providers[token] = new value();
  }
  resolve(token: string) {
    const matchedProvider = this.providers[token];
    if (matchedProvider) {
      return matchedProvider;
    } else {
      throw "Provider is not existed";
    }
  }
}

const container = new Container();
export function Injectable(target: new () => void) {
  container.register(target.name, target);
}

export function Inject(token: new () => void) {
  return (target: any, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get: () => container.resolve(token.name),
    });
  };
}

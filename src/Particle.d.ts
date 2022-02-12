type Particle = {
  position: Vector2;
  velocity: Vector2;
  readonly age: number;
  readonly ticks: number;
  maxAge: number;
  isDead: boolean;
  element: Instance;
};

interface ParticleConstructor {
  new (particleElement: Instance): Particle;
}

declare const Particle: ParticleConstructor;

export = Particle;

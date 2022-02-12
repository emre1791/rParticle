import Particle from './Particle';

type ParticleEmitter = {
  /**
   * Alive Particles
   */
  readonly particles: Particle[];

  /**
   * Parent of the ParticleEmitter
   */
  hook: Instance;

  /**
   * Default rate is 5. How many particles will be spawned per second.
   */
  rate: number;

  /**
   * This function is called when a particle is updated. Particle manipulation should be done here.
   */
  onUpdate: (particle: Particle, deltaTime: number) => void;

  /**
   * This function is called when a particle is spawned. Particle manipulation should be done here.
   */
  onSpawn: (particle: Particle) => void;

  Destroy(): void;
};

interface ParticleEmitterConstructor {
  new (hook: Instance, particleElement: Instance): ParticleEmitter;
}

declare const ParticleEmitter: ParticleEmitterConstructor;

export = ParticleEmitter;

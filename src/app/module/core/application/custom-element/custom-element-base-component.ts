import { CustomElementRegistry } from '@app/module/core/application/custom-element/custom-element';

export default abstract class CustomElementBaseComponent {
  public static readonly customElementName: string;

  public static register(): void {
    CustomElementRegistry.register(this);
  }
}

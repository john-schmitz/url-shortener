import { IsUrl, IsNotEmpty } from "class-validator";
export class ShortnerUrlDTO {
  @IsUrl()
  @IsNotEmpty()
  readonly url: string;
}
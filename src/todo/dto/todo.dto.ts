import { IsNotEmpty, IsString } from 'class-validator';

export class TodoDto {
  @IsString()
  @IsNotEmpty()
  readonly content: string;
}

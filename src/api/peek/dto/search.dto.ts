import { IsString } from 'class-validator';

export class SearchDTO {
  @IsString()
    prompt: string;
}

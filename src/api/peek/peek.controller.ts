import {
  Controller,
  Get,
} from '@nestjs/common';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { PeekService } from './peek.service';

@ApiTags('peek')
@Controller('peek')
@ApiSecurity('api_key', ['api_key'])
export class PeekController {
  constructor(private peekService: PeekService) {}

  @Get('code')
  @ApiOperation({ summary: 'Gets peek code.' })
  chatPeek() {
    return this.peekService.getCode();
  }
}

/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';

@Injectable()
export class PeekService {
  async getCode() {
    return {token:process.env.PEEK_TOKEN, apiCode:process.env.PEEK_CODE};
  }
}

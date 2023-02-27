/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';

@Injectable()
export class PeekService {
  async getCode() {
    return process.env.PEEK_CODE;
  }
}

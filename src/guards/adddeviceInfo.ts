import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as UAParser from 'ua-parser-js';

export const AddDeviceInfoToRequest = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const UaParser = new UAParser();
    const userAgent = request.headers['user-agent'];
    const parsedUserAgent = UaParser.setUA(userAgent).getResult();
    console.log(parsedUserAgent);
    const device =
      parsedUserAgent.device.model ||
      parsedUserAgent.device.type ||
      'Unknown device';

    request.device = device;

    return request;
  },
);
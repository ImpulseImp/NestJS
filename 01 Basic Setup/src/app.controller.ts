import { Controller, Get, Req, Param } from '@nestjs/common';

@Controller('/api/v1/products')
export class AppController {
  @Get()
  getAllProducts() {
    return 'Hi Impulse!';
  }

  @Get('/:id')
  getSingleProduct(@Req() request: Request, @Param() params: any) {
    return {
      msg: 'success',
      data: [],
      id: params.id as string,
    };
  }
}

import { Controller,Post, Body, UseGuards  } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

//     @Post('create-payment-intent')
//   async createPaymentIntent(@Body() data: { amount: number; currency: string }) {
//     const { amount, currency } = data;
//     const clientSecret = await this.paymentService.createPaymentIntent(amount, currency);
//     return { clientSecret };
//   }

  @Post('create-payment')
  @UseGuards(AuthGuard)
  async createPayment(@Body() data: { emailAddress: string; bookingId: string; status: string; transactionType: string }) {
    const { emailAddress, bookingId, status, transactionType } = data;
    await this.paymentService.createPayment(emailAddress, bookingId, status, transactionType);
    return { success: true, message: 'Payment created successfully' };
  }


}

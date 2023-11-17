// import { Controller,Post, Body, UseGuards ,Request } from '@nestjs/common';
// import { PaymentService } from './payment.service';
// import { AuthGuard } from '@nestjs/passport';

// @Controller('payment')
// export class PaymentController {
//     constructor(private readonly paymentService: PaymentService) {}

//   @Post('create-checkout-session')
//   @UseGuards(AuthGuard)
//     async createPayment(@Request() req,@Body() data: { totalTicket: number,bookingId:string }) {
//     const userData = req.user.payload;
//     const {  bookingId ,totalTicket} = data;
//     await this.paymentService.createPaymentsession(userData,bookingId,totalTicket);
//     return { success: true, message: 'Payment created successfully' };
//   }
// }

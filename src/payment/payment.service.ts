// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Payment } from './schema/payment.schema';
// import { userInfo } from 'os';
// // import { StripeService } from 'nestjs-stripe';
// // import Stripe from 'stripe';
// const Stripe = require('stripe')

// @Injectable()
// export class PaymentService {
//     constructor(
//         @InjectModel(Payment.name) private readonly paymentModel: Model<Payment>,
//         // private readonly stripeService: StripeService,
//       ) {}
//       private readonly stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-08-16' });

//     //   async createPaymentIntent(amount: number, currency: string) {
//     //     const paymentIntent = await this.stripeService.paymentIntents.create({
//     //       amount,
//     //       currency,
//     //     });
    
//     //     return paymentIntent.client_secret;
//     //   }

//     async createPaymentsession(userData: string, bookingId: string,totalTicket:number) {

//       // const existingUser = userData

//       // if (!userData.stripeId){
//       //   userData.stripeId=await this.createCustomer(userData.emailAddress, userData.name);
//       // }
      
//       const session=await this.stripe.checkout.sessions.create({
//         line_items: [{ price: 'price_1ODNP9SD05zaGqEAghlMINWU', quantity: totalTicket }],
//         mode: 'payment',
//         payment_intent_data: {
//           setup_future_usage: 'on_session',
//         },
//         customer: 'cus_P1QHKecY3ieFFh',
//         success_url:
//           'http://localhost:3000/pay/success/checkout/session?session_id={CHECKOUT_SESSION_ID}',
//         cancel_url: 'http://localhost:3000/pay/failed/checkout/session',
//       });
//       console.log('session',session);
//       return session;
      
//     }
  
//       async createCustomer(email: string, name: string) {
//         const customer = await this.stripe.customers.create({
//             name,
//             email
//         });
//         return customer.id;
//     }


//   }


//       // async createPayment(userId: string, bookingId: string, status: string, transactionType: string) {
//       //   const payment = new this.paymentModel({ userId, bookingId, status, transactionType });
//       //   return payment.save();
//       // }
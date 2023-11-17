// // stripe.module.ts
// import { Module } from '@nestjs/common';
// import { StripeModule } from 'nestjs-stripe';
// import { ConfigModule } from '@nestjs/config';

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     StripeModule.forRoot({
//       apiKey: process.env.STRIPE_SECRET_KEY,
//       apiVersion: '2020-08-27', 
//     }),
//   ],
// })
// export class StripeConfigModule {}

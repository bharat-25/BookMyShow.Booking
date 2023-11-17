import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './schema/payment.schema';
// import { StripeService } from 'nestjs-stripe';
// import Stripe from 'stripe';
const Stripe = require('stripe')

@Injectable()
export class PaymentService {
    constructor(
        @InjectModel('Payment') private readonly paymentModel: Model<Payment>,
        // private readonly stripeService: StripeService,
      ) {}
      private readonly stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-08-16' });

    //   async createPaymentIntent(amount: number, currency: string) {
    //     const paymentIntent = await this.stripeService.paymentIntents.create({
    //       amount,
    //       currency,
    //     });
    
    //     return paymentIntent.client_secret;
    //   }

    async createPayment(emailAddress: string, bookingId: string, totalAmount: number, transactionType: string) {
      const existingUser = await this.UserModel.findOne({ email });

      if (!existingUser.stripeId) {
          existingUser.stripeId = await this.createCustomer(email, existingUser.name);
          await existingUser.save();
      }

      const existingProperty = await this.PropertyModel.findById(propertyId);

      if (!existingProperty) {
          throw new NotFoundException('Property not found');
      }

      if (!existingProperty.stripeId) {
          existingProperty.stripeId = await this.createProductAndPrice(existingProperty.location, existingProperty.specifications, price, currency);

          await existingProperty.save();
      }

      const session = await this.createSession(existingUser.stripeId, existingProperty.stripeId);
      return session;
  }


      // async createPayment(userId: string, bookingId: string, status: string, transactionType: string) {
      //   const payment = new this.paymentModel({ userId, bookingId, status, transactionType });
      //   return payment.save();
      // }
}

mod error;
mod instructions;
mod state;

use anchor_lang::prelude::*;
use instructions::*;
use state::{AddressWithWeight, Splits8};

declare_id!("2kY5DJedxxDkGXohsSQh5kLNz4bpjEZ2YGVSrsgNQdG1");

#[program]
pub mod referrals {
    use super::*;

    pub fn create_referralship(
        ctx: Context<CreateReferralship>,
        app_id: u8,
        referral_agent_split: u8,
        splits: Vec<AddressWithWeight>,
    ) -> Result<()> {
        instructions::create_referralship(ctx, app_id, referral_agent_split, splits)
    }

    pub fn subscribe_with_referral(ctx: Context<SubscribeWithReferral>) -> Result<()> {
        instructions::subscribe_with_referral(ctx)
    }

    pub fn split_payment(ctx: Context<SplitPayment>) -> Result<()> {
        instructions::split_payment(ctx)
    }
}

use anchor_lang::prelude::*;

#[account]
pub struct App {
    pub auth: Pubkey,
    pub name: String,
}
use quote::{ToTokens, quote};
use syn::{DeriveInput, Result, parse::Parse, parse_macro_input};

#[proc_macro_derive(Rewards, attributes(reward))]
pub fn rewards_derive(input: proc_macro::TokenStream) -> proc_macro::TokenStream {
    let input = parse_macro_input!(input as DeriveInput);

    let syn::Data::Enum(data) = &input.data else {
        panic!("only enum supported");
    };

    let name = &input.ident;

    let rewards = data
        .variants
        .iter()
        .map(|variant| {
            let meta = variant
                .attrs
                .iter()
                .find(|attr| attr.path().is_ident("reward"))
                .expect("all variants should have `reward` meta attribute");

            Ok(Reward {
                ident: variant.ident.clone(),
                meta: meta.parse_args()?,
            })
        })
        .collect::<Result<Vec<_>>>()
        .unwrap();

    let value_fn = Value { rewards: &rewards };
    let name_fn = Name { rewards: &rewards };
    let kind_fn = Kind { rewards: &rewards };

    quote! {
        impl #name {
            #value_fn

            #name_fn

            #kind_fn
        }
    }
    .into()
}

#[derive(Debug)]
struct Reward {
    ident: syn::Ident,
    meta: Meta,
}

#[derive(Debug)]
struct Meta {
    value: syn::LitInt,
    name: syn::LitStr,
    kind: syn::Path,
}

impl Parse for Meta {
    fn parse(input: syn::parse::ParseStream) -> syn::Result<Self> {
        let value = input.parse()?;
        input.parse::<syn::Token![,]>()?;
        let name = input.parse()?;
        input.parse::<syn::Token![,]>()?;
        let kind = input.parse()?;
        Ok(Self { value, name, kind })
    }
}

struct Value<'a> {
    rewards: &'a [Reward],
}

impl ToTokens for Value<'_> {
    fn to_tokens(&self, tokens: &mut proc_macro2::TokenStream) {
        let rewards = self.rewards.iter().map(|reward| {
            let ident = &reward.ident;
            let value = &reward.meta.value;

            quote! {
                Self::#ident => #value
            }
        });

        let value = quote! {
            pub fn value(&self) -> u16 {
                match self {
                    #(#rewards,)*
                }
            }
        };

        tokens.extend(value);
    }
}

struct Name<'a> {
    rewards: &'a [Reward],
}

impl ToTokens for Name<'_> {
    fn to_tokens(&self, tokens: &mut proc_macro2::TokenStream) {
        let rewards = self.rewards.iter().map(|reward| {
            let ident = &reward.ident;
            let name = &reward.meta.name;

            quote! {
                Self::#ident => #name
            }
        });

        let name = quote! {
            pub fn name(&self) -> &'static str {
                match self {
                    #(#rewards,)*
                }
            }
        };

        tokens.extend(name);
    }
}

struct Kind<'a> {
    rewards: &'a [Reward],
}

impl ToTokens for Kind<'_> {
    fn to_tokens(&self, tokens: &mut proc_macro2::TokenStream) {
        let rewards = self.rewards.iter().map(|reward| {
            let ident = &reward.ident;
            let kind = &reward.meta.kind;

            quote! {
                Self::#ident => #kind
            }
        });

        let kind = quote! {
            pub fn kind(&self) -> RewardKind {
                match self {
                    #(#rewards,)*
                }
            }
        };

        tokens.extend(kind);
    }
}

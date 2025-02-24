/// Flattens slices of `T` into a single \[`T`\].
///
/// # Examples
///
/// ```
/// # #[macro_use] extern crate kh2fm_rustomizer;
/// # use kh2fm_rustomizer::concat_slices;
/// const A: [u8; 3] = [1, 2, 3];
/// const B: [u8; 2] = [4, 5];
///
/// concat_slices! {
///     // Can initialize either `const` or `static`.
///     // Can have visibility: `pub`, `pub(crate)`, etc...
///     pub const C: [u8] = [
///         A,
///         B,
///     ];
/// }
///
/// assert_eq!(C, [1, 2, 3, 4, 5]);
/// ```
#[macro_export]
macro_rules! concat_slices {
    ($pub:vis $item:ident $name:ident: [$ty:ty] = [$($slice:ident),+$(,)?];) => {
        $pub $item $name: [$ty; concat_slices!(len $($slice),+)] = {
            #[repr(C)]
            #[allow(non_snake_case)]
            struct ConcatSlices {
                $($slice: [$ty; $slice.len()]),+
            }

            let result = ConcatSlices { $($slice),+ };

            // SAFETY: ConcatSlices's size is equal to the sum of all slices' len.
            unsafe { ::core::mem::transmute(result) }
        };
    };
    (len $slice:ident) => {
        $slice.len()
    };
    (len $slice:ident, $($rest:ident),+) => {
        concat_slices!(len $slice) + concat_slices!(len $($rest),+)
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn concat_slices() {
        const A: [u8; 3] = [1, 2, 3];
        const B: [u8; 2] = [4, 5];

        concat_slices! {
            const C: [u8] = [ A, B ];
        }

        assert_eq!(C, [1, 2, 3, 4, 5]);
    }

    mod inner {
        const A: [u8; 3] = [6, 7, 8];
        const B: [u8; 2] = [9, 10];

        concat_slices! {
            pub const C: [u8] = [ A, B ];
        }
    }

    #[test]
    fn pub_visibility() {
        assert_eq!(inner::C, [6, 7, 8, 9, 10]);
    }

    #[test]
    fn static_concat() {
        const A: [u8; 3] = [1, 2, 3];
        const B: [u8; 2] = [4, 5];

        concat_slices! {
            static C: [u8] = [ A, B ];
        }

        assert_eq!(C, [1, 2, 3, 4, 5]);
    }
}
